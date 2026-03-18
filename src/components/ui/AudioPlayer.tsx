import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Music, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AudioPlayerProps {
  src: string;
  title?: string;
}

export const AudioPlayer = ({ src, title = "Resumen de la Propuesta" }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      setProgress((current / total) * 100);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    if (audioRef.current) {
      const newTime = (newProgress / 100) * duration;
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group overflow-hidden bg-black/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-lime)] rounded-full blur-[60px] opacity-10 -z-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-purple)] rounded-full blur-[60px] opacity-10 -z-10" />

      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[var(--color-lime)]/30 transition-colors">
              <Music className="w-6 h-6 text-[var(--color-lime)]" />
            </div>
            <div>
              <h4 className="text-white font-black text-sm uppercase tracking-widest font-ui">{title}</h4>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest font-ui">Escuchar resumen ejecutivo</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.div 
              animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
              transition={{ repeat: Infinity, duration: 1 }}
              className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-[var(--color-lime)] shadow-[0_0_10px_var(--color-lime)]' : 'bg-white/20'}`}
            />
          </div>
        </div>

        {/* Waves Visualization (Simulated) */}
        <div className="flex items-end justify-between h-12 gap-1 px-2">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={isPlaying ? { height: [10, Math.random() * 40 + 10, 10] } : { height: 10 }}
              transition={{ repeat: Infinity, duration: 0.5 + Math.random() * 0.5, delay: i * 0.05 }}
              className="w-1.5 bg-gradient-to-t from-[var(--color-purple)] to-[var(--color-lime)] rounded-full opacity-40"
            />
          ))}
        </div>

        {/* Audio Element */}
        <audio 
          ref={audioRef}
          src={src}
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Controls */}
        <div className="space-y-4">
          <div className="flex items-center gap-6">
            <button 
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-[var(--color-lime)] flex items-center justify-center text-black hover:scale-105 transition-transform shadow-lg shadow-[var(--color-lime)]/20 overflow-hidden relative group/btn"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform" />
              {isPlaying ? <Pause className="w-6 h-6 relative z-10" fill="currentColor" /> : <Play className="w-6 h-6 relative z-10 translate-x-0.5" fill="currentColor" />}
            </button>

            <div className="flex-1 space-y-2">
              <input 
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[var(--color-lime)] hover:bg-white/20 transition-colors"
              />
              <div className="flex justify-between text-[10px] font-black font-ui tracking-widest">
                <span className="text-[var(--color-lime)]">{formatTime(currentTime)}</span>
                <span className="text-white/40">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/40 text-[9px] font-black tracking-widest font-ui uppercase">
                <Volume2 className="w-3 h-3" />
                <span>Audio HQ 48kHz</span>
            </div>
            <a 
              href={src} 
              download 
              className="text-white/40 hover:text-[var(--color-lime)] transition-colors p-2 rounded-lg hover:bg-white/5"
              title="Descargar resumen"
            >
                <Download className="w-4 h-4" />
            </a>
        </div>
      </div>
    </motion.div>
  );
};

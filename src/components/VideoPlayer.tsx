
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Settings, Maximize } from 'lucide-react';

interface VideoPlayerProps {
  videoSrc: string;
  posterSrc?: string;
  title?: string;
}

const VideoPlayer = ({ videoSrc, posterSrc, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  // Update progress bar as video plays
  const updateProgress = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((currentTime / duration) * 100);
    }
  };

  useEffect(() => {
    // Set duration once metadata is loaded
    const setVideoData = () => {
      if (videoRef.current) {
        setDuration(videoRef.current.duration);
      }
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadedmetadata', setVideoData);
      video.addEventListener('timeupdate', updateProgress);
      
      return () => {
        video.removeEventListener('loadedmetadata', setVideoData);
        video.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / progressBar.offsetWidth;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && playerRef.current) {
      playerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div 
      ref={playerRef}
      className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl bg-gradient-to-br from-card to-card/50 glass group transition-all"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover aspect-[16/9]"
        poster={posterSrc}
        onEnded={() => setIsPlaying(false)}
        muted={isMuted}
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Title overlay */}
      {title && (
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-medium z-10">
          {title}
        </div>
      )}
      
      {/* Controls overlay */}
      <div className={`absolute inset-0 flex items-center justify-center ${isPlaying && !isHovering ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center z-10 transition-all hover:bg-primary/20 animate-pulse-soft"
            aria-label="Play video"
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Play className="h-7 w-7 text-white" />
            </div>
          </button>
        )}
      </div>
      
      {/* Bottom controls bar */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-8 pb-2 px-4 transition-opacity duration-300 ${isPlaying && !isHovering ? 'opacity-0' : 'opacity-100'}`}>
        {/* Progress bar */}
        <div 
          className="w-full h-1.5 bg-gray-600/40 rounded-full mb-3 cursor-pointer relative group"
          onClick={handleProgressClick}
        >
          <div 
            className="absolute h-full bg-primary rounded-full"
            style={{ width: `${progress}%` }}
          />
          <div 
            className="opacity-0 group-hover:opacity-100 absolute h-3 w-3 bg-primary rounded-full -mt-[3px] transition-opacity"
            style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-background/30 hover:bg-background/50 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
            </button>
            
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-background/30 hover:bg-background/50 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="h-5 w-5 text-white" /> : <Volume2 className="h-5 w-5 text-white" />}
            </button>
            
            <div className="text-xs text-white/90 hidden sm:block">
              {videoRef.current ? formatTime(videoRef.current.currentTime) : '0:00'} / {duration ? formatTime(duration) : '0:00'}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              className="p-2 rounded-full bg-background/30 hover:bg-background/50 transition-colors hidden sm:flex"
              aria-label="Settings"
            >
              <Settings className="h-5 w-5 text-white" />
            </button>
            
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-full bg-background/30 hover:bg-background/50 transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;


import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  videoSrc: string;
  posterSrc?: string;
  title?: string;
}

const VideoPlayer = ({ videoSrc, posterSrc, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

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

  return (
    <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl bg-gradient-to-br from-card to-card/50 glass">
      <video
        ref={videoRef}
        className="w-full h-full object-cover aspect-[4/3]"
        poster={posterSrc}
        onEnded={() => setIsPlaying(false)}
        muted={isMuted}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Title overlay */}
      {title && (
        <div className="absolute top-4 left-4 bg-background/80 px-3 py-1 rounded-md text-sm font-medium">
          {title}
        </div>
      )}
      
      {/* Controls overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center z-10 transition-all hover:bg-primary/20"
            aria-label="Play video"
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Play className="h-7 w-7 text-white" />
            </div>
          </button>
        )}
      </div>
      
      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-gradient-to-t from-black/70 to-transparent">
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
      </div>
    </div>
  );
};

export default VideoPlayer;

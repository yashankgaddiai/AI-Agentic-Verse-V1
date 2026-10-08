/**
 * @file VideoModal.tsx
 * Minimalist video playback theatre modal matching the exact style spec.
 */

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, X } from 'lucide-react';
import { VideoProject } from '../data/portfolioData';

// Returns the video ID for youtube.com/watch, /shorts, /embed and youtu.be links, or null.
const getYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
  return match ? match[1] : null;
};

interface VideoModalProps {
  project: {
    title: string;
    category: string;
    duration: string;
    description?: string;
    shortDescription?: string;
    thumbnailUrl: string;
    videoUrl: string;
    year?: string;
  } | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('00:00');
  const [duration, setDuration] = useState<string>('00:00');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, onClose]);

  useEffect(() => {
    if (project && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => setIsPlaying(false));
        }
      });
      setIsPlaying(true);
    }
  }, [project]);

  if (!project) return null;

  const youTubeId = getYouTubeId(project.videoUrl);
  const isShort = project.videoUrl.includes('/shorts/');

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setProgress((current / total) * 100);

    const format = (secs: number) => {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    setCurrentTime(format(current));
    if (videoRef.current.duration) {
      setDuration(format(videoRef.current.duration));
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 0);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Video player for ${project.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#1A1815] text-[#FBFAF8] rounded-[16px] overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#24211D]">
          <div className="flex items-center gap-3">
            <h3 className="text-[16px] font-medium text-white truncate max-w-md">
              {project.title}
            </h3>
            {project.year && (
              <>
                <span className="text-white/40 text-xs" aria-hidden="true">·</span>
                <span className="text-[13px] text-white/60 tabular-nums">{project.year}</span>
              </>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close video player"
            className="p-1.5 rounded-[6px] text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* YouTube embed (Shorts render in a vertical 9:16 frame) */}
        {youTubeId ? (
          <div className="bg-black flex justify-center">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youTubeId}?autoplay=1&rel=0&playsinline=1`}
              title={project.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className={isShort ? 'h-[70vh] max-w-full aspect-[9/16]' : 'w-full aspect-video'}
            />
          </div>
        ) : (
        /* Video Screen Area */
        <div className="relative aspect-video bg-black group flex items-center justify-center">
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={project.thumbnailUrl}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            playsInline
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Quick Play/Pause Center Indicator */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              aria-label="Play video"
              className="absolute w-[72px] h-[72px] rounded-full bg-[#C25A3C] hover:bg-[#A94B30] text-[#FBFAF8] flex items-center justify-center shadow-xl transition-transform hover:scale-105"
            >
              <Play className="w-7 h-7 fill-current translate-x-0.5" />
            </button>
          )}

          {/* Bottom Video Controls Bar */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2">
            {/* Scrubber Progress Bar */}
            <div
              className="relative h-1.5 w-full bg-white/20 rounded-full cursor-pointer overflow-hidden group/bar"
              onClick={handleSeek}
              role="slider"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              tabIndex={0}
            >
              <div
                className="h-full bg-[#C25A3C] transition-[width] duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-between text-[13px] text-white/80">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="tabular-nums tracking-wide">
                  {currentTime} / {duration !== '00:00' ? duration : project.duration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-white/50 text-[11.5px]">
                  Space: Play/Pause · Esc: Close
                </span>
                <button
                  onClick={toggleFullscreen}
                  aria-label="Toggle fullscreen"
                  className="hover:text-white transition-colors"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Project Details (omitted when a video has no description or runtime) */}
        {(project.description || project.shortDescription || project.duration) && (
          <div className="p-6 md:p-8 bg-[#1A1815] border-t border-white/10 space-y-3">
            {(project.description || project.shortDescription) && (
              <p className="text-[15px] sm:text-[16px] leading-[1.65] text-white/80 max-w-3xl">
                {project.description || project.shortDescription}
              </p>
            )}

            {project.duration && (
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[12.5px] text-white/50">
                <span>{youTubeId ? '' : 'Video URL placeholder active in portfolioData.ts'}</span>
                <span className="text-[#C25A3C] font-medium">Runtime: {project.duration}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

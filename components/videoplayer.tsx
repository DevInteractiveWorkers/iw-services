import React, { useRef, useState, useEffect, useCallback } from "react";
import { IconButton } from "./icon/icon-button";

interface VideoPlayerProps {
  videoUrl: string;
  width?: string;
  height?: string;
  muted?: boolean;
  onPlay?: () => void;
  cover?: boolean;
  controls?: boolean;
  thumbnail?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  width = "640px",
  height = "360px",
  muted = true,
  onPlay,
  cover = false,
  controls = true,
  thumbnail,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progressHover, setProgressHover] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [prevVolume, setPrevVolume] = useState<number | null>(null);
  const [showVolumeMenu, setShowVolumeMenu] = useState(false);

  const video = videoRef.current;

  const volumeIcon =
    volume === 0 ? "volume-mute" : volume <= 0.5 ? "volume-down" : "volume-up";

  // ---------- Helpers ----------
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  const isEnded = duration > 0 && currentTime >= duration - 0.05;

  // ---------- Init ----------
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handleLoadedMetadata = () => setDuration(v.duration);

    const handleCanPlayThrough = () => {
      setIsLoaded(true);
      v.play().catch(() => {});
    };

    const handleTimeUpdate = () => setCurrentTime(v.currentTime);
    const handlePlay = () => {
      setIsPlaying(true);
      onPlay?.();
    };
    const handlePause = () => setIsPlaying(false);

    // initial volume
    v.volume = volume;

    v.addEventListener("loadedmetadata", handleLoadedMetadata);
    v.addEventListener("canplaythrough", handleCanPlayThrough);
    v.addEventListener("timeupdate", handleTimeUpdate);
    v.addEventListener("play", handlePlay);
    v.addEventListener("pause", handlePause);

    return () => {
      v.removeEventListener("loadedmetadata", handleLoadedMetadata);
      v.removeEventListener("canplaythrough", handleCanPlayThrough);
      v.removeEventListener("timeupdate", handleTimeUpdate);
      v.removeEventListener("play", handlePlay);
      v.removeEventListener("pause", handlePause);
    };
  }, [onPlay, volume]);

  // ---------- Volume ----------
  const handleVolumeChange = (v: number) => {
    const video = videoRef.current;
    if (!video) return;

    const newValue = Math.min(1, Math.max(0, v));
    video.volume = newValue;
    setVolume(newValue);

    if (newValue > 0) {
      setPrevVolume(newValue);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (volume === 0) {
      const restored = prevVolume ?? 0.5;
      video.volume = restored;
      setVolume(restored);
    } else {
      setPrevVolume(volume);
      video.volume = 0;
      setVolume(0);
    }
  };

  // ---------- Controls ----------
  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    if (isEnded) {
      video.currentTime = 0;
      video.play();
      return;
    }

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleProgressClick = (event: React.MouseEvent) => {
    if (!video || !duration) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    video.currentTime = percent * duration;
  };

  const handleProgressHover = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    setProgressHover(Math.max(0, Math.min(100, percent * 100)));
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  // ---------- UI ----------
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Thumbnail */}
      {thumbnail && (
        <img
          src={thumbnail}
          alt="Video thumbnail"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {/* Video */}
      <video
        ref={videoRef}
        src={videoUrl}
        muted={muted}
        playsInline
        width={width}
        height={height}
        className={`w-full h-full select-none pointer-events-none transition-all duration-700 ${
          cover ? "object-cover" : "object-contain"
        } ${isLoaded ? "blur-0" : "blur-md brightness-75"}`}
      />

      {/* Controls */}
      {controls && (
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center bg-black/20 text-white transition-opacity duration-300 ${
            isLoaded ? "opacity-0 hover:opacity-100" : "opacity-100"
          }`}
        >
          {/* Play / Pause / Replay */}
          <IconButton
            filled={!isEnded}
            size={50}
            viewBox={"0 0 24 24"}
            fillOnHover={!isEnded}
            icon={isEnded ? "replay" : isPlaying ? "pause" : "play"}
            className="opacity-50 hover:opacity-80 hover:shadow-lg rounded-full transition-all duration-300"
            onClick={handleTogglePlay}
          />

          {isLoaded && (
            <div className="absolute bottom-0 w-full flex items-center justify-evenly gap-2 px-4 pb-2">
              {/* Fullscreen */}
              <IconButton
                icon="expand"
                className="w-7 text-white"
                stroke={1}
                onClick={() => videoRef.current?.requestFullscreen()}
              />

              {/* Volume */}
              <div
                className="relative"
                onMouseEnter={() => setShowVolumeMenu(true)}
                onMouseLeave={() => setShowVolumeMenu(false)}
              >
                <IconButton
                  icon={volumeIcon}
                  filled
                  stroke={0}
                  className="w-7 text-white"
                  onClick={toggleMute}
                />

                {showVolumeMenu && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 bg-black/20 p-3 rounded-xl shadow-lg flex flex-col items-center gap-2">
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.01}
                      value={volume}
                      onChange={(e) =>
                        handleVolumeChange(parseFloat(e.target.value))
                      }
                      className="w-24 accent-[#DD272D] cursor-pointer"
                    />
                  </div>
                )}
              </div>

              {/* Progress bar */}
              <div
                className="relative md:w-9/12 w-8/12 h-1 hover:h-2 transition-all bg-gray-400 rounded-full cursor-pointer"
                onClick={handleProgressClick}
                onMouseMove={handleProgressHover}
                onMouseLeave={() => setProgressHover(0)}
              >
                {/* Hover */}
                <div
                  className="absolute h-full rounded-full bg-white/60"
                  style={{ width: `${progressHover}%` }}
                />

                {/* Progress */}
                <div
                  className="absolute h-full rounded-full bg-[#DD272D]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Time */}
              <div className="text-xs md:text-sm flex">
                {currentTime > 0 ? formatTime(currentTime) : "--:--"} /{" "}
                {duration > 0 ? formatTime(duration) : "--:--"}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

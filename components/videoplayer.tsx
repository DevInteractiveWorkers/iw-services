import React, { useRef, useState, useEffect } from "react";
import { IconButton } from "./icon-button";

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

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [progressHover, setProgressHover] = useState("0%");
  const [isLoaded, setIsLoaded] = useState(false);

  // --------- Time formatting ----------
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  // --------- Init video events ----------
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setDuration = () => setVideoDuration(video.duration);

    const handleCanPlayThrough = () => {
      setIsLoaded(true);
      video.play().catch(() => {});
      setIsVideoPlaying(true);
    };

    video.addEventListener("loadedmetadata", setDuration);
    video.addEventListener("canplaythrough", handleCanPlayThrough);

    return () => {
      video.removeEventListener("loadedmetadata", setDuration);
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  // --------- Progress bar click ----------
  const handleProgressClick = (event: React.MouseEvent) => {
    if (!isLoaded) return;

    const bar = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - bar.left;
    const newTime = (clickX / bar.width) * videoDuration;

    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  // --------- Hover preview ----------
  const handleProgressHover = (event: React.MouseEvent) => {
    const bar = event.currentTarget.getBoundingClientRect();
    const hoverX = event.clientX - bar.left;
    const percent = (hoverX / bar.width) * 100;

    setProgressHover(`${percent}%`);
  };

  // --------- Play / Pause / Replay ----------
  const handleVideoControls = () => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    const isEnd = videoCurrentTime >= videoDuration - 0.05;

    if (isEnd) {
      video.currentTime = 0;
      video.play();
      setIsVideoPlaying(true);
      return;
    }

    if (isVideoPlaying) {
      video.pause();
      setIsVideoPlaying(false);
    } else {
      video.play();
      setIsVideoPlaying(true);
    }
  };

  const showReplay = videoCurrentTime >= videoDuration - 0.05;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Thumbnail */}
      {thumbnail && (
        <img
          src={thumbnail}
          className={`w-full h-full absolute ${
            isVideoPlaying ? "opacity-0" : "opacity-100"
          } transition-opacity duration-150`}
        />
      )}

      {/* Video */}
      <video
        ref={videoRef}
        muted={muted}
        width={width}
        height={height}
        playsInline
        className={`select-none pointer-events-none w-full h-full transition-all duration-700 ${
          cover ? "object-cover" : "object-contain"
        } ${isLoaded ? "blur-0" : "blur-md brightness-75"}`}
        onTimeUpdate={(e) => setVideoCurrentTime(e.currentTarget.currentTime)}
        onPlay={() => onPlay?.()}
        src={videoUrl}
      />

      {/* Overlay controls */}
      {controls && (
        <div
          className={`text-white absolute bg-black/20 w-full h-full flex justify-center items-center z-10 top-0 left-0 transition-all duration-300 ${
            isLoaded ? "opacity-0 hover:opacity-100" : "opacity-100"
          }`}
        >
          {/* Play / Pause / Replay */}
          <IconButton
            filled={!showReplay}
            fillOnHover={!showReplay}
            icon={showReplay ? "replay" : isVideoPlaying ? "pause" : "play"}
            onClick={handleVideoControls}
          />

          {isLoaded && (
            <div className="flex absolute bottom-0 w-full justify-evenly items-center gap-2 px-4 pb-2">
              {/* Fullscreen */}
              <IconButton
                icon="expand"
                className="text-white w-7"
                stroke={1}
                onClick={() => videoRef.current?.requestFullscreen()}
              />

              {/* Progress bar */}
              <div
                className="md:w-9/12 w-8/12 h-1 hover:h-2 transition-all bg-gray-400 rounded-full cursor-pointer relative"
                onClick={handleProgressClick}
                onMouseMove={handleProgressHover}
                onMouseLeave={() => setProgressHover("0%")}
              >
                {/* Hover bar */}
                <div
                  className="bg-white/60 h-full rounded-full absolute"
                  style={{ width: progressHover }}
                ></div>

                {/* Current progress */}
                <div
                  className="bg-[#C1272D] h-full rounded-full absolute"
                  style={{
                    width:
                      videoDuration > 0
                        ? `${(videoCurrentTime / videoDuration) * 100}%`
                        : "0%",
                  }}
                ></div>
              </div>

              {/* Time */}
              <div className="text-white md:text-sm text-xs flex">
                {videoCurrentTime > 0 ? formatTime(videoCurrentTime) : "--:--"}{" "}
                / {videoDuration > 0 ? formatTime(videoDuration) : "--:--"}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

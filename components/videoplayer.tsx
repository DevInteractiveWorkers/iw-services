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
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState<number>(0);
  const [progressHover, setProgressHover] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlayThrough = () => {
      setIsLoaded(true);
      setVideoDuration(video.duration);
      video
        .play()
        .then(() => setIsVideoPlaying(true))
        .catch(() => {});
    };

    video.addEventListener("canplaythrough", handleCanPlayThrough);

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  const formatTime = (seconds: number) =>
    new Date(seconds * 1000).toISOString().substring(14, 19);

  const handleProgressClick = (event: React.MouseEvent) => {
    if (!isLoaded) return;
    const progressBar = event.currentTarget as HTMLElement;
    const clickPosition = event.nativeEvent.offsetX;
    const progressBarWidth = progressBar.offsetWidth;
    const newTime = (clickPosition / progressBarWidth) * videoDuration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setVideoCurrentTime(newTime);
    }
  };
  const handleVideoControls = () => {
    if (!isLoaded) return; // prevent play before ready
    if (isVideoPlaying) {
      videoRef.current?.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current?.play();
      setIsVideoPlaying(true);
    }
  };

  const handleProgressHover = (event: React.MouseEvent) => {
    setProgressHover(event.nativeEvent.offsetX);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={thumbnail}
        className={`w-full h-full absolute ${isVideoPlaying ? "opacity-0" : "opacity-100"} transition-opacity duration-150`}
      />
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

      {/* Overlay */}
      {controls && (
        <div
          className={`text-white absolute bg-(--service-bg-dark)/20 w-full h-full flex justify-center items-center z-10 top-0 left-0 transition-all duration-300 ${
            isLoaded ? "opacity-0 hover:opacity-100" : "opacity-100"
          }`}
        >
          <IconButton
            filled
            fillOnHover={videoCurrentTime === videoDuration ? false : true}
            icon={
              isVideoPlaying
                ? "pause"
                : videoCurrentTime == 0 ||
                    videoCurrentTime !== 0 ||
                    videoCurrentTime === videoDuration
                  ? "play"
                  : "replay"
            }
            onClick={handleVideoControls}
          />

          {/* Controls */}
          {isLoaded && (
            <div className="flex absolute bottom-0 w-full justify-evenly items-center gap-2 px-4 pb-2">
              <IconButton
                icon="expand"
                className="text-white w-7"
                stroke={1}
                onClick={() => videoRef.current?.requestFullscreen()}
              />

              <div
                className="md:w-9/12 w-8/12 h-1 hover:h-2 transition-all bg-gray-400 rounded-full cursor-pointer relative"
                onClick={handleProgressClick}
                onMouseMove={handleProgressHover}
                onMouseLeave={() => setProgressHover(0)}
              >
                <div
                  className="bg-white h-full rounded-full absolute"
                  style={{
                    width: progressHover,
                  }}
                ></div>
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

"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/lib/useMobile";

interface VideoPlayerProps {
  videoUrl: string;
  width?: string;
  height?: string;
  muted?: boolean;
  onPlay?: () => void;
  cover?: boolean;
  controls?: boolean;
  thumbnail?: string;
  /** Play the first few seconds once the video is mostly in view, then pause. */
  autoPreview?: boolean;
}

const PREVIEW_SECONDS = 5;
// Fraction of the video that must be visible to count as "in view".
const PREVIEW_VISIBLE_RATIO = 0.5;
const SEEK_STEP_SECONDS = 5;
const DEFAULT_VOLUME = 0.5;
// NOTE: `iw-red-1` is not defined in this project's Tailwind theme, so the
// brand red is kept as a hex value. Swap for `bg-iw-red-1` once it exists.
const ACCENT_BG = "bg-[#DD272D]";

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  width = "640px",
  height = "360px",
  muted = true,
  onPlay,
  cover = false,
  controls = true,
  thumbnail,
  autoPreview = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const onPlayRef = useRef(onPlay);
  const wasPlayingBeforeScrubRef = useRef(false);
  const autoplayAttemptedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [isMuted, setIsMuted] = useState(muted);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [bufferedPercent, setBufferedPercent] = useState(0);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [isBarHovered, setIsBarHovered] = useState(false);
  // Ratio (0-1) of the pointer along the bar while hovering/scrubbing.
  const [hoverRatio, setHoverRatio] = useState<number | null>(null);

  const isMobile = useIsMobile();

  // Keep the latest onPlay without re-subscribing video listeners.
  useEffect(() => {
    onPlayRef.current = onPlay;
  }, [onPlay]);

  // ---------- Video event wiring ----------
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncBuffered = () => {
      if (video.duration && video.buffered.length > 0) {
        const end = video.buffered.end(video.buffered.length - 1);
        setBufferedPercent(Math.min((end / video.duration) * 100, 100));
      }
    };

    const onLoadedMetadata = () => setDuration(video.duration || 0);
    const onTimeUpdate = () => setCurrentTime(video.currentTime);

    const onCanPlayThrough = () => {
      setIsLoaded(true);
      syncBuffered();
    };

    const onVideoPlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
      setIsEnded(false);
      onPlayRef.current?.();
    };
    const onPause = () => setIsPlaying(false);
    const onVideoEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);
    };
    const onSeeking = () => setIsEnded(false);

    const onVolumeChange = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };

    video.volume = DEFAULT_VOLUME;

    // The media may already have loaded before listeners were attached.
    if (video.readyState >= 1) onLoadedMetadata();
    if (video.readyState >= 4) onCanPlayThrough();
    syncBuffered();

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("durationchange", onLoadedMetadata);
    video.addEventListener("canplaythrough", onCanPlayThrough);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onVideoPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onVideoEnded);
    video.addEventListener("seeking", onSeeking);
    video.addEventListener("volumechange", onVolumeChange);
    video.addEventListener("progress", syncBuffered);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("durationchange", onLoadedMetadata);
      video.removeEventListener("canplaythrough", onCanPlayThrough);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onVideoPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onVideoEnded);
      video.removeEventListener("seeking", onSeeking);
      video.removeEventListener("volumechange", onVolumeChange);
      video.removeEventListener("progress", syncBuffered);
    };
  }, []);

  // ---------- Legacy autoplay once loaded (skipped when previewing) ----------
  useEffect(() => {
    if (autoPreview) return;
    const video = videoRef.current;
    if (!video) return;

    const tryAutoplay = () => {
      if (autoplayAttemptedRef.current) return;
      autoplayAttemptedRef.current = true;
      video.play().catch(() => {
        // Autoplay blocked (e.g. unmuted without a prior user gesture).
      });
    };

    if (video.readyState >= 4) tryAutoplay();
    video.addEventListener("canplaythrough", tryAutoplay);
    return () => video.removeEventListener("canplaythrough", tryAutoplay);
  }, [autoPreview]);

  // ---------- Fullscreen state ----------
  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // ---------- Auto preview ----------
  useEffect(() => {
    if (!autoPreview) return;

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;

    // True only while the preview itself is driving playback.
    let previewing = false;
    // Set once the user plays, pauses or seeks; the preview never runs again.
    let userControlled = false;

    const takeOver = () => {
      userControlled = true;
      previewing = false;
    };

    const startPreview = () => {
      if (userControlled || previewing) return;
      if (!video.paused || video.currentTime >= PREVIEW_SECONDS) return;

      previewing = true;
      video.play().catch(() => {
        // Autoplay blocked; leave the video paused on its thumbnail.
        previewing = false;
      });
    };

    const stopPreview = () => {
      if (!previewing) return;
      previewing = false;
      video.pause();
    };

    const onPreviewTimeUpdate = () => {
      if (!previewing || video.currentTime < PREVIEW_SECONDS) return;
      previewing = false;
      video.pause();
      video.currentTime = PREVIEW_SECONDS;
    };

    // A play event we didn't start means the user (or other code) took over.
    const onPreviewPlay = () => {
      if (!previewing) userControlled = true;
    };
    const onPreviewSeeking = () => {
      if (previewing) takeOver();
    };
    const onPreviewEnded = () => {
      previewing = false;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView =
          entry.isIntersecting &&
          entry.intersectionRatio >= PREVIEW_VISIBLE_RATIO;
        if (inView) startPreview();
        else stopPreview();
      },
      { threshold: [0, PREVIEW_VISIBLE_RATIO] },
    );
    observer.observe(video);

    video.addEventListener("timeupdate", onPreviewTimeUpdate);
    video.addEventListener("play", onPreviewPlay);
    video.addEventListener("seeking", onPreviewSeeking);
    video.addEventListener("ended", onPreviewEnded);
    container?.addEventListener("pointerdown", takeOver);
    container?.addEventListener("keydown", takeOver);

    return () => {
      observer.disconnect();
      video.removeEventListener("timeupdate", onPreviewTimeUpdate);
      video.removeEventListener("play", onPreviewPlay);
      video.removeEventListener("seeking", onPreviewSeeking);
      video.removeEventListener("ended", onPreviewEnded);
      container?.removeEventListener("pointerdown", takeOver);
      container?.removeEventListener("keydown", takeOver);
    };
  }, [autoPreview]);

  // ---------- Helpers ----------
  const formatTime = (time: number) => {
    if (!Number.isFinite(time) || time < 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // ---------- Controls ----------
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      // play() on an ended video restarts it from the beginning.
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted && video.volume === 0) video.volume = DEFAULT_VOLUME;
    video.muted = !video.muted;
  }, []);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const value = Math.min(1, Math.max(0, parseFloat(e.target.value)));
    video.volume = value;
    video.muted = value === 0;
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const seekBy = (delta: number) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const time = Math.min(Math.max(video.currentTime + delta, 0), duration);
    video.currentTime = time;
    setCurrentTime(time);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!controls || e.ctrlKey || e.metaKey || e.altKey) return;

    const target = e.target as HTMLElement;
    // Let the volume slider keep its native arrow-key behaviour.
    if (target.tagName === "INPUT") return;

    if (e.key === " " || e.key === "k") {
      // A focused button already toggles itself on Space natively.
      if (e.key === " " && target.tagName === "BUTTON") return;
      e.preventDefault();
      togglePlay();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      seekBy(SEEK_STEP_SECONDS);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      seekBy(-SEEK_STEP_SECONDS);
    } else if (e.key === "m") {
      toggleMute();
    }
  };

  // ---------- Scrubbing ----------
  const getRatioFromClientX = (clientX: number) => {
    const bar = progressRef.current;
    if (!bar) return 0;
    const rect = bar.getBoundingClientRect();
    if (rect.width === 0) return 0;
    return Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
  };

  const scrubToRatio = (ratio: number) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const time = ratio * duration;
    video.currentTime = time;
    setCurrentTime(time);
  };

  const handleProgressPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar || !duration) return;

    e.preventDefault();
    bar.setPointerCapture(e.pointerId);

    wasPlayingBeforeScrubRef.current = !video.paused && !video.ended;
    // Pause while scrubbing so playback doesn't fight the drag.
    video.pause();

    setIsScrubbing(true);
    const ratio = getRatioFromClientX(e.clientX);
    setHoverRatio(ratio);
    scrubToRatio(ratio);
  };

  const handleProgressPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!duration) return;
    const ratio = getRatioFromClientX(e.clientX);
    setHoverRatio(ratio);
    if (isScrubbing) scrubToRatio(ratio);
  };

  const endScrub = (e: React.PointerEvent<HTMLDivElement>) => {
    const bar = progressRef.current;
    if (bar && bar.hasPointerCapture(e.pointerId)) {
      bar.releasePointerCapture(e.pointerId);
    }

    if (isScrubbing) {
      setIsScrubbing(false);
      if (wasPlayingBeforeScrubRef.current) {
        videoRef.current?.play().catch(() => {});
      }
    }
  };

  const handleProgressPointerLeave = () => {
    setIsBarHovered(false);
    if (!isScrubbing) setHoverRatio(null);
  };

  // ---------- Derived UI state ----------
  const progressPercent = duration ? (currentTime / duration) * 100 : 0;
  // While scrubbing, the fill/playhead track the pointer directly.
  const displayPercent =
    isScrubbing && hoverRatio !== null ? hoverRatio * 100 : progressPercent;

  const showTooltip =
    (isBarHovered || isScrubbing) && hoverRatio !== null && duration > 0;
  const tooltipTime = hoverRatio !== null ? hoverRatio * duration : 0;
  const tooltipPercent = hoverRatio !== null ? hoverRatio * 100 : 0;

  const showThumbnail = Boolean(thumbnail) && !hasStarted;
  const panelAlwaysVisible = !hasStarted || isScrubbing;

  const barHeight =
    isScrubbing || isBarHovered ? "h-2" : isMobile ? "h-1.5" : "h-1";

  // ---------- UI ----------
  return (
    <div
      ref={containerRef}
      tabIndex={controls ? 0 : undefined}
      onKeyDown={handleKeyDown}
      className="group/video-container relative h-full w-full overflow-hidden rounded-xl bg-black outline-none"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={videoUrl}
        muted={muted}
        playsInline
        width={width}
        height={height}
        className={`block h-full w-full select-none transition-all duration-700 ${
          controls ? "" : "pointer-events-none"
        } ${cover ? "object-cover" : "object-contain"} ${
          isLoaded ? "blur-0" : "blur-md brightness-75"
        }`}
      />

      {/* Thumbnail */}
      {thumbnail && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
          alt="Video thumbnail"
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            showThumbnail ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {controls && (
        <>
          {/* Center play / pause / replay button (also click-to-toggle surface) */}
          <button
            type="button"
            aria-label={isEnded ? "Replay video" : isPlaying ? "Pause" : "Play"}
            onClick={togglePlay}
            className="group/thumbnail absolute inset-0 flex items-center justify-center"
          >
            <span
              className={`flex h-16 w-16 items-center justify-center rounded-full bg-black/20 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isPlaying || isEnded
                  ? "opacity-0 group-hover/thumbnail:opacity-100"
                  : "opacity-100"
              }`}
            >
              {isEnded ? (
                <ReplayIcon className="h-10 w-10" />
              ) : isPlaying ? (
                <PauseIcon className="h-10 w-10" />
              ) : (
                <PlayIcon className="h-10 w-10" />
              )}
            </span>
          </button>

          {/* Bottom control panel */}
          <div
            className={`absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-linear-to-t from-black/80 via-black/40 to-transparent px-3 pb-2 pt-6 transition-opacity duration-300 ${
              panelAlwaysVisible
                ? "opacity-100"
                : "pointer-events-none opacity-0 group-focus-within/video-container:pointer-events-auto group-focus-within/video-container:opacity-100 group-hover/video-container:pointer-events-auto group-hover/video-container:opacity-100"
            }`}
          >
            {/* Oversized invisible hit area keeps touch targets comfortable
                without changing the bar's visual thickness. */}
            <div
              className={`group/bar relative -my-3 flex touch-none select-none items-center py-3 ${
                isMobile ? "cursor-default" : "cursor-pointer"
              }`}
              onPointerDown={handleProgressPointerDown}
              onPointerMove={handleProgressPointerMove}
              onPointerUp={endScrub}
              onPointerCancel={endScrub}
              onPointerEnter={() => setIsBarHovered(true)}
              onPointerLeave={handleProgressPointerLeave}
            >
              {/* Time tooltip */}
              {showTooltip && (
                <div
                  className="pointer-events-none absolute bottom-full mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-1.5 py-0.5 text-xs font-medium tabular-nums text-white shadow"
                  style={{ left: `${tooltipPercent}%` }}
                >
                  {formatTime(tooltipTime)}
                </div>
              )}

              <div
                ref={progressRef}
                className={`relative w-full rounded-full bg-white/30 transition-[height] duration-150 ${barHeight}`}
              >
                {/* Buffered */}
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-white/40"
                  style={{ width: `${bufferedPercent}%` }}
                />
                {/* Played */}
                <div
                  className={`absolute inset-y-0 left-0 rounded-full ${ACCENT_BG}`}
                  style={{ width: `${displayPercent}%` }}
                />
                {/* Playhead */}
                <div
                  className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md ring-2 ring-white transition-opacity ${ACCENT_BG} ${
                    isMobile ? "h-4 w-4" : "h-3 w-3"
                  } ${
                    isScrubbing || isBarHovered
                      ? "opacity-100"
                      : "opacity-0 group-hover/bar:opacity-100"
                  }`}
                  style={{ left: `${displayPercent}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pb-1 text-white">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isEnded ? "Replay" : isPlaying ? "Pause" : "Play"}
              >
                {isEnded ? (
                  <ReplayIcon className="h-5 w-5" />
                ) : isPlaying ? (
                  <PauseIcon className="h-5 w-5" />
                ) : (
                  <PlayIcon className="h-5 w-5" />
                )}
              </button>

              <div className="group/volume flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted || volume === 0 ? (
                    <MuteIcon className="h-5 w-5" />
                  ) : (
                    <VolumeIcon className="h-5 w-5" />
                  )}
                </button>

                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  aria-label="Volume"
                  className="h-1 w-0 cursor-pointer opacity-0 accent-white transition-all duration-200 group-hover/volume:ml-1 group-hover/volume:w-16 group-hover/volume:opacity-100 focus:ml-1 focus:w-16 focus:opacity-100"
                />
              </div>

              <span className="text-xs tabular-nums text-white/80">
                {currentTime > 0 ? formatTime(currentTime) : "--:--"} /{" "}
                {duration > 0 ? formatTime(duration) : "--:--"}
              </span>

              <div className="ml-auto">
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? (
                    <MinimizeIcon className="h-5 w-5" />
                  ) : (
                    <ExpandIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ---------- Inline icons ----------
function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}

function ReplayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  );
}

function VolumeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <polygon
        points="4 8 4 16 9 16 14 21 14 3 9 8 4 8"
        fill="currentColor"
        stroke="none"
      />
      <path d="M17.5 8.5a5 5 0 0 1 0 7" />
      <path d="M20 6a9 9 0 0 1 0 12" />
    </svg>
  );
}

function MuteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <polygon
        points="4 8 4 16 9 16 14 21 14 3 9 8 4 8"
        fill="currentColor"
        stroke="none"
      />
      <line x1="17" y1="9" x2="23" y2="15" />
      <line x1="23" y1="9" x2="17" y2="15" />
    </svg>
  );
}

function ExpandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function MinimizeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 3v3a2 2 0 0 1-2 2H4" />
      <path d="M15 3v3a2 2 0 0 0 2 2h3" />
      <path d="M9 21v-3a2 2 0 0 0-2-2H4" />
      <path d="M15 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

export default VideoPlayer;

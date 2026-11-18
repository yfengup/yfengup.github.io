if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const playThreshold = 0.5;
  const observer = new IntersectionObserver((entries) => {
    for (const { target: video, isIntersecting, intersectionRatio } of entries) {
      if (!isIntersecting) {
        if (document.pictureInPictureElement !== video && document.fullscreenElement !== video) {
          video.pause();
        }
      } else if (intersectionRatio >= playThreshold && video.muted && video.paused && !video.ended) {
        video.play().catch(() => {
          // Keep the native controls available when automatic playback is blocked.
        });
      }
    }
  }, { threshold: [0, playThreshold] });

  for (const video of document.querySelectorAll("video.project-media")) {
    observer.observe(video);
  }
}

const isVideoPlaying = video => (
  !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)
);

export default isVideoPlaying;

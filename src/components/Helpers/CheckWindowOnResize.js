function CheckWindowOnResize() {
  const accessibleHeight = (
    window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight
  );

  const accessibleWidth = (
    window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
  );

  // keep's the <main> height at 100% without explicitly defining parent height
  document.querySelector('main').style.height = `${accessibleHeight}px`;

  return {
    height: accessibleHeight,
    width: accessibleWidth,
  };
}

export default CheckWindowOnResize;

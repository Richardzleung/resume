const width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

const height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

const isSmallScreen = () => {
  return width <= 500 && height <= 750;
}

export { isSmallScreen };
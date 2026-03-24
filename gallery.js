const marquee = document.querySelector('.gallery-marquee');
let scrollSpeed = 0.5;
let isDragging = false;
let isHovering = false;
let startX, scrollLeft;

marquee.innerHTML += marquee.innerHTML;

function autoScroll() {
  if (!isDragging && !isHovering) {
    marquee.scrollLeft += scrollSpeed;
    if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
      marquee.scrollLeft = 0;
    }
  }
  requestAnimationFrame(autoScroll);
}
autoScroll();

marquee.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.pageX - marquee.offsetLeft;
  scrollLeft = marquee.scrollLeft;
});
marquee.addEventListener('mouseup', () =>

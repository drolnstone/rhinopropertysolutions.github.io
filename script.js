// ---------------------------
// BACK TO TOP BUTTON
// ---------------------------
const topBtn = document.getElementById("topBtn");

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 200) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------------------------
// GALLERY MARQUEE
// ---------------------------
const marquee = document.querySelector('.gallery-marquee');
let scrollSpeed = 0.5;
let isDragging = false;
let isHovering = false;
let startX, scrollLeft;

// Duplicate content for seamless infinite loop
marquee.innerHTML += marquee.innerHTML;

// AUTO SCROLL
function autoScroll() {
  if (!isDragging && !isHovering) {
    marquee.scrollLeft += scrollSpeed;
    // Reset to start when reaching half the content
    if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
      marquee.scrollLeft = 0;
    }
  }
  requestAnimationFrame(autoScroll);
}
autoScroll();

// ---------------------------
// MOUSE DRAG
// ---------------------------
marquee.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.pageX - marquee.offsetLeft;
  scrollLeft = marquee.scrollLeft;
});

marquee.addEventListener('mouseleave', () => isDragging = false);
marquee.addEventListener('mouseup', () => isDragging = false);

marquee.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const x = e.pageX - marquee.offsetLeft;
  const walk = (x - startX) * 2; // speed multiplier
  marquee.scrollLeft = scrollLeft - walk;
});

// ---------------------------
// TOUCH DRAG
// ---------------------------
marquee.addEventListener('touchstart', e => {
  isDragging = true;
  startX = e.touches[0].pageX - marquee.offsetLeft;
  scrollLeft = marquee.scrollLeft;
});

marquee.addEventListener('touchend', () => isDragging = false);

marquee.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - startX;
  marquee.scrollLeft = scrollLeft - x * 2;
});

// ---------------------------
// HOVER PAUSE (Desktop)
// ---------------------------
marquee.addEventListener('mouseenter', () => isHovering = true);
marquee.addEventListener('mouseleave', () => isHovering = false);

// ---------------------------
// ALBUM EXPAND ON CLICK
// ---------------------------
document.querySelectorAll('.album').forEach(album => {
  album.addEventListener('click', () => {
    if (!isDragging) album.classList.toggle('expanded');
  });
});
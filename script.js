// ----------------------------
// BACK TO TOP BUTTON
// ----------------------------
const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ----------------------------
// GALLERY MARQUEE INTERACTIONS
// ----------------------------
const marquee = document.querySelector('.gallery-marquee');
let isDragging = false;
let startX, scrollLeft;

// Pause marquee animation on hover
marquee.addEventListener('mouseenter', () => {
  marquee.style.animationPlayState = 'paused';
});
marquee.addEventListener('mouseleave', () => {
  marquee.style.animationPlayState = 'running';
});

// Mouse drag
marquee.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.pageX - marquee.offsetLeft;
  scrollLeft = marquee.scrollLeft;
  marquee.style.cursor = 'grabbing';
});

marquee.addEventListener('mouseup', () => {
  isDragging = false;
  marquee.style.cursor = 'grab';
});

marquee.addEventListener('mouseleave', () => {
  isDragging = false;
  marquee.style.cursor = 'grab';
});

marquee.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const x = e.pageX - marquee.offsetLeft;
  const walk = (x - startX) * 2; // scroll-fast multiplier
  marquee.scrollLeft = scrollLeft - walk;
});

// Touch drag for mobile
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

// ----------------------------
// ALBUM EXPAND ON CLICK
// ----------------------------
document.querySelectorAll('.album').forEach(album => {
  album.addEventListener('click', () => {
    if (!isDragging) { // only expand if not dragging
      album.classList.toggle('expanded');
    }
  });
});

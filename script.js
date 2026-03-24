// Back to top button
window.onscroll = function() {
  const btn = document.getElementById("topBtn");
  if (document.documentElement.scrollTop > 200) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Gallery marquee
const marquee = document.querySelector('.gallery-marquee');
let scrollSpeed = 0.5;
let isDragging = false;
let startX, scrollLeft;

// Duplicate marquee content for infinite scroll
marquee.innerHTML += marquee.innerHTML;

function autoScroll() {
  if (!isDragging) {
    marquee.scrollLeft += scrollSpeed;
    if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
      marquee.scrollLeft = 0;
    }
  }
  requestAnimationFrame(autoScroll);
}
autoScroll();

// Mouse drag
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
  marquee.scrollLeft = scrollLeft - (x - startX) * 2;
});

// Touch drag
marquee.addEventListener('touchstart', e => {
  isDragging = true;
  startX = e.touches[0].pageX - marquee.offsetLeft;
  scrollLeft = marquee.scrollLeft;
});
marquee.addEventListener('touchend', () => isDragging = false);
marquee.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - marquee.offsetLeft;
  marquee.scrollLeft = scrollLeft - (x - startX) * 2;
});

// Expand album on click (not during drag)
document.querySelectorAll('.album').forEach(album => {
  album.addEventListener('click', () => {
    if (!isDragging) album.classList.toggle('expanded');
  });
});
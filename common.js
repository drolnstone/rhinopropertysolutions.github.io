const topButton = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

topButton.addEventListener('click', scrollToTop);

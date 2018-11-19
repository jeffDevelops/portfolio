document.addEventListener('DOMContentLoaded', () => {
  // Always load page at top
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
});
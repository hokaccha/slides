function confirmAndRemove(el) {
  if (window.confirm('消すよ？')) {
    el.parentNode.removeChild(el);
  }
}

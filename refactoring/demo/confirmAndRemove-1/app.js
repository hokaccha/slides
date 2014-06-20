function confirmAndRemove(el) {
  if (window.confirm('消すよ？')) {
    $(el).remove();
  }
}

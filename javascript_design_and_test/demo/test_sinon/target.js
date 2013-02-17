function ListView($el) {
  this.$el = $el;
}

ListView.prototype.remove = function() {
  if (window.confirm('削除しますか？')) {
    this.$el.remove();
    this.$el = null;
  }
};

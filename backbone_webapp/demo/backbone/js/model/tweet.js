(function() {

TwitterSearch.Model.Tweet = Backbone.Model.extend({
  set: function(attrs, opts) {
    if (attrs.text) {
      attrs.text_linked = twttr.txt.autoLink(attrs.text);
    }

    return Backbone.Model.prototype.set.call(this, attrs, opts);
  }
});

})();

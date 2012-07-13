(function() {

var Model = TwitterSearch.Model;

Model.Tweet = Model.Base.extend({
  set: function(attrs, opts) {
    if (attrs.text) {
      attrs.text_linked = twttr.txt.autoLink(attrs.text);
    }

    return Model.Base.prototype.set.call(this, attrs, opts);
  }
});

})();

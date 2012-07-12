(function() {

var View = TwitterSearch.View;

View.Tweets = View.Base.extend({
  tmplId: 'tweet',
  el: '.tweets',
  initialize: function() {
    this.collection.on('reset', this.draw, this);
  },
  draw: function(tweets) {
    var self = this;

    self.$el.hide().empty();
    tweets.each(function(tweet) {
      var $li = self.$tmpl(tweet.toJSON());
      self.$el.append($li);
    });
    self.$el.fadeIn();
  }
});

})();

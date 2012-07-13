(function() {

TwitterSearch.View.Tweets = Backbone.View.extend({
  el: '.tweets',
  initialize: function() {
    this.collection.on('reset', this.draw, this);
  },
  draw: function(tweets) {
    var self = this;
    var tmpl = $('#tmpl-tweet').html();

    self.$el.hide().empty();
    tweets.each(function(tweet) {
      var $li = _.template(tmpl, tweet.toJSON());
      self.$el.append($li);
    });
    self.$el.fadeIn();
  }
});

})();

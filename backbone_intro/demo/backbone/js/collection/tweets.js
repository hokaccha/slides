(function() {

var Collection = TwitterSearch.Collection;
var Model = TwitterSearch.Model;

Collection.Tweets = Collection.Base.extend({
  model: Model.Tweet,
  url: 'http://search.twitter.com/search.json',
  fetchByQuery: function(query) {
    var self = this;

    $.ajax({
      url: self.url,
      dataType: 'jsonp',
      data: { q: query }
    }).done(function(data) {
      self.reset(data.results);
    })
    .fail(function() {
      self.trigger('error', arguments);
    });
  }
});

})();

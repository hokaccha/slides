(function() {

var Collection = TwitterSearch.Collection;
var Model = TwitterSearch.Model;

Collection.Histories = Collection.Base.extend({
  model: Model.History,
  localStorage: new Store('twitterSearch-backbone'),
  addQuery: function(query) {
    this.create({ query: query }, { at: 0 });
  },
  removeByQuery: function(query) {
    var model = this.get(query);

    if (model) {
      model.destroy();
    }
  },
  setCurrent: function(query) {
    this.trigger('change:current', query);
  }
});

})();

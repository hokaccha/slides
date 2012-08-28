(function() {

TwitterSearch.Collection.Histories = Backbone.Collection.extend({
  model: TwitterSearch.Model.History,
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
    this.currentQuery = query;
    this.trigger('change:current', query);
  }
});

})();

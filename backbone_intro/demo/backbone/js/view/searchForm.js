(function() {

TwitterSearch.View.SearchForm = Backbone.View.extend({
  el: '.searchForm',
  initialize: function(opts) {
    this.tweets = opts.tweets;
    this.histories = opts.histories;
    this.$query = this.$('input[name=q]');

    this.histories.on('change:current', this.changeQuery, this);
  },
  events: {
    'submit': 'onSubmit'
  },
  onSubmit: function(e) {
    e.preventDefault();

    var query = this.$query.val();

    if (query) {
      this.tweets.fetchByQuery(query);
      this.histories.addQuery(query);
    }
  },
  changeQuery: function() {
    var query = this.histories.currentQuery;

    this.$query.val(query);
    this.tweets.fetchByQuery(query);
  }
});

})();

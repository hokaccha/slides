(function() {

var View = TwitterSearch.View;

View.SearchForm = View.Base.extend({
  el: '.searchForm',
  initialize: function(opts) {
    this.tweets = opts.tweets;
    this.histories = opts.histories;
    this.$query = this.$('input[name=q]');

    this.histories.on('change:current', this.changeCurrent, this);
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
  changeCurrent: function(query) {
    this.$query.val(query);
    this.tweets.fetchByQuery(query);
  }
});

})();

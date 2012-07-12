window.TwitterSearch = {};

$(function() {
  // init model
  var tweets = new TwitterSearch.Collection.Tweets();
  var histories = new TwitterSearch.Collection.Histories();

  // init view
  new TwitterSearch.View.SearchForm({
    tweets: tweets,
    histories: histories
  });

  new TwitterSearch.View.Tweets({
    collection: tweets
  });

  new TwitterSearch.View.Histories({
    collection: histories
  });

  // initialize
  histories.fetch();
});

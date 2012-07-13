(function() {

TwitterSearch.View.Histories = Backbone.View.extend({
  el: '.histories',
  events: {
    'click .remove': 'onRemove',
    'click .txt': 'onSelect'
  },
  initialize: function() {
    this.collection.on('add', this.add, this);
    this.collection.on('reset', this.reset, this);
  },
  add: function(historyModel) {
    var tmpl = $('#tmpl-history').html();
    var html = _.template(tmpl, historyModel.toJSON());
    var $li = $(html).hide();
    this.$el.prepend($li);
    $li.slideDown();
  },
  reset: function(histories) {
    var self = this;

    self.$el.empty();
    histories.each(function(historyModel) {
      self.add(historyModel);
    });
  },
  onRemove: function(e) {
    var self = this;
    var $li = $(e.target).parents('li');
    var query = $li.find('.txt').text(); 

    $li.fadeOut(function() {
      $li.remove();
      self.collection.removeByQuery(query);
    });
  },
  onSelect: function(e) {
    var $li = $(e.target).parents('li');
    var query = $li.find('.txt').text(); 

    this.collection.setCurrent(query);
  }
});

})();

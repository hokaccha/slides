(function() {

TwitterSearch.View = {};

TwitterSearch.View.Base = Backbone.View.extend({
  getTemplate: function() {
    if (!this.tmplId) {
      throw new Error('tmplId is not set'); 
    }

    if (!this.template) {
      this.template = $('#tmpl-' + this.tmplId).html();
    }

    return this.template;
  },
  $tmpl: function(data) {
    var html = _.template(this.getTemplate(), data);
    return $(html);
  }
});

})();

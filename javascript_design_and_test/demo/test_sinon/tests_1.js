describe('ListView', function() {
  var listView;
  beforeEach(function() {
    listView = new ListView($('<ul>'));
  });

  describe('#remove', function() {
    it('要素が削除されること', function() {
      listView.remove();
      expect(listView.$el).to.be(null);
    });
  });
});

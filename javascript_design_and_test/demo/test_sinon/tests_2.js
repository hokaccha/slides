describe('ListView', function() {
  describe('#remove', function() {
    var stub;
    var listView;
    beforeEach(function() {
      stub = sinon.stub(window, 'confirm');
      listView = new ListView($('<ul>'));
    });
    afterEach(function() {
      stub.restore();
    });

    it('window.confirmが呼ばれること', function() {
      listView.remove();
      expect(stub.calledOnce).to.ok();
      expect(stub.args[0][0]).to.be('削除しますか？');
    });

    context('window.confirmでOKを押したとき', function() {
      beforeEach(function() {
        stub.returns(true);
      });

      it('要素が削除されること', function() {
        listView.remove();
        expect(listView.$el).to.be(null);
      });
    });

    context('window.confirmでキャンセルを押した時', function() {
      beforeEach(function() {
        stub.returns(false);
      });

      it('要素が削除されない', function() {
        listView.remove();
        expect(listView.$el).to.not.be(null);
      });
    });
  });
});

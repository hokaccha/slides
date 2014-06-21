describe('confirmAndRemove()', function() {
  beforeEach(function() {
    // 要素を作る
    this.parent = document.createElement('div');
    this.el = document.createElement('div');
    this.parent.appendChild(this.el);

    // window.confirmをstub化
    this.stub = sinon.stub(window, 'confirm');
  });
  afterEach(function() {
    // window.confirmを元に戻す
    this.stub.restore();
  });

  context('window.confirmがtrueを返す場合', function() {
    beforeEach(function() {
      // window.confirmがtrueを返すように設定
      this.stub.returns(true);
      confirmAndRemove(this.el);
    });

    it('要素が削除されること', function() {
      expect(this.parent.childNodes.length).to.be(0);
    });
  });

  context('window.confirmがfalseを返す場合', function() {
    beforeEach(function() {
      // window.confirmがfalseを返すように設定
      this.stub.returns(false);
      confirmAndRemove(this.el);
    });

    it('要素が削除されないこと', function() {
      expect(this.parent.childNodes.length).to.be(1);
    });
  });
});

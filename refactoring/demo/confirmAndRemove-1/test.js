describe('confirmAndRemove()', function() {
  it('ダイアログでtrueが押された場合にjQueryのremoveが呼ばれること', function() {
    var el = $('<div>').get(0);
    var stub = sinon.stub(window, 'confirm');
    var spy = sinon.spy(jQuery.fn, 'remove');
    stub.returns(true);
    confirmAndRemove(el);

    // jQueryのremoveメソッドが呼ばれていることをチェック
    expect(spy.calledOnce).to.be(true);

    stub.restore();
    spy.restore();
  });
});

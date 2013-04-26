function removeElement($el) {
  if (window.confirm('削除しますか？')) {
    $el.remove();
  }
}

describe('removeElement', function() {
  it('confirmがtrueだった場合removeが呼ばれること', function() {
    var $el = $('<div>');

    // jQuery#remove をspy化
    var spy = sinon.spy(jQuery.fn, 'remove');

    // window.confirmをstub化
    var stub = sinon.stub(window, 'confirm');

    // window.confirmはtrueを返す
    stub.returns(true);

    // 実行
    removeElement($el);

    // removeが呼ばれた
    expect(spy.callCount).to.be(1);

    // 元に戻す
    spy.restore();
    stub.restore();
  });
});

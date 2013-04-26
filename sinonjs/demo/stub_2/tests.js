function removeElement($el) {
  if (window.confirm('削除しますか？')) {
    $el.remove();
  }
}

describe('removeElement', function() {
  it('confirmがfalseだった場合removeが呼ばれないこと', function() {
    var $el = $('<div>');

    // jQuery#removeをspy化
    var spy = sinon.spy(jQuery.fn, 'remove');

    // window.confirmをstub化
    var stub = sinon.stub(window, 'confirm');

    // window.confirmはfalseを返す
    stub.returns(false);

    // 実行
    removeElement($el);

    // removeが呼ばれてない
    expect(spy.callCount).to.be(0);

    // 元に戻す
    spy.restore();
    stub.restore();
  });
});

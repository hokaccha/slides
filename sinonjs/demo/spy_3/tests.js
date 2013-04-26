describe('jQuery#trigger', function() {
  it('イベントハンドラに値を渡せること', function() {
    var $el = $('<div>');
    var spy = sinon.spy();

    $el.bind('foo', spy);
    $el.trigger('foo', 'bar');
    $el.trigger('foo', 'baz');

    // 呼ばれた回数を検証
    expect(spy.callCount).to.be(2);

    // 一回目に呼ばれた時の引数を検証
    expect(spy.args[0][1]).to.be('bar');

    // 二回目に呼ばれた時の引数を検証
    expect(spy.args[1][1]).to.be('baz');
  });
});

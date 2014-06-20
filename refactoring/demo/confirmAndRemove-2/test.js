describe('confirmAndRemove()', function() {
  it('ダイアログでtrueが押された場合に要素が消えること', function() {
    var $parent = $('<div>');
    var $el = $('<div>');
    var stub = sinon.stub(window, 'confirm');
    $parent.append($el);
    stub.returns(true);

    confirmAndRemove($el.get(0));

    // 要素が消えていることを確認
    expect($parent.children().length).to.be(0);

    stub.restore();
  });
});

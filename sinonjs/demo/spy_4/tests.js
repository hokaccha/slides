function removeElement($el) {
  // ...

  $el.remove();
}


describe('removeElement', function() {
  it('jQuery.fn.removeが呼ばれること', function() {
    var $el = $('<div>');
    var spy = sinon.spy(jQuery.fn, 'remove');

    removeElement($el);

    // jQuery.fn.removeが呼ばれていることを確認
    expect(spy.callCount).to.be(1);

    spy.restore();
  });
});

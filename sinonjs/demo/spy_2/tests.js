describe('jQuery#trigger', function() {
  it('イベントハンドラに値を渡せること', function(done) {
    var $el = $('<div>');

    var count = 0;
    $el.bind('foo', function(event, val) {
      count++;

      if (count === 1) {
        expect(val).to.be('bar');
      }
      else if (count === 2) {
        expect(val).to.be('baz');
        done();
      }
    });

    $el.trigger('foo', 'bar');
    $el.trigger('foo', 'baz');
  });
});

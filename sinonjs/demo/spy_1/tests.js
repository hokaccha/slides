describe('jQuery#trigger', function() {
  it('イベントハンドラに値を渡せること', function(done) {
    var $el = $('<div>');
    
    $el.bind('foo', function(event, val) {
      expect(val).to.be('bar');
      done();
    });

    $el.trigger('foo', 'bar');
  });
});

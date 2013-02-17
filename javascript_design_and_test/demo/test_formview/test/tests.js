describe('TodoFormView', function() {
  var todoForm;
  var html = '<form><input type="text"></form>';

  beforeEach(function() {
    todoForm = new TodoFormView($(html));
  });

  it('$elに要素がセットされていること', function() {
    expect(todoForm.$el.is('form')).to.ok();
  });

  context('submitしたとき', function() {
    var spy;
    beforeEach(function() {
      spy = sinon.spy(Todo, 'add');
      todoForm.$input.val('foo');
      todoForm.$el.submit();
    });
    afterEach(function() {
      spy.restore();
    });

    it('textの値がTodo.addに渡されること', function() {
      expect(spy.calledOnce).to.ok();
      expect(spy.args[0][0]).to.be('foo');
    });
  });
});

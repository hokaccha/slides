describe('Todo', function() {
  describe('.add', function() {
    it('Todo.listにインスタンスが追加されること', function() {
      Todo.add({ text: 'foo' });
      expect(Todo.list).to.have.length(1);
      expect(Todo.list[0]).to.be.a(Todo);
    });
  });

  describe('#setComplete', function() {
    var todo;
    beforeEach(function() {
      todo = new Todo({});
    });

    it('completeが設定されること', function() {
      todo.setComplete(true);
      expect(todo.complete).to.be(true);
    });

    it('change:completeイベントが発火すること', function(done) {
      todo.on('change:complete', function() {
        expect(todo.complete).to.be(true);
        done();
      });
      todo.setComplete(true);
    });
  });
});

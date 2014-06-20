describe('fetchUser()', function() {
  it('ajaxが呼ばれること', function() {
    var stub = sinon.stub(jQuery, 'ajax');

    function onSuccess() {}
    function onError() {}

    fetchUser(10, onSuccess, onError);

    // $.ajaxが呼ばれた時に渡された引数を取得する。
    var arg = stub.args[0][0];

    // 期待した引数で$.ajaxが呼ばれているかチェックする
    expect(arg.method).to.be('GET');
    expect(arg.url).to.be('/api/users');
    expect(arg.data).to.eql({ user_id: 10 });
    expect(arg.success).to.be(onSuccess);
    expect(arg.error).to.be(onError);
  });
});

// ユーザーAPIを呼び出す関数
function fetchUser(fn) {
  $.ajax({
    type: 'GET',
    url: '/api/user',
    dataType: 'json',
  })
  .done(function(userData) {
    fn({ result: 'ok', data: userData });
  });
}

describe('fetchUser', function() {
  it('userAPIにアクセスすること', function() {
    // XHRを置き換えてダミーサーバーを作る
    var server = sinon.fakeServer.create();

    // ダミーサーバーのリクエストを処理する
    var response = [ 200, {}, '{"foo":"bar"}' ];
    server.respondWith('GET', '/api/user', response);

    // fetchUserを呼ぶ
    var spy = sinon.spy();
    fetchUser(spy);

    // レスポンスを返す
    server.respond();

    // レスポンスがあったときに期待通り処理が行われているか
    expect(spy.callCount).to.be(1);
    expect(spy.args[0][0]).to.eql({
      result: 'ok',
      data: { foo: 'bar' }
    });

    // XHRをもとに戻す
    server.restore();
  });
});

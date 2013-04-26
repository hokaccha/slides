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
    // XHRを置き換える
    var xhr = sinon.useFakeXMLHttpRequest();

    // HTTPリクエストがあったらリクエストオブジェクトを保存する
    var requests = [];
    xhr.onCreate = function(request) {
      requests.push(request);
    };

    // fetchUserを呼ぶ
    var spy = sinon.spy();
    fetchUser(spy);

    // 期待通りリクエストされているか
    var request = requests[0];
    expect(request.method).to.be('GET');
    expect(request.url).to.be('/api/user');

    // 任意のレスポンスを返す
    request.respond('200', {}, '{"foo":"bar"}');

    // レスポンスがあったときに期待通り処理が行われているか
    expect(spy.callCount).to.be(1);
    expect(spy.args[0][0]).to.eql({
      result: 'ok',
      data: { foo: 'bar' }
    });

    // XHRをもとに戻す
    xhr.restore();
  });
});

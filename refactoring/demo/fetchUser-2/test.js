describe('fetchUser()', function() {
  beforeEach(function() {
    // XMLHttpRequestを上書き
    this.xhr = sinon.useFakeXMLHttpRequest();
 
    // リクエストが発行されたらリクエストオブジェクトを保存する
    var requests = this.requests = [];
    this.xhr.onCreate = function(request) {
      requests.push(request);
    };
 
    // コールバックをspyにしてAPI呼び出し
    this.onSuccess = sinon.spy();
    this.onError = sinon.spy();

   // ここでxhr.onCreateが実行される
    fetchUser(10, this.onSuccess, this.onError);
  });
 
  afterEach(function() {
    // XMLHttpRequestを元に戻す
    this.xhr.restore();
  });

  it('GET /api/usersにリクエストが発行されること', function() {
    var request = this.requests[0];
    expect(request.url).to.be('/api/users?user_id=10');
    expect(request.method).to.be('GET');
  });
 
  it('レスポンスが200の場合に結果が成功になること', function() {
    // リクエストに対してレスポンスを返す
    var request = this.requests[0];
    request.respond('200', {'Content-Type':'application/json'}, '{"foo":"bar"}');
 
    // successが実行されて結果がJSONにパースされていることを確認
    expect(this.onSuccess.callCount).to.be(1);
    expect(this.onSuccess.args[0][0]).to.eql({ foo: 'bar' });
  });
 
  it('レスポンスが200でない場合は結果がエラーになること', function() {
    // リクエストに対して404のレスポンスを返す
    var request = this.requests[0];
    request.respond(404, {});
 
    // errorが実行されて結果がerrorになることを確認
    expect(this.onError.callCount).to.be(1);
  });
});

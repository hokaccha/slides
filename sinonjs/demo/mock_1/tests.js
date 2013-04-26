function Model() {
  this.attr = {};
}

Model.prototype.set = function(key, val) {
  var error = this.validate(key, val);

  if (!error) {
    this.attr[key] = val;
  }
};
 
Model.prototype.validate = function() {
  // ...
};

describe('Model', function() {
  it('validateが呼ばれること', function() {
    var model = new Model();
 
    // mock作成
    var mock = sinon.mock(model);
 
    // 期待するvalidateの振る舞いを先に記述する
    mock.expects('validate')
        .once()
        .withArgs('foo', 'bar')
        .returns(null);
 
    // クリックイベントを発火
    model.set('foo', 'bar');

    // fooに値がセットされていないこと
    expect(model.attr.foo).to.be('bar');
 
    // 期待通り呼ばれたかをチェック
    mock.verify();
  });
});

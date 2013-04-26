function wait10min(fn) {
  var time = 10 * 60 * 1000; // 10分
 
  setTimeout(function() {
    fn();
  }, time);
}

describe('wait10min()', function() {
  it('10分後にコールバックが呼ばれること', function() {
    var clock = sinon.useFakeTimers();
    var spy = sinon.spy();
 
    wait10min(spy);
 
    // 10分の1ミリ秒手前まで時間を進める
    clock.tick(10 * 60 * 1000 - 1);
 
    // まだコールバックは呼ばれていない
    expect(spy.called).to.be(false);
 
    // 1ミリ秒進める
    clock.tick(1);
 
    // コールバックが呼ばれた
    expect(spy.called).to.be(true);
 
    clock.restore();
  });
});

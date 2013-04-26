function isSunday() {
  var now = new Date();
 
  return now.getDay() === 0; // 0は日曜日
}

describe('isSunday()', function() {
  it('日曜日の場合にtrueを返すこと', function() {
    var sunday = new Date('2013-03-24'); // この日は日曜日
    var clock = sinon.useFakeTimers(sunday.getTime());
 
    expect(isSunday()).to.be(true);
 
    clock.restore();
  });
 
  it('日曜日以外の場合にfalseを返すこと', function() {
    var monday = new Date('2013-03-25'); // この日は月曜日
    var clock = sinon.useFakeTimers(monday.getTime());
 
    expect(isSunday()).to.be(false);
 
    clock.restore();
  });
});

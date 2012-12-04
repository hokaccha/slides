describe('mochaのテスト', function() {
  it('1 + 1は2になること', function() {
    if (1 + 1 !== 2) {
      throw new Error('1 + 1 は2じゃない');
    }
  });

  it('1 + 1は3になること', function() {
    if (1 + 1 !== 3) {
      throw new Error('1 + 1 は3じゃない');
    }
  });
});

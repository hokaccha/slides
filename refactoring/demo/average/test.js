describe('average()', function() {
  it('平均値が返ること', function() {
    expect(average([10, 20])).to.be(15);
    expect(average([10, 20, 30])).to.be(20);
  });
});

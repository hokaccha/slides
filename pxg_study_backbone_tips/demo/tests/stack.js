describe('Stack', function() {
  context('stackが空の場合', function() {
    var stack;
    beforeEach(function() {
      stack = new Stack(10);
    });

    describe('stack#size', function() {
      it('0を返すこと', function() {
        expect(stack.size()).to.be(0);
      });
    });

    describe('stack#push', function() {
      context('文字列を指定した場合', function() {
        it('スタックのサイズが1増えること', function() {
          stack.push('foo');
          expect(stack.size()).to.be(1);
        });
      });

      context('非文字列を指定した場合', function() {
        it('エラーになること', function() {
          expect(function() {
            stack.push(100);
          }).throwError();
        });
      });
    });

    describe('stack#pop', function() {
      it('エラーになること', function() {
        expect(function() {
          stack.pop();
        }).throwError();
      });
    });
  });

  context('stackがいっぱいの場合', function() {
    var stack;
    var limit = 10;
    beforeEach(function() {
      stack = new Stack(limit);
      for (var i = 0; i < limit; i++) {
        stack.push(i.toString());
      }
    });

    describe('stack#size', function() {
      it('指定した最大数が返ること', function() {
        expect(stack.size()).to.be(limit);
      });
    });

    describe('stack#push', function() {
      context('文字列を指定した場合', function() {
        it('エラーになること', function() {
          expect(function() {
            stack.push('foo');
          }).throwError();
        });
      });

      context('非文字列を指定した場合', function() {
        it('エラーになること', function() {
          expect(function() {
            stack.push(100);
          }).throwError();
        });
      });
    });

    describe('stack#pop', function() {
      it('先頭の要素を取得できること', function() {
        var item = stack.pop();
        expect(item).to.be('9');
      });

      it('スタックの数が1減っていること', function() {
        stack.pop();
        expect(stack.size()).to.be(9);
      });
    });
  });

  context('stackが空でもいっぱいでもない場合', function() {
    var stack;
    beforeEach(function() {
      stack = new Stack(10);
      stack.push('foo');
    });

    describe('stack#size', function() {
      it('1が返ること', function() {
        expect(stack.size()).to.be(1);
      });
    });

    describe('stack#push', function() {
      context('文字列を指定した場合', function() {
        it('スタックの数が1増えること', function() {
          stack.push('bar');
          expect(stack.size()).to.be(2);
        });
      });

      context('非文字列を指定した場合', function() {
        it('エラーになること', function() {
          expect(function() {
            stack.push(100);
          }).throwError();
        });
      });
    });

    describe('stack#pop', function() {
      it('先頭の要素を取得できること', function() {
        var item = stack.pop();
        expect(item).to.be('foo');
      });

      it('スタックの数が1減っていること', function() {
        stack.pop();
        expect(stack.size()).to.be(0);
      });
    });
  });
});

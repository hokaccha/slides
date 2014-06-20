module.exports = {
  'Todo App Testing': function (client) {
    client
      // 対象のページをブラウザで開く
      .url('file:///Users/hokamura/Works/slides/refactoring/demo/legacy-todo/index.html')

      // テキストボックスに文字を入れて送信
      .setValue('.todoText', 'todo test')
      .submitForm('.todoForm')

      // li要素が作成されている
      .assert.elementPresent('.todoList li')

      // リストアイテムのテキストは送信したものと一致している
      .assert.containsText('.todoList li', 'todo test')

      // checkboxをクリックしたら`is-complete`が追加される
      .click('.todoList li input[type="checkbox"]')
      .assert.cssClassPresent('.todoList li', 'is-complete')

      // removeBtnをクリックしてconfirmでキャンセルしてもli要素は消えない
      .click('.todoList li .removeBtn')
      .dismissAlert()
      .assert.elementPresent('.todoList li')

      // removeBtnをクリックしてconfirmでOKしたらli要素が消える
      .click('.todoList li .removeBtn')
      .acceptAlert()
      .assert.elementNotPresent('.todoList li')

      // 検証終了
      .end();
  }
};

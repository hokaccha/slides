$(function() {
  var $searchForm = $('.searchForm');
  var $tweets = $('.tweets');
  var $histories = $('.histories');
  var $q = $searchForm.find('input[name=q]');
  var storageKey = 'twitterSearch-nobackbone';
  var histories = [];
  
  if (localStorage[storageKey]) {
    histories = JSON.parse(localStorage[storageKey]);
  }

  // クエリストリングを受け取ってツイッターを検索する
  function search(q) {
    $tweets.hide().empty();
    $.ajax({
      url: 'http://search.twitter.com/search.json',
      dataType: 'jsonp',
      data: { q: q }
    })
    .done(function(data) {
      data.results.forEach(function(result) {
        var $li = getTweetItem(result);
        $tweets.append($li);
      });
      $tweets.fadeIn();
    })
    .fail(function() {
      alert('読み込みに失敗しました');
      console.error(arguments);
    });
  }

  // ツイートのリストアイテムのHTMLを返す
  function getTweetItem(data) {
    var $li = $('<li>').html([
      '<span class="img"><img src="' + data.profile_image_url + '"></span>',
      '<span class="autor"><a href="https://twitter.com/' + data.from_user + '" target="_blank">@' + data.from_user + '</a></span>',
      '<span class="body">' + data.text + '</span>',
      '<span class="time"><a href="https://twitter.com/' + data.from_user + '/status/' + data.id_str + '" target="_blank">' + data.created_at + '</a></span>',
    ].join(''));

    return $li;
  }

  // 履歴のリストアイテムのHTMLを返す
  function getHistoryItem(text) {
      var $li = $('<li>');
      $li.html([
        '<span class="txt">' + text + '</span>',
        '<span class="remove">x</span>'
      ].join(''));

      return $li;
  }

  // 履歴をlocalStorageを保存
  function saveHistory() {
    var histories = $histories.find('.txt').map(function() {
      return $(this).text();
    }).toArray();
    localStorage[storageKey] = JSON.stringify(histories);
  }

  // 履歴の初期表示
  histories.forEach(function(hist) {
    var $hist = getHistoryItem(hist);
    $histories.append($hist);
  });

  // フォームをサブミットしたときの処理
  $searchForm.submit(function(e) {
    e.preventDefault();

    var q = $q.val();
    if (!q) return;

    // 検索実行
    search(q);

    // 履歴を更新
    var exists = $histories.find('.txt').filter(function() {
      return $(this).text() === q;
    }).size() !== 0;

    if (!exists) {
      var $hist = getHistoryItem(q);
      $hist.hide();
      $histories.prepend($hist);
      $hist.slideDown();
      saveHistory();
    }
  });

  // 履歴一覧をクリックしたときの処理
  $histories.on('click', '.txt', function() {
    var q = $(this).text();
    search(q);
    $q.val(q);
  });

  // 履歴の削除ボタンを押した時の処理
  $histories.on('click', '.remove', function() {
    var $li = $(this).parents('li');
    $li.fadeOut(function() {
      $li.remove();
      saveHistory();
    });
  });
});

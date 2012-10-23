var webpage = require('webpage');
var page = webpage.create();

page.onConsoleMessage = function(msg) {
  if (msg === 'finish') phantom.exit();
  console.log(msg);
};

page.open('http://www.pxgrid.com/', function(status) {
  page.evaluate(function() {
    console.log($('nav .current').text()); //=> ホーム

    $('a[href=#service]').click();

    setTimeout(function() {
      console.log($('nav .current').text()); //=> 業務案内
      console.log('finish');
    }, 1000);
  });
});

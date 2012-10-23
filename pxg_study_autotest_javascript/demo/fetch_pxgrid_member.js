var webpage = require('webpage');
var page = webpage.create();

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.open('http://www.pxgrid.com/', function(status) {
  page.evaluate(function() {
    $('.mod-staffs h3').each(function() {
      console.log($(this).text());
    });
  });
  phantom.exit();
});

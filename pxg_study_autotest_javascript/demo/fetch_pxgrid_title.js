var webpage = require('webpage');
var page = webpage.create();

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.open('http://www.pxgrid.com/', function(status) {
  page.evaluate(function() {
    console.log(document.title);
  });
  phantom.exit();
});

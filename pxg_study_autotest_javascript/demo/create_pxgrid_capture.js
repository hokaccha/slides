var webpage = require('webpage');
var page = webpage.create();

page.open('http://www.pxgrid.com/#corporate', function(status) {
  page.render('capture.png');
  phantom.exit();
});

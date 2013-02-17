mocha.setup('bdd');
$(function() {
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
});

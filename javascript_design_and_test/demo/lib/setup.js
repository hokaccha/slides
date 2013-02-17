mocha.setup({ ui: 'bdd', ignoreLeaks: true });

$(function() {
  mocha.run();
});

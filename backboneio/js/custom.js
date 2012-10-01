$(function() {
    $('code.diff').each(function() {
      hljs.highlightBlock($(this).get(0));
    });
});

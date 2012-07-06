document.addEventListener('DOMContentLoaded', function() {
	var imgs = document.getElementsByTagName('img');
	for (var i = 0, len = imgs.length; i < len; i++) {
		(function() {
			var img = imgs[i];
			var src = img.src;
			var src_o = src.replace(/(.*)\.(.*)$/, '$1_o.$2');
			img.addEventListener('mouseover', function() {
				console.log(src_o);
				img.src = src_o;
			}, false);
			img.addEventListener('mouseout', function() {
				img.src = src;
			}, false);
		})();
	}
}, false);

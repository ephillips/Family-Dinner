function twitterCallback2(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){

	var text = twitters[i].text.replace(/http([s]?):\/\/([^\ \)$]*)/g, function(blank) {
      return '';
    });
	var pagelink = twitters[i].text.match(/http([s]?):\/\/([^\ \)$]*)/g, function(pagelink) {
      return pagelink;
    });
   
    statusHTML.push('<a href="'+pagelink+'">'+text+'</a>');
  }
  document.getElementById('loc').innerHTML = statusHTML.join('');
}
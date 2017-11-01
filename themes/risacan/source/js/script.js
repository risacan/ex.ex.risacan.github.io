var elms = document.getElementsByTagName("figure");

for( var i=0 , l=elms.length ; l>i ; i++ ) {
	hljs.highlightBlock( elms[i] ) ;
}
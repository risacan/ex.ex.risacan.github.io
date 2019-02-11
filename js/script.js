var elms = document.getElementsByTagName("figure");

for (var i = 0, l = elms.length; l > i; i++) {
	hljs.highlightBlock(elms[i]);
}

if (window.location.href === "https://risacan.net") {
	window.location = "https://www.notion.so/risacan/risacan-043429a61bd84c86aa17756b58e0d9f2";
}
var version = '1.0.0';

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", 'https://www.haishi.cool/php/maintain/version.php', false);
xmlhttp.send();
version = xmlhttp.responseText;

console.log(`版本号:${version}`);
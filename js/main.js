var search;

$('input[type=search]').on('keyup', function() {
	search = this.value;
	console.log(search);
});








var img      = $('.gallery img');
var imgTitle = $(img).attr('title');
var imgAlt   = $(img).attr('alt');




for (var i = 0; i < img.length; i +=1) {
	console.log(imgTitle, imgAlt);
}

/*
En dan die variable buiten het loopje zodat er per keer in de waarde gekeken kan worden zoals in 1 van de tutorials.
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search
https://stackoverflow.com/questions/1443292/how-to-implement-onchange-of-input-type-text-with-jquery

functie die de title en alt bekijkt.
En daar doorheen lopen.
*/

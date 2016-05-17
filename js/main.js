var openmodal = function () {
$('.modal').css('display', 'block')

};

var closemodal = function() {
	$('.modal').hide()
}
//1. When the user presses the .signin button, fade in the modal window
//2. When the user presses the .close button, fade out the modal window
$('.signin').click(openmodal);
$('.close').click(closemodal); 



//3. When the user presses the .submit button, add an .error class to both input elements
$('.submit').click(function(){
	$('input').addClass('error');
})

$('input[').focus(function() {
	$(this).removeClass('error');
});

$('.modal').click(closemodal);



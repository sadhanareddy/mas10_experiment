/*This method is called when the page is loaded. */
window.onload = function(){ 
    addclickEvents();
}

//This function is used to add click events to elements
function addclickEvents(){
    document.getElementById("reset_btn").addEventListener("click", function() {
            window.location.reload();
    }, false);
    document.getElementById("transparent_btn").addEventListener("click", function() {
            startExperiment();
    }, false);
}

// This method is called to rotate the elements.
function rotateElements(id, deg) {
	//Code for Safari
    document.getElementById(id).style.WebkitTransform = 'rotate('+deg+'deg)';  
    // Code for IE9
    document.getElementById(id).style.msTransform = 'rotate('+deg+'deg)'; 
    // Standard syntax
    document.getElementById(id).style.transform = 'rotate('+deg+'deg)'; 
}

// This method is called to move the elements from one position to other position.
function animateElements(id, top, left) {
	$('#'+id).animate({
	   	top: top+'%',
	    left: left+'%'
    	}, {
	   	duration: 1000,
	    easing: "linear"
	});
}

// This method is called to move the elements from one position to other position.
function animate(id, top1, left, top2) {
	$('#'+id).animate({
	   	top: top1+'%'
    	}, {
	   	duration: 1000,
	    easing: "linear"
	})
	.animate({
	   	left: left+'%'
    	}, {
	   	duration: 1000,
	    easing: "linear"
	})
	.animate({
	   	top: top2+'%'
    	}, {
	   	duration: 1000,
	    easing: "linear"
	});
}


function startExperiment() {
	// Remove the event handler
	document.getElementById('transparent_btn').style.visibility='hidden';
	document.getElementById('background').src= "images/background2.png";
	$('#yellow_cuvette, #lamp1').css('visibility', 'visible');
	$('#lamp1').animate({opacity: '1'}, 1000);

	setTimeout(function() {
		$('#cube, #arrow, #instruction_tag').css('visibility', 'visible');
		animateElements('cube', '+=23', '+=0');
		animateElements('arrow', '-=10', '+=0');
		animateElements('instruction_tag', '-=10', '+=0');
	}, 2000);

	setTimeout(function() {
		setInterval(function(){
			$('#arrow').fadeIn().fadeOut();
		}, 50);
		$('#clockface1, #clockhand1').css('visibility', 'visible');
		rotateElements('clockhand1', '180');
	}, 3000);

	setTimeout(function(argument) {
		$('#cube, #arrow, #instruction_tag, #yellow_cuvette, #lamp1, #clockface1, #clockhand1').css('visibility', 'hidden');
		$('#lamp2, #purple_cuvette').css('visibility', 'visible');
		$('#lamp2').animate({opacity: '0.2'}, 1000);
		animateElements('purple_cuvette', '+=22', '+=26');
	}, 7000);

	setTimeout(function(argument) {
		document.getElementById('frame').setAttribute('src', 'exp10b.html');
		// window.frames['frame'].location.replace('exp10b.html');
	}, 8000);
}

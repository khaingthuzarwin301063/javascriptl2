var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
	scrollpoint();
};


function scrollpoint(){
	// console.log("HI i AM WORKING");

	// scrolltop
	// projectheight
	// currentheight

	// calcheight = projectheight - currentheight

	// finalheight = Math.round((scrollTop * 100) /calcheight);
	// finalheight = Math.round((scrollTop/calcheight) *100);

	var getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop);

	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);

	var getclientheight =document.documentElement.clientHeight;
	// console.log(getclientheight);

	var calcheight = getscrollheight - getclientheight;
	// console.log(calcheight);


	var finalheight = Math.round((getscrolltop * 100) /calcheight);
	// console.log(finalheight);

	getprogressbar.style.width = `${finalheight}%`;
}

function printme(){
	window.print();
}


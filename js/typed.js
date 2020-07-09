var options = {
	strings: [ 'full stack developer', 'foodie', 'dog dad', 'geek' ],
	loop: true,
	startDelay: 1750,
	typeSpeed: 50,
	backSpeed: 50,
	onBegin: function() {
		options.startDelay = 500;
	}
};

var typed = new Typed(document.getElementById('typed'), options);

function setDelay(self) {}

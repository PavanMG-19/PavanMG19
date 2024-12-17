const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

/*document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});*/

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

// When the first video ends, show the second video and start playing it
video1.onended = function() {
    video1.style.display = 'none';  // Hide first video
    video2.style.display = 'block'; // Show second video
    video2.play();                  // Start playing the second video
};

// When the second video ends, show the first video and start playing it again
video2.onended = function() {
    video2.style.display = 'none';  // Hide second video
    video1.style.display = 'block'; // Show first video again
    video1.play();                  // Start playing the first video
};

document.getElementById('undergraduateBtn').addEventListener('click', function() {
    this.classList.toggle('active');
    var list = document.getElementById('undergraduateList');
    if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
});

document.getElementById('postgraduateBtn').addEventListener('click', function() {
    this.classList.toggle('active');
    var list = document.getElementById('postgraduateList');
    if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
});

document.getElementById('doctoralBtn').addEventListener('click', function() {
    this.classList.toggle('active');
    var list = document.getElementById('doctoralList');
    if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
});
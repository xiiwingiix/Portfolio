function get_Product(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://run.mocky.io/v3/286fb491-5bcd-4d59-9945-93c364e131ab');

	xhr.onload = function(){
		var data = JSON.parse(xhr.response);
		var pdt_info = data;

		console.log(data);
		// location
		var location_ele ='';
		location_ele += '<a href="/index.html">HOME</a>&nbsp;&gt;&nbsp;';
		location_ele += '<a href="./list.html">'+pdt_info.filter+'</a>&nbsp;&gt;&nbsp;';
		location_ele += '<a href="#">'+pdt_info.title  +'</a>&nbsp;&gt;&nbsp;';

		// slide
		var slide_ele		 ='';
		var slide_thumb_ele  ='';

		pdt_info.thumb.forEach(function(item, idx){
			var style = idx == 0 ? 'style="display:block;"' : '';
			slide_ele += '<div class="slide" '+style+'><img src="'+item+'"></div>';
			slide_thumb_ele += '<div class="thumb"><img class="demo cursor" src="'+item+'" onclick="currentSlide('+ (idx+1) +')" alt="ornange Jasmine tree"></div>';
		});

		var slide 		= document.querySelector('.slide_wrap');
		var thumb_slide = document.querySelector('.thumb_wrap');

		slide.innerHTML 		= slide_ele;
		thumb_slide.innerHTML 	= slide_thumb_ele;

	};

	xhr.send()
}
get_Product()









//섹션1_.firBx (이미지)
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("demo");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//섹션1_secBx (아코디언메뉴)
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//섹션2-2 (슬라이드 메뉴)
var a = 1;
slide(a);

function plusSlides2(n) {
    slide(a += n);
}

function currentSlide2(n) {
   slide(a = n);
}

function slide(n) {
    var i;
    var slides = document.getElementsByClassName("Slides");
    if (n > slides.length) {a = 1}
    if (n < 1) {a = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  slides[a-1].style.display = "block";
}

//섹션2-3 (아코디언메뉴)
var title = document.getElementsByClassName("title");
var b;

for (b = 0; b < title.length; b++) {
    title[b].addEventListener("click", function() {

        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
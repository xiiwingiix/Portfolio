function get_Product(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://run.mocky.io/v3/e080287e-6bf3-41cb-a66b-48fcab96dac7');

	xhr.onload = function(){
		var data = JSON.parse(xhr.response)
		var pdt_list = data;

		var el ='';
		pdt_list.forEach(function(item){
			var filter = item.filter.replace('|', ' ');

			el += '<a class="filter_pdt show '+filter+'" href="'+item.link+'" >'
			el += '	<div class="pdt_img bg_transition" style="background-image:url('+item.imgSrc+')"></div>'
			el += '	<p class="tit mt10">'+item.tit+'</p>'
			el += '	<p class="price">'+item.price+'</p>'
			el += '</a>'
		});

		var pdt_list = document.querySelector('.pdt_list');
		pdt_list.innerHTML = el;

	};

	xhr.send()
}
get_Product()
// get_new_product : end

//상품 filter
function filterSelection(item) {
	console.log(item)
	var filter;
	filter_pdt = document.getElementsByClassName("filter_pdt");

	if (item == "all") item = "";

	for (var i = 0; i < filter_pdt.length; i++) {
		removeClass(filter_pdt[i], "show");
		filter_pdt[i].className.indexOf(item) > -1 ? addClass(filter_pdt[i], "show") : '' ;
	}

	return false
}

function removeClass(ele, name) {

	var arr = ele.className.split(' ');

	while (arr.indexOf(name) > -1) {
		arr.splice(arr.indexOf(name), 1);
	}

	ele.className = arr.join(' ');

}

function addClass(ele, name){
	var arr = ele.className.split(' ');

	if (arr.indexOf(name) == -1) {
		ele.className += " " + name;
	}
}


var btns = document.querySelectorAll(".btn_wrap > button");

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");

		current[0].className = current[0].className.replace("active", "");
		this.className += " active";
	});
}

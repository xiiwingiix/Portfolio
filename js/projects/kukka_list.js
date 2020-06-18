function get_Product(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://run.mocky.io/v3/e080287e-6bf3-41cb-a66b-48fcab96dac7');
	
	xhr.onload = function(){
		var data = JSON.parse(xhr.response)
		var pdt_list = data;
		
		var el ='';
		pdt_list.forEach(function(item){
      var filter = item.filter.split('|');
      console.log(filter);

			el += '<a href="'+item.link+'" >'
			el += '	<img src="'+item.imgSrc+'" alt="'+item.alt+'">'
			el += '	<p class="tit mt10">'+item.tit+'</p>'
			el += '	<p class="price mt10">'+item.price+'</p>'
			el += '</li>'
    });

		var pdt_list = document.querySelector('.pdt_list');
		pdt_list.innerHTML = el;

	};
	
	xhr.send()
}
get_Product()
// get_new_product : end
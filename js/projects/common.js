// 천단위 숫자
function numberFormat(n) {
	return (!n || n == Infinity || n == 'NaN') ? 0 : String(n).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

// popAlert
function popAlert(tit, txt){
	var el = '';

	el += '	<div class="pop_wrap">';
	el += '		<div class="pop_top">';
	el += '			<h4>'+tit+'</h4>';
	el += '		</div>';
	el += '		<div class="pop_body">'+txt+'</div>';
	el += '		<div class="pop_bottom">';
	el += '			<a href="javascript:void(0)" class="btn btn_close_alert">닫기</a>';
	el += '		</div>';
	el += '	</div>';

	var pop = document.createElement('div');
			pop.innerHTML = el;
			pop.classList.add('pop', 'pop_alert');

	document.body.appendChild (pop) ;
	popCenter();

	return false;
}

// pop_center
function popCenter (){
	var pop_wrap = document.querySelectorAll('.pop_wrap');
	pop_wrap.forEach(function(wrap){
		var width = wrap.clientWidth;
		var height = wrap.clientHeight;

		wrap.setAttribute('style', 'margin-top: -'+height/2+'px; margin-left : -'+width/2+'px;')
	});

	var btn_close = document.querySelector('.btn_close_alert');
	var pop_alert = document.querySelector('.pop_alert');
	btn_close.addEventListener('click', function(){
		pop_alert.remove()
	});
}




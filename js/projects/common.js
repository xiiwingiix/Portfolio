function numberFormat(n) {
	return (!n || n == Infinity || n == 'NaN') ? 0 : String(n).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function popAlert(tit, txt){
	var el = '';
	el += '	<div class="pop_wrap">';
	el += '		<div class="pop_top">';
	el += '			<h4>'+tit+'</h4>';
	el += '			<a href="#" class="btn_close"></a>';
	el += '		</div>';
	el += '		<div class="pop_body">'+txt+'</div>';
	el += '		<div class="pop_bottom">';
	el += '			<a href="btn_close_alert">닫기</a>';
	el += '		</div>';
	el += '	</div>';

	var pop = document.createElement('div');
			pop.innerHTML = el;
			pop.classList.add('pop', 'pop_alert');

	document.body.appendChild (pop) ;

	return false;
}
var trading_dat = [];
$(document).ready(function(){
	$.ajax({type:"GET", url:"/js/projects/trading_201008.json", dataType:"JSON", success : function(data) {
		$('tbody').html('')

		var tblRow = '';

		tblRow += '<tr>';
		tblRow += '	<th>회사명</th>';
		tblRow += '	<th>현재가</th>';
		tblRow += '	<th>거래대금</th>';
		tblRow += '	<th>기준일</th>';
		tblRow += '	<th>ROE/PER</th>';
		tblRow += '	<th>PBR</th>';
		tblRow += '	<th>부채비율(%)</th>';
		tblRow += '	<th>유보율(%)</th>';
		tblRow += '	<th>배당률(%)</th>';
		tblRow += '	<th>ROE</th>';
		tblRow += '	<th>PER</th>';
		tblRow += '</tr>';


		$.each(data, function(idx, item) {
			console.log(item)
			var a_RP_ratio = parseInt(item.annual_ROE / item.annual_PER);
			var q_RP_ratio = parseInt(item.quarterly_ROE / item.quarterly_PER);

			// if (item.annual_PBR > 1 && item.quarterly_PBR > 1 ) {return false;}

			// if (a_RP_ratio > 1.5 && q_RP_ratio > 1.5){
				tblRow += '<tr>';
				tblRow += '<td rowspan="2"><a href="https://finance.naver.com/item/main.nhn?code='+item.company_code+'" target="_blank">'+item.company_name+'</a></td>';
				tblRow += '<td rowspan="2">'+item.cur_price+'</td>';
				tblRow += '<td rowspan="2">'+item.transaction_price+'백만</td>';
				tblRow += '<td>연간('+item.annual_date+')</td>';
				tblRow += '<td>'+ a_RP_ratio +'</td>';
				tblRow += '<td>'+ item.annual_PBR +'</td>';
				tblRow += '<td>'+ parseInt(item.annual_debt) +'</td>';
				tblRow += '<td>'+ parseInt(item.annual_Reserve_ration) +'</td>';
				tblRow += '<td>'+ item.annual_dividend_yield_ratio +'</td>';
				tblRow += '<td>'+ item.annual_ROE +'</td>';
				tblRow += '<td>'+ item.annual_PER +'</td>';
				tblRow += '</tr>'

				tblRow += '<tr>';
				tblRow += '<td>분기('+item.quarterly_date+')</td>';
				tblRow += '<td>'+ q_RP_ratio +'</td>';
				tblRow += '<td>'+ item.quarterly_PBR +'</td>';
				tblRow += '<td>'+ parseInt(item.quarterly_debt) +'</td>';
				tblRow += '<td>'+ parseInt(item.quarterly_Reserve_ration) +'</td>';
				tblRow += '<td>'+ item.quarterly_dividend_yield_ratio +'</td>';
				tblRow += '<td>'+ item.quarterly_ROE +'</td>';
				tblRow += '<td>'+ item.quarterly_PER +'</td>';
				tblRow += '</tr>'
			// }

			if (idx == 100) {return false;}
		});

		$('tbody').append(tblRow);

		},
			complete : function(data) {
		},
			error : function(xhr, status, error) {
				alert("에러발생");
		}
	});

});

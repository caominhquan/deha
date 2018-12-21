function renderHtml(container){
	//var result = JSON.parse(result);
	//var products = result.data;
	var html = '';
		for (var i = 0; i < container.length; i++) {
			html += '<div class="sinhvien" >';
				html +='<div class="col-xs-2">';
					html +=	'<p>'+container[i].id+'</p>';
					html +='</div>';
				html +='<div class="col-xs-2">';
					html +='<p>'+container[i].student_name+'</p>';
					html +='</div>';
				html +='<div class="col-xs-2">';
					html +='<p>'+container[i].mssv+'</p>';
					html +='</div>';
				html +='<div class="col-xs-2">';
					html +='<p>'+container[i].birthday+'</p>';
					html +='</div>';
				html +='<div class="col-xs-2">';
					html +='<p>'+container[i].class_id+'</p>';
					html +='</div>';
				html +='<div class="col-xs-2">';
					html +='<p>'+container[i].gender+'</p>';
					html +='</div>';
			html +='</div>';
		}
		//document.getElementById("product_list").innerHTML = html;
		jQuery("#div1").append(html);
}
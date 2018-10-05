var html = '';
		for (var i = 0; i < section3.length; i++) {
			html += '<div class="item">';
				
				html+='		<figure>';
				html+='			<img src="'+section3[i].image+'"/>';
				html+='			<figcaption>'+section3[i].name+'</figcaption>';
				html+='</figure>';
				html+='		<p class="price-box"><span class="price">'+section3[i].price+'</span></p>';
				html+='	</div>';
		}
document.getElementById(section3_list").innerHTML = html;
var html = '';
		for (var i = 0; i < container.length; i++) {
			html += '<div class="item">';
				html+='<div class="sub">';
				html+='		<figure>';
				html+='			<img src="'+container[i].image+'"/>';
				html+='			<figcaption>'+container[i].name+'</figcaption>';
				html+='</figure>';
				html+='		<p class="price-box"><span class="price">'+container[i].price+'</span></p>';
				html+='	</div>';
				html+='	</div>';
		}
document.getElementById("container_list").innerHTML = html;
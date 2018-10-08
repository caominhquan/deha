 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  	console.log(this.readyState);
    if (this.readyState == 4  && this.status == 200) {
    	var result = this.responseText;
    	result = JSON.parse(result);
    	var products = result.data;
  		var html = '';
		for (var i = 0; i < products.length; i++) {
			html += '<div class="item">';
				html+='<div class="sub">';
				html+='		<figure>';
				html+='			<img src="'+products[i].image+'"/>';
				html+='			<figcaption>'+products[i].name+'</';
				html+='figcaption>';
				html+='</figure>';
				html+='		<p class="price-box"><span class="price">'+products[i].price+'</';
				html+='span></p>';
				html+='	</div></div>';
		}
		document.getElementById("product_list").innerHTML = html;
    }
  };
  xhttp.open("GET", "http://smsentertainment.club/api/get_products", true);
  xhttp.send();




	// var result = JSON.parse(this.responseText);
 //    	console.log(result);
 //    	var products = result.data;
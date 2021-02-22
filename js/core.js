Core.login = function() {

	var username = document.getElementbyID('username'); /*Pulls the username and password to make sure something was entered*/
	var password = document.getElementbyID('password');
	if(username.value != null || password.value != null){
		Core.ajaxserver("login.php", "username: " + username.value + ",password: " + password.value);
		
	}
	else{
		alert("Error Password or Username")/*displays error message*/
	}
}
Core.ajaxserver = function(url, data) { /*Uses ajax to connect to a server to process data. */
	var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest(); /*Firefox and other modern browsers. */
		} else { 
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); /*Internet Explorer*/
		}
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				data = xmlhttp.responseText.split("|");					
					for (i = 0; i < data.length; i++){ /*Loop to parse the variables for the server. */
						var one = Core.decodeURI(data[parseInt(i)]);
						var two = Core.decodeURI(data[parseInt(i) + 1]);
						var three = Core.decodeURI(data[parseInt(i) + 2]);
						var four = Core.decodeURI(data[parseInt(i) + 3]);
						var five = Core.decodeURI(data[parseInt(i) + 4]);
						
							if (window.Core[one]) {
								window.Core[one](two,three,four,five);
							}
					}		
			} else {
				return false;
			}
		}
		if (!data) {
			data = "";
		}
		data = data.replace(/: /gi, "=");
		data = data.replace(/:/gi, "=");
		data = data.replace(/, /gi, "&");
		data = data.replace(/,/gi, "&");

		data = data + "&current_sessionid=" + current_sessionid;
		
	xmlhttp.open("POST",url,true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(data);
}
Core.decodeURI = function (text) {
	return decodeURIComponent(text);
}

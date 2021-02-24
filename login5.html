<!DOCTYPE html>
<html>
<title>Form</title>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
</head>
<body>
<form action="" method="post" id="form-search">
   
    Phone:<input class="input" type="text" placeholder="phone" name="phone" id="phone" required><br><br>
    <div id="otp_section" style="display:none;">
		OTP:<input class="input" type="text" placeholder="OTP" name="otp" id="otp" required><br><br>
    </div>
    <button  type="button" name="btn-save" id="continue">Continue</button>
    <button  type="button" name="login" id="login" style="display:none;">Submit</button>
</form>
<script>
$(document).on('click','#continue',function(e) {
    var phone = $('#phone').val();
    $.ajax({
         data: {
					type: 2,
					phone: phone
								
				},
         type: "post",
         url: "login_ajax.php",
				success: function(dataResult){
					var dataResult = JSON.parse(dataResult);
					if(dataResult.statusCode==200){
						$("#otp_section").show();
						$("#continue").hide();
						$("#login").show();
						
					}
					else{
					    alert(dataResult);
					}
					
				}
	});
	
});
$(document).on('click','#login',function(e) {
    var otp = $('#otp').val();
    $.ajax({
				data:   {
							type: 3,
							otp: otp
										
						},
				type: "post",
				url : "login_ajax.php",
				success: function(dataResult){
					var dataResult = JSON.parse(dataResult);
					if(dataResult.statusCode==200){
						alert("Login successful !");
					}
					else{
					    alert("Invalid OTP !");
					}
					
				}
	});
	
});
</script>
</body>
</html>
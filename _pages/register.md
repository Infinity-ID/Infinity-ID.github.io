---
layout: post
title: register
permalink: /register/
---

<div style="">
<div class="alert alert-success alert-dismissible" id="success" style="display:none;">
<a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
</div>
<div class="alert alert-danger alert-dismissible" id="error" style="display:none;">
<a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
</div>
<!--<button type="button" class="btn btn-success btn-sm" id="register">Register</button> <button type="button" class="btn btn-success btn-sm" id="login">Login</button>-->
	
<form id="register_form" name="form1" method="post">
		<div class="form-group">
			<label for="email">Name:</label>
			<input type="text" class="form-control" id="name" placeholder="Name" name="name">
		</div>
		<div class="form-group">
			<label for="pwd">Email:</label>
			<input type="email" class="form-control" id="email" placeholder="Email" name="email">
		</div>
		<div class="form-group">
			<label for="pwd">Phone:</label>
			<input type="text" class="form-control" id="phone" placeholder="Phone" name="phone">
		</div>
		<div class="form-group" >
			<label for="pwd">City:</label>
			<select name="city" id="city" class="form-control">
				<option value="">Select</option>
				<option value="Delhi">Delhi</option>
				<option value="Mumbai">Mumbai</option>
				<option value="Pune">Pune</option>
			</select>
		</div>
		<div class="form-group">
			<label for="pwd">Password:</label>
			<input type="password" class="form-control" id="password" placeholder="Password" name="password">
		</div>
		<input type="button" name="save" class="btn btn-primary" value="Register" id="butsave">
	</form>
<form id="login_form" name="form1" method="post" style="display:none;">
<div class="form-group">
			<label for="pwd">Email:</label>
			<input type="email" class="form-control" id="email_log" placeholder="Email" name="email">
		</div>
		<div class="form-group">
			<label for="pwd">Password:</label>
			<input type="password" class="form-control" id="password_log" placeholder="Password" name="password">
		</div>
		<input type="button" name="save" class="btn btn-primary" value="Login" id="butlogin">
	</form>
</div>
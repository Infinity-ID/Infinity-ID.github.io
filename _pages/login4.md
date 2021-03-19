---
layout: index8
title: example1
permalink: /example1/
image: "/assets/making-conference-badge-better-hero.png"
tags: [design, typography]
dir_path_scripts: scripts/
before_scripts:
  - script-1.js
  - script-2.js
before_scriptfiles:
  - script-1.md
  - script-2.md
after_scripts:
  - script-1.js
  - script-2.js
after_scriptfiles:
  - script-1.md
  - script-2.md
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
			<label for="pwd">Email:</label>
			<input type="email" class="form-control" id="email" placeholder="Email" name="email">
		</div>
		<div class="form-group">
			<label for="pwd">Password:</label>
			<input type="password" class="form-control" id="password" placeholder="Password" name="password">
		</div>
		<input type="button" name="save" class="btn btn-primary" value="Login" id="butsave">
	</form>
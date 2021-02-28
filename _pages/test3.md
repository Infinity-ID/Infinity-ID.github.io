---
layout: default2
title: login
permalink: /test3/
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
<form action="" method="post" id="frmLogin">
<div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
</div>
<div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="password" placeholder="Enter password" name="password">
</div>
	<input type="button" name="save" class="btn btn-primary" value="Login" id="butlogin">
</form>
<div id="output"><div id="messageBoxId"></div></div>
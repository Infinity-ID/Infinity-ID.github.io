---
layout: admintemplate1
title: Dashboard
class: login
permalink: /admin/login-3.html
stylesheet: ../css/login-3.min.css
---
<div class="login-body">
        <a class="login-brand" href="index.html">
          <img class="img-responsive" src="../img/logo.svg" alt="Elephant">
        </a>
        <h3 class="login-heading">Sign in</h3>
        <div class="login-form">
          <form data-toggle="md-validator">
            <div class="md-form-group md-label-floating">
              <input class="md-form-control" type="email" name="email" spellcheck="false" autocomplete="off" data-msg-required="Please enter your email address." required>
              <label class="md-control-label">Email</label>
            </div>
            <div class="md-form-group md-label-floating">
              <input class="md-form-control" type="password" name="password" minlength="6" data-msg-minlength="Password must be 6 characters or more." data-msg-required="Please enter your password." required>
              <label class="md-control-label">Password</label>
            </div>
            <div class="md-form-group md-custom-controls">
              <label class="custom-control custom-control-primary custom-checkbox">
                <input class="custom-control-input" type="checkbox" checked="checked">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-label">Keep me signed in</span>
              </label>
              <span aria-hidden="true"> · </span>
              <a href="password-3.html">Forgot password?</a>
            </div>
            <button class="btn btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </div>
      </div>
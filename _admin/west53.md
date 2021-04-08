---
layout: admintemplate1
title: Dashboard
class: login
permalink: /admin/password-3.html
stylesheet: ../css/login-3.min.css
---
<div class="login-body">
        <a class="login-brand" href="index.html">
          <img class="img-responsive" src="../img/logo.svg" alt="Elephant">
        </a>
        <div class="login-form">
          <form data-toggle="md-validator">
            <div class="md-form-group md-label-floating">
              <input class="md-form-control" type="email" name="email" spellcheck="false" autocomplete="off" data-msg-required="Please enter your email address." required>
              <label class="md-control-label">Email address</label>
              <span class="md-help-block">We'll send you an email to reset your password.</span>
            </div>
            <button class="btn btn-primary btn-block" type="submit">Send password reset email</button>
          </form>
        </div>
      </div>
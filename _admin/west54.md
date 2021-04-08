---
layout: admintemplate1
title: Dashboard
class: login
permalink: /admin/password-2.html
stylesheet: ../css/login-2.min.css
---
<div class="login-body">
        <a class="login-brand" href="index.html">
          <img class="img-responsive" src="../img/logo.svg" alt="Elephant">
        </a>
        <div class="login-form">
          <form data-toggle="validator">
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" class="form-control" type="email" name="email" spellcheck="false" autocomplete="off" data-msg-required="Please enter your email address." required>
              <p class="help-block">
                <small>If you've forgotten your password, we'll send you an email to reset your password.</small>
              </p>
            </div>
            <button class="btn btn-primary btn-block" type="submit">Send password reset email</button>
          </form>
        </div>
      </div>
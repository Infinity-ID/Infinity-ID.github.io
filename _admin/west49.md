---
layout: admintemplate1
title: Dashboard
class: login
permalink: /admin/password-1.html
stylesheet: ../css/login-1.min.css
---
<div class="login-body">
        <a class="login-brand" href="index.html">
          <img class="img-responsive" src="../img/logo.svg" alt="Elephant">
        </a>
        <h3 class="login-heading">Reset Your Password</h3>
        <div class="login-form">
          <form data-toggle="validator">
            <div class="form-group">
              <label for="username">Username</label>
              <input id="username" class="form-control" type="text" name="username" spellcheck="false" autocomplete="off" data-msg-required="Please enter your username." required>
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-block" type="submit">Send password reset email</button>
            </div>
            <div class="form-group">
              <ul class="list-inline">
                <li>
                  <small>If you've forgotten your password, we'll send you an email to reset your password.</small>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
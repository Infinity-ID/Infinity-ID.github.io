---
layout: admintemplate
title: Dashboard
permalink: /admin/form-layouts.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="row">
            <div class="col-sm-12">
              <p><small>Forms presented below show how the elements of a form can be displayed differently.</small></p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
              <div class="demo-form-wrapper">
                <form class="form">
                  <div class="form-group">
                    <label for="email-1">Email</label>
                    <input id="email-1" class="form-control" type="email">
                  </div>
                  <div class="form-group">
                    <label for="password-1">Password</label>
                    <input id="password-1" class="form-control" type="password">
                  </div>
                  <div class="form-group">
                    <label class="custom-control custom-control-primary custom-checkbox">
                      <input class="custom-control-input" type="checkbox" checked="">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-label">Keep me signed in</span>
                    </label>
                    <span> · </span>
                    <a href="password.html">Forgot password?</a>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary btn-block" type="submit">Sign in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="text-center m-b">
            <h3 class="m-b-0">Horizontal form</h3>
            <small>In such forms, labels and fields are on the same row.</small>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="demo-form-wrapper">
                <form class="form form-horizontal">
                  <div class="form-group">
                    <label for="email-2" class="col-sm-3 col-md-4 control-label">Email</label>
                    <div class="col-sm-6 col-md-4">
                      <input id="email-2" class="form-control" type="email">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password-2" class="col-sm-3 col-md-4 control-label">Password</label>
                    <div class="col-sm-6 col-md-4">
                      <input id="password-2" class="form-control" type="password">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4">
                      <label class="custom-control custom-control-primary custom-checkbox">
                        <input class="custom-control-input" type="checkbox" checked="">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-label">Keep me signed in</span>
                      </label>
                      <button class="btn btn-primary pull-right" type="submit">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="text-center m-b">
            <h3 class="m-b-0">Inline form</h3>
            <small>In such forms, all the elements are on the same row.</small>
          </div>
          <div class="row">
            <div class="col-sm-9 col-sm-offset-3 col-md-8 col-md-offset-4">
              <div class="demo-form-wrapper">
                <form class="form form-inline">
                  <div class="form-group">
                    <div class="input-with-icon">
                      <input class="form-control" type="email" placeholder="Email">
                      <div class="icon icon-envelope input-icon"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-with-icon">
                      <input class="form-control" type="password" placeholder="Password">
                      <div class="icon icon-lock input-icon"></div>
                    </div>
                  </div>
                  <button class="btn btn-primary" type="submit">Sign in</button>
                </form>
              </div>
            </div>
          </div>
          <div class="text-center m-b">
            <h3 class="m-b-0">Column sizing</h3>
            <small>By using the grid system, fields can have the desired size.</small>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <form class="form form-horizontal">
                <div class="form-group">
                  <div class="col-xs-12">
                    <input class="form-control" type="text" placeholder="col-xs-12">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-11">
                    <input class="form-control" type="text" placeholder="col-xs-11">
                  </div>
                  <div class="col-xs-1">
                    <input class="form-control" type="text" placeholder="col-xs-1">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-10">
                    <input class="form-control" type="text" placeholder="col-xs-10">
                  </div>
                  <div class="col-xs-2">
                    <input class="form-control" type="text" placeholder="col-xs-2">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-9">
                    <input class="form-control" type="text" placeholder="col-xs-9">
                  </div>
                  <div class="col-xs-3">
                    <input class="form-control" type="text" placeholder="col-xs-3">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-8">
                    <input class="form-control" type="text" placeholder="col-xs-8">
                  </div>
                  <div class="col-xs-4">
                    <input class="form-control" type="text" placeholder="col-xs-4">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-7">
                    <input class="form-control" type="text" placeholder="col-xs-7">
                  </div>
                  <div class="col-xs-5">
                    <input class="form-control" type="text" placeholder="col-xs-5">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-6">
                    <input class="form-control" type="text" placeholder="col-xs-6">
                  </div>
                  <div class="col-xs-6">
                    <input class="form-control" type="text" placeholder="col-xs-6">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-3">
                    <input class="form-control" type="text" placeholder="col-xs-3">
                  </div>
                  <div class="col-xs-3">
                    <input class="form-control" type="text" placeholder="col-xs-3">
                  </div>
                  <div class="col-xs-3">
                    <input class="form-control" type="text" placeholder="col-xs-3">
                  </div>
                  <div class="col-xs-3">
                    <input class="form-control" type="text" placeholder="col-xs-3">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-4">
                    <input class="form-control" type="text" placeholder="col-xs-4">
                  </div>
                  <div class="col-xs-4">
                    <input class="form-control" type="text" placeholder="col-xs-4">
                  </div>
                  <div class="col-xs-4">
                    <input class="form-control" type="text" placeholder="col-xs-4">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
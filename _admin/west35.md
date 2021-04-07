---
layout: admintemplate
title: Dashboard
permalink: /admin/form-validation.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="row">
            <div class="col-md-12">
              <p><small>Form validation presented below uses <a href="https://jqueryvalidation.org/" target="_blank">jQuery Validation</a> plugin. We have expanded this plugin so it can be used by writing HTML only.
                <br>To see real and more advanced examples please see <a href="signup-1.html" target="_blank">Sign Up 1</a> and <a href="signup-2.html" target="_blank">Sign Up 2</a> page.</small></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <div class="demo-form-wrapper">
                <form data-toggle="validator">
                  <div class="alert alert-warning">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <span class="icon icon-warning-circle icon-lg"></span>
                    <small>In any form it is enough to set the attribute <code>data-toggle="validator"</code> and the rest will be taken care by the plugin itself, even if the form is horizontal. If a field has
                      <strong>Help Text</strong> as in the following cases, the
                      <strong>Help Text</strong> disappears to create space for the error message and reappears only when the field is successfully validated.</small>
                  </div>
                  <div class="form-group">
                    <label for="name-1" class="control-label">Name</label>
                    <input id="name-1" class="form-control" type="text" name="name_1" required>
                    <small class="help-block">Displayed on your profile and in other places as your name.</small>
                  </div>
                  <div class="form-group">
                    <label for="email-1" class="control-label">Email</label>
                    <input id="email-1" class="form-control" type="email" name="email_1" autocomplete="off" required>
                    <small class="help-block">Available publicly, but not shown on your profile.</small>
                  </div>
                  <div class="form-group">
                    <label for="biography-1" class="control-label">About You</label>
                    <textarea id="biography-1" class="form-control" name="biography_1" rows="3" required></textarea>
                    <small class="help-block">Write some details about yourself to fill out your profile.</small>
                  </div>
                  <div class="form-group custom-controls-stacked">
                    <label class="custom-control custom-control-primary custom-radio">
                      <input class="custom-control-input" type="radio" name="tagging_1" value="all" required>
                      <span class="custom-control-indicator"></span>
                      <small class="custom-control-label">Allow anyone to tag you</small>
                    </label>
                    <label class="custom-control custom-control-primary custom-radio">
                      <input class="custom-control-input" type="radio" name="tagging_1" value="following" required>
                      <span class="custom-control-indicator"></span>
                      <small class="custom-control-label">Only allow people I follow to tag you</small>
                    </label>
                    <label class="custom-control custom-control-primary custom-radio">
                      <input class="custom-control-input" type="radio" name="tagging_1" value="none" required>
                      <span class="custom-control-indicator"></span>
                      <small class="custom-control-label">Do not allow anyone to tag you</small>
                    </label>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <div class="demo-form-wrapper">
                <form data-toggle="validator">
                  <div class="alert alert-warning">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <span class="icon icon-warning-circle icon-lg"></span>
                    <small>Also anyone wanting validation with a feedback icon, please look at the following example. The icons may vary by data attributes for example:
                      <br><code>data-error-icon="icon-exclamation"</code> or <code>data-valid-icon="icon-check-circle"</code>.</small>
                  </div>
                  <div class="form-group has-feedback">
                    <label for="name-2" class="control-label">Name</label>
                    <input id="name-2" class="form-control" type="text" name="name_2" required>
                    <span class="form-control-feedback" aria-hidden="true">
                      <span class="icon"></span>
                    </span>
                    <small class="help-block">Displayed on your profile and in other places as your name.</small>
                  </div>
                  <div class="form-group has-feedback">
                    <label for="email-2" class="control-label">Email</label>
                    <input id="email-2" class="form-control" type="email" name="email_2" autocomplete="off" required>
                    <span class="form-control-feedback" aria-hidden="true">
                      <span class="icon"></span>
                    </span>
                    <small class="help-block">Available publicly, but not shown on your profile.</small>
                  </div>
                  <div class="form-group">
                    <label for="biography-2" class="control-label">About You</label>
                    <textarea id="biography-2" class="form-control" name="biography_2" rows="3" required></textarea>
                    <small class="help-block">Write some details about yourself to fill out your profile.</small>
                  </div>
                  <div class="form-group custom-controls-stacked">
                    <label class="custom-control custom-control-primary custom-radio">
                      <input class="custom-control-input" type="radio" name="tagging_2" value="all" required>
                      <span class="custom-control-indicator"></span>
                      <small class="custom-control-label">Allow anyone to tag you</small>
                    </label>
                    <label class="custom-control custom-control-primary custom-radio">
                      <input class="custom-control-input" type="radio" name="tagging_2" value="following" required>
                      <span class="custom-control-indicator"></span>
                      <small class="custom-control-label">Only allow people I follow to tag you</small>
                    </label>
                    <label class="custom-control custom-control-primary custom-radio">
                      <input class="custom-control-input" type="radio" name="tagging_2" value="none" required>
                      <span class="custom-control-indicator"></span>
                      <small class="custom-control-label">Do not allow anyone to tag you</small>
                    </label>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
---
layout: admintemplate
title: Dashboard
permalink: /admin/toastr.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="row">
            <div class="col-sm-12">
              <p><small>The CSS of <a href="http://codeseven.github.io/toastr/">Toastr</a> library is completely rewritten in SASS, without modifying however anything in JavaScript.<br>You can change the icons, width, distance from the corner where the message is displayed, colours, etc with the variables stated in the file <code>_variables.scss</code>.</small></p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <div class="form-group">
                <label for="title">Title</label>
                <input id="title" class="form-control" type="text">
              </div>
              <div class="row gutter-xs">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="type">Type</label>
                    <select id="type" class="custom-select">
                      <option value="success">Success</option>
                      <option value="info">Info</option>
                      <option value="warning">Warning</option>
                      <option value="error">Error</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="positionClass">Position</label>
                    <select id="positionClass" class="custom-select">
                      <option value="toast-top-right">Top Right</option>
                      <option value="toast-bottom-right">Bottom Right</option>
                      <option value="toast-bottom-left">Bottom Left</option>
                      <option value="toast-top-left">Top Left</option>
                      <option value="toast-top-full-width">Top Full Width</option>
                      <option value="toast-bottom-full-width">Bottom Full Width</option>
                      <option value="toast-top-center">Top Center</option>
                      <option value="toast-bottom-center">Bottom Center</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" class="form-control" rows="3"></textarea>
              </div>
              <div class="form-group custom-controls-stacked">
                <label class="custom-control custom-control-primary custom-checkbox" for="closeButton">
                  <input id="closeButton" class="custom-control-input" type="checkbox" checked="checked">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-label">Show close button</span>
                </label>
                <label class="custom-control custom-control-primary custom-checkbox" for="progressBar">
                  <input id="progressBar" class="custom-control-input" type="checkbox">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-label">Show progress bar</span>
                </label>
              </div>
              <div class="form-group">
                <button id="demo-show-toast" class="btn btn-primary" type="button">Show Toast</button>
                <button id="demo-clear-toasts" class="btn btn-default" type="button">Clear Toasts</button>
              </div>
            </div>
          </div>
        </div>
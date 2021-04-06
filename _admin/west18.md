---
layout: admintemplate
title: Dashboard
permalink: /admin/spinners.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="row gutter-xs">
            <div class="col-xs-12">
              <p><small>The Spinner component presented below is designed for use in cases where the process is in progress, the results of which are still unavailable.</small></p>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Default spinner</h5>
                <p>
                  <small>Simply use class <code>spinner-default</code></small>
                </p>
                <div class="spinner spinner-default pos-r sq-32"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Primary spinner</h5>
                <p>
                  <small>Simply use class <code>spinner-primary</code></small>
                </p>
                <div class="spinner spinner-primary pos-r sq-32"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Success spinner</h5>
                <p>
                  <small>Simply use class <code>spinner-success</code></small>
                </p>
                <div class="spinner spinner-success pos-r sq-32"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Info spinner</h5>
                <p>
                  <small>Simply use class <code>spinner-info</code></small>
                </p>
                <div class="spinner spinner-info pos-r sq-32"></div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Warning spinner</h5>
                <p>
                  <small>Simply use class <code>spinner-warning</code></small>
                </p>
                <div class="spinner spinner-warning pos-r sq-32"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Danger spinner</h5>
                <p>
                  <small>Simply use class <code>spinner-danger</code></small>
                </p>
                <div class="spinner spinner-danger pos-r sq-32"></div>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <div class="fh">
                  <div class="fh-m">
                    <small>You can change the size of the spinner, border width, the speed of animation and colours with the variables stated in the file <code>_variables.scss</code>.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center m-b">
            <h3 class="m-b-0">Sizes and examples</h3>
            <small>The following examples are some cases but not the only ones on how this component can be composed with others.</small>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-6 col-md-3 col-md-push-0">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <div class="spinner spinner-default spinner-sm pos-r sq-100"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3 col-md-push-6">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <div class="spinner spinner-primary spinner-sm pos-r sq-100"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3 col-md-pull-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <div class="spinner spinner-default spinner-lg pos-r sq-100"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3 col-md-pull-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <div class="spinner spinner-primary spinner-lg pos-r sq-100"></div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-12 col-md-4">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Spinner with default button</h5>
                <p>
                  <small>A button can show a loading indicator.</small>
                </p>
                <button class="btn btn-default" type="submit">Save changes</button>
                <button class="btn btn-default spinner spinner-inverse spinner-sm" type="submit">Save changes</button>
              </div>
            </div>
            <div class="col-xs-12 col-md-4">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Spinner with an input field</h5>
                <p>
                  <small>An input field can show that it is currently loading data.</small>
                </p>
                <div class="input-with-icon">
                  <input type="text" class="form-control" placeholder="Search&hellip;">
                  <span class="spinner spinner-default spinner-sm input-icon"></span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-4">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Spinner with primary button (disabled)</h5>
                <p>
                  <small>A button can show a loading indicator.</small>
                </p>
                <button class="btn btn-primary" type="submit">Save changes</button>
                <button class="btn btn-primary spinner spinner-inverse spinner-sm" type="submit" disabled="disabled">Save changes</button>
              </div>
            </div>
          </div>
        </div>
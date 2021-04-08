---
layout: admintemplate
title: Dashboard
permalink: /admin/pickers.html
stylesheet: ../css/animate.min.css
--- 
<div class="layout-content-body">
          <div class="row gutter-xs">
            <div class="col-xs-12">
              <p><small>The CSS of <a href="https://bootstrap-datepicker.readthedocs.io/en/latest/" target="_blank">Bootstrap Datepicker</a> plugin is completely rewritten in SASS, without modifying however anything in JavaScript.</small></p>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Default Datepicker</h5>
                <p class="small text-muted">Datepicker with default settings.</p>
                <div class="input-with-icon">
                  <input class="form-control" type="text" data-provide="datepicker">
                  <span class="icon icon-calendar input-icon"></span>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Today Highlight</h5>
                <p class="small text-muted">Highlights the current date.</p>
                <div class="input-with-icon">
                  <input class="form-control" type="text" data-provide="datepicker" data-date-today-highlight="true">
                  <span class="icon icon-calendar input-icon"></span>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Today Button</h5>
                <p class="small text-muted">Displays a "Today" button at the bottom.</p>
                <div class="input-with-icon">
                  <input class="form-control" type="text" data-provide="datepicker" data-date-today-btn="linked">
                  <span class="icon icon-calendar input-icon"></span>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Clear Button</h5>
                <p class="small text-muted">Displays a "Clear" button at the bottom.</p>
                <div class="input-with-icon">
                  <input class="form-control" type="text" data-provide="datepicker" data-date-clear-btn="true">
                  <span class="icon icon-calendar input-icon"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-6 col-md-3 col-md-push-0">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Custom Format (long)</h5>
                <p class="small text-muted">Combination of DD, MM d, yyyy.</p>
                <div class="input-with-icon">
                  <input class="form-control" type="text" value="Friday, April 1, 2017" data-provide="datepicker" data-date-autoclose="true" data-date-format="DD, MM d, yyyy">
                  <span class="icon icon-calendar input-icon"></span>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3 col-md-push-6">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Date of Birth (+18)</h5>
                <p class="small text-muted">Restrict the range of selectable dates.</p>
                <div class="input-with-icon">
                  <input class="form-control" type="text" value="16-July-1990" data-provide="datepicker" data-date-autoclose="true" data-date-format="dd-MM-yyyy" data-date-start-view="decade" data-date-end-date="-18y">
                  <span class="icon icon-calendar input-icon"></span>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3 col-md-pull-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Button trigger (left)</h5>
                <p class="small text-muted">Click the button next to the input field.</p>
                <div class="input-group date">
                  <span class="input-group-btn">
                    <button id="demo-datepicker-1-btn" class="btn btn-primary" type="button">
                      <span class="icon icon-calendar"></span>
                    </button>
                  </span>
                  <input id="demo-datepicker-1" class="form-control" type="text">
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3 col-md-pull-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Button trigger (right)</h5>
                <p class="small text-muted">Click the button next to the input field.</p>
                <div class="input-group date">
                  <input id="demo-datepicker-2" class="form-control" type="text">
                  <span class="input-group-btn">
                    <button id="demo-datepicker-2-btn" class="btn btn-primary" type="button">
                      <span class="icon icon-calendar"></span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-12 col-md-6">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Select a Date Range</h5>
                <p class="small text-muted">Select the date range to search for.</p>
                <div class="input-group input-daterange" data-provide="datepicker" data-date-autoclose="true" data-date-format="dd-M-yyyy">
                  <input class="form-control" type="text" value="01-Apr-2017">
                  <span class="input-group-addon">to</span>
                  <input class="form-control" type="text" value="10-Apr-2017">
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <div class="fh">
                  <div class="fh-m">
                    <small>To change the appearance of Datepicker you can use variables stated in the file <code>_variables.scss</code>, under the section Datepicker.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center m-b">
            <h3 class="m-b-0">Timepicker</h3>
            <small>The CSS of <a href="http://jonthornton.github.io/jquery-timepicker/" target="_blank">jQuery Timepicker</a> plugin is completely rewritten in SASS, without modifying however anything in JavaScript.</small>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-6 col-md-3 col-lg-push-0">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Default Timepicker</h5>
                <p class="small text-muted">Timepicker with default settings.</p>
                <div class="input-with-icon">
                  <input id="demo-timepicker-1" class="form-control" type="text">
                  <span class="icon icon-clock-o input-icon"></span>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3 col-lg-push-6">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Set Time to "NOW"</h5>
                <p class="small text-muted">Click the button next to the input field.</p>
                <div class="input-group">
                  <input id="demo-timepicker-2" class="form-control" type="text">
                  <span id="demo-timepicker-2-btn" class="input-group-btn">
                    <button class="btn btn-primary" type="button">
                      <span class="icon icon-clock-o"></span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-pull-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Duration</h5>
                <p class="small text-muted">Set a starting time and see duration from that starting time.</p>
                <div id="demo-timepicker-3" class="row gutter-xs">
                  <div class="col-xs-6">
                    <div class="input-with-icon">
                      <input class="form-control time start" type="text" placeholder="From time">
                      <span class="icon icon-clock-o input-icon"></span>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="input-with-icon">
                      <input class="form-control time end" type="text" placeholder="Until time">
                      <span class="icon icon-clock-o input-icon"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Disable Time Ranges</h5>
                <p class="small text-muted">Allowed range: 9:00am to 6:00pm.</p>
                <div class="input-with-icon">
                  <input id="demo-timepicker-4" class="form-control" type="text">
                  <span class="icon icon-clock-o input-icon"></span>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>24-hour format</h5>
                <p class="small text-muted">Timepicker uses the time portion of PHP.</p>
                <div class="input-with-icon">
                  <input id="demo-timepicker-5" class="form-control" type="text">
                  <span class="icon icon-clock-o input-icon"></span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <div class="fh">
                  <div class="fh-m">
                    <small>To change the appearance of Timepicker you can use variables stated in the file <code>_variables.scss</code>, under the section Timepicker.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-12 col-md-6">
              <div class="panel panel-body text-center">
                <h5>Datepicker, Timepicker and Datepair</h5>
                <p class="small text-muted">Datepair can automatically set the other input when a first value is selected.</p>
                <div id="demo-timepicker-6" class="row gutter-xs">
                  <div class="col-xs-7 m-b">
                    <div class="input-with-icon">
                      <input class="form-control date start" type="text" placeholder="From date">
                      <span class="icon icon-calendar input-icon"></span>
                    </div>
                  </div>
                  <div class="col-xs-5 m-b">
                    <div class="input-with-icon">
                      <input class="form-control time start" type="text" placeholder="From time">
                      <span class="icon icon-clock-o input-icon"></span>
                    </div>
                  </div>
                  <div class="col-xs-7">
                    <div class="input-with-icon">
                      <input class="form-control date end" type="text" placeholder="Until date">
                      <span class="icon icon-calendar input-icon"></span>
                    </div>
                  </div>
                  <div class="col-xs-5">
                    <div class="input-with-icon">
                      <input class="form-control time end" type="text" placeholder="Until time">
                      <span class="icon icon-clock-o input-icon"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Board meeting (6:00pm)</h5>
                <p class="small text-muted">Custom options with label can be added to the dropdown menu.</p>
                <div class="input-with-icon">
                  <input id="demo-timepicker-7" class="form-control" type="text">
                  <span class="icon icon-clock-o input-icon"></span>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Step (every 15 min)</h5>
                <p class="small text-muted">Generate drop-down options with varying levels of precision.</p>
                <div class="input-with-icon">
                  <input id="demo-timepicker-8" class="form-control" type="text">
                  <span class="icon icon-clock-o input-icon"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
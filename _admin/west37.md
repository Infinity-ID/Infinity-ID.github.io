---
layout: admintemplate
title: Dashboard
permalink: /admin/input-mask.html
stylesheet: ../css/animate.min.css
--- 
<div class="layout-content-body">
          <p><small>An input mask helps that data entered in the field refers to a predefined format.</small></p>
          <form id="demo-inputmask" class="form-horizontal">
            <div class="form-group row gutter-xs">
              <label class="col-md-3 control-label" for="form-control-1">Date</label>
              <div class="col-md-6">
                <input id="form-control-1" class="form-control" type="text" data-inputmask="'alias': 'dd-mm-yyyy'">
                <span class="help-block">Input mask for entering valid date (dd-mm-yyyy).</span>
              </div>
            </div>
            <div class="form-group row gutter-xs">
              <label class="col-md-3 control-label" for="form-control-2">Time</label>
              <div class="col-md-6">
                <input id="form-control-2" class="form-control" type="text" data-inputmask="'alias': 'hh:mm'">
                <span class="help-block">Input mask for entering valid time (hh:mm).</span>
              </div>
            </div>
            <div class="form-group row gutter-xs">
              <label class="col-md-3 control-label" for="form-control-3">Date/Time</label>
              <div class="col-md-6">
                <input id="form-control-3" class="form-control" type="text" data-inputmask="'alias': 'mm/dd/yyyy hh:mm xm'">
                <span class="help-block">Input mask for entering valid date/time. 12-hour notation.</span>
              </div>
            </div>
            <div class="form-group row gutter-xs">
              <label class="col-md-3 control-label" for="form-control-4">Date/Time</label>
              <div class="col-md-6">
                <input id="form-control-4" class="form-control" type="text" data-inputmask="'alias': 'datetime'">
                <span class="help-block">Input mask for entering valid date/time. 24-hour notation.</span>
              </div>
            </div>
            <div class="form-group row gutter-xs">
              <label class="col-md-3 control-label" for="form-control-5">Currency</label>
              <div class="col-md-6">
                <input id="form-control-5" class="form-control" type="text" data-inputmask="'alias': 'numeric', 'groupSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false, 'prefix': '$ ', 'placeholder': '0'">
                <span class="help-block">Input mask for entering decimal value. A dollar sign ("$") prefixed.</span>
              </div>
            </div>
            <div class="form-group row gutter-xs">
              <label class="col-md-3 control-label" for="form-control-6">Currency</label>
              <div class="col-md-6">
                <input id="form-control-6" class="form-control" type="text" data-inputmask="'alias': 'numeric', 'groupSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false, 'prefix': '€ ', 'placeholder': '0'">
                <span class="help-block">Input mask for entering decimal value. A euro sign ("€") prefixed.</span>
              </div>
            </div>
            <div class="form-group row gutter-xs">
              <label class="col-md-3 control-label" for="form-control-7">URL</label>
              <div class="col-md-6">
                <input id="form-control-7" class="form-control" type="text" data-inputmask="'alias': 'url'">
                <span class="help-block">Input mask for entering valid FTP, HTTP or HTTPS addresses.</span>
              </div>
            </div>
            <div class="form-group row gutter-xs">
              <label class="col-md-3 control-label" for="form-control-8">IP address</label>
              <div class="col-md-6">
                <input id="form-control-8" class="form-control" type="text" data-inputmask="'alias': 'ip'">
                <span class="help-block">Input mask for entering valid IP addresses.</span>
              </div>
            </div>
            <div class="form-group row gutter-xs">
              <label class="col-md-3 control-label" for="form-control-9">Email</label>
              <div class="col-md-6">
                <input id="form-control-9" class="form-control" type="text" data-inputmask="'alias': 'email'">
                <span class="help-block">Input mask for entering valid email addresses.</span>
              </div>
            </div>
            <div class="form-group row gutter-xs">
              <label class="col-md-3 control-label" for="form-control-10">MAC address</label>
              <div class="col-md-6">
                <input id="form-control-10" class="form-control" type="text" data-inputmask="'alias': 'mac'">
                <span class="help-block">Input mask for entering valid MAC addresses.</span>
              </div>
            </div>
          </form>
        </div>
---
layout: admintemplate
title: Dashboard
permalink: /admin/uploader.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="row">
            <div class="col-xs-12">
              <p><small>The File Uploader presented below is the <a href="http://blueimp.github.io/jQuery-File-Upload/" target="_blank">jQuery File Upload</a> library, where we made only a few changes to the server-side code, to adapt it to the <a href="files.html">File</a> component. All details are explained in the full documentation. This File Uploader is ready to be attached to any type of form. Please try to upload a file. You may upload several files simultaneously.</small></p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <form id="demo-uploader" action="//uploader.madebytilde.com/" method="post" enctype="multipart/form-data">
                <div class="form-group">
                  <label class="file-upload-btn btn btn-primary">
                    Upload files
                    <input class="file-upload-input" type="file" name="files[]" multiple="multiple">
                  </label>
                </div>
                <div class="form-group">
                  <ul class="file-list"></ul>
                </div>
              </form>
            </div>
          </div>
        </div>
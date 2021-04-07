---
layout: admintemplate
title: Dashboard
permalink: /admin/cropper.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="row">
            <div class="col-md-12">
              <p><small>Image Cropper presented below is a <a href="https://fengyuanchen.github.io/cropper/" target="_blank">Cropper</a> plugin, for which we have created a toolbar in order to have a more compact view.</small></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <div id="demo-cropper" class="cropper">
                <div class="cropper-img">
                  <img id="demo-cropper-img" class="img-responsive" src="../img/8694637414.jpg" alt="Cropper image">
                </div>
                <div class="cropper-toolbar">
                  <div class="btn-group">
                    <button class="btn btn-link link-muted hidden-xs" title="Move" data-option="move" data-method="setDragMode" type="button">
                      <span class="icon icon-arrows icon-lg"></span>
                    </button>
                    <button class="btn btn-link link-muted hidden-xs" title="Crop" data-option="crop" data-method="setDragMode" type="button">
                      <span class="icon icon-crop icon-lg"></span>
                    </button>
                    <button class="btn btn-link link-muted" title="Zoom In" data-option="0.1" data-method="zoom" type="button">
                      <span class="icon icon-search-plus icon-lg"></span>
                    </button>
                    <button class="btn btn-link link-muted" title="Zoom Out" data-option="-0.1" data-method="zoom" type="button">
                      <span class="icon icon-search-minus icon-lg"></span>
                    </button>
                    <button class="btn btn-link link-muted" title="Rotate Left" data-option="-45" data-method="rotate" type="button">
                      <span class="icon icon-rotate-left icon-lg"></span>
                    </button>
                    <button class="btn btn-link link-muted" title="Rotate Right" data-option="45" data-method="rotate" type="button">
                      <span class="icon icon-rotate-right icon-lg"></span>
                    </button>
                    <button class="btn btn-link link-muted" title="Flip Horizontal" data-option="-1" data-method="scaleX" type="button">
                      <span class="icon icon-arrows-h icon-lg"></span>
                    </button>
                    <button class="btn btn-link link-muted" title="Flip Vertical" data-option="-1" data-method="scaleY" type="button">
                      <span class="icon icon-arrows-v icon-lg"></span>
                    </button>
                    <div class="btn-group dropup">
                      <button class="btn btn-link link-muted" aria-haspopup="true" data-toggle="dropdown" type="button">
                        <span class="icon icon-th icon-lg"></span>
                      </button>
                      <div class="dropdown-menu dropdown-menu-right p-a">
                        <div class="custom-controls-stacked">
                          <label class="custom-control custom-control-primary custom-radio">
                            <input class="custom-control-input" name="aspectRatio" type="radio" value="1.7777777777777777">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-label">Aspect ratio 16:9</span>
                          </label>
                          <label class="custom-control custom-control-primary custom-radio">
                            <input class="custom-control-input" name="aspectRatio" type="radio" value="1.3333333333333333">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-label">Aspect ratio 4:3</span>
                          </label>
                          <label class="custom-control custom-control-primary custom-radio">
                            <input class="custom-control-input" name="aspectRatio" type="radio" value="1">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-label">Aspect ratio 1:1</span>
                          </label>
                          <label class="custom-control custom-control-primary custom-radio">
                            <input class="custom-control-input" name="aspectRatio" type="radio" value="NaN" checked="checked">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-label">None</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-link link-muted" title="Crop" data-method="crop" type="button">
                      <span class="icon icon-check icon-lg"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
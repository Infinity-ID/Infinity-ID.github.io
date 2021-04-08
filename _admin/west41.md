---
layout: admintemplate
title: Dashboard
permalink: /admin/sliders.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="row gutter-xs">
            <div class="col-xs-12">
              <p><small>The slider component presented below use <a href="http://refreshless.com/nouislider/" target="_blank">noUiSlider</a>, the CSS of which is completely rewritten in SASS, without modifying however anything in JavaScript.</small></p>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Default slider</h5>
                <p>
                  <small>Horizontal slider with a single handle.</small>
                </p>
                <div class="slider" data-slider="default" data-start="80"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Primary slider</h5>
                <p>
                  <small>Horizontal slider with a single handle.</small>
                </p>
                <div class="slider" data-slider="primary" data-start="80"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Success slider</h5>
                <p>
                  <small>Horizontal slider with a single handle.</small>
                </p>
                <div class="slider" data-slider="success" data-start="80"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Info Slider</h5>
                <p>
                  <small>Horizontal slider with a single handle.</small>
                </p>
                <div class="slider" data-slider="info" data-start="80"></div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Warning slider</h5>
                <p>
                  <small>Horizontal slider with a single handle.</small>
                </p>
                <div class="slider" data-slider="warning" data-start="80"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Danger slider</h5>
                <p>
                  <small>Horizontal slider with a single handle.</small>
                </p>
                <div class="slider" data-slider="danger" data-start="80"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Circular handle (
                  <span id="slider-target-1"></span>)</h5>
                <p>
                  <small>A single handle with no value selected.</small>
                </p>
                <div class="slider slider-circle" data-slider="danger" data-start="0" data-target="#slider-target-1"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Range slider [
                  <span id="slider-target-2"></span>,
                  <span id="slider-target-3"></span>]</h5>
                <p>
                  <small>Horizontal slider with two drag handles.</small>
                </p>
                <div class="slider slider-circle" data-slider="danger" data-start="[20, 40]" data-step="1" data-target='["#slider-target-2", "#slider-target-3"]' data-connect="true"></div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Fixed maximum [
                  <span id="slider-target-4"></span>, 100.00]</h5>
                <p>
                  <small>The user can only select a minimum.</small>
                </p>
                <div class="slider slider-circle" data-slider="danger" data-start="40" data-step="1" data-target="#slider-target-4" data-connect="upper"></div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <h5>Fixed dragging [
                  <span id="slider-target-5"></span>,
                  <span id="slider-target-6"></span>]</h5>
                <p>
                  <small>Keeps the distance between handles fixed.</small>
                </p>
                <div class="slider slider-circle" data-slider="danger" data-start="[40, 60]" data-step="1" data-target='["#slider-target-5", "#slider-target-6"]' data-connect="true" data-behaviour="drag-fixed"></div>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <p>
                  <small>Furthermore every part of this component can changed with variables stated in <code>_variables.scss</code>. We have also created a
                    <strong>plugin</strong> to use this library by writing <code>HTML</code> only.</small>
                </p>
                <pre><span></span><span class="p">&lt;</span><span class="nt">div</span> <span class="na">data-slider</span><span class="o">=</span><span class="s">"primary"</span> <span class="na">data-start</span><span class="o">=</span><span class="s">"40"</span> <span class="na">data-target</span><span class="o">=</span><span class="s">"#input-id"</span><span class="p">&gt;&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></pre>
              </div>
            </div>
          </div>
          <div class="text-center m-b">
            <h3 class="m-b-0">Advanced Examples</h3>
            <small>Besides the presentation of vertical option, two other examples show the possibility of interaction with <a href="toastr.html">toastr</a>.</small>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="panel panel-body text-center eq p-a-lg">
                <div id="demo-slider-1" class="slider slider-circle"></div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-12 col-md-4">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <div class="demo-slider-vertical slider" data-slider="default" data-start="0" data-orientation="vertical" data-direction="rtl"></div>
                <div class="demo-slider-vertical slider" data-slider="primary" data-start="10" data-orientation="vertical" data-direction="rtl"></div>
                <div class="demo-slider-vertical slider" data-slider="success" data-start="20" data-orientation="vertical" data-direction="rtl"></div>
                <div class="demo-slider-vertical slider" data-slider="info" data-start="30" data-orientation="vertical" data-direction="rtl"></div>
                <div class="demo-slider-vertical slider" data-slider="warning" data-start="40" data-orientation="vertical" data-direction="rtl"></div>
                <div class="demo-slider-vertical slider" data-slider="danger" data-start="50" data-orientation="vertical" data-direction="rtl"></div>
              </div>
            </div>
            <div class="col-xs-12 col-md-4">
              <div class="panel panel-body eq text-center">
                <div class="demo-model">
                  <div id="demo-slider-2" class="demo-model-slider slider slider-circle"></div>
                  <img id="demo-slider-2-img" class="demo-model-img" src="../img/8796828207.png" alt="Fashion model's body">
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-4">
              <div class="panel panel-body text-center" data-toggle="match-height">
                <div class="demo-slider-vertical slider" data-slider="danger" data-start="50" data-orientation="vertical"></div>
                <div class="demo-slider-vertical slider" data-slider="warning" data-start="60" data-orientation="vertical"></div>
                <div class="demo-slider-vertical slider" data-slider="info" data-start="70" data-orientation="vertical"></div>
                <div class="demo-slider-vertical slider" data-slider="success" data-start="80" data-orientation="vertical"></div>
                <div class="demo-slider-vertical slider" data-slider="primary" data-start="90" data-orientation="vertical"></div>
                <div class="demo-slider-vertical slider" data-slider="default" data-start="100" data-orientation="vertical"></div>
              </div>
            </div>
          </div>
        </div>
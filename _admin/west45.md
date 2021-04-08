---
layout: admintemplate
title: Dashboard
permalink: /admin/google-maps.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="demo-map">
            <div class="row">
              <div class="col-md-12">
                <p><small>Maps presented below are created using <a href="http://hpneo.github.io/gmaps/" target="_blank">Gmaps.js</a> library. Gmaps.js allows you to use the potential of Google Maps in a simple way.</small></p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-md-push-6">
                <div class="row">
                  <div class="col-md-10 col-md-offset-1">
                    <h3>Basic example</h3>
                    <p>You must define
                      <strong>container ID</strong>,
                      <strong>latitude</strong> and
                      <strong>longitude</strong> of the map's center.</p>
                    <p>You also can define
                      <strong>zoom</strong>,
                      <strong>width</strong> and
                      <strong>height</strong>. By default, zoom is 15. Width an height in a CSS class will replace these values.</p>
                    <p>Map types are defined in the
                      <strong>mapType</strong> property. Allowed values are:
                      <strong>roadmap</strong> (default),
                      <strong>satellite</strong>,
                      <strong>hybrid</strong> and
                      <strong>terrain</strong>.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-md-pull-6">
                <div id="demo-map-1"></div>
              </div>
            </div>
          </div>
          <div class="demo-map">
            <div class="row">
              <div class="col-md-6 col-md-push-6">
                <div class="row">
                  <div class="col-md-10 col-md-offset-1">
                    <h3>Markers &middot; 5 things not to miss in
                      <span class="nowrap">San Francisco</span>
                    </h3>
                    <p>
                      <strong>latitude</strong> and
                      <strong>longitude</strong> are required. You can also attach additional information with <code>details</code>, which will be passed to Event object (<code>e</code>) in the events previously defined.</p>
                    <p>Markers with click event.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-md-pull-6">
                <div id="demo-map-2"></div>
              </div>
            </div>
          </div>
          <div class="demo-map">
            <div class="row">
              <div class="col-md-6 col-md-push-6">
                <div class="row">
                  <div class="col-md-10 col-md-offset-1">
                    <h3>Polylines</h3>
                    <p>The path of the polyline is defined by an array of array of two (latitude and longitude).</p>
                    <p>The example creates a 3-pixel-wide red polyline showing the path of William Kingsford Smith's first trans-Pacific flight between Oakland, CA, and Brisbane, Australia.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-md-pull-6">
                <div id="demo-map-3"></div>
              </div>
            </div>
          </div>
          <div class="demo-map">
            <div class="row">
              <div class="col-md-6 col-md-push-6">
                <div class="row">
                  <div class="col-md-10 col-md-offset-1">
                    <h3>Polygons &middot; Bermuda triangle</h3>
                    <p>The path of a polygon can be defined as an array of <code>google.maps.LatLng</code> objects, or arrays of coordinates, with index 0 and 1 as, respectively,
                      <b>latitude</b> and
                      <b>longitude</b> (as in the example).</p>
                    <p>Also, you can add a GeoJSON Polygon or MultiPolygon path using <code>useGeoJSON: true</code>.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-md-pull-6">
                <div id="demo-map-4"></div>
              </div>
            </div>
          </div>
          <div class="demo-map">
            <div class="row">
              <div class="col-md-6 col-md-push-6">
                <div class="row">
                  <div class="col-md-10 col-md-offset-1">
                    <h3>Route between two points</h3>
                    <p>
                      <strong>From:</strong> Golden Gate Park
                      <strong>To:</strong> Golden Gate Bridge</p>
                    <p>You must define two points (
                      <strong>origin</strong> and
                      <strong>destination</strong>) and color, opacity and weight of the route in the map.</p>
                    <p>Also, you can define a <code>travelMode</code>: <code>driving</code>, <code>bicycling</code> or <code>walking</code>. Default is <code>walking</code>.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-md-pull-6">
                <div id="demo-map-5"></div>
              </div>
            </div>
          </div>
          <div class="demo-map">
            <div class="row">
              <div class="col-md-6 col-md-push-6">
                <div class="row">
                  <div class="col-md-10 col-md-offset-1">
                    <h3>Routes (step by step)</h3>
                    <p>
                      <strong>From:</strong> Golden Gate Park
                      <strong>To:</strong> Golden Gate Bridge</p>
                    <p>Same as <code>drawRoute</code>, you must define an
                      <strong>origin</strong>,
                      <strong>destination</strong> and <code>travelMode</code>. Also, you must define the function that GMaps will call every step in the route.</p>
                    <button id="demo-map-6-btn" class="btn btn-primary btn-sm m-b">Start travel</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-md-pull-6">
                <div id="demo-map-6"></div>
              </div>
            </div>
          </div>
          <div class="demo-map">
            <div class="row">
              <div class="col-md-6 col-md-push-6">
                <div class="row">
                  <div class="col-md-10 col-md-offset-1">
                    <h3>Map Types (Open Street Map)</h3>
                    <p>You can define many map types from external map services, like OpenStreetMap.</p>
                    <p>You must define a function called <code>getTileUrl</code>, which returns a tile URL according the coordenates in the map.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-md-pull-6">
                <div id="demo-map-7"></div>
              </div>
            </div>
          </div>
        </div>
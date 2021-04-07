---
layout: admintemplate
title: Dashboard
permalink: /admin/bootstrap-tables.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="row gutter-xs">
            <div class="col-md-12">
              <p><small>The CSS of <a href="http://bootstrap-table.wenzhixin.net.cn" target="_blank">Bootstrap Table</a> plugin is completely rewritten in SASS, without modifying however anything in JavaScript.</small></p>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions">
                    <button type="button" class="card-action card-toggler" title="Collapse"></button>
                    <button type="button" class="card-action card-reload" title="Reload"></button>
                    <button type="button" class="card-action card-remove" title="Remove"></button>
                  </div>
                  <strong>Simple Table</strong>
                </div>
                <div class="card-body">
                  <table id="demo-bootstrap-table-1" class="table"></table>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions">
                    <button type="button" class="card-action card-toggler" title="Collapse"></button>
                    <button type="button" class="card-action card-reload" title="Reload"></button>
                    <button type="button" class="card-action card-remove" title="Remove"></button>
                  </div>
                  <strong>Table Layout Fixed
                    <small>align: left, center, right</small>
                  </strong>
                </div>
                <div class="card-body">
                  <table id="demo-bootstrap-table-2" class="table table-fixed"></table>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions">
                    <button type="button" class="card-action card-toggler" title="Collapse"></button>
                    <button type="button" class="card-action card-reload" title="Reload"></button>
                    <button type="button" class="card-action card-remove" title="Remove"></button>
                  </div>
                  <strong>Table Styling (striped)</strong>
                </div>
                <div class="card-body">
                  <table id="demo-bootstrap-table-3" class="table"></table>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions">
                    <button type="button" class="card-action card-toggler" title="Collapse"></button>
                    <button type="button" class="card-action card-reload" title="Reload"></button>
                    <button type="button" class="card-action card-remove" title="Remove"></button>
                  </div>
                  <strong>Table Styling (rowStyle)</strong>
                </div>
                <div class="card-body">
                  <table id="demo-bootstrap-table-4" class="table table-fixed"></table>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions">
                    <button type="button" class="card-action card-toggler" title="Collapse"></button>
                    <button type="button" class="card-action card-reload" title="Reload"></button>
                    <button type="button" class="card-action card-remove" title="Remove"></button>
                  </div>
                  <strong>Table with Custom Checkbox</strong>
                </div>
                <div class="card-body">
                  <table id="demo-bootstrap-table-5" class="table">
                    <thead>
                      <tr>
                        <th>
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox" name="btSelectAll">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </th>
                        <th>Name</th>
                        <th>Position</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions">
                    <button type="button" class="card-action card-toggler" title="Collapse"></button>
                    <button type="button" class="card-action card-reload" title="Reload"></button>
                    <button type="button" class="card-action card-remove" title="Remove"></button>
                  </div>
                  <strong>Table with Switch</strong>
                </div>
                <div class="card-body">
                  <table id="demo-bootstrap-table-6" class="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>
                          <label class="switch switch-primary">
                            <input class="switch-input" type="checkbox" name="btSelectAll">
                            <span class="switch-track"></span>
                            <span class="switch-thumb"></span>
                          </label>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-12">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions">
                    <button type="button" class="card-action card-toggler" title="Collapse"></button>
                    <button type="button" class="card-action card-reload" title="Reload"></button>
                    <button type="button" class="card-action card-remove" title="Remove"></button>
                  </div>
                  <strong>Table with Sortable Columns (Custom Sort)</strong>
                </div>
                <div class="card-body">
                  <table id="demo-bootstrap-table-7" class="table table-nowrap"></table>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-xs-12">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions">
                    <button type="button" class="card-action card-toggler" title="Collapse"></button>
                    <button type="button" class="card-action card-reload" title="Reload"></button>
                    <button type="button" class="card-action card-remove" title="Remove"></button>
                  </div>
                  <strong>Table with Toolbar And Pagination</strong>
                </div>
                <div class="card-body">
                  <table id="demo-bootstrap-table-8" class="table table-nowrap"></table>
                </div>
              </div>
            </div>
          </div>
        </div>
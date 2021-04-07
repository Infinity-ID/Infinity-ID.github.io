---
layout: admintemplate
title: Dashboard
permalink: /admin/static-tables.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="row gutter-xs">
            <div class="col-xs-6">
              <p><small>The following examples show how different components can be used together with tables.</small></p>
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
                  <strong>Basic Table</strong>
                </div>
                <div class="card-body" data-toggle="match-height">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Campaign Name</th>
                        <th>Link Clicks</th>
                        <th>Reach</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Website traffic</td>
                        <td>11,706</td>
                        <td>58,530</td>
                        <td>
                          <span class="label label-outline-success">Active</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Remarketing</td>
                        <td>15,860</td>
                        <td>79,300</td>
                        <td>
                          <span class="label label-outline-success">Active</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Page Likes</td>
                        <td>11,688</td>
                        <td>58,440</td>
                        <td>
                          <span class="label label-outline-success">Active</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Email Signups</td>
                        <td>13,049</td>
                        <td>65,245</td>
                        <td>
                          <span class="label label-outline-info">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Product catalog</td>
                        <td>18,884</td>
                        <td>94,423</td>
                        <td>
                          <span class="label label-outline-danger">Inactive</span>
                        </td>
                      </tr>
                    </tbody>
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
                  <strong>Hover Table (Align: left, right, center)</strong>
                </div>
                <div class="card-body" data-toggle="match-height">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th class="text-left">#</th>
                        <th class="text-left">Campaign Name</th>
                        <th class="text-right">Link Clicks</th>
                        <th class="text-right">Reach</th>
                        <th class="text-center">Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-left">1</td>
                        <td class="text-left">Website traffic</td>
                        <td class="text-right">11,706</td>
                        <td class="text-right">58,530</td>
                        <td class="text-center">
                          <span data-peity="line">5,3,9,6,5,9,7,3,5,2</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">2</td>
                        <td class="text-left">Remarketing</td>
                        <td class="text-right">15,860</td>
                        <td class="text-right">79,300</td>
                        <td class="text-center">
                          <span data-peity="line">4,9,6,7,3,1,2,5,6,8</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">3</td>
                        <td class="text-left">Page Likes</td>
                        <td class="text-right">11,688</td>
                        <td class="text-right">58,440</td>
                        <td class="text-center">
                          <span data-peity="line">1,2,1,6,8,9,5,4,7,3</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">4</td>
                        <td class="text-left">Email Signups</td>
                        <td class="text-right">13,049</td>
                        <td class="text-right">65,245</td>
                        <td class="text-center">
                          <span data-peity="line">2,7,0,4,6,1,8,5,9,3</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">5</td>
                        <td class="text-left">Product catalog</td>
                        <td class="text-right">18,884</td>
                        <td class="text-right">94,423</td>
                        <td class="text-center">
                          <span data-peity="line">9,4,3,1,7,8,0,2,6,5</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                  <strong>Bordered table (+hover)</strong>
                </div>
                <div class="card-body" data-toggle="match-height">
                  <table class="table table-hover table-bordered">
                    <thead>
                      <tr>
                        <th class="text-left">#</th>
                        <th class="text-left">Campaign Name</th>
                        <th class="text-right">Link Clicks</th>
                        <th class="text-right">Reach</th>
                        <th class="text-center">Last 10 days</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-left">1</td>
                        <td class="text-left">Website traffic</td>
                        <td class="text-right">11,706</td>
                        <td class="text-right">58,530</td>
                        <td class="text-center">
                          <span data-peity="bar">5,3,9,6,5,9,7,3,5,2</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">2</td>
                        <td class="text-left">Remarketing</td>
                        <td class="text-right">15,860</td>
                        <td class="text-right">79,300</td>
                        <td class="text-center">
                          <span data-peity="bar">4,9,6,7,3,1,2,5,6,8</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">3</td>
                        <td class="text-left">Page Likes</td>
                        <td class="text-right">11,688</td>
                        <td class="text-right">58,440</td>
                        <td class="text-center">
                          <span data-peity="bar">1,2,1,6,8,9,5,4,7,3</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">4</td>
                        <td class="text-left">Email Signups</td>
                        <td class="text-right">13,049</td>
                        <td class="text-right">65,245</td>
                        <td class="text-center">
                          <span data-peity="bar">2,7,0,4,6,1,8,5,9,3</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">5</td>
                        <td class="text-left">Product catalog</td>
                        <td class="text-right">18,884</td>
                        <td class="text-right">94,423</td>
                        <td class="text-center">
                          <span data-peity="bar">9,4,3,1,7,8,0,2,6,5</span>
                        </td>
                      </tr>
                    </tbody>
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
                  <strong>Borderless Table (+hover)</strong>
                </div>
                <div class="card-body" data-toggle="match-height">
                  <table class="table table-hover table-borderless">
                    <thead>
                      <tr>
                        <th class="text-left">#</th>
                        <th class="text-left">Campaign Name</th>
                        <th class="text-right">Link Clicks</th>
                        <th class="text-right">Reach</th>
                        <th class="text-center">Completed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-left">1</td>
                        <td class="text-left">Website traffic</td>
                        <td class="text-right">11,706</td>
                        <td class="text-right">58,530</td>
                        <td class="text-center">
                          <span data-peity="donut">4/10</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">2</td>
                        <td class="text-left">Remarketing</td>
                        <td class="text-right">15,860</td>
                        <td class="text-right">79,300</td>
                        <td class="text-center">
                          <span data-peity="donut">5/10</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">3</td>
                        <td class="text-left">Page Likes</td>
                        <td class="text-right">11,688</td>
                        <td class="text-right">58,440</td>
                        <td class="text-center">
                          <span data-peity="donut">7/10</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">4</td>
                        <td class="text-left">Email Signups</td>
                        <td class="text-right">13,049</td>
                        <td class="text-right">65,245</td>
                        <td class="text-center">
                          <span data-peity="donut">9/10</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">5</td>
                        <td class="text-left">Product catalog</td>
                        <td class="text-right">18,884</td>
                        <td class="text-right">94,423</td>
                        <td class="text-center">
                          <span data-peity="donut">10/10</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                  <strong>Bordered Table (+striped)</strong>
                </div>
                <div class="card-body" data-toggle="match-height">
                  <table class="table table-hover table-bordered table-striped">
                    <thead>
                      <tr>
                        <th class="text-left">#</th>
                        <th class="text-left">Campaign Name</th>
                        <th class="text-right">Link Clicks</th>
                        <th class="text-right">Reach</th>
                        <th class="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-left">1</td>
                        <td class="text-left"><a href="#">Website traffic</a></td>
                        <td class="text-right">11,706</td>
                        <td class="text-right">58,530</td>
                        <td class="text-center">
                          <div class="dropdown">
                            <button class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" type="button">
                              More
                              <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right">
                              <li class="disabled"><a href="#">Turn On</a></li>
                              <li><a href="#">Turn Off</a></li>
                              <li role="separator" class="divider"></li>
                              <li><a href="#">Delete...</a></li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">2</td>
                        <td class="text-left"><a href="#">Remarketing</a></td>
                        <td class="text-right">15,860</td>
                        <td class="text-right">79,300</td>
                        <td class="text-center">
                          <div class="dropdown">
                            <button class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" type="button">
                              More
                              <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right">
                              <li class="disabled"><a href="#">Turn On</a></li>
                              <li><a href="#">Turn Off</a></li>
                              <li role="separator" class="divider"></li>
                              <li><a href="#">Delete...</a></li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">3</td>
                        <td class="text-left"><a href="#">Page Likes</a></td>
                        <td class="text-right">11,688</td>
                        <td class="text-right">58,440</td>
                        <td class="text-center">
                          <div class="dropdown">
                            <button class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" type="button">
                              More
                              <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right">
                              <li class="disabled"><a href="#">Turn On</a></li>
                              <li><a href="#">Turn Off</a></li>
                              <li role="separator" class="divider"></li>
                              <li><a href="#">Delete...</a></li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">4</td>
                        <td class="text-left"><a href="#">Email Signups</a></td>
                        <td class="text-right">13,049</td>
                        <td class="text-right">65,245</td>
                        <td class="text-center">
                          <div class="dropdown">
                            <button class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" type="button">
                              More
                              <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right">
                              <li class="disabled"><a href="#">Turn On</a></li>
                              <li><a href="#">Turn Off</a></li>
                              <li role="separator" class="divider"></li>
                              <li><a href="#">Delete...</a></li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">5</td>
                        <td class="text-left"><a href="#">Product catalog</a></td>
                        <td class="text-right">18,884</td>
                        <td class="text-right">94,423</td>
                        <td class="text-center">
                          <div class="dropdown">
                            <button class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" type="button">
                              More
                              <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right">
                              <li class="disabled"><a href="#">Turn On</a></li>
                              <li><a href="#">Turn Off</a></li>
                              <li role="separator" class="divider"></li>
                              <li><a href="#">Delete...</a></li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
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
                  <strong>Borderless Table (+striped)</strong>
                </div>
                <div class="card-body" data-toggle="match-height">
                  <table class="table table-borderless table-striped">
                    <thead>
                      <tr>
                        <th class="text-left">#</th>
                        <th class="text-left">Campaign Name</th>
                        <th class="text-right">Link Clicks</th>
                        <th class="text-right">Reach</th>
                        <th class="text-center">On / Off</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-left">1</td>
                        <td class="text-left">Website traffic</td>
                        <td class="text-right">11,706</td>
                        <td class="text-right">58,530</td>
                        <td class="text-center">
                          <label class="switch switch-primary">
                            <input class="switch-input" type="checkbox" checked="checked">
                            <span class="switch-track"></span>
                            <span class="switch-thumb"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">2</td>
                        <td class="text-left">Remarketing</td>
                        <td class="text-right">15,860</td>
                        <td class="text-right">79,300</td>
                        <td class="text-center">
                          <label class="switch switch-primary">
                            <input class="switch-input" type="checkbox" checked="checked">
                            <span class="switch-track"></span>
                            <span class="switch-thumb"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">3</td>
                        <td class="text-left">Page Likes</td>
                        <td class="text-right">11,688</td>
                        <td class="text-right">58,440</td>
                        <td class="text-center">
                          <label class="switch switch-primary">
                            <input class="switch-input" type="checkbox" checked="checked">
                            <span class="switch-track"></span>
                            <span class="switch-thumb"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">4</td>
                        <td class="text-left">Email Signups</td>
                        <td class="text-right">13,049</td>
                        <td class="text-right">65,245</td>
                        <td class="text-center">
                          <label class="switch switch-primary">
                            <input class="switch-input" type="checkbox">
                            <span class="switch-track"></span>
                            <span class="switch-thumb"></span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left">5</td>
                        <td class="text-left">Product catalog</td>
                        <td class="text-right">18,884</td>
                        <td class="text-right">94,423</td>
                        <td class="text-center">
                          <label class="switch switch-primary">
                            <input class="switch-input" type="checkbox">
                            <span class="switch-track"></span>
                            <span class="switch-thumb"></span>
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                  <strong>Contextual Colors (Rows)</strong>
                </div>
                <div class="card-body">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </th>
                        <th class="text-left">Campaign Name</th>
                        <th class="text-right">Link Clicks</th>
                        <th class="text-right">Per Click</th>
                        <th class="text-right">Amount Spent</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="active">
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Website traffic</td>
                        <td class="text-right">58,198</td>
                        <td class="text-right">$0.01</td>
                        <td class="text-right">$581.98</td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Remarketing</td>
                        <td class="text-right">79,048</td>
                        <td class="text-right">$0.007</td>
                        <td class="text-right">$553.34</td>
                      </tr>
                      <tr class="success">
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Page Likes</td>
                        <td class="text-right">25,592</td>
                        <td class="text-right">$0.03</td>
                        <td class="text-right">$767.76</td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Email Signups</td>
                        <td class="text-right">34,179</td>
                        <td class="text-right">$0.04</td>
                        <td class="text-right">$1,367.16</td>
                      </tr>
                      <tr class="info">
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Product catalog</td>
                        <td class="text-right">90,031</td>
                        <td class="text-right">$0.012</td>
                        <td class="text-right">$1,080.37</td>
                      </tr>
                    </tbody>
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
                  <strong>Contextual Colors (Row + Columns)</strong>
                </div>
                <div class="card-body">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </th>
                        <th class="text-left">Campaign Name</th>
                        <th class="text-right">Link Clicks</th>
                        <th class="text-right">Per Click</th>
                        <th class="text-right">Amount Spent</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Website traffic</td>
                        <td class="text-right">58,198</td>
                        <td class="text-right">$0.01</td>
                        <td class="text-right active">$581.98</td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Remarketing</td>
                        <td class="text-right">79,048</td>
                        <td class="text-right">$0.007</td>
                        <td class="text-right active">$553.34</td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Page Likes</td>
                        <td class="text-right">25,592</td>
                        <td class="text-right">$0.03</td>
                        <td class="text-right active">$767.76</td>
                      </tr>
                      <tr class="danger">
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox" checked="checked">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Email Signups</td>
                        <td class="text-right">34,179</td>
                        <td class="text-right">$0.04</td>
                        <td class="text-right active">$1,367.16</td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Product catalog</td>
                        <td class="text-right">90,031</td>
                        <td class="text-right">$0.012</td>
                        <td class="text-right active">$1,080.37</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions">
                    <button type="button" class="card-action card-toggler" title="Collapse"></button>
                    <button type="button" class="card-action card-reload" title="Reload"></button>
                    <button type="button" class="card-action card-remove" title="Remove"></button>
                  </div>
                  <strong>Advanced Table</strong>
                </div>
                <div class="card-body">
                  <table class="table table-hover table-bordered table-striped">
                    <thead>
                      <tr>
                        <th rowspan="2" class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </th>
                        <th rowspan="2" class="text-left">Client</th>
                        <th rowspan="2" class="text-left">Campaign Name</th>
                        <th rowspan="2" class="text-center">Campaign On/Off</th>
                        <th rowspan="2" class="text-center">Completed</th>
                        <th rowspan="2" class="text-left">Start Date</th>
                        <th rowspan="2" class="text-left">End Date</th>
                        <th colspan="3" class="text-center">Financial Cost</th>
                      </tr>
                      <tr>
                        <th class="text-right">Link Clicks</th>
                        <th class="text-right">Per Click</th>
                        <th class="text-right">Amount Spent</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Pi Consulting Group</td>
                        <td class="text-left">Website traffic</td>
                        <td class="text-center">
                          <label class="switch switch-primary">
                            <input class="switch-input" type="checkbox" checked="checked" disabled="disabled">
                            <span class="switch-track"></span>
                            <span class="switch-thumb"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <span class="text-success">
                            <span class="icon icon-check icon-lg"></span>
                          </span>
                        </td>
                        <td class="text-left">Nov 1, 2017</td>
                        <td class="text-left">Nov 15, 2017</td>
                        <td class="text-right">58,198</td>
                        <td class="text-right">$0.01</td>
                        <td class="text-right">$581.98</td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Made by Tilde</td>
                        <td class="text-left">Remarketing</td>
                        <td class="text-center">
                          <label class="switch switch-primary">
                            <input class="switch-input" type="checkbox" checked="checked">
                            <span class="switch-track"></span>
                            <span class="switch-thumb"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <span>
                            <span class="icon icon-check icon-lg"></span>
                          </span>
                        </td>
                        <td class="text-left">Nov 1, 2017</td>
                        <td class="text-left">Nov 30, 2017</td>
                        <td class="text-right">79,048</td>
                        <td class="text-right">$0.007</td>
                        <td class="text-right">$553.34</td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Made by Tilde</td>
                        <td class="text-left">Page Likes</td>
                        <td class="text-center">
                          <label class="switch switch-primary">
                            <input class="switch-input" type="checkbox" checked="checked">
                            <span class="switch-track"></span>
                            <span class="switch-thumb"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <span>
                            <span class="icon icon-check icon-lg"></span>
                          </span>
                        </td>
                        <td class="text-left">Nov 1, 2017</td>
                        <td class="text-left">Nov 30, 2017</td>
                        <td class="text-right">25,592</td>
                        <td class="text-right">$0.03</td>
                        <td class="text-right">$767.76</td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">Made by Tilde</td>
                        <td class="text-left">Email Signups</td>
                        <td class="text-center">
                          <label class="switch switch-primary">
                            <input class="switch-input" type="checkbox" checked="checked" disabled="disabled">
                            <span class="switch-track"></span>
                            <span class="switch-thumb"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <span class="text-success">
                            <span class="icon icon-check icon-lg"></span>
                          </span>
                        </td>
                        <td class="text-left">Nov 1, 2017</td>
                        <td class="text-left">Nov 20, 2017</td>
                        <td class="text-right">34,179</td>
                        <td class="text-right">$0.04</td>
                        <td class="text-right">$1,367.16</td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </td>
                        <td class="text-left">CMB Cosmetics</td>
                        <td class="text-left">Product catalog</td>
                        <td class="text-center">
                          <label class="switch switch-primary">
                            <input class="switch-input" type="checkbox" checked="checked" disabled="disabled">
                            <span class="switch-track"></span>
                            <span class="switch-thumb"></span>
                          </label>
                        </td>
                        <td class="text-center">
                          <span class="text-success">
                            <span class="icon icon-check icon-lg"></span>
                          </span>
                        </td>
                        <td class="text-left">Nov 1, 2017</td>
                        <td class="text-left">Nov 20, 2017</td>
                        <td class="text-right">90,031</td>
                        <td class="text-right">$0.012</td>
                        <td class="text-right">$1,080.37</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th class="text-right" colspan="7">Total:</th>
                        <th class="text-right">287,048</th>
                        <th class="text-right">$0.015</th>
                        <th class="text-right">$4,350.61</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
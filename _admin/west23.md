---
layout: admintemplate
title: Dashboard
permalink: /admin/responsive-tables.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="row">
            <div class="col-xs-12">
              <p><small>Resize your browser or load on different devices to test the responsive tables.</small></p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions">
                    <button type="button" class="card-action card-toggler" title="Collapse"></button>
                    <button type="button" class="card-action card-reload" title="Reload"></button>
                    <button type="button" class="card-action card-remove" title="Remove"></button>
                  </div>
                  <strong>Flip Scroll</strong>
                </div>
                <div class="card-body">
                  <div class="table-flip-scroll">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Country</th>
                          <th>Continent</th>
                          <th>Region</th>
                          <th class="text-right">2017</th>
                          <th class="text-right">2015</th>
                          <th class="text-right">Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>—</td>
                          <td>
                            <i>World</i>
                          </td>
                          <td>—</td>
                          <td>—</td>
                          <td class="text-right">7,432,663,275</td>
                          <td class="text-right">7,349,472,099</td>
                          <td class="text-right">+1.1%</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/cn.svg" alt="State Flag">China</td>
                          <td>Asia</td>
                          <td>Eastern Asia</td>
                          <td class="text-right">1,382,323,332</td>
                          <td class="text-right">1,376,048,943</td>
                          <td class="text-right">+0.5%</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/in.svg" alt="State Flag">India</td>
                          <td>Asia</td>
                          <td>Southern Asia</td>
                          <td class="text-right">1,326,801,576</td>
                          <td class="text-right">1,311,050,527</td>
                          <td class="text-right">+1.2%</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/us.svg" alt="State Flag">United States</td>
                          <td>Americas</td>
                          <td>Northern America</td>
                          <td class="text-right">324,118,787</td>
                          <td class="text-right">321,773,631</td>
                          <td class="text-right">+0.7%</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/id.svg" alt="State Flag">Indonesia</td>
                          <td>Asia</td>
                          <td>South-Eastern Asia</td>
                          <td class="text-right">260,581,100</td>
                          <td class="text-right">257,563,815</td>
                          <td class="text-right">+1.2%</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/br.svg" alt="State Flag">Brazil</td>
                          <td>Americas</td>
                          <td>South America</td>
                          <td class="text-right">209,567,920</td>
                          <td class="text-right">207,847,528</td>
                          <td class="text-right">+0.8%</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/pk.svg" alt="State Flag">Pakistan</td>
                          <td>Asia</td>
                          <td>Southern Asia</td>
                          <td class="text-right">192,826,502</td>
                          <td class="text-right">188,924,874</td>
                          <td class="text-right">+2.1%</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/ng.svg" alt="State Flag">Nigeria</td>
                          <td>Africa</td>
                          <td>Western Africa</td>
                          <td class="text-right">186,987,563</td>
                          <td class="text-right">182,201,962</td>
                          <td class="text-right">+2.6%</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/bd.svg" alt="State Flag">Bangladesh</td>
                          <td>Asia</td>
                          <td>Southern Asia</td>
                          <td class="text-right">162,910,864</td>
                          <td class="text-right">160,995,642</td>
                          <td class="text-right">+1.2%</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/ru.svg" alt="State Flag">Russia</td>
                          <td>Europe</td>
                          <td>Eastern Europe</td>
                          <td class="text-right">143,439,832</td>
                          <td class="text-right">143,456,918</td>
                          <td class="text-right">0.0%</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/mx.svg" alt="State Flag">Mexico</td>
                          <td>Americas</td>
                          <td>Central America</td>
                          <td class="text-right">128,632,004</td>
                          <td class="text-right">127,017,224</td>
                          <td class="text-right">+1.3%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center m-b">
            <h3 class="m-b-0">Bootstrap Responsive Table</h3>
            <small>Scroll horizontally on small devices, when viewing is smaller than 768px.</small>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions">
                    <button type="button" class="card-action card-toggler" title="Collapse"></button>
                    <button type="button" class="card-action card-reload" title="Reload"></button>
                    <button type="button" class="card-action card-remove" title="Remove"></button>
                  </div>
                  <strong>Horizontal Scroll</strong>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Country</th>
                          <th>Continent</th>
                          <th>Region</th>
                          <th class="text-right">2017</th>
                          <th class="text-right">2015</th>
                          <th class="text-right">Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>—</td>
                          <td>
                            <i>World</i>
                          </td>
                          <td>—</td>
                          <td>—</td>
                          <td class="text-right">7,432,663,275</td>
                          <td class="text-right">7,349,472,099</td>
                          <td class="text-right">+1.1%</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/cn.svg" alt="State Flag">China</td>
                          <td>Asia</td>
                          <td>Eastern Asia</td>
                          <td class="text-right">1,382,323,332</td>
                          <td class="text-right">1,376,048,943</td>
                          <td class="text-right">+0.5%</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/in.svg" alt="State Flag">India</td>
                          <td>Asia</td>
                          <td>Southern Asia</td>
                          <td class="text-right">1,326,801,576</td>
                          <td class="text-right">1,311,050,527</td>
                          <td class="text-right">+1.2%</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/us.svg" alt="State Flag">United States</td>
                          <td>Americas</td>
                          <td>Northern America</td>
                          <td class="text-right">324,118,787</td>
                          <td class="text-right">321,773,631</td>
                          <td class="text-right">+0.7%</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/id.svg" alt="State Flag">Indonesia</td>
                          <td>Asia</td>
                          <td>South-Eastern Asia</td>
                          <td class="text-right">260,581,100</td>
                          <td class="text-right">257,563,815</td>
                          <td class="text-right">+1.2%</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/br.svg" alt="State Flag">Brazil</td>
                          <td>Americas</td>
                          <td>South America</td>
                          <td class="text-right">209,567,920</td>
                          <td class="text-right">207,847,528</td>
                          <td class="text-right">+0.8%</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/pk.svg" alt="State Flag">Pakistan</td>
                          <td>Asia</td>
                          <td>Southern Asia</td>
                          <td class="text-right">192,826,502</td>
                          <td class="text-right">188,924,874</td>
                          <td class="text-right">+2.1%</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/ng.svg" alt="State Flag">Nigeria</td>
                          <td>Africa</td>
                          <td>Western Africa</td>
                          <td class="text-right">186,987,563</td>
                          <td class="text-right">182,201,962</td>
                          <td class="text-right">+2.6%</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/bd.svg" alt="State Flag">Bangladesh</td>
                          <td>Asia</td>
                          <td>Southern Asia</td>
                          <td class="text-right">162,910,864</td>
                          <td class="text-right">160,995,642</td>
                          <td class="text-right">+1.2%</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/ru.svg" alt="State Flag">Russia</td>
                          <td>Europe</td>
                          <td>Eastern Europe</td>
                          <td class="text-right">143,439,832</td>
                          <td class="text-right">143,456,918</td>
                          <td class="text-right">0.0%</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>
                            <img class="img-flag" src="../img/flags/4x3/mx.svg" alt="State Flag">Mexico</td>
                          <td>Americas</td>
                          <td>Central America</td>
                          <td class="text-right">128,632,004</td>
                          <td class="text-right">127,017,224</td>
                          <td class="text-right">+1.3%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
---
layout: admintemplate
title: Dashboard
permalink: /admin/dashboard-3.html
---
 <div class="layout-content-body">
          <div class="row gutter-xs">
            <div class="col-xs-6 col-md-3">
              <div class="card bg-primary no-border">
                <div class="card-values">
                  <div class="p-x">
                    <small>Visitors</small>
                    <h3 class="card-title fw-l">185,118</h3>
                  </div>
                </div>
                <div class="card-chart">
                  <canvas data-chart="line" data-animation="false" data-labels='["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"]' data-values='[{"backgroundColor": "transparent", "borderColor": "#ffffff", "data": [25250, 23370, 25568, 28961, 26762, 30072, 25135]}]' data-scales='{"yAxes": [{ "ticks": {"max": 31072}}]}' data-hide='["legend", "points", "scalesX", "scalesY", "tooltips"]' height="35"></canvas>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="card bg-info no-border">
                <div class="card-values">
                  <div class="p-x">
                    <small>Pageviews</small>
                    <h3 class="card-title fw-l">925,590</h3>
                  </div>
                </div>
                <div class="card-chart">
                  <canvas data-chart="line" data-animation="false" data-labels='["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"]' data-values='[{"backgroundColor": "transparent", "borderColor": "#ffffff", "data": [116196, 145160, 124419, 147004, 134740, 120846, 137225]}]' data-scales='{"yAxes": [{ "ticks": {"max": 158029}}]}' data-hide='["legend", "points", "scalesX", "scalesY", "tooltips"]' height="35"></canvas>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="card bg-danger no-border">
                <div class="card-values">
                  <div class="p-x">
                    <small>New visitors</small>
                    <h3 class="card-title fw-l">68,494</h3>
                  </div>
                </div>
                <div class="card-chart">
                  <canvas data-chart="line" data-animation="false" data-labels='["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"]' data-values='[{"backgroundColor": "transparent", "borderColor": "#ffffff", "data": [8796, 11317, 8678, 9452, 8453, 11853, 9945]}]' data-scales='{"yAxes": [{ "ticks": {"max": 12742}}]}' data-hide='["legend", "points", "scalesX", "scalesY", "tooltips"]' height="35"></canvas>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-md-3">
              <div class="card bg-warning no-border">
                <div class="card-values">
                  <div class="p-x">
                    <small>Average duration</small>
                    <h3 class="card-title fw-l">00:07:56</h3>
                  </div>
                </div>
                <div class="card-chart">
                  <canvas data-chart="line" data-animation="false" data-labels='["Jun 21", "Jun 20", "Jun 19", "Jun 18", "Jun 17", "Jun 16", "Jun 15"]' data-values='[{"backgroundColor": "transparent", "borderColor": "#ffffff", "data": [13590442, 12362934, 13639564, 13055677, 12915203, 11009940, 11542408]}]' data-scales='{"yAxes": [{ "ticks": {"max": 14662531}}]}' data-hide='["legend", "points", "scalesX", "scalesY", "tooltips"]' height="35"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutter-xs">
            <div class="col-md-8">
              <div class="row gutter-xs">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-body p-a-lg">
                      <div class="pull-right" data-toggle="buttons">
                        <label class="btn btn-outline-primary btn-sm btn-pill active">
                          <input type="radio" name="options" id="option1" autocomplete="off" checked="checked"> Past 24hr
                        </label>
                        <label class="btn btn-outline-primary btn-sm btn-pill">
                          <input type="radio" name="options" id="option2" autocomplete="off"> Past 7 days
                        </label>
                        <label class="btn btn-outline-primary btn-sm btn-pill">
                          <input type="radio" name="options" id="option3" autocomplete="off"> Past 30 days
                        </label>
                      </div>
                      <div class="clear">
                        <h4 class="card-title">
                          <span class="truncate">Audience Overview</span>
                        </h4>
                        <p class="card-text">
                          <span class="truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        </p>
                        <h3 class="card-subtitle text-primary m-t-md">
                          <span class="icon icon-caret-up"></span>
                          <span class="fw-l">256 Issues</span>
                          <span class="fw-b fz-sm">
                            <span class="icon icon-caret-up"></span>
                            15%
                          </span>
                        </h3>
                      </div>
                    </div>
                    <div class="card-chart">
                      <canvas data-chart="line" data-labels='["01 Jun, 2017", "02 Jun, 2017", "03 Jun, 2017", "04 Jun, 2017", "05 Jun, 2017", "06 Jun, 2017", "07 Jun, 2017", "08 Jun, 2017", "09 Jun, 2017", "10 Jun, 2017", "11 Jun, 2017", "12 Jun, 2017", "13 Jun, 2017", "14 Jun, 2017", "15 Jun, 2017", "16 Jun, 2017", "17 Jun, 2017", "18 Jun, 2017", "19 Jun, 2017", "20 Jun, 2017", "21 Jun, 2017", "22 Jun, 2017", "23 Jun, 2017", "24 Jun, 2017", "25 Jun, 2017", "26 Jun, 2017", "27 Jun, 2017", "28 Jun, 2017", "29 Jun, 2017", "30 Jun, 2017"]' data-values='[{"backgroundColor": "#2cf0d9", "borderColor": "#2cf0d9", "borderWidth": 1, "label": "New Visitor", "data": [325, 427, 399, 458, 745, 587, 758, 754, 710, 841, 645, 548, 645, 651, 645, 712, 631, 754, 611, 645, 500, 490, 565, 751, 654, 658, 456, 445, 701, 711]}, {"backgroundColor": "#1c90fb", "borderColor": "#1c90fb", "borderWidth": 1, "label": "Returning Visitor", "data": [750, 772, 871, 1011, 1136, 985, 1003, 897, 945, 975, 957, 1070, 1121, 1065, 1222, 1065, 1235, 1312, 1165, 1135, 1130, 1136, 1009, 1035, 1003, 981, 965, 1098, 958, 1205]}]' data-hide='["scalesX", "scalesY", "legend", "points"]' data-scales='{"yAxes": [{"gridLines": {"color": "#f5f5f5"}, "ticks": {"fontColor": "#bcc1c6", "maxTicksLimit": 5}}], "xAxes": [{ "gridLines": {"color": "#f5f5f5"}, "ticks": {"fontColor": "#bcc1c6"}} ]}' height="150" width="300"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row gutter-xs">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-body">
                      <ul class="ticket-list">
                        <li class="ticket-list-header">
                          <div class="ticket-list-meta">
                            <div class="ticket-list-date">Updated</div>
                          </div>
                          <div class="ticket-list-name">Customer</div>
                          <div class="ticket-list-content">Description</div>
                        </li>
                        <li class="ticket-list-separator">
                          <div class="ticket-list-count">
                            <span class="badge badge-success">377</span>
                          </div>
                          <div class="ticket-list-heading">Unresolved tickets</div>
                        </li>
                        <li class="ticket-list-item">
                          <a class="ticket-list-link" href="#">
                            <div class="ticket-list-meta">
                              <div class="ticket-list-attachments">
                                <span class="icon icon-paperclip icon-fw"></span>
                              </div>
                              <div class="ticket-list-date">21-Jun-2017</div>
                            </div>
                            <div class="ticket-list-name">Harry Jones</div>
                            <div class="ticket-list-content">
                              <span class="ticket-list-channel">
                                <span class="icon icon-phone"></span>
                              </span>
                              <span class="ticket-list-status pending">pending</span>
                              <span class="ticket-list-subject">Sed efficitur gravida odio et hendrerit curabitur fermentum ultricies ipsum, in vehicula tortor tincidunt </span>
                            </div>
                          </a>
                        </li>
                        <li class="ticket-list-item">
                          <a class="ticket-list-link" href="#">
                            <div class="ticket-list-meta">
                              <div class="ticket-list-attachments">
                                <span class="icon icon-paperclip icon-fw"></span>
                              </div>
                              <div class="ticket-list-date">20-Jun-2017</div>
                            </div>
                            <div class="ticket-list-name">Charlotte Harrison</div>
                            <div class="ticket-list-content">
                              <span class="ticket-list-channel">
                                <span class="icon icon-twitter"></span>
                              </span>
                              <span class="ticket-list-status pending">pending</span>
                              <span class="ticket-list-subject">Maecenas efficitur ultrices erat, ut scelerisque enim auctor nec </span>
                            </div>
                          </a>
                        </li>
                        <li class="ticket-list-item">
                          <a class="ticket-list-link" href="#">
                            <div class="ticket-list-meta">
                              <div class="ticket-list-attachments">
                                <span class="icon icon-paperclip icon-fw"></span>
                              </div>
                              <div class="ticket-list-date">15-Jun-2017</div>
                            </div>
                            <div class="ticket-list-name">Emma Lewis</div>
                            <div class="ticket-list-content">
                              <span class="ticket-list-channel">
                                <span class="icon icon-envelope"></span>
                              </span>
                              <span class="ticket-list-status open">open</span>
                              <span class="ticket-list-subject">Morbi viverra odio vel maximus dapibus sed lacinia, urna sed molestie venenatis, nulla sem volutpat nisi, interdum aliquet metu</span>
                            </div>
                          </a>
                        </li>
                        <li class="ticket-list-item">
                          <a class="ticket-list-link" href="#">
                            <div class="ticket-list-meta">
                              <div class="ticket-list-date">15-Jun-2017</div>
                            </div>
                            <div class="ticket-list-name">Dave Hamilton</div>
                            <div class="ticket-list-content">
                              <span class="ticket-list-channel">
                                <span class="icon icon-twitter"></span>
                              </span>
                              <span class="ticket-list-status open">open</span>
                              <span class="ticket-list-subject">Aliquam in nulla elit praesent sit amet dictum eros duis at auctor ligula suspendisse pharetra enim eu diam congue, venenatis</span>
                            </div>
                          </a>
                        </li>
                        <li class="ticket-list-item">
                          <a class="ticket-list-link" href="#4632674314">
                            <div class="ticket-list-meta">
                              <div class="ticket-list-date">14-Jun-2017</div>
                            </div>
                            <div class="ticket-list-name">Darcie Russell</div>
                            <div class="ticket-list-content">
                              <span class="ticket-list-channel">
                                <span class="icon icon-phone"></span>
                              </span>
                              <span class="ticket-list-status open">open</span>
                              <span class="ticket-list-subject">Cras eros elit, interdum ut venenatis quis, dictum viverra metus </span>
                            </div>
                          </a>
                        </li>
                        <li class="ticket-list-separator">
                          <div class="ticket-list-count">
                            <span class="badge badge-danger">879</span>
                          </div>
                          <div class="ticket-list-heading">Resolved tickets</div>
                        </li>
                        <li class="ticket-list-item">
                          <a class="ticket-list-link" href="#5877593870">
                            <div class="ticket-list-meta">
                              <div class="ticket-list-date">19-Jun-2017</div>
                            </div>
                            <div class="ticket-list-name">Ethan Walker</div>
                            <div class="ticket-list-content">
                              <span class="ticket-list-channel">
                                <span class="icon icon-phone"></span>
                              </span>
                              <span class="ticket-list-status resolved">resolved</span>
                              <span class="ticket-list-subject">Etiam sit amet finibus dolor quisque luctus consectetur risus non porta</span>
                            </div>
                          </a>
                        </li>
                        <li class="ticket-list-item">
                          <a class="ticket-list-link" href="#1312410223">
                            <div class="ticket-list-meta">
                              <div class="ticket-list-date">18-Jun-2017</div>
                            </div>
                            <div class="ticket-list-name">Sophia Evans</div>
                            <div class="ticket-list-content">
                              <span class="ticket-list-channel">
                                <span class="icon icon-envelope"></span>
                              </span>
                              <span class="ticket-list-status resolved">resolved</span>
                              <span class="ticket-list-subject">Vivamus et quam efficitur, consequat turpis ac, luctus mauris sed nulla eros, feugiat sit amet magna nec, convallis mollis lect</span>
                            </div>
                          </a>
                        </li>
                        <li class="ticket-list-item">
                          <a class="ticket-list-link" href="#0579859248">
                            <div class="ticket-list-meta">
                              <div class="ticket-list-date">17-Jun-2017</div>
                            </div>
                            <div class="ticket-list-name">Harry Walker</div>
                            <div class="ticket-list-content">
                              <span class="ticket-list-channel">
                                <span class="icon icon-envelope"></span>
                              </span>
                              <span class="ticket-list-status resolved">resolved</span>
                              <span class="ticket-list-subject">Mauris velit enim, cursus non purus non, pellentesque hendrerit orci </span>
                            </div>
                          </a>
                        </li>
                        <li class="ticket-list-item">
                          <a class="ticket-list-link" href="#2959274885">
                            <div class="ticket-list-meta">
                              <div class="ticket-list-attachments">
                                <span class="icon icon-paperclip icon-fw"></span>
                              </div>
                              <div class="ticket-list-date">12-Jun-2017</div>
                            </div>
                            <div class="ticket-list-name">Agatha Ford</div>
                            <div class="ticket-list-content">
                              <span class="ticket-list-channel">
                                <span class="icon icon-envelope"></span>
                              </span>
                              <span class="ticket-list-status resolved">resolved</span>
                              <span class="ticket-list-subject">Duis a dui vel ante congue lacinia curabitur pellentesque massa viverra, lobortis augue ac, elementum quam.</span>
                            </div>
                          </a>
                        </li>
                        <li class="ticket-list-item">
                          <a class="ticket-list-link" href="#5228680433">
                            <div class="ticket-list-meta">
                              <div class="ticket-list-attachments">
                                <span class="icon icon-paperclip icon-fw"></span>
                              </div>
                              <div class="ticket-list-date">12-Jun-2017</div>
                            </div>
                            <div class="ticket-list-name">Clara Khan</div>
                            <div class="ticket-list-content">
                              <span class="ticket-list-channel">
                                <span class="icon icon-envelope"></span>
                              </span>
                              <span class="ticket-list-status resolved">resolved</span>
                              <span class="ticket-list-subject">Praesentium ab dolorum cumque error nulla sint in neque expedita dicta fuga saepe unde qui obcaecati.</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row gutter-xs">
                <div class="col-md-6">
                  <div class="card">
                    <div class="overlay">
                      <div class="overlay-image">
                        <div class="carousel slide" data-ride="carousel">
                          <div class="carousel-inner" role="listbox">
                            <div class="item active">
                              <img src="../img/7225550528.jpg" alt="Montreal, Canada">
                            </div>
                            <div class="item">
                              <img src="../img/7575559379.jpg" alt="Montreal, Canada">
                            </div>
                            <div class="item">
                              <img src="../img/7690704672.jpg" alt="Atlanta, United States">
                            </div>
                            <div class="item">
                              <img src="../img/7795524868.jpg" alt="London, England">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="overlay-content bg-gray-a75">
                        <h2 class="card-title">Biagiotti Winter '16
                          <br>is out now</h2>
                        <p class="card-divider"></p>
                        <p>Consequuntur, tempora perspiciatis necessitatibus. Officiis, repudiandae voluptate ab! Non quos iste, fuga laborum, quisquam ratione minus eos modi fugiat ex eveniet sunt?</p>
                        <p>Sed aut natus eligendi laboriosam harum voluptas sint rem quo, magnam pariatur accusamus.</p>
                        <ul class="list-inline">
                          <li>
                            <a class="link-inverted" href="#">
                              <span class="icon icon-heart-o"></span>
                              2,778
                            </a>
                          </li>
                          <li>
                            <a class="link-inverted" href="#">
                              <span class="icon icon-comment-o"></span>
                              361
                            </a>
                          </li>
                          <li>
                            <span class="icon icon-clock-o"></span>
                            2 hours ago
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-img overlay">
                      <div class="overlay-image">
                        <img class="img-responsive" src="../img/7397509215.jpg" alt="Paris, France">
                      </div>
                      <div class="overlay-content bg-info-a75">
                        <div class="fh text-center">
                          <div class="fh-m">
                            <div class="card-body">
                              <h3 class="card-title">Paris, France</h3>
                              <p class="card-text">MONDAY June 16, 2017</p>
                            </div>
                            <div class="card-icon">
                              <span class="icon-works sq-96">&#118;</span>
                            </div>
                            <div class="card-body">
                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi vitae sed qui rerum at voluptatibus...</p>
                              <ul class="list-inline">
                                <li>
                                  <a class="link-inverted" href="#">
                                    <span class="icon icon-heart-o"></span>
                                    2,778
                                  </a>
                                </li>
                                <li>
                                  <a class="link-inverted" href="#">
                                    <span class="icon icon-comment-o"></span>
                                    361
                                  </a>
                                </li>
                                <li>
                                  <span class="icon icon-clock-o"></span>
                                  2 hours ago
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-header">
                  <div class="card-actions">
                    <button type="button" class="card-action card-toggler" title="Collapse"></button>
                    <button type="button" class="card-action card-reload" title="Reload"></button>
                    <button type="button" class="card-action card-remove" title="Remove"></button>
                  </div>
                  <strong>Activity Feed</strong>
                </div>
                <div class="card-body">
                  <div class="card-search">
                    <div class="card-search-box">
                      <form action="#">
                        <div class="form-group">
                          <div class="input-with-icon">
                            <input class="form-control input-thick pill" type="text" placeholder="Search…">
                            <span class="icon icon-search input-icon"></span>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="card-search-results">
                      <div class="timeline">
                        <div class="timeline-item">
                          <div class="timeline-segment">
                            <div class="timeline-divider"></div>
                          </div>
                          <div class="timeline-content"></div>
                        </div>
                        <div class="timeline-item">
                          <div class="timeline-segment">
                            <div class="timeline-media bg-primary circle sq-24">
                              <div class="icon icon-check"></div>
                            </div>
                          </div>
                          <div class="timeline-content">
                            <div class="timeline-row">
                              <a href="#">Rebecca Fox</a>
                              <small>(13 minutes ago)</small>
                            </div>
                            <div class="timeline-row">
                              <p>
                                <small>Reprehenderit cum accusantium quos, omnis, ab eos obcaecati, perspiciatis odio voluptatum porro ducimus ullam perferendis provident deleniti doloribus non alias est nesciunt... <a href="#">more</a></small>
                              </p>
                              <div class="media">
                                <div class="media-left">
                                  <img class="img-circle" width="32" height="32" src="../img/0310728269.jpg" alt="Daniel Taylor">
                                </div>
                                <div class="media-body">
                                  <h5 class="m-y-0">Daniel Taylor</h5>
                                  <p>
                                    <small>replied after 9 minutes</small>
                                  </p>
                                </div>
                              </div>
                              <p>
                                <a href="#">
                                  <span class="icon icon-reply"></span> View the correspondence</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="timeline-item">
                          <div class="timeline-segment">
                            <div class="timeline-media bg-primary circle sq-24">
                              <div class="icon icon-flag"></div>
                            </div>
                          </div>
                          <div class="timeline-content">
                            <div class="timeline-row">
                              <a href="#">Dave Hamilton</a>
                              <small>(21 minutes ago)</small>
                            </div>
                            <div class="timeline-row">
                              <p>
                                <small>Temporibus, dolores facilis id harum itaque magni minima, expedita saepe aliquam unde dolorem corporis iusto atque esse consequatur, magnam quidem voluptate beatae... <a href="#">more</a></small>
                              </p>
                              <div class="media">
                                <div class="media-left">
                                  <img class="img-circle" width="32" height="32" src="../img/0180441436.jpg" alt="Teddy Wilson">
                                </div>
                                <div class="media-body">
                                  <h5 class="m-y-0">Teddy Wilson</h5>
                                  <p>
                                    <small>replied after 12 minutes</small>
                                  </p>
                                </div>
                              </div>
                              <p>
                                <a href="#">
                                  <span class="icon icon-reply"></span> View the correspondence</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="timeline-item">
                          <div class="timeline-segment">
                            <div class="timeline-media bg-primary circle sq-24">
                              <div class="icon icon-comments"></div>
                            </div>
                          </div>
                          <div class="timeline-content">
                            <div class="timeline-row">
                              <a href="#">Jason Saunders</a>
                              <small>(22 minutes ago)</small>
                            </div>
                            <div class="timeline-row">
                              <p>
                                <small>Similique voluptatibus eligendi, et doloremque voluptatum quas rem quisquam accusantium alias assumenda esse laboriosam vel hic temporibus amet, ad est minus delectus... <a href="#">more</a></small>
                              </p>
                              <div class="media">
                                <div class="media-left">
                                  <img class="img-circle" width="32" height="32" src="../img/1099386850.jpg" alt="Jessica Brown">
                                </div>
                                <div class="media-body">
                                  <h5 class="m-y-0">Jessica Brown</h5>
                                  <p>
                                    <small>replied after 11 minutes</small>
                                  </p>
                                </div>
                              </div>
                              <p>
                                <a href="#">
                                  <span class="icon icon-reply"></span> View the correspondence</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="timeline-item">
                          <div class="timeline-segment">
                            <div class="timeline-media bg-primary circle sq-24">
                              <div class="icon icon-check"></div>
                            </div>
                          </div>
                          <div class="timeline-content">
                            <div class="timeline-row">
                              <a href="#">Adelaide Kane</a>
                              <small>(37 minutes ago)</small>
                            </div>
                            <div class="timeline-row">
                              <p>
                                <small>Voluptatem delectus repudiandae harum asperiores necessitatibus quam fuga perspiciatis facilis voluptas molestias optio, eius assumenda.... <a href="#">more</a></small>
                              </p>
                              <div class="media">
                                <div class="media-left">
                                  <img class="img-circle" width="32" height="32" src="../img/0310728269.jpg" alt="Daniel Taylor">
                                </div>
                                <div class="media-body">
                                  <h5 class="m-y-0">Daniel Taylor</h5>
                                  <p>
                                    <small>replied after 9 minutes</small>
                                  </p>
                                </div>
                              </div>
                              <p>
                                <a href="#">
                                  <span class="icon icon-reply"></span> View the correspondence</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="timeline-item">
                          <div class="timeline-segment">
                            <div class="timeline-media bg-primary circle sq-24">
                              <div class="icon icon-check"></div>
                            </div>
                          </div>
                          <div class="timeline-content">
                            <div class="timeline-row">
                              <a href="#">Ruby Dixon</a>
                              <small>(42 minutes ago)</small>
                            </div>
                            <div class="timeline-row">
                              <p>
                                <small>Quaerat magni voluptatum eius, sint deleniti nobis, vitae mollitia consequuntur modi adipisci consequatur amet illo possimus aperiam, similique aut minus inventore in... <a href="#">more</a></small>
                              </p>
                              <div class="media">
                                <div class="media-left">
                                  <img class="img-circle" width="32" height="32" src="../img/0872116906.jpg" alt="Emma Lewis">
                                </div>
                                <div class="media-body">
                                  <h5 class="m-y-0">Emma Lewis</h5>
                                  <p>
                                    <small>replied after 8 minutes</small>
                                  </p>
                                </div>
                              </div>
                              <p>
                                <a href="#">
                                  <span class="icon icon-reply"></span> View the correspondence</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="timeline-item">
                          <div class="timeline-segment">
                            <div class="timeline-media bg-primary circle sq-24">
                              <div class="icon icon-comments"></div>
                            </div>
                          </div>
                          <div class="timeline-content">
                            <div class="timeline-row">
                              <a href="#">Abbey Robinson</a>
                              <small>(1 hour ago)</small>
                            </div>
                            <div class="timeline-row">
                              <p>
                                <small>Tempore quasi aliquid, numquam architecto perspiciatis, ea, minus distinctio ratione fugiat odio odit laboriosam explicabo blanditiis. In nesciunt aliquam consequatur possimus ad... <a href="#">more</a></small>
                              </p>
                              <div class="media">
                                <div class="media-left">
                                  <img class="img-circle" width="32" height="32" src="../img/0299419341.jpg" alt="Harry Jones">
                                </div>
                                <div class="media-body">
                                  <h5 class="m-y-0">Harry Jones</h5>
                                  <p>
                                    <small>replied after 10 minutes</small>
                                  </p>
                                </div>
                              </div>
                              <p>
                                <a href="#">
                                  <span class="icon icon-reply"></span> View the correspondence</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-heading">
                    <button class="btn btn-primary btn-sm btn-block" type="button">See all</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
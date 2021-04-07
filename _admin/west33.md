---
layout: admintemplate
title: Dashboard
permalink: /admin/form-controls.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="row">
            <div class="col-md-12">
              <p><small>In addition to the basic styling that Bootstrap offers for every element of a form, we have expanded this styling with custom <code>selects</code>, <code>checkboxes</code>, <code>radios</code>, <code>switches</code> and a few additional classes.<span class="nowrap">Please see <a href="toggles.html">Toggles page</a></span>.</small></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="demo-form-wrapper">
                <form class="form form-horizontal">
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-1">Text input</label>
                    <div class="col-sm-9">
                      <input id="form-control-1" class="form-control" type="text">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-2">Password input</label>
                    <div class="col-sm-9">
                      <input id="form-control-2" class="form-control" type="password" value="test.1234">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-3">Input with placeholder</label>
                    <div class="col-sm-9">
                      <input id="form-control-3" class="form-control" type="email" placeholder="Email Address">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-4">Predefined value</label>
                    <div class="col-sm-9">
                      <input id="form-control-4" class="form-control" type="url" value="language:JavaScript">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-5">Read only input</label>
                    <div class="col-sm-9">
                      <input id="form-control-5" class="form-control" type="email" value="teddy.wilson@elephant.theme" readonly="readonly">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Static input</label>
                    <div class="col-sm-9">
                      <p class="form-control-static">teddy.wilson@elephant.theme</p>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-6">Select</label>
                    <div class="col-sm-9">
                      <select id="form-control-6" class="form-control">
                        <option value="c-plus-plus">C++</option>
                        <option value="css">CSS</option>
                        <option value="java">Java</option>
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                        <option value="python">Python</option>
                        <option value="ruby">Ruby</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-7">Multiple select</label>
                    <div class="col-sm-9">
                      <select id="form-control-7" class="form-control" multiple="multiple">
                        <option value="c-plus-plus">C++</option>
                        <option value="css">CSS</option>
                        <option value="java">Java</option>
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                        <option value="python">Python</option>
                        <option value="ruby">Ruby</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-8">Textarea</label>
                    <div class="col-sm-9">
                      <textarea id="form-control-8" class="form-control" rows="3"></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-9">File input</label>
                    <div class="col-sm-9">
                      <input id="form-control-9" type="file" accept="image/*" multiple="multiple">
                      <p class="help-block">
                        <small>Unlimited number of files can be uploaded to this field. Allowed types: png gif jpg jpeg.</small>
                      </p>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Checkboxes and radios</label>
                    <div class="col-sm-9">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" name="mode" checked="checked"> Put site into maintenance mode
                        </label>
                      </div>
                      <div class="radio">
                        <label>
                          <input type="radio" name="message" value="none"> None
                        </label>
                      </div>
                      <div class="radio">
                        <label>
                          <input type="radio" name="message" value="all" checked="checked"> All messages
                        </label>
                      </div>
                      <div class="radio">
                        <label>
                          <input type="radio" name="message" value="some"> Errors and warnings
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="demo-form-wrapper">
                <form class="form form-horizontal">
                  <div class="form-group form-group-lg">
                    <label class="col-sm-3 control-label" for="form-control-10">Large label</label>
                    <div class="col-sm-9">
                      <input id="form-control-10" class="form-control" type="text" placeholder="Large input">
                    </div>
                  </div>
                  <div class="form-group form-group-md">
                    <label class="col-sm-3 control-label" for="form-control-11">Default label</label>
                    <div class="col-sm-9">
                      <input id="form-control-11" class="form-control" type="text" placeholder="Default input">
                    </div>
                  </div>
                  <div class="form-group form-group-sm">
                    <label class="col-sm-3 control-label" for="form-control-12">Small label</label>
                    <div class="col-sm-9">
                      <input id="form-control-12" class="form-control" type="text" placeholder="Small input">
                    </div>
                  </div>
                </form>
              </div>
              <div class="demo-form-wrapper">
                <form class="form form-horizontal">
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-13">Input with success</label>
                    <div class="col-sm-9 has-success has-feedback">
                      <input id="form-control-13" class="form-control" type="text">
                      <span class="form-control-feedback" aria-hidden="true">
                        <span class="icon icon-check"></span>
                      </span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-14">Input with warning</label>
                    <div class="col-sm-9 has-warning has-feedback">
                      <input id="form-control-14" class="form-control" type="text">
                      <span class="form-control-feedback" aria-hidden="true">
                        <span class="icon icon-exclamation-triangle"></span>
                      </span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-15">Input with error</label>
                    <div class="col-sm-9 has-error has-feedback">
                      <input id="form-control-15" class="form-control" type="text">
                      <span class="form-control-feedback" aria-hidden="true">
                        <span class="icon icon-times"></span>
                      </span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-16">Input with help text</label>
                    <div class="col-sm-9 has-error has-feedback">
                      <input id="form-control-16" class="form-control" type="password" value="test">
                      <span class="form-control-feedback" aria-hidden="true">
                        <span class="icon icon-times"></span>
                      </span>
                      <p class="help-block">Password is too short and needs at least one number.</p>
                    </div>
                  </div>
                </form>
              </div>
              <div class="demo-form-wrapper">
                <form class="form form-horizontal">
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-17">Input groups</label>
                    <div class="col-sm-9">
                      <div class="input-group">
                        <input id="form-control-17" class="form-control" type="text" placeholder="eg. teddy.wilson">
                        <span class="input-group-addon">@elephant.theme</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-xs-4 col-sm-3 col-sm-offset-3">
                      <div class="input-group">
                        <span class="input-group-addon">$</span>
                        <input class="form-control" type="text" value="1.00" aria-label="US Dollar">
                      </div>
                    </div>
                    <div class="col-xs-4 col-sm-3">
                      <div class="input-group">
                        <span class="input-group-addon">€</span>
                        <input class="form-control" type="text" value="0.89" aria-label="Euro">
                      </div>
                    </div>
                    <div class="col-xs-4 col-sm-3">
                      <div class="input-group">
                        <span class="input-group-addon">£</span>
                        <input class="form-control" type="text" value="0.69" aria-label="British Pound">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <span class="icon icon-lock"></span>
                        </span>
                        <input class="form-control" type="password" placeholder="Password">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3">
                      <div class="input-group">
                        <div class="input-group-btn dropdown">
                          <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown" type="button">
                            GitHub
                            <span class="caret"></span>
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a href="#">
                                <div class="media">
                                  <div class="media-left">
                                    <span class="icon icon-github icon-2x icon-fw"></span>
                                  </div>
                                  <div class="media-body">
                                    GitHub
                                    <br>
                                    <small>Clone with an SSH key from your GitHub settings.</small>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div class="media">
                                  <div class="media-left">
                                    <span class="icon icon-bitbucket icon-2x icon-fw"></span>
                                  </div>
                                  <div class="media-body">
                                    Bitbucket
                                    <br>
                                    <small>Clone with an SSH key from your Bitbucket settings.</small>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <input class="form-control" type="text" value="https://github.com/elephant.theme">
                        <div class="input-group-btn">
                          <button class="btn btn-primary" title="Copy to clipboard" data-container="body" data-placement="top" data-toggle="tooltip" type="button">
                            <span class="icon icon-copy icon-fw"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="demo-form-wrapper">
                <form class="form form-horizontal">
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-18">Thick border</label>
                    <div class="col-sm-9">
                      <input id="form-control-18" class="form-control input-thick" type="text">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-19">Rounded corners</label>
                    <div class="col-sm-9">
                      <input id="form-control-19" class="form-control input-pill" type="text">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-20">Input with contrast</label>
                    <div class="col-sm-9">
                      <input id="form-control-20" class="form-control input-contrast" type="text">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-21">Custom select</label>
                    <div class="col-sm-9">
                      <select id="form-control-21" class="custom-select">
                        <option value="" selected="selected">Language</option>
                        <option value="c-plus-plus">C++</option>
                        <option value="css">CSS</option>
                        <option value="java">Java</option>
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                        <option value="python">Python</option>
                        <option value="ruby">Ruby</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-22">Custom file input</label>
                    <div class="col-sm-9">
                      <div class="input-group">
                        <input class="form-control" type="text" placeholder="No file chosen">
                        <span class="input-group-btn">
                          <label class="btn btn-primary file-upload-btn">
                            <input id="form-control-22" class="file-upload-input" type="file" name="file">
                            <span class="icon icon-paperclip icon-lg"></span>
                          </label>
                        </span>
                      </div>
                      <p class="help-block">
                        <small>Click the button next to the input field.</small>
                      </p>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Custom checkboxes,
                      <br>radios and switches</label>
                    <div class="col-sm-9">
                      <div class="custom-controls-stacked m-t">
                        <label class="custom-control custom-control-primary custom-checkbox">
                          <input class="custom-control-input" type="checkbox" name="mode" checked="checked">
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-label">Put site into maintenance mode</span>
                        </label>
                        <label class="custom-control custom-control-primary custom-radio">
                          <input class="custom-control-input" type="radio" name="message" value="none">
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-label">None</span>
                        </label>
                        <label class="custom-control custom-control-primary custom-radio">
                          <input class="custom-control-input" type="radio" name="message" value="all" checked="checked">
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-label">All messages</span>
                        </label>
                        <label class="custom-control custom-control-primary custom-radio">
                          <input class="custom-control-input" type="radio" name="message" value="some">
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-label">Errors and warnings</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3">
                      <label class="switch switch-primary">
                        <input class="switch-input" type="checkbox" checked="checked">
                        <span class="switch-track"></span>
                        <span class="switch-thumb"></span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="demo-form-wrapper">
                <form class="form form-horizontal">
                  <div class="form-group form-group-lg">
                    <label class="col-sm-3 control-label" for="form-control-23">Custom select</label>
                    <div class="col-sm-9">
                      <select id="form-control-23" class="custom-select custom-select-lg">
                        <option value="" selected="">--Large--</option>
                        <option value="c-plus-plus">C++</option>
                        <option value="css">CSS</option>
                        <option value="java">Java</option>
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                        <option value="python">Python</option>
                        <option value="ruby">Ruby</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3">
                      <select class="custom-select">
                        <option value="" selected="">--Default--</option>
                        <option value="c-plus-plus">C++</option>
                        <option value="css">CSS</option>
                        <option value="java">Java</option>
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                        <option value="python">Python</option>
                        <option value="ruby">Ruby</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3">
                      <select class="custom-select custom-select-sm">
                        <option value="" selected="">--Small--</option>
                        <option value="c-plus-plus">C++</option>
                        <option value="css">CSS</option>
                        <option value="java">Java</option>
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                        <option value="python">Python</option>
                        <option value="ruby">Ruby</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div class="demo-form-wrapper">
                <form class="form form-horizontal">
                  <div class="form-group">
                    <label class="col-sm-3 control-label" for="form-control-24">Input with icon</label>
                    <div class="col-sm-9">
                      <div class="input-with-icon">
                        <input id="form-control-24" class="form-control" type="email" placeholder="Email address">
                        <span class="icon icon-envelope input-icon"></span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3">
                      <div class="input-with-icon">
                        <input class="form-control" type="password" placeholder="Password">
                        <span class="icon icon-lock input-icon"></span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3">
                      <div class="input-with-icon">
                        <div class="input-group">
                          <input class="form-control" type="password" placeholder="Password">
                          <span class="input-group-addon">
                            <label class="custom-control custom-control-primary custom-checkbox">
                              <input class="custom-control-input" type="checkbox">
                              <span class="custom-control-indicator"></span>
                              <span class="custom-control-label">Show</span>
                            </label>
                          </span>
                        </div>
                        <span class="icon icon-lock input-icon"></span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-group-lg">
                    <div class="col-sm-9 col-sm-offset-3">
                      <div class="input-with-icon">
                        <input class="form-control input-thick pill" type="text" placeholder="Search&hellip;">
                        <span class="icon icon-search input-icon"></span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-group-lg">
                    <div class="col-sm-9 col-sm-offset-3">
                      <div class="input-with-icon">
                        <input class="form-control input-thick pill" type="text" placeholder="Search&hellip;">
                        <span class="spinner spinner-default spinner-sm input-icon"></span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
---
layout: admintemplate1
title: Dashboard
permalink: /admin/signup-1.html
stylesheet: ../css/signup-1.min.css
---
<div class="signup-body">
        <a class="signup-brand" href="index.html">
          <img class="img-responsive" src="../img/logo.svg" alt="Elephant">
        </a>
        <p class="signup-heading">
          <em>Get started with a free account. 30 day free trial, unlimited users. Your card won't be charged anything before the free trial is over and you can cancel anytime.</em>
        </p>
        <div class="signup-form">
          <form class="form-wizard" data-toggle="validator">
            <ul class="steps">
              <li class="step col-xs-4 active">
                <a class="step-segment" href="#step-1" data-toggle="tab">
                  <span class="step-icon icon icon-user"></span>
                </a>
                <div class="step-content">
                  <strong class="hidden-xs">Personal account</strong>
                </div>
              </li>
              <li class="step col-xs-4">
                <a class="step-segment" href="#step-2" data-toggle="tab">
                  <span class="step-icon icon icon-cubes"></span>
                </a>
                <div class="step-content">
                  <strong class="hidden-xs">Choose plan</strong>
                </div>
              </li>
              <li class="step col-xs-4">
                <a class="step-segment" href="#step-3" data-toggle="tab">
                  <span class="step-icon icon icon-credit-card"></span>
                </a>
                <div class="step-content">
                  <strong class="hidden-xs">Payment details</strong>
                </div>
              </li>
            </ul>
            <div class="tab-content">
              <div id="step-1" class="tab-pane active">
                <h4 class="tab-pane-heading">
                  <span>Sign up with your email address</span>
                </h4>
                <div class="row">
                  <div class="col-sm-8 col-sm-offset-2">
                    <div class="form-group">
                      <label for="email" class="control-label">Email address</label>
                      <input id="email" class="form-control" type="email" name="email" spellcheck="false" autocomplete="off" data-rule-required="true" data-rule-email="true" data-msg-required="Please enter your email address.">
                      <small class="help-block">You will occasionally receive account related emails.</small>
                    </div>
                    <div class="form-group">
                      <label for="username" class="control-label">Username</label>
                      <input id="username" class="form-control" type="text" name="username" spellcheck="false" autocomplete="off" data-rule-required="true" data-rule-alphanumeric="true" data-msg-required="Please enter your username." data-msg-alphanumeric="Username must be alpha-numeric characters, and underscores.">
                      <small class="help-block">Only letters, numbers, and underscores are allowed.</small>
                    </div>
                    <div class="form-group">
                      <label for="password" class="control-label">Password</label>
                      <div class="input-group">
                        <input id="password" class="form-control" type="password" name="password" data-rule-required="true" data-rule-minlength="6" data-msg-required="Please enter your password." data-msg-minlength="Password must be 6 characters or more.">
                        <span class="input-group-addon">
                          <label class="custom-control custom-control-primary custom-checkbox">
                            <input class="custom-control-input" type="checkbox" name="password_toggler">
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-label">Show</span>
                          </label>
                        </span>
                      </div>
                      <small class="help-block">6-character minimum; case sensitive.</small>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary btn-block btn-next" type="button">Create an account</button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="step-2" class="tab-pane">
                <h4 class="tab-pane-heading">
                  <span>Choose your personal plan</span>
                </h4>
                <div class="row">
                  <div class="col-xs-12 col-sm-4">
                    <div class="pricing-card">
                      <div class="pricing-card-header bg-primary">
                        <h4 class="m-y-sm">Elephant #1</h4>
                      </div>
                      <div class="pricing-card-body">
                        <h2 class="pricing-card-price">
                          <span class="pricing-card-currency">$</span>9.99
                          <span class="pricing-card-unit">/mo</span>
                        </h2>
                        <ul class="pricing-card-details">
                          <li>1GB / 1 cpu</li>
                          <li>30GB SSD Storage</li>
                          <li>2TB Transfer</li>
                        </ul>
                        <label class="custom-control custom-control-primary custom-radio">
                          <input class="custom-control-input" type="radio" name="plan" value="plan-1">
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-label">Choose this</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="pricing-card">
                      <div class="pricing-card-header bg-primary">
                        <h4 class="m-y-sm">Elephant #2</h4>
                      </div>
                      <div class="pricing-card-body">
                        <h2 class="pricing-card-price">
                          <span class="pricing-card-currency">$</span>19.98
                          <span class="pricing-card-unit">/mo</span>
                        </h2>
                        <ul class="pricing-card-details">
                          <li>2GB / 2 cpu</li>
                          <li>60GB SSD Storage</li>
                          <li>4TB Transfer</li>
                        </ul>
                        <label class="custom-control custom-control-primary custom-radio">
                          <input class="custom-control-input" type="radio" name="plan" value="plan-2" checked="checked">
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-label">Choose this</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="pricing-card">
                      <div class="pricing-card-header bg-primary">
                        <h4 class="m-y-sm">Elephant #3</h4>
                      </div>
                      <div class="pricing-card-body">
                        <h2 class="pricing-card-price">
                          <span class="pricing-card-currency">$</span>29.97
                          <span class="pricing-card-unit">/mo</span>
                        </h2>
                        <ul class="pricing-card-details">
                          <li>4GB / 2 cpu</li>
                          <li>90GB SSD Storage</li>
                          <li>8TB Transfer</li>
                        </ul>
                        <label class="custom-control custom-control-primary custom-radio">
                          <input class="custom-control-input" type="radio" name="plan" value="plan-3">
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-label">Choose this</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group text-center">
                  <p>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe unde, quis nemo totam porro illum ex. Distinctio, soluta, perferendis vitae sint amet atque, cumque quis doloremque obcaecati rem possimus nobis!</small>
                  </p>
                  <button class="btn btn-primary btn-pill btn-next" type="button">Continue</button>
                </div>
              </div>
              <div id="step-3" class="tab-pane">
                <h4 class="tab-pane-heading">
                  <span>Enter your payment details</span>
                </h4>
                <div class="row">
                  <div class="col-sm-8 col-sm-offset-2">
                    <div class="form-group">
                      <label for="creditcard-type" class="control-label">Card type</label>
                      <select id="creditcard-type" class="custom-select" name="creditcard_type" data-rule-required="true" data-msg-required="Please select your credit card type.">
                        <option value="" selected="selected">Select a card</option>
                        <option value="v">Visa</option>
                        <option value="m">MasterCard</option>
                        <option value="a">American Express</option>
                        <option value="d">Discover</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="creditcard-number" class="control-label">Card number</label>
                      <input id="creditcard-number" class="form-control" type="text" name="creditcard_number" data-rule-required="true" data-rule-creditcard="true" data-msg-required="Please enter your credit card number." data-msg-creditcard="Please enter a valid credit card number.">
                    </div>
                    <div class="form-group">
                      <div class="row gutter-xs">
                        <div class="col-xs-6">
                          <div class="form-group">
                            <label for="creditcard-expdate-month" class="control-label">Expiration Date</label>
                            <div class="row gutter-xs">
                              <div class="col-xs-6">
                                <select id="creditcard-expdate-month" class="custom-select" name="creditcard_expdate_month">
                                  <option value="1">01</option>
                                  <option value="2">02</option>
                                  <option value="3">03</option>
                                  <option value="4">04</option>
                                  <option value="5">05</option>
                                  <option value="6">06</option>
                                  <option value="7">07</option>
                                  <option value="8">08</option>
                                  <option value="9" selected="selected">09</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                                </select>
                              </div>
                              <div class="col-xs-6">
                                <select class="custom-select" name="creditcard_expdate_year">
                                  <option value="2017" selected="selected">2017</option>
                                  <option value="2017">2017</option>
                                  <option value="2018">2018</option>
                                  <option value="2019">2019</option>
                                  <option value="2020">2020</option>
                                  <option value="2021">2021</option>
                                  <option value="2022">2022</option>
                                  <option value="2023">2023</option>
                                  <option value="2024">2024</option>
                                  <option value="2025">2025</option>
                                  <option value="2026">2026</option>
                                  <option value="2027">2027</option>
                                  <option value="2028">2028</option>
                                  <option value="2029">2029</option>
                                  <option value="2030">2030</option>
                                  <option value="2031">2031</option>
                                  <option value="2032">2032</option>
                                  <option value="2033">2033</option>
                                  <option value="2034">2034</option>
                                  <option value="2035">2035</option>
                                  <option value="2036">2036</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-5 col-xs-offset-1">
                          <div class="form-group">
                            <label for="creditcard-csc" class="control-label">Card Security Code</label>
                            <input id="creditcard-csc" class="form-control" type="text" name="creditcard_csc" data-rule-required="true" data-rule-minlength="3" data-rule-maxlength="4" data-msg-required="Please enter your credit card CSC (Card Security Code)." data-msg-minlength="Please enter a valid CSC (Card Security Code)" data-msg-maxlength="Please enter a valid CSC (Card Security Code)">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="coupon-code" class="control-label">Coupon code</label>
                      <input id="coupon-code" class="form-control" type="text" name="coupon_code">
                    </div>
                    <div class="form-group">
                      <p>
                        <small>By clicking Submit, you agree to our <a href="#">Terms</a> and that you have read our <a href="#">Data Policy</a>, including our <a href="#">Cookie Use</a>.</small>
                      </p>
                      <button class="btn btn-primary btn-block" type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
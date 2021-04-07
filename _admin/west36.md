---
layout: admintemplate
title: Dashboard
permalink: /admin/form-wizard.html
stylesheet: ../css/animate.min.css
---
<div class="layout-content-body">
          <div class="row">
            <div class="col-lg-12">
              <p><small>The Step component presented below is designed for use in cases where the process is more complex, and in order not to cause confusion the process is divided into steps. This component in this case was used with <a href="http://vinceg.github.io/twitter-bootstrap-wizard/" target="_blank">Bootstrap Wizard</a> plugin but it can also be used with <a href="http://getbootstrap.com/javascript/#tabs" target="_blank">Tabs</a>.</small></p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="demo-form-wrapper">
                <form id="demo-form-wizard-1" novalidate>
                  <ul class="steps">
                    <li class="step col-xs-4 active">
                      <a class="step-segment" href="#tab-1" data-toggle="tab">
                        <span class="step-icon icon icon-user"></span>
                      </a>
                      <div class="step-content">
                        <strong class="hidden-xs">Personal account</strong>
                      </div>
                    </li>
                    <li class="step col-xs-4">
                      <a class="step-segment" href="#tab-2" data-toggle="tab">
                        <span class="step-icon icon icon-cubes"></span>
                      </a>
                      <div class="step-content">
                        <strong class="hidden-xs">Choose plan</strong>
                      </div>
                    </li>
                    <li class="step col-xs-4">
                      <a class="step-segment" href="#tab-3" data-toggle="tab">
                        <span class="step-icon icon icon-credit-card"></span>
                      </a>
                      <div class="step-content">
                        <strong class="hidden-xs">Payment details</strong>
                      </div>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div id="tab-1" class="tab-pane active">
                      <h4 class="text-center m-y-md">
                        <span>Sign up with your email address</span>
                      </h4>
                      <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                          <div class="form-group">
                            <label for="email-1" class="control-label">Email address</label>
                            <input id="email-1" class="form-control" type="email" name="email_1" spellcheck="false" autocomplete="off" data-rule-required="true" data-rule-email="true" data-msg-required="Please enter your email address.">
                            <small class="help-block">You will occasionally receive account related emails.</small>
                          </div>
                          <div class="form-group">
                            <label for="username-1" class="control-label">Username</label>
                            <input id="username-1" class="form-control" type="text" name="username_1" spellcheck="false" autocomplete="off" data-rule-required="true" data-rule-alphanumeric="true" data-msg-required="Please enter your username." data-msg-alphanumeric="Username must be alpha-numeric characters, and underscores.">
                            <small class="help-block">Only letters, numbers, and underscores are allowed.</small>
                          </div>
                          <div class="form-group">
                            <label for="password-1" class="control-label">Password</label>
                            <div class="input-group">
                              <input id="password-1" class="form-control" type="password" name="password_1" data-rule-required="true" data-rule-minlength="6" data-msg-required="Please enter your password." data-msg-minlength="Password must be 6 characters or more.">
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
                    <div id="tab-2" class="tab-pane">
                      <h4 class="text-center m-y-md">
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
                                <input class="custom-control-input" type="radio" name="plan_1" value="plan-1">
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
                                <input class="custom-control-input" type="radio" name="plan_1" value="plan-2" checked="checked">
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
                                <input class="custom-control-input" type="radio" name="plan_1" value="plan-3">
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
                    <div id="tab-3" class="tab-pane">
                      <h4 class="text-center m-y-md">
                        <span>Enter your payment details</span>
                      </h4>
                      <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                          <div class="form-group">
                            <label for="creditcard-type-1" class="control-label">Card type</label>
                            <select id="creditcard-type-1" class="custom-select" name="creditcard_type_1" data-rule-required="true" data-msg-required="Please select your credit card type.">
                              <option value="" selected="selected">Select a card</option>
                              <option value="v">Visa</option>
                              <option value="m">MasterCard</option>
                              <option value="a">American Express</option>
                              <option value="d">Discover</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label for="creditcard-number-1" class="control-label">Card number</label>
                            <input id="creditcard-number-1" class="form-control" type="text" name="creditcard_number_1" data-rule-required="true" data-rule-creditcard="true" data-msg-required="Please enter your credit card number." data-msg-creditcard="Please enter a valid credit card number.">
                          </div>
                          <div class="form-group">
                            <div class="row gutter-xs">
                              <div class="col-xs-6">
                                <div class="form-group">
                                  <label for="creditcard-expdate-month-1" class="control-label">Expiration Date</label>
                                  <div class="row gutter-xs">
                                    <div class="col-xs-6">
                                      <select id="creditcard-expdate-month-1" class="custom-select" name="creditcard_expdate_month_1">
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
                                      <select class="custom-select" name="creditcard_expdate_year_1">
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
                                  <label for="creditcard-csc-1" class="control-label">Card Security Code</label>
                                  <input id="creditcard-csc-1" class="form-control" type="text" name="creditcard_csc_1" data-rule-required="true" data-rule-minlength="3" data-rule-maxlength="4" data-msg-required="Please enter your credit card CSC (Card Security Code)." data-msg-minlength="Please enter a valid CSC (Card Security Code)" data-msg-maxlength="Please enter a valid CSC (Card Security Code)">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="coupon-code-1" class="control-label">Coupon code</label>
                            <input id="coupon-code-1" class="form-control" type="text" name="coupon_code_1">
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
          </div>
          <div class="text-center m-b">
            <h3 class="m-b-0">With Form Validation</h3>
            <small>The following case does not allow moving to the next step without validating the form in the current step successfully.</small>
          </div>
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="demo-form-wrapper">
                <form id="demo-form-wizard-2" data-toggle="validator">
                  <ul class="steps">
                    <li class="step col-xs-4 active">
                      <a class="step-segment" href="#step-2" data-toggle="tab">
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
                      <h4 class="text-center m-y-md">
                        <span>Sign up with your email address</span>
                      </h4>
                      <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                          <div class="form-group">
                            <label for="email-2" class="control-label">Email address</label>
                            <input id="email-2" class="form-control" type="email" name="email_2" spellcheck="false" autocomplete="off" data-rule-required="true" data-rule-email="true" data-msg-required="Please enter your email address.">
                            <small class="help-block">You will occasionally receive account related emails.</small>
                          </div>
                          <div class="form-group">
                            <label for="username-2" class="control-label">Username</label>
                            <input id="username-2" class="form-control" type="text" name="username_2" spellcheck="false" autocomplete="off" data-rule-required="true" data-rule-alphanumeric="true" data-msg-required="Please enter your username." data-msg-alphanumeric="Username must be alpha-numeric characters, and underscores.">
                            <small class="help-block">Only letters, numbers, and underscores are allowed.</small>
                          </div>
                          <div class="form-group">
                            <label for="password-2" class="control-label">Password</label>
                            <div class="input-group">
                              <input id="password-2" class="form-control" type="password" name="password_2" data-rule-required="true" data-rule-minlength="6" data-msg-required="Please enter your password." data-msg-minlength="Password must be 6 characters or more.">
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
                      <h4 class="text-center m-y-md">
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
                                <input class="custom-control-input" type="radio" name="plan_2" value="plan-1">
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
                                <input class="custom-control-input" type="radio" name="plan_2" value="plan-2" checked="checked">
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
                                <input class="custom-control-input" type="radio" name="plan_2" value="plan-3">
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
                      <h4 class="text-center m-y-md">
                        <span>Enter your payment details</span>
                      </h4>
                      <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                          <div class="form-group">
                            <label for="creditcard-type-2" class="control-label">Card type</label>
                            <select id="creditcard-type-2" class="custom-select" name="creditcard_type_2" data-rule-required="true" data-msg-required="Please select your credit card type.">
                              <option value="" selected="selected">Select a card</option>
                              <option value="v">Visa</option>
                              <option value="m">MasterCard</option>
                              <option value="a">American Express</option>
                              <option value="d">Discover</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label for="creditcard-number-2" class="control-label">Card number</label>
                            <input id="creditcard-number-2" class="form-control" type="text" name="creditcard_number_2" data-rule-required="true" data-rule-creditcard="true" data-msg-required="Please enter your credit card number." data-msg-creditcard="Please enter a valid credit card number.">
                          </div>
                          <div class="form-group">
                            <div class="row gutter-xs">
                              <div class="col-xs-6">
                                <div class="form-group">
                                  <label for="creditcard-expdate-month-2" class="control-label">Expiration Date</label>
                                  <div class="row gutter-xs">
                                    <div class="col-xs-6">
                                      <select id="creditcard-expdate-month-2" class="custom-select" name="creditcard_expdate_month_2">
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
                                      <select class="custom-select" name="creditcard_expdate_year_2">
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
                                  <label for="creditcard-csc-2" class="control-label">Card Security Code</label>
                                  <input id="creditcard-csc-2" class="form-control" type="text" name="creditcard_csc_2" data-rule-required="true" data-rule-minlength="3" data-rule-maxlength="4" data-msg-required="Please enter your credit card CSC (Card Security Code)." data-msg-minlength="Please enter a valid CSC (Card Security Code)" data-msg-maxlength="Please enter a valid CSC (Card Security Code)">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="coupon-code-2" class="control-label">Coupon code</label>
                            <input id="coupon-code-2" class="form-control" type="text" name="coupon_code_2">
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
          </div>
        </div>
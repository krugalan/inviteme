import React from 'react'

export const ConfirmationScreen = () => {
    return (
        <div class="sign-up-1">
            <div class="container">
                <div class="row justify-content-lg-end justify-content-center">
                    <div class="col-xl-5 col-lg-6 col-md-8">
                        <div class="sign-up-1-box  justify-content-lg-end">
                            <div class="heading text-center">
                                <h2>Sign up</h2>
                                <p>No credit card required</p>
                            </div>
                            <form action="#">
                                <div class="form-group">
                                    <label>Name*</label>
                                    <input type="text" name="name" id="name" class="form-control" placeholder="ex: Livia Siphron" />
                                </div>
                                <div class="form-group">
                                    <label>Email*</label>
                                    <input type="email" name="email" id="email" class="form-control" placeholder="ex: john@email.com" />
                                </div>
                                <div class="form-group">
                                    <label>Password*</label>
                                    <input type="text" name="password" id="password" class="form-control" placeholder="i.e. IAmthepreciouspass123 " />
                                </div>
                                <div class="form-group">
                                    <label>Confirm Password*</label>
                                    <input type="text" name="password2" id="password2" class="form-control" placeholder="i.e. IAmthepreciouspass123 " />
                                </div>
                                <div class="keep-sign-area">
                                    <div class="check-form d-inline-block">
                                        <label for="terms-check" class="check-input-control d-flex align-items-center mb-0">
                                            <input class="d-none" type="checkbox" id="terms-check" />
                                            <span class="checkbox checkbox-2 rounded-check-box "></span>
                                            <span class="remember-text">I agree to the <a href="#">Terms & Conditions</a></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="sign-in-log-btn">
                                    <button class="btn focus-reset">Submit</button>
                                </div>
                                <div class="create-new-acc-text text-center">
                                    <p>Already have an account? <a href="sign-in-1.html">Sign in</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

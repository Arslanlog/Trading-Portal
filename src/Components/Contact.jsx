import React from "react";
const Contact = () => {
    return (
        <>
            <div className="Contact-Info">
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                {/*---- Include the above in your HEAD tag --------*/}
                <div className="container register">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            <h3>Welcome</h3>
                            <p>You are 30 seconds away from earning your own money!</p>
                        </div>
                        <div className="col-md-9 register-right">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h3 className="register-heading">Contact Us</h3>
                                    <div className="row register-form">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name *" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name *" />
                                            </div>
                                            <div className="form-group">
                                                <div className="maxl">
                                                    <label className="radio inline">
                                                        <input type="radio" name="gender" defaultValue="male" defaultChecked />
                                                        <span> Male </span>
                                                    </label>
                                                    <label className="radio inline">
                                                        <input type="radio" name="gender" defaultValue="female" />
                                                        <span>Female </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Your Email *" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" minLength={10} maxLength={10} name="txtEmpPhone" className="form-control" placeholder="Your Phone *" />
                                            </div>
                                            <div className="form-group">
                                                <textarea type="text" className="form-control" placeholder="Enter Your Answer *"  />
                                            </div>
                                            <input type="submit" className="btn btn-outline-danger" defaultValue="Register" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Contact;
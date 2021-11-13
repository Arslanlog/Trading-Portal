import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className="foter-div">
                <div className="Fot-sec1" >
                    <div> <img src="images/123.png" alt="" height="100px" width="100px" /></div>
                    <div className="fot-sec1-sum">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum eos officia doloremque a ullam quidem esse unde dolores eveniet quo veritatis, similique vitae soluta necessitatibus modi ipsam voluptatem vel?</p>
                    </div>
                    <div>
                        <div className="media-icons">
                            <Link to="#"><i className="fab fa-facebook-f" /></Link>
                            <Link to="#"><i className="fab fa-twitter" /></Link>
                            <Link to="#"><i className="fab fa-instagram" /></Link>
                            <Link to="#"><i className="fab fa-youtube" /></Link>
                        </div>
                    </div>
                </div>
                <div className="fot-sec">
                    <div className="lable">
                        <p>Top Companies</p>
                    </div>
                    <div className="companies" >
                        <ul>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Company 1 </Link></li>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Company 2 </Link></li>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Company 3 </Link></li>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Company 4 </Link></li>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Company 5 </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="fot-sec">
                    <div className="lable">
                        <p>Top Products</p>
                    </div>
                    <div className="companies" >
                        <ul>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Product 1 </Link></li>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Product 2 </Link></li>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Product 3 </Link></li>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Product 4 </Link></li>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Product 5 </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="fot-sec">
                    <div className="lable">
                        <p>Top Dealers</p>
                    </div>
                    <div className="companies" >
                        <ul>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Dealer 1 </Link></li>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Dealer 2 </Link></li>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Dealer 3 </Link></li>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Dealer 4 </Link></li>
                            <li> <Link to="#"> <i class="fa fa-angle-double-right" aria-hidden="true"></i> Dealer 5 </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

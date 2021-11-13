import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CompDetail from "../Cards/CompDetail"
const CompanyCards = (props) => {
    // const [show, setShow] = useState(false);
    // function toggle(){
    //     if(show){
    //         setShow(false)
    //     }
    //     else{
    //         setShow(true)
    //     }
    // }
    return (
        <>
            <div className="card mb-3">
                <div className="card-img-top" >
                <Link to="#"><img src={props.imgsrc} style={{height:"150px",width:"200px"}} alt="Card image cap" /></Link>
                <span className="span1">Compny Name</span>
                
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.heading}</h5>
                    <p className="card-text">{props.paragraph}</p>
                     <button type="submit" className="btn btn-outline-danger">Read More</button>                      
                </div>
            </div>
            {/* {
                show === false? null:<CompDetail/>
            } */}


        </>
    )
}
export default CompanyCards


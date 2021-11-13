import React from 'react';
import Charts from './Cards/Charts';
import CardsData from './Cards/CardsData'
import CompanyCards from './Cards/CompanyCards';
import SrchBar from './Cards/SrchBar';
import SearchFilter from '../Components/SearchFilter';

const Section = () => {
    return (
        <>
            <section>
                <Charts />
                <Charts />
                <div className="srchBar">
                    <SrchBar />
                </div>
                <SearchFilter/>
                <div className="content-div">
                    <div className="Adds-container">
                        <img src="images/1413.jpg" style={{ width: "100%" }} alt="" />
                        <img src="images/1413.jpg"  style={{ width: "100%" }}alt="" />
                        <img src="images/1413.jpg" style={{ width: "100%" }}  alt="" />

                    </div>
                    <div style={{ width: "60%" }} >
                        {
                            CardsData.map((val) => {
                                return (
                                    <>
                                        <CompanyCards
                                            imgsrc={val.imgsrc}
                                            heading={val.heading}
                                            paragraph={val.paragraph}
                                            btn={val.btn}
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="Adds-container">
                        <div className="adds">
                            <img src="images/pic2.png" style={{ width: "100%" }} alt="" />
                            <img src="images/pic2.png" style={{ width: "100%" }} alt="" />
                            <img src="images/pic2.png" style={{ width: "100%" }} alt="" />
                            <img src="images/pic2.png" style={{ width: "100%" }} alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Section

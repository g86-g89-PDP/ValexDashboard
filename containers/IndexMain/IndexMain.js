import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Maps from '../../public/images/maps.png'
import { IndexData } from './IndexData'
import { IndexWrapper } from './IndexWrapper'
import { Bar } from 'react-chartjs-2';
import { datas, options } from './IndexData'





const IndexMain = () => {

    return (
        <>
            <IndexWrapper className="main-container">
                <div className="indexMainPage">
                    <div className="header  container-fluid">
                        <div>
                            <h4 className="p-0 m-0" >Hi, welcome back! </h4>
                            <span className="smallText">Sales monitoring dashboard template.</span>
                        </div>
                        <div className="d-md-flex header2">
                            <div className="icons me-5">
                                <span className="smallText ms-5">Customer Ratings</span>
                                <div>
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon color="yellow" icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <span> (14,323)</span>
                                </div>
                            </div>
                            <div className=" me-4">
                                <span className="smallText">Online Sales</span>
                                <p className="fw-bold ">563,275</p>
                            </div>
                            <div className=" me-4">
                                <span className="smallText">Offline Sales</span>
                                <p className="fw-bold ">763,275</p>
                            </div>
                        </div>

                    </div>
                    <div className="container-fluid mainPage">
                        <div className="row">
                            {IndexData.map((v, i) => (
                                <div key={i} className="col-sm-6 col-md-4 col-lg-3   mb-3">
                                    <div style={{ background: `${v.bgcolor}` }} className="cards shadow rounded ">
                                        <p className="titleCard">{v.title}</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="fw-bold text-light" >${v.count}</span>
                                            <div className="">
                                                <FontAwesomeIcon color="white" className="bg-dark rounded-pill" icon={v.icon} />
                                                <span className="smallText fw-bold"> {v.rate} </span>
                                            </div>
                                        </div>
                                        <span className="smallText">Compared to last week</span>

                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className="row text-sm-center py-5 text-light">
                            <div className="col-sm-10 col-md-7 mb-2">
                                <div className="trade_chart">
                                    <div style={{ maxWidth: " 500px" }}>
                                        <p className="py-0">ORDER STATUS</p>
                                        <span className="smallText">
                                            Order Status and Tracking. Track your order from ship date to arrival. To begin, enter your order number.
                                        </span>
                                        <Bar data={datas} options={options} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-5 px-2">
                                <p>SALES REVENUE BY CUSTOMERS IN USA</p>
                                <span className="smallText mb-2">
                                    Order Status and Tracking. Track your order from ship date to arrival. To begin, enter your order number.
                                </span>
                                <div style={{ maxWidth: " 350px" }}>
                                    <img className="w-100" src='/images/maps.png' alt="Chart bor kartaniki" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IndexWrapper>
        </>
    )
}

export default IndexMain

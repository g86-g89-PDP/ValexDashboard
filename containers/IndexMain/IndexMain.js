import { faArrowCircleUp, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import Chart from 'react-google-charts'
import { IndexData } from './IndexData'
import { IndexWrapper } from './IndexWrapper'
import { Bar } from 'react-chartjs-2';



const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
        {
            label: 'Success',
            data: [65, 85, 101, 65, 42, 83, 35, 57, 25, 54],
            backgroundColor: '#0269E8',
        },
        {
            label: 'Pending',
            data: [45, 35, 57, 25, 11, 54, 35, 41, 45, 32,],
            backgroundColor: '#F85D77',
        },
        {
            label: 'Failed',
            data: [28, 35, 41, 45, 32, 30, 65, 85, 101, 65],
            backgroundColor: '#F38745',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};



const IndexMain = () => {

    return (
        <>
            <IndexWrapper className="main-container">
                <div className="indexMainPage">
                    <div className="header container-fluid">
                        <div>
                            <h4 className="p-0 m-0" >Hi, welcome back! </h4>
                            <span className="smallText">Sales monitoring dashboard template.</span>
                        </div>
                        <div className="d-flex ">
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
                        <div className="row ">
                            {IndexData.map((v, i) => (
                                <div key={i} className="col-sm-5 col-md-4 col-lg-3   mb-3">
                                    <div style={{ background: `${v.bgcolor}` }} className="cards shadow rounded ">
                                        <p className="titleCard">{v.title}</p>
                                        <div className="d-flex flex-column">
                                            <span className="fw-bold text-light" >${v.count}</span>
                                            <span className="smallText">Compared to last week</span>
                                        </div>
                                        <div className="iconCount">
                                            <FontAwesomeIcon color="white" className="bg-dark rounded-pill" icon={v.icon} />
                                            <span className="smallText fw-bold"> {v.rate} </span>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className="row py-5 text-light">
                            <div className="col-sm-9 col-md-8">
                                <div className="trade_chart">
                                    <div style={{ maxWidth: " 500px" }}>
                                        <p className="py-0">ORDER STATUS</p>
                                        <span className="smallText">
                                            Order Status and Tracking. Track your order from ship date to arrival. To begin, enter your order number.
                                        </span>
                                        <Bar data={data} options={options} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">

                            </div>
                        </div>
                    </div>
                </div>
            </IndexWrapper>
        </>
    )
}

export default IndexMain

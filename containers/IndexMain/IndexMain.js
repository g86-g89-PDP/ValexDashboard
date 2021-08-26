import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IndexWrapper } from './IndexWrapper'


export class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: 'South',
                    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                },
                {
                    name: 'North',
                    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 20
                    })
                },
                {
                    name: 'Central',
                    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 15
                    })
                }
            ],
            options: {
                chart: {
                    type: 'area',
                    height: 350,
                    stacked: true,
                    events: {
                        selection: function (chart, e) {
                            console.log(new Date(e.xaxis.min))
                        }
                    },
                },
                colors: ['#008FFB', '#00E396', '#CED4DC'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0.8,
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                },
                xaxis: {
                    type: 'datetime'
                },
            },


        };
    }



    // render() {
    //     return (





    //     );
    // }
}

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
                        <div className="row p-3">
                            <div className="col-sm-5 col-md-4 col-lg-3 shadow bg-primary p-2 rounded">
                                <div className="cards">
                                    <p className="titleCard">TODAY ORDERS</p>
                                    <div className="d-flex flex-column">
                                        <span className="fw-bold text-light" >$5,74.12  </span>
                                        <span className="smallText">Compared to last week</span>
                                    </div>
                                    <div className="d-flex">
                                        <div className="child1">
                                            <div id="chart">
                                                <ApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
                                            </div>
                                        </div>
                                    </div>
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

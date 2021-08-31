import React, { Fragment } from 'react'

function Carousel() {
    return (
        <Fragment>


                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img classNameName="d-block w-100" src="img/2021-06-01_12-28-50-BAN2.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img classNameName="d-block w-100" src="img/pexels-freestocksorg-749353.jpg" alt="Second slide" style={{height: '411.8px', width: '782px', objectFit: 'cover'}}/>
                    </div>
                    <div className="carousel-item">
                    <img classNameName="d-block w-100" src="img/pexels-negative-space-34577.jpg" alt="Third slide" style={{height: '411.8px', width:' 782px', objectFit: 'cover'}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>



















        </Fragment>
    )
}

export default Carousel







{/* <div id="carouselExampleIndicators" classNameName="carousel slide" data-ride="carousel">
                        <ol classNameName="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" classNameName="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div classNameName="carousel-inner">
                        <div classNameName="carousel-item active">
                            <img classNameName="d-block w-100" src="img/2021-06-01_12-28-50-BAN2.jpg" alt="First slide"/>
                            
                        </div>
                        <div classNameName="carousel-item">
                            <img classNameName="d-block w-100" src="img/pexels-freestocksorg-749353.jpg" alt="Second slide" style={{height: '411.8px', width: '782px', objectFit: 'cover'}}/>
                            <!-- <h1>Achetez Et faites vous livrez Chez Vous</h1> -->
                        </div>
                        <div classNameName="carousel-item">
                            <img classNameName="d-block w-100" src="img/pexels-negative-space-34577.jpg" alt="Third slide" style={{height: '411.8px', width:' 782px', objectFit: 'cover'}}/>
                            <!-- <h1>Payez En tout securite etant chez vous</h1> -->

                        </div>
                        </div>
                        <a classNameName="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span classNameName="sr-only"></span>
                        </a>
                        <a classNameName="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
                        <span classNameName="sr-only"></span>
                        </a>
              </div> */}
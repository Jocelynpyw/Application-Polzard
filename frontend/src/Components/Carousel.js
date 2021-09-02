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
                    <img className="d-block w-100" src="img/BAN1.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="img/BAN2.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="img/BAN3.jpg" alt="Third slide" />
                    {/* style={{height: '458.8px', width:' 782px', objectFit: 'cover'}} */}
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



          <div id="nouveautes">
                      <p>Nouveautes</p>
                      <a href="#!">Toutes les Nouveautes > ></a>
                  </div>















        </Fragment>
    )
}

export default Carousel








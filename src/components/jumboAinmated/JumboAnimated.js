import React from 'react'
import { detalleEvento } from '../../config/data'
import imgWoman from "../../resources/images/img-a.png"

// import imgWoman from "../../image/landing-1/woman.png"
// import imgChatIcon from "../../image/landing-1/chat-icon.svg"
// import imgIcon3d from "../../image/landing-1/icon-3d-heart.svg"
// import imgIconChart from "../../image/landing-1/icon-chart.svg"

export const JumboAnimated = () => {


    return (
        <div className="hero-area-l1 position-relative  background-property"
            style={{ background: "url(image/landing-1/hero-bg.png)" }}>
            <div className="container">
                <div className="row justify-content-center align-items-center"> 

                    <div className="col-lg-9 col-md-10 order-lg-1 order-1" data-aos="fade-right"
                        data-aos-delay="500" data-aos-duration="1000">
                        <div className="content">
                            <h2> { detalleEvento.nombre } </h2>
                            <p>Te acercamos toda la info para ser parte de un momento inolvidable</p>
                            <div className="l1-create-acc-btn centrar">
                                <a href="#" className="btn btn-style-02">Confirmar Asistencia<i className="fas fa-angle-right"></i></a>
                            </div>
                           
                        </div>
                    </div>

                    <div className="offset-xxl-2  offset-xl-1  col-lg-3 col-md-8 order-lg-1 order-0"
                        data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">
                        <div className="hero-image-group-l1">
                            <div className="image-1">
                                {/* <img className="w-100" src={imgWoman} alt="image" /> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

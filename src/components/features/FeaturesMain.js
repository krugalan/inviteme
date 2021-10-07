import React from 'react'
import { detalleEvento } from '../../config/data'

import target from "../../image/landing-1/icon-3d-target.svg"

const secciones = [
    {
        evento: 'Ceremonia',
        fecha: '19/02 - 18:30hs',
        descPrincipal: 'Vamos a celebrar la Ceremonia el mismo 19/02 antes de la fiesta en el salón.',
        descGeneral: 'Es un momento especial que nos gustaría compartir con vos.',
        icon: target
    },
    {
        evento: 'Fiesta',
        fecha: '19/02 - 19:30hs',
        descPrincipal: 'Una vez celebrada la Ceremonia vamos a continuar con la Recepción y el Inicio de Fiesta.',
        descGeneral: 'Procurá llegar a tiempo! Tenemos muchas sorpresas toda la noche!',
        icon: target
    }
]

export const FeaturesMain = () => {

    const Seccion = ({ el }) => {
        return (
            <div class="col-lg-6 col-xs-12"
                data-aos-once="true">
                <div class="content h-100">
                    <img src={el.icon} alt="image" />
                    <h2> {el.evento} </h2>
                    <h5>{el.fecha}</h5>
                    <strong>{el.descPrincipal}</strong>
                    <p>{el.descGeneral}</p>
                </div>
            </div>
        )
    }

    return (
        <div class="feature-area-l1">
            <div class="container">


                <div class="row feature-l1-items justify-content-center centrar">
                    {
                        secciones.map((el, index) => <Seccion key={index} el={el} />)
                    }
                </div>



                <div class="row">
                    <div class="col-lg-12">
                        <div class="feature-border-l1"></div>
                    </div>
                </div>


                <div class="row customer-area-l1 justify-content-center align-items-center ">
                    <div class="col-xl-5 col-lg-5 col-md-10">
                        <div class="section__heading">
                            <h2 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"> Av. Costanera Rafael Obligado 1221, CABA
                            </h2>
                            <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                                Es muy fácil llegar al salón! A pasitos de costa salgero!
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-7 col-md-10 offset-xl-1">
                        <div class="row user-rating-box-area">
                            <div class="col-sm-6 col-xs-8" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                                <div class="h-100 rate-box bg-primary">
                                    <h3>
                                        18:30hs
                                    </h3>
                                    <p><b>Puntual</b> para disfrutar de la<br /><b> Ceremonia y sorpresas ! ! !</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

import React from 'react'
import { useSelector } from 'react-redux'
// import { detalleEvento } from '../../config/data'

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


    const {
        id,
        fecha,
        nombre,
        responsable,
        celular,
        estado,
        updated_at,
        created_at,
        titulo,
        subtitulo,
        parrafo,
        construye_contador,
        img_pc,
        img_movil,
        datos_regalos,
        lugar,
        slug
    } = useSelector(state => state.evento.detalle);

    const sections = () => (
        <div className="row feature-l1-items justify-content-center centrar">
            {secciones.map((el, index) => <Seccion key={index} el={el} />)}
        </div>
    )

    const Seccion = ({ el }) => {
        return (
            <div className="col-lg-6 col-xs-12"
                data-aos-once="true">
                <div className="content h-100">
                    <img src={el.icon} alt="image" />
                    <h2> {el.evento} </h2>
                    <h5>{el.fecha}</h5>
                    <strong>{el.descPrincipal}</strong>
                    <p>{el.descGeneral}</p>
                </div>
            </div>
        )
    }

    const lineBorder = () => (
        <div className="row">
            <div className="col-lg-12">
                <div className="feature-border-l1"></div>
            </div>
        </div>
    )

    const cardAddressTime = () => (
        <div className="col-lg-4 ">
            <div className="section__heading">
                <h2>
                    {lugar.direccion}
                </h2>
                <p>
                    {lugar.observaciones}
                </p>
                <pre>
                    {JSON.stringify(lugar.iframe)}
                </pre>
            </div>
        </div>
    )

    const cardTimeInfo = () => (
        <div className="col-lg-7 offset-lg-1">
            <div className="row user-rating-box-area">
                <div className="col-sm-6 col-xs-8" >
                    <div className="h-100 rate-box bg-primary">
                        <h3>
                            18:30hs
                        </h3>
                        <p><b>Puntual</b> para disfrutar de<br /><b> todas las sorpresas ! ! !</b></p>
                    </div>
                </div>
            </div>
        </div>
    )


    return (
        <div className="feature-area-l1">
            <div className="container">

                {lineBorder()}
                {sections()}
                {lineBorder()}

                <div className="row  justify-content-center align-items-center ">
                    {cardAddressTime()}
                    {cardTimeInfo()}
                </div>


            </div>
        </div>
    )
}

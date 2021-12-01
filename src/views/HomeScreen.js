import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FeaturesMain } from '../components/features/FeaturesMain'
import { HeaderMain } from '../components/header/HeaderMain'
import { JumboAnimated } from '../components/jumboAinmated/JumboAnimated'

import { eventoDetalle, actMenues, actEstados } from '../actions/evento'
import { getEstados, getEventoDetalle, getMenues } from '../config/call_api'

export const HomeScreen = () => {

    const detalle = useSelector(state => state.evento.detalle)
console.log(detalle)

    // useEffect(() => {
    //     if (detalle === undefined) {
    //         getEventoDetalle()
    //             .then(res => dispatch(eventoDetalle(res)))
    //         getMenues()
    //             .then(res => dispatch(actMenues(res)))
    //         getEstados()
    //             .then(res => dispatch(actEstados(res)))
    //     }
    // }, [])


    return (
        <div className="site-wrapper overflow-hidden" >
            {
                detalle &&
                <>
                    <HeaderMain />
                    <JumboAnimated />
                    <FeaturesMain />
                </>
            }

        </div>
    )
}

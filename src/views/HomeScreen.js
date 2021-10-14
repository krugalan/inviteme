import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FeaturesMain } from '../components/features/FeaturesMain'
import { HeaderMain } from '../components/header/HeaderMain'
import { JumboAnimated } from '../components/jumboAinmated/JumboAnimated'

import { eventoDetalle, actMenues, actEstados } from '../actions/evento'
import { getEstados, getEventoDetalle, getMenues, postListarInvitadosByCode } from '../config/call_api'
import { actConfirmarInvitacion } from '../actions/confirmacion'


export const HomeScreen = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        getEventoDetalle()
            .then(res => dispatch(eventoDetalle(res)))

        getMenues()
            .then(res => dispatch(actMenues(res)))

        getEstados()
            .then(res => dispatch(actEstados(res)))

      
    }, [])


    return (
        <div className="site-wrapper overflow-hidden" >           
            <HeaderMain />
            <JumboAnimated />
            <FeaturesMain />
        </div>
    )
}

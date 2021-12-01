import React, { useEffect } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import ScrollToTop from './components/shared/ScrollToTop';

// view
import { HomeScreen } from './views/HomeScreen';
import { ConfirmationScreen } from './views/ConfirmationScreen';
import { useDispatch } from 'react-redux';
import { eventoDetalle } from './actions/evento';
import { getEventoDetalle } from './config/call_api';

export const RouterMain = () => {
    const dispatch = useDispatch()

    const traerEvento = async () => {
        await getEventoDetalle()
            .then(res => res.length > 0 ?
                dispatch(eventoDetalle(res[0])) :
                console.log("NOK: ", res))
    }

    useEffect(() => {
        console.log("Traer evento")
        traerEvento()
    }, [])

    return (
        <div className="">
            <ScrollToTop />
            <Switch>
                <Route component={HomeScreen} path="/" exact />
                <Route component={ConfirmationScreen} path="/confirmar-asistencia" exact />
            </Switch>
        </div>
    )
}

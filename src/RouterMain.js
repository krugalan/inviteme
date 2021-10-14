import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import ScrollToTop from './components/shared/ScrollToTop';

// view
import { HomeScreen } from './views/HomeScreen';
import { ConfirmationScreen } from './views/ConfirmationScreen';

export const RouterMain = () => {

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

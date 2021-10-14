import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import eventoReducer from '../reducers/eventoReducer';
import confirmacionReducer from '../reducers/confirmacionReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    evento: eventoReducer,
    invitados: confirmacionReducer
})

//solo puede recibir un reducer, por eso creo el objeto reducers para mandarle todos los que cree
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
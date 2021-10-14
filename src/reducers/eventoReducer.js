import { types } from "../types/types";


const eventoReducer = (state = {}, action) => {

    switch (action.type) {
        case types.loadEvento:
            return {
                ...state,
                detalle: action.payload.detalle
            }
        case types.loadMenues:
            return {
                ...state,
                menues: action.payload.menues
            }
        case types.loadEstados:
            return {
                ...state,
                estados: action.payload.estados
            }
        default:
            return state;
    }
}

export default eventoReducer
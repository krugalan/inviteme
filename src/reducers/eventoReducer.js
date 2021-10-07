import { types } from "../types/types";


const eventoReducer = (state = {}, action) => {

    switch (action.type) {
        case types.loadEvento:
            return {
                detalleDefReducer: action.payload.detalle
            }
        default:
            return state;
    }
}

export default eventoReducer
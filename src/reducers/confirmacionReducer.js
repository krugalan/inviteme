import { types } from "../types/types";


const confirmacionReducer = (state = {}, action) => {

    switch (action.type) {
        case types.invitadosCode:
            return {
                ...state,
                invitacion: action.payload.invitacion
            }
        default:
            return state;
    }
}

export default confirmacionReducer
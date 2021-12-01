import { types } from "../types/types";


const confirmacionReducer = (state = {}, action) => {

    switch (action.type) {
        case types.invitadosCode:
            return {
                ...state,
                invitacion: action.payload.invitacion
            }
        case types.limpiarInvitados:
            return {}
        default:
            return state;
    }
}

export default confirmacionReducer
import { types } from "../types/types";

export const actConfirmarInvitacion = (invitacion) => {
    return (dispatch) => {
        dispatch(getInvitacionByCode(invitacion))
    }
}

const getInvitacionByCode = (invitacion) => ({
    type: types.invitadosCode,
    payload:{
        invitacion
    }
})
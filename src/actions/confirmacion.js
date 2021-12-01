import { types } from "../types/types";

export const actConfirmarInvitacion = (invitacion) => {
    return (dispatch) => {
        dispatch(getInvitacionByCode(invitacion))
    }
}

const getInvitacionByCode = (invitacion) => ({
    type: types.invitadosCode,
    payload: {
        invitacion
    }
})


export const actLimpiarInvitados = () => {
    return (dispatch) => {
        dispatch(delInvitados())
    }
}

const delInvitados = () => ({
    type: types.limpiarInvitados,
    payload: {}
})
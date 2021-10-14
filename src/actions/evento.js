import { types } from "../types/types";

export const eventoDetalle = (eventoDetalle) => {
    return (dispatch) => {
        dispatch(getEvento(eventoDetalle))
    }
}

const getEvento = (detalle) => ({
    type: types.loadEvento,
    payload: {
        detalle
    }
})


export const actMenues = (menues) => {
    return (dispatch) => {
        dispatch(getMenues(menues))
    }
}

const getMenues = (menues) => ({
    type: types.loadMenues,
    payload: {
        menues
    }
});



export const actEstados = (estados) => {
    return (dispatch) => {
        dispatch(getEstados(estados))
    }
}

const getEstados = (estados) => ({
    type: types.loadEstados,
    payload: {
        estados
    }
})
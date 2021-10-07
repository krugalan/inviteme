import { types } from "../types/types";



export const eventoDetalle = () => {
  

    return (dispatch) => {
        dispatch(getEvento({}))
    }
}

export const getEvento = (detalle) => ({
    type: types.loadEvento,
    payload: {
        detalle
    }
})


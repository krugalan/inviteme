import { fetchHelper } from "../helpers/fetchHelper";
import { dataConfig } from "./data";

const server = 'https://invitar.trazzart.com';



// const getEvento = async () => {
//     setEvento(await fetchHelper('GET', 'https://invitar.trazzart.com/api/v1/evento/detalle', {}))
// }

export const getEventoDetalle = async () => {
    return await fetchHelper('GET', `${server}/api/v1/evento/detalle`, {});
}


export const getInvitados = async () => {
    const endPoint = '/api/v1/evento/invitados';
    let res = await fetchHelper(
        'GET',
        `${server}${endPoint}`
    )
    return res;
}

export const getMenues = async () => {
    const endPoint = '/api/v1/evento/menues';
    let res = await fetchHelper(
        'GET',
        `${server}${endPoint}`
    )
    return res;
}

export const getEstados = async () => {
    const endPoint = '/api/v1/evento/estados';
    let res = await fetchHelper(
        'GET',
        `${server}${endPoint}`
    )
    return res;
}


export const postListarInvitadosByCode = async (data) => {
    const endPoint = '/api/v1/evento/validate/code';
    let res = await fetchHelper(
        'POST',
        `${server}${endPoint}`,
        data
    )
    return res;
}

export const configData = dataConfig;
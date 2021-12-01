import axios from 'axios';

import { fetchHelper } from "../helpers/fetchHelper";

const server = 'https://invitar.trazzart.com';
const version = '/api/v1/evento'
const token = 'alanykari2022'
const uri = `${server}${version}`;
const header = {
    headers: { Authorization: `Bearer ${token}` }
}



async function getEventoDetalle() {
    const url = `${uri}/detalle`;

    try {
        const response = await axios.get(url, header);
console.log(response)
        if (response.status === 200) {
            return response.data;
        } else {
            console.error(response);
        }
    } catch (error) {
        return error;
    }
}





// /**
//  * GET
//  * @returns Detalle datos principales del evento
//  */
// export const getEventoDetalle = async () => {
//     let res = await fetchHelper('GET', `${server}${version}detalle`, {});
//     return res;
// }

/**
 * GET
 * @returns Menues ofrecidos
 */
export const getMenues = async () => {
    let res = await fetchHelper('GET', `${server}${version}menues`, {});
    return res;
}

/**
 * GET
 * @returns Estados de la aplicacion y entidades
 */
export const getEstados = async () => {
    let res = await fetchHelper('GET', `${server}${version}estados`, {});
    return res;
}

/**
 * 
 * @param { {"code": "canciones"} } data 
 * @returns OK: Array de invitados; NOK: Array vacio
 */
export const postListarInvitadosByCode = async (data) => {
    let res = await fetchHelper('POST', `${server}${version}validate/code`, data);
    return res;
}


export {
    getEventoDetalle
}
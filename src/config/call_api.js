import axios from 'axios';

const server = 'https://invitar.trazzart.com';
const version = '/api/v1/evento'
const token = 'alanykari2022'
const uri = `${server}${version}`;
const header = { headers: { Authorization: `Bearer ${token}` } }


/**
 * 
 * @returns devuelve el detalle del evento
 */
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

/**
 * 
 * @returns devuelve los menues
 */
async function getMenues() {
    const url = `${uri}/menues`;

    try {
        const response = await axios.get(url, header);
        if (response.status === 200) {
            return response.data;
        } else {
            console.error(response);
        }
    } catch (error) {
        return error;
    }
}


/**
 * 
 * @returns devuelve estados
 */
async function getEstados() {
    const url = `${uri}/estados`;

    try {
        const response = await axios.get(url, header);
        if (response.status === 200) {
            return response.data;
        } else {
            console.error(response);
        }
    } catch (error) {
        return error;
    }
}


/**
 * 
 * @param { {"code": "canciones"} } data 
 * @returns OK: Array de invitados; NOK: Array vacio
 */
async function postListarInvitadosByCode(data) {
    const url = `${uri}/validate/code`;

    try {
        const response = await axios.post(url, data, header)

        if (response.status === 200) {
            return response.data;
        } else {
            console.error(response);
        }
    } catch (error) {
        return error;
    }
}



export {
    getEventoDetalle,
    getMenues,
    getEstados,
    postListarInvitadosByCode,
}
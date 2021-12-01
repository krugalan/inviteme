import { TextField } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actConfirmarInvitacion, actLimpiarInvitados } from '../actions/confirmacion'
import { postListarInvitadosByCode } from '../config/call_api'
import { useForm } from '../hooks/useForm'

export const ConfirmationScreen = () => {
    const dispatch = useDispatch()
    const { invitacion } = useSelector(state => state.invitados)

    const [formValues, handleInputChange] = useForm({});
    const { valorBuscado } = formValues;

    const limpiarInvitados = (e) => {
        e.preventDefault();
        dispatch(actLimpiarInvitados())
    }

    const validarCodigo = () => {
        if (valorBuscado) {
            let codigoIngresado = valorBuscado.toLowerCase().trim();
            postListarInvitadosByCode({ code: codigoIngresado })
                .then(res => dispatch(actConfirmarInvitacion(res)))
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validarCodigo();
    }


    const FormVerificar = () => {
        return (
            <>
                <div className="heading text-center">
                    <h2>Confirmar Asistencia</h2>
                    <p>Ingresá tu código de invitación</p>
                    <TextField
                        style={{
                            backgroundColor: '#ffffff87',
                            borderRadius: 25,
                            padding: '2% 20%',
                        }}
                        fullWidth
                        autoFocus
                        name='valorBuscado'
                        value={valorBuscado}
                        onChange={handleInputChange}
                        placeholder="ESCRIBIR CÓDIGO DE INVITACIÓN..."
                    />
                </div>
                <form onSubmit={handleSubmit} >
                    <div className="sign-in-log-btn">
                        <button
                            onSubmit={handleSubmit}
                            className="btn">Verificar código</button>
                    </div>

                    <div className="create-new-acc-text text-center">
                        <p>No recuerdo mi código <br /><a >¿Qué hacer?</a></p>
                    </div>
                </form>
            </>

        )
    }

    const ListaInvitados = () => (
        <form onSubmit={limpiarInvitados}>
            <pre>
                {
                    JSON.stringify(invitacion, null, 1)
                }
            </pre>
            <div className="sign-in-log-btn">
                <button
                    onSubmit={limpiarInvitados}
                    className="btn">Reintentar Búsqueda</button>
            </div>
        </form>
    )
    console.log(valorBuscado)

    return (
        <div className="sign-up-1">
            <div className="container">
                <div className="row justify-content-lg-end justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-8">


                        <div className="sign-up-1-box  justify-content-lg-end"
                            style={{
                                backgroundColor: '#c9c9c987',
                                borderRadius: 25,
                                padding: '3%',
                            }}>


                            {
                                (invitacion === undefined)
                                    ? <FormVerificar />
                                    : <ListaInvitados />
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

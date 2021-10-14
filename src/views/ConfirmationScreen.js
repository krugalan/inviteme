import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actConfirmarInvitacion } from '../actions/confirmacion'
import { postListarInvitadosByCode } from '../config/call_api'
import { useForm } from '../hooks/useForm'

export const ConfirmationScreen = () => {
    const dispatch = useDispatch()
    const { invitacion } = useSelector(state => state.invitados)

    const [formValues, handleInputChange] = useForm({});
    const { valorBuscado } = formValues;


    const validarCodigo = (codigoIngresado) => {
        codigoIngresado = codigoIngresado.toLowerCase().trim();
        postListarInvitadosByCode({ code: codigoIngresado })
            .then(res => dispatch(actConfirmarInvitacion(res)))
    }


    const FormVerificar = () => {
        return (
            <>

                <div class="sign-in-log-btn">
                    <button
                        onClick={() => validarCodigo(valorBuscado)}
                        class="btn">Verificar código</button>
                </div>

                <div class="create-new-acc-text text-center">
                    <p>No recuerdo mi código <br /><a href="sign-in-1.html">¿Qué hacer?</a></p>
                </div>
            </>

        )
    }

    const ListaInvitados = () => (
        <pre>
            {
                JSON.stringify(invitacion, null, 1)
            }
        </pre>
    )
    console.log(valorBuscado)

    return (
        <div class="sign-up-1">
            <div class="container">
                <div class="row justify-content-lg-end justify-content-center">
                    <div class="col-xl-5 col-lg-6 col-md-8">



                        <div class="sign-up-1-box  justify-content-lg-end"
                            style={{
                                backgroundColor: '#c9c9c987',
                                borderRadius: 25,
                                padding: '3%',
                            }}>
                            <div class="heading text-center">
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


                            <form>

                                {
                                    (invitacion === undefined)
                                        ? <FormVerificar />
                                        : <ListaInvitados />
                                }
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

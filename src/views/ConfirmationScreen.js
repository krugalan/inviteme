import React, { useState } from 'react'

export const ConfirmationScreen = () => {

    const [codigoVerificado, setCodigoVerificado] = useState(false)

    const FormVerificar = () => {
        return (
            <form action="#">
                <div class="form-group">
                    <label>Codigo Invitación*</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Ingresar código sin espacios..." />
                </div>

                <div class="sign-in-log-btn">
                    <button class="btn focus-reset">Verificar código</button>
                </div>

                <div class="create-new-acc-text text-center">
                    <p>No recuerdo mi código <br /><a href="sign-in-1.html">¿Qué hacer?</a></p>
                </div>
            </form>

        )
    }



    return (
        <div class="sign-up-1">
            <div class="container">
                <div class="row justify-content-lg-end justify-content-center">
                    <div class="col-xl-5 col-lg-6 col-md-8">


                        <div class="sign-up-1-box  justify-content-lg-end">
                            <div class="heading text-center">
                                <h2>Confirmar Asistencia</h2>
                                <p>Ingresá tu código de invitación</p>
                            </div>

                            {
                                codigoVerificado
                                    ? <FormVerificar />
                                    : <FormVerificar />
                            }



                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

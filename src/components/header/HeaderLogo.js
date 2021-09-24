import React from 'react';
import dark from '../../image/logo/logo-black.png'
import light from '../../image/logo/logo-white.png'

export const HeaderLogo = () => {
    return (

        <div className="brand-logo">
            <a href="#">
                <img src={dark} alt="logo-black" className="light-version-logo" />

                <img src={light} alt="logo-white" className="dark-version-logo" />
            </a>
        </div>

    )
}

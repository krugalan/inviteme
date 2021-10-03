import React from 'react'

export const CTAButton = ({ title }) => {
    return (
        <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <a target="_blank" className="btn btn log-in-btn btn-style-02 focus-reset">
                {title}
            </a>
        </div>
    )
}

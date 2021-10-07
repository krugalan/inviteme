import React from 'react'

export const ImgMove = ({ imagen, move }) => {


    let classMove = "vertical-move"

    switch (move) {
        case 2:
            classMove = "horizontal-move"
            break;
        case 3:
            classMove = "spin"
            break;
        default:
            classMove = "vertical-move"
            break;
    }

    return (

        <img className={classMove} src={imagen} alt="image" />


    )
}

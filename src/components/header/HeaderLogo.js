import React from 'react';
import imgIcon3d from "../../image/landing-1/icon-3d-heart.svg"
import { ImgMove } from '../shared/ImgMove';


export const HeaderLogo = () => {
  return (

    <div className="brand-logo">
      <div className="image-3">
        <ImgMove move={1} imagen={imgIcon3d}/>
             
      </div>
    </div>

  )
}

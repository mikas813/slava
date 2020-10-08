import React from 'react'
import {Camera, Params} from '../../IconsSvg'
import {Camera, Lens, Params} from '../../IconsSvg'

const Params = () => {
  return (
    <div className="params">
      <div>
        <Params/>
        {image.params}
        <span> ƒ/{image.fa} </span>
        <span>{image.ss}s </span>
        <span>{image.iso}ISO</span>
      </div>
      <div>
        <Camera/>
        <p>{image.camera}</p>
      </div>
      <div>
        <Lens/>
        <p>{image.lens}</p>
      </div>
    </div>
  )
}

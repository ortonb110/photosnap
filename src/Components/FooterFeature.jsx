import React from 'react'
import logo from '../assets/features/desktop/responsive.svg'

export default function FooterFeature({features}) {
    const {image, title, text} = features
  return (
    <div className='col-span-1'>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

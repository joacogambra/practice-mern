import React from 'react'

export default function NombreFoto(props) {
    let {category,foto,name} = props
  return (
    <>
    <h2>{category}</h2>
    <img src={foto} alt={name} className='imagen' />
    <p>{name}</p>
    </>
  )
}

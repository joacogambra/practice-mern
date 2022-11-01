import React from 'react'

export default function Flechita(props) {
    let {clases} = props
    let {direction} = props
  return (
    <img src='../img/flecha.png' onClick={direction} alt='flechaEvento' className={clases}/>
  )
}

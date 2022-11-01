import React from 'react'

export default function AntSig(props) {
    let {verbo} = props 
    let {estilo} = props
    let {direction} = props
    return (
        <div className={`${estilo}`} onClick={direction}> {verbo} </div>
    )
}

import React, {useState, useEffect} from 'react'
import data from '../data/events1'
import AntSig from './AntSig'
import CampoConArray from './CampoConArray'
import Flechita from './Flechita'
import NombreFoto from './NombreFoto'



export default function Carousel() {
  let [mostrarOcultar, setMostrarOcultar] = useState(false)
  let [numeroCambiar, setNumeroCambiar] = useState(0)
  let [id,setId] = useState(0)
  useEffect( ()=>{
    let idInterval = setInterval(
      //primer parametro la funcion que se va a ejectutar en cada intervalo de tiempo
      ()=>{
        next()
      },
      //segundo parametro es el intervalo en milisegnudos
      5000
      // retorna una funcion que resetea el intervalo/contador
      )
      setId = (idInterval)
      return () => clearInterval(id)
    },[numeroCambiar])

    let hide = () =>{
      setMostrarOcultar(!mostrarOcultar)
    }

    function next (){
      if(numeroCambiar<data.length-1){
        setNumeroCambiar(++numeroCambiar)
      }else{
        setNumeroCambiar(0)
      }
      clearInterval(id)
    }

    function prev (){
      if(numeroCambiar>0){
        setNumeroCambiar(--numeroCambiar)
      }else{
        setNumeroCambiar(data.length-1)
      }
      clearInterval(id)
    }

  return (
    <div className='card'>
      <NombreFoto category={data[numeroCambiar].category} foto={data[numeroCambiar].image} name={data[numeroCambiar].name}/>
      <div className='ocultar-mostrar'>
      {
      mostrarOcultar ?
      (<>
      <Flechita  clases='arriba' direction={hide}/>
      <CampoConArray text={data[numeroCambiar].description}/>
      </>) :
      (<Flechita clases='abajo' direction={hide}/>)
      }
      </div>     
      <div className='flechas'> 
      <AntSig verbo='anterior' direction={prev} estilo='direct'/>
      <AntSig verbo='siguiente' direction={next} estilo='direct'/>
      </div> 
  </div>
  )
}


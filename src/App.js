import './style.css'
import data from './data/events1'
import NombreFoto from './components/NombreFoto';
import CampoConArray from './components/CampoConArray';
import Flechita from './components/Flechita';
import { useState } from 'react';

function App() {
  let [mostrarOcultar, setMostrarOcultar] = useState(false)
  let [numeroCambiar, setNumeroCambiar] = useState(0)

  let hide = () =>{
    setMostrarOcultar(!mostrarOcultar)
    console.log(mostrarOcultar);
  }

  
  let next = () =>{
    if(numeroCambiar<data.length-1){
      setNumeroCambiar(++numeroCambiar)
    }else{
      setNumeroCambiar(0)
    }
  }
  let prev = () => {
    if(numeroCambiar>0){
      setNumeroCambiar(--numeroCambiar)
    }else{
      setNumeroCambiar(data.length-1)
    }
  }

  return (
    <div className='card'>
      <NombreFoto category={data[numeroCambiar].category} foto={data[numeroCambiar].image} name={data[numeroCambiar].name}/>
      <div className='ocultar-mostrar'>
        {
        mostrarOcultar ?
        (<>
        <Flechita  clases='arriba' onClick={hide}/>
        <CampoConArray text={data[numeroCambiar].description}/>
        </>) :
        (<Flechita clases='abajo' onClick={hide}/>)
        }
      </div>     
      
      <div className='flechas'> 
        <Flechita clases='izquierda' izquierda={prev}/>
        <Flechita  clases='derecha' derecha={next}/>
      </div> 
    </div>
  );
}

export default App;


import React, {useEffect, useState} from 'react';

const Countdown = ()=>{

  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras]= useState(0);

  var countdown;
  useEffect(()=>{

    countdown=setInterval (()=>{
    setSegundos (segundos - 1);

    if(segundos===(-59)){
      setMinutos(minutos - 1);
      setSegundos(0)
    }
    if(minutos===(-60)){
    setHoras(horas - 1);
    setMinutos(0);
  }

  },1000);
  return ()=> clearInterval(countdown);
})

const resetear=()=>{
  setSegundos(0);
  setMinutos(0);
  setHoras(0);
}
const parar=()=>{
  clearInterval(countdown);
}

return (
  <div>
  <div className="countContainer">
    <h1>Countdown</h1>
    <h1>-{horas}:{minutos}:{segundos}</h1>
  </div>
    <button className="boton" onClick={resetear}>Reset</button>
    <button className="boton" onClick={parar}>Stop</button>
    
  </div>
)
}
export default Countdown

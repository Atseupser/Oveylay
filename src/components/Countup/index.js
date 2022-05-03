import React, {useEffect, useState} from 'react';

const Countup = ()=>{

  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras]= useState(0);

  var countup;
  useEffect(()=>{
    countup =setInterval (()=>{
    setSegundos (segundos + 1);

    if(segundos===59){
      setMinutos(minutos + 1);
      setSegundos(0)
    }
    if(minutos===60){
    setHoras(horas + 1);
    setMinutos(0);
  }

  },1000);
 return ()=> clearInterval(countup);
});

const resetear=()=>{
  setSegundos(0);
  setMinutos(0);
  setHoras(0);
}
const parar=()=>{
  clearInterval(countup);
}

return (
  <div>
  <div className="countContainer">
    <h1>Countup</h1>
    <h1>{horas<10?"0"+horas:horas}:{minutos<10? "0"+minutos:minutos}:{segundos<10? "0"+segundos: segundos}</h1>
  </div>
  <button className="boton" onClick={resetear}>Reset</button>
  <button className="boton" onClick={parar}>Stop</button>
  </div>

)
}
export default Countup

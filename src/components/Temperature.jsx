
function Temperature(props){
  function increaseTemperature(){
    const newTemperature = props.temperatureValue + 1;
    props.setTemperatuteValue(newTemperature);
  };

  function decreaseTemperature(){
    const newTemperature = props.temperatureValue - 1;
    props.setTemperatuteValue(newTemperature);
  };

  return(
    <div className="app-box">
      <h1 className="box-title">Температура</h1>
      <div className='temperature-display-container'>
        <div className={props.temperatureValue >= 15 ? "temperature-display hot" : "temperature-display cold"}>{props.temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  )
}


export default Temperature 
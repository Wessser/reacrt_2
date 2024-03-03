import Temperature from './components/Temperature';
import Notification from './components/Notification';
import { useState } from "react";

function App() {
  const [temperatureValue, setTemperatuteValue] = useState(10);
  const [temperatureColor, setTemperatuteColor] = useState("cold");

  const [tasks, setTasks] = useState([
    {
      title: "Дописать статью",
      descr: "Дописать статью до завтра",
    },
    {
      title: "Скачать сериал",
      descr: "Cкачать сериал Игра престолов",
    },
    {
      title: "Дописать статью",
      descr: "Дописать статью до завтра",
    },
  ]
);

  return (
    <div className="app-container">
      <Temperature temperatureValue={temperatureValue} setTemperatuteValue={setTemperatuteValue} temperatureColor={temperatureColor} setTemperatuteColor={setTemperatuteColor} />
      <Notification tasks={tasks}/>
    </div>
  );
}

export default App;

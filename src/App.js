import './index';
import React, {useState} from 'react';
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import RandomAdvice from "./components/RandomAdvice";
import ChooseAdvice from './components/ChooseAdvice';

const App = () => {
  const [data, setData] = useState({ id: "", advice: "" });
  const [random, setRandom] = useState((Math.random() * 225).toFixed(0));

  async function getAdvice() {
    setRandom((Math.random() * 225).toFixed(0));
    const response = await fetch(`https://api.adviceslip.com/advice/${random}`);
    const json = await response.json();
    setData({ id: json.slip.id, advice: json.slip.advice });
  }

  console.log("advice = " + data.id);

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <RandomAdvice data={data} getAdvice={getAdvice} />
          {data.id <= 0 ? <p className="legend">Click here to draw an advice.</p> : ""}
          <button
            className="btn-draw"
            onClick={getAdvice}
            title="Click here to draw an advice"
          >
            {" "}
            <GiPerspectiveDiceSixFacesRandom
              size={35}
              className="icon-random"
            />
          </button>
          <ChooseAdvice data={data} setData={setData} />
          {data.id <= 0 ? <p className="legend">Search here for the council number (1 to 224).</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const ChooseAdvice = ({ data, setData}) => {
  const [select, setSelect] = React.useState("");
  const [alerta, setAlerta] = React.useState("");

  async function getAdviceSelect(e) {
    const response = await fetch(`https://api.adviceslip.com/advice/${select}`);
    const json = await response.json();
    setData({ id: json.slip.id, advice: json.slip.advice });
  }

  function handleChange(e) {
    setSelect(e.target.value);
  }

  function validForm() {
    if (select >= 1 && select <= 224) {
      getAdviceSelect();
      setAlerta("");
      setSelect('');
    } else {
      setAlerta("Enter a number from 1 to 224");
    }
  }

  console.log(data.id);

  return (
    <div className="App">
      <p style={{ padding: "20px", color: "#52ffa8" }}>{alerta}</p>
      <div className="search-advice">
        <form method="post" action="">
          <label className="label" htmlFor="id">
            <input
              id="nmbr"
              type="number"
              name="id"
              min="1"
              title="Numbers from 1 to 224"
              max="224"
              placeholder=""
              onChange={handleChange}
              value={select}
              autoFocus
            />
            <span className="inpt-nmbr mais">+</span>
            <span className="inpt-nmbr menos">-</span>
          </label>
        </form>
        <button
          className="btn-draw"
          onClick={validForm}
          title="Click here to choose advice"
        >
          <AiOutlineSearch size={30} className="icon-random" />
        </button>
      </div>
    </div>
  );
}

export default ChooseAdvice;
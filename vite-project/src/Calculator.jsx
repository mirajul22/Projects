import { useState } from "react";
import "./Cal.css";
const Calculator = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    let bmi = (weight / (height * height)) * 703;
    setMsg(bmi.toFixed(2));
    // alert(`BMI is ${res}`);
    if (bmi < 25) {
      setMsg(" Underweight");
    } else if (bmi >= 25 && bmi <= 60) {
      setMsg(" Normal Weight");
    } else {
      setMsg(" Overweight");
    }
    setBmi(bmi);
    console.log(bmi);
  };
  const Reload = (e) => {
    e.preventDefault();
    window.location.reload();
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Calculator:</h1>
      <form onSubmit={Submit}>
        <div className="input-group">
          <label>weight (ibs) </label>
          <input
            type="text"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Height (in) </label>
          <input
            type="text"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <button type="submit">Submit</button>
          <button onClick={Reload}>Reload</button>
        </div>
        <div className="input-group">
          <h2>BMI :{bmi} </h2>
          <p>{msg}</p>
        </div>
      </form>
    </>
  );
};

export default Calculator;

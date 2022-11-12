import React, {useState} from "react";

export default function Bmicalc(props) {
  const [weight, setWeight]= useState(0)
  const [height, setHeight]= useState(0)
  const [bmi, setBmi]= useState('')
  const [message, setMessage]=useState()
  const [suggestWeight, setSuggestWeight]= useState()
  

  let bmiCalc = () => {
    if (weight === 0 || height ===0)
    {
      alert('Please enter a valid weight and height')
    }
    else {
    let myBmi=((weight)/(height/100)**2);
    setBmi(myBmi.toFixed(2))
    document.body.style.backgroundColor ='#042743';

    let lowRange=(weight-5);
    let highRange=(lowRange+17);

    setSuggestWeight('Your suggested weight range is ' +lowRange + '-' +highRange)

    if (myBmi<18.5)
    {
      setMessage("You are in under weight range");
    }

    else if (myBmi>=18.5 && bmi<25) {
      setMessage(" You are in healthy weight range");
    }

    else if(myBmi>=25 && bmi<=30)
    {
      setMessage("You are in over weight range");
    }

    else {
      setMessage("You are in obesity range");
    }
    
    }
  }

 

 
  return (
    <div className="bmicalculator">
      <div className="bmi" style={props.mystyle}>
        BMI Calculator
      </div>
      <div className="textarea" >
      <h4 style={props.styles} ><p style={{color: 'green'}}>Enter your weight in kg:</p></h4>
        <div>
          <label>
            <input type="digit" name="number" value={weight} onChange={(event) => setWeight(event.target.value)}  style={props.setStyle} />
          </label>
        </div>
      </div>
      <div className="textarea" >
      <h4 style={props.styles} ><p style={{color: 'green'}}>Enter your height in cm:</p></h4>
        <div>
          <label>
            <input type="digit" name="number" value={height} onChange={(event) => setHeight(event.target.value)} style={props.setStyle} />
          </label>
        </div>
      </div>
      <button type="button"  onClick={bmiCalc} style={props.styleButton} >Submit</button>
      <div style={props.bmiStyle}>
        <p style={{color:'green'}}>Your BMI is {bmi} <br></br></p>
        <p style={{color:'white'}} >{message}</p>
        <p style={{color:'white'}} >{suggestWeight} </p>
      </div>
    </div>
  );
}

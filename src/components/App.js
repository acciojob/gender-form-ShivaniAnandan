
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let[gender,setGender]=useState("");






  return (
    <div>
        <h2>Select your gender:</h2>
        <input type="radio" name="gender" value="male" id="male"
        onChange={(e)=>setGender(e.target.value)} />
        <label forHTML="male">Male</label>
        <input type="radio" name="gender" value="female" id="female"
        onChange={(e)=>setGender(e.target.value)} />
        <label forHTML="female">femaleMale</label>


        {
          gender=="male" && (
            <div>
            <h2>Select your shirt size:</h2>
            <select name="male-size" id="male-size">
              <option value="Select size" disabled>Select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            </div>
          )

          }
          {
          gender=="female" && (
            <div>
            <h2>Select your dress Size:</h2>
            <select name="female-size" id="female-size">
              <option value="Select size" disabled>Select size</option>
              <option value="two">2</option>
              <option value="four">4</option>
              <option value="six">6</option>
            </select>
            </div>
          )
        }

    </div>
  )
}

export default App

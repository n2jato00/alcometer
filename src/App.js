import './App.css';
import { useState } from 'react';

function App() {


  const [weight, setWeight] = useState(90)
  const [gender, setGender] = useState('male')
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0)
  const bottlesArray = []
  for (let i = 1; i <= 15; i++) {
    bottlesArray.push(i);
  }
  const timeArray = []
  for (let i = 0; i <= 24; i++) {
    timeArray.push(i);
  }


  function calculate(e) {
    e.preventDefault();
    let alcohol = 0;
    let litre = 0
    let grams = 0
    let burning = 0
    let gramsresult = 0

    litre = bottles * 0.33
    grams = litre * 8 * 4.5
    burning = weight / 10
    gramsresult = grams - (burning * time)

    if (gender === 'male') {
      alcohol = gramsresult / (weight * 0.7)
    }
    else {
      alcohol = gramsresult / (weight * 0.6)
    }
    if (alcohol < 0) {
      alcohol = 0

    }
    setResult(alcohol);
  }


  return (
    <>
      <h3>Veren alkoholipitoisuus</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Paino (kg): </label>
          <input name='weight' type='number' step='1' value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Pullot (kpl): </label>
          <select name='bottles' value={bottles} onChange={e => setBottles(e.target.value)}>
            {
              bottlesArray.map(opt => <option>{opt}</option>)
            }
          </select>
        </div>
        <div>
          <label>Aika aloittamisesta (h) </label>
          <select name='time' value={time} onChange={e => setTime(e.target.value)}>
            {
              timeArray.map(opt => <option>{opt}</option>)
            }
          </select>
        </div>
        <div>
          <label>Sukupuoli: </label>
          <input type='radio' name='gender' value='male' defaultChecked onChange={e => setGender(e.target.value)} /><label>Mies</label>
          <input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)} /><label>Nainen</label>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <button>Laske</button>
      </form>
    </>
  );
}

export default App;

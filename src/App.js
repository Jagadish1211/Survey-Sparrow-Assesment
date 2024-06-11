import { useState } from 'react';

import './App.css';
import Background from './Components/Background';
import GraphBox from './Components/GraphBox';

const ratingsData = {
  1: 15,
  2: 13,
  3: 25,
  4: 35,
  5: 44
};



function App() {
  const [dataset, setDataset] = useState(ratingsData);

  const RegenerateData = () => {
    const newDataset = {};
    for (let i = 1; i <= 5; i++) {
      newDataset[i] = Math.floor(Math.random() * 50);
    }
    setDataset(newDataset);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rating Breakdown analysis</h1>
        <Background>
          <GraphBox ratings={dataset}/>
        </Background>
        <button className='generate-data-button' onClick={RegenerateData}>
          Regenerate
        </button>
      </header>
    </div>
  );
}

export default App;

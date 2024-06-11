import { useState } from 'react';

import './App.css';
import Background from './Components/Background';
import GraphBox from './Components/GraphBox';


function App() {
  const [dataset, setDataset] = useState([{rating : 15, key : 15}, {rating : 13, key : 13}, {rating : 25, key : 25}, {rating : 35, key : 35} , {rating : 44, key : 44}]);

  const RegenerateData = () => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push({rating: Math.floor(Math.random() * 50), key: i+1});
    }
    setDataset(arr);
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

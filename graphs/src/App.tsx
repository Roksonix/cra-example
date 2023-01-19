import { useEffect, useState } from 'react';
import './App.css';
import UnitsPerDate from './components/UnitsPerDate';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/graph.json?key=158c1970")
      .then(res => res.json())
      .then(result => setData(result))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {
          !data
            ? <p>Loading...</p>
            : <UnitsPerDate data={data} />
        }
      </header>
    </div>
  );
}

export default App;

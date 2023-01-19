import { useQuery } from 'react-query';
import './App.css';
import UnitsPerDate from './components/UnitsPerDate';

function App() {
  const { isLoading, data } = useQuery<ChartItem[]>("chart-data", async () => {
    const result = await fetch("https://my.api.mockaroo.com/graph.json?key=158c1970");

    return result.json();
  });

  return (
    <div className="App">
      <header className="App-header">
        <>
          { isLoading && <p>Loading...</p> }
          { data && <UnitsPerDate data={data} /> }
        </>
      </header>
    </div>
  );
}

export default App;

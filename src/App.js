import { useState } from "react";

function App() {

  const [results, setResults] = useState(null);
  const [search, setSearch] = useState(null);

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'x-api-key': 'df6fc6cd-b2ca-4437-bc66-da2057ccdde0'
    },
    body: JSON.stringify({ query: search })
  };

  const findJobs = () => {
    fetch('https://api.metaphor.systems/search', options)
      .then(response => response.json())
      .then(response => { console.log(response); setResults(response) })
      .catch(err => console.error(err));
  }



  return (
    <div className="App">
      <input type="text" onChange={e => setSearch(e.target.value)} />
      <button onClick={findJobs}>Find</button>
      {JSON.stringify(results)}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useState } from 'react';

function App() {
  //React js hook demo
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('This');
    console.log('wo');
  }, []);

  const caculatedValue = useMemo(() => {
    return count + 1;
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Title count={count} />
        <button href="javascript:void(0)" onClick={() => setCount(count + 1)}>
          Add count
        </button>
      </header>
    </div>
  );
}

function Title({ count }) {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React {count}
    </a>
  );
}

export default App;

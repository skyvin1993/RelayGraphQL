import React from 'react';
import logo from './logo.svg';
import './App.css';

import { QueryRenderer } from 'react-relay';
import RelayEnv from './RelayEnv';
import { GET_MESSAGES } from './RelayEnv/Queries'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <QueryRenderer
          environment={ RelayEnv }
          query={ GET_MESSAGES }
          variables={{ page: 1 }}
          render={({error, props}) => {
              if (error) {
                  return <div>Error!</div>;
              }
              if (!props) {
                  return <div>Loading...</div>;
              }

              console.log(props);
              return '';
          }}
      />
    </div>
  );
}

export default App;

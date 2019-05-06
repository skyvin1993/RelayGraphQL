import React from 'react';
import './App.css';
import Messages from './Components/Messages/Messages';
import AuthInfo from './Components/AuthInfo/AuthInfo';
import Orders from './Components/Orders/Orders';
import './Custom.scss';

function App() {
  return (
    <div className="App">
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <AuthInfo />
                </div>
                <div className="col-5">
                    <Messages />
                </div>
                <div className="col-4 orders-rale">
                    <Orders/>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";
import Shortener from "./components/Shortener";
import UrlTable from "./components/UrlTable";


//this file is used to instantiate the various pages 

function App() {
  const [UrlTableKey, setUrlTableKey] = useState(0); // state to keep track of key for UrlTable component
  
  const reloadUrlTable = () => {
    setUrlTableKey(UrlTableKey + 1); // update key to trigger re-render of UrlTable component
  };
  return (
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/shortener' render={() => (
                <div>
            <Shortener reloadUrlTable={reloadUrlTable}/>
            <UrlTable key={UrlTableKey}/>
            </div>
        )} />
          </Switch>
        </BrowserRouter>



  );
}

export default App;


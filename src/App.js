import React, { useState, useEffect } from 'react';
import Register from "./components/Register";
import Login from "./components/Login";
import Shortener from "./components/Shortener";
import UrlTable from "./components/UrlTable";


//this file is used to instantiate the various pages 

function App() {
  /* const [tableRefresh, setTableRefresh] = useState(false);
  const handleTableRefresh = () => {
    setTableRefresh(!tableRefresh);
  }
 */
  const [UrlTableKey, setUrlTableKey] = useState(0); // state to keep track of key for UrlTable component
  
  const reloadUrlTable = () => {
    setUrlTableKey(UrlTableKey + 1); // update key to trigger re-render of UrlTable component
  };
  return (
    //<Register />
    //<Login />
    <div className="shortener-div"> 
    <div>
      <Shortener reloadUrlTable={reloadUrlTable}/>
    </div>
    <div>
      <UrlTable key={UrlTableKey}/>
    </div>
    </div> 
    
    
    

  );
}

export default App;

import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/coffee">
            <h1>Coffee</h1>
          </Route>
          <Route exact path="/">
            <h1>KILLER BEAN</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

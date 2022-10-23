import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage';

function App() {
  const [allCoffees, setAllCoffees] = useState([])
  
  useEffect(() => {
    fetch("/coffees")
      .then(res => res.json())
      .then(data => setAllCoffees(data))
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/coffee">
            <h1>Coffee</h1>
          </Route>
          <Route exact path="/">
            <HomePage allCoffees={allCoffees}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

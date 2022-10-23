import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SignUpForm from './components/SignUpForm';

function App() {
  const [allCoffees, setAllCoffees] = useState([])
  
  useEffect(() => {
    fetch("/coffees")
      .then(res => res.json())
      .then(data => setAllCoffees(data))
  }, [])

  console.log(allCoffees)

  //UserData
  const [users, setUsers] = useState([])

  useEffect(() => {
      fetch('/users')
      .then(r => r.json())
      .then(data => setUsers(data))
  }, [])

  const newUser = (newUser) => {
      setUsers([...users, newUser])
  }
  
  console.log(users)
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/coffee">
            <h1>Coffee</h1>
          </Route>
          <Route exact path="/">
            <HomePage allCoffees={allCoffees}/>
          </Route>
          <Route exact path="/signup">
            <SignUpForm newUser={newUser}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';

function App() {
  const [allCoffees, setAllCoffees] = useState([])
  const [currentUser, setCurrentUser] = useState(false)
  
  const fetchCoffees = () => {
    fetch("/coffees")
      .then(res => res.json())
      .then(data => setAllCoffees(data))
  }

  useEffect(() => {
    fetch("/authorized_user")
      .then(res => {
        if(res.ok){
          res.json().then(user => {
            updateUser(user)
            fetchCoffees()
          })
        }
      })
  }, [])

  const updateUser = (user) => setCurrentUser(user)

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
            <SignUpForm setCurrentUser={setCurrentUser} newUser={newUser}/>
          </Route>
          <Route exact path="/login">
            <Login updateUser={updateUser}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

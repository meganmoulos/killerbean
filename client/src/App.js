import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [allCoffees, setAllCoffees] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(false)
  const [coffeeOrders, setCoffeeOrders] = useState([])
  const [currentCart, setCurrentCart] = useState([])
  
  const updateUser = (user) => setCurrentUser(user)
  
  function handleAddToCart (coffee) {
    fetch('/coffee_orders', {
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({ invoice_id: null, coffee_id: coffee.id, size: coffee.size}),
    })
    .then(res => res.json())
    .then(data => setCurrentCart(data))
  }

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

  useEffect(() => {
      fetch('/users')
      .then(r => r.json())
      .then(data => setUsers(data))
  }, [])

  const newUser = (newUser) => {
      setUsers([...users, newUser])
  }

  function fetchCoffeeOrders(){
    fetch('/coffee_orders')
      .then(res => res.json())
      .then(data => setCoffeeOrders(data))
  }

  useEffect(() => {
    fetch('/cart')
      .then(res => {
        if(res.ok){
          res.json().then(data => {
            fetchCoffeeOrders()
          })
        }
      })
    }, [])

  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/coffee">
            <h1>Coffee</h1>
          </Route>
          <Route exact path="/">
            <HomePage handleAddToCart={handleAddToCart} allCoffees={allCoffees}/>
          </Route>
          <Route exact path="/signup">
            <SignUpForm setCurrentUser={setCurrentUser} newUser={newUser}/>
          </Route>
          <Route exact path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route exact path="/cart">
            <ShoppingCart coffeeOrders={coffeeOrders} currentCart={currentCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

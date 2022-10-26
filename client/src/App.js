import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [allCoffees, setAllCoffees] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [coffeeOrders, setCoffeeOrders] = useState([])
  const [invoice, setInvoice] = useState({})
  // const [allInvoices, setAllInvoices] = useState([])
  
  const updateUser = (user) => setCurrentUser(user)
  const newUser = (newUser) => {
      setUsers([...users, newUser])
  }
  
  const currentCart = coffeeOrders?.filter(coffee => coffee?.invoice.id === invoice.id)
  const pastOrders = coffeeOrders?.filter(coffee => coffee?.invoice.id !== invoice.id)
  

  function handleAddToCart (coffee) {
    fetch('/coffee_orders', {
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({ invoice_id: invoice.id, coffee_id: coffee.id, size: "Large"}),
    })
    .then(res => res.json())
    .then(data => {
      setCoffeeOrders([...coffeeOrders, data])
      setInvoice(data.invoice)
    })
  }

  // After payment - set invoice back to empty
  // Add checkout button

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

  useEffect(() => {
    fetch('/coffee_orders')
      .then(r => r.json())
      .then(data => setCoffeeOrders(data))
  }, [])

  // useEffect(() => {
  //   fetch('/invoices')
  //     .then(res => res.json())
  //     .then(data => setAllInvoices(data))
  // }, [])
  
  function handleLogout(){
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(setCurrentUser(false))
    .then(window.location.href = '/login')
  }

  function removeFromCart (coffeeOrder) {
    console.log(invoice)    
    console.log(coffeeOrder)
    // if(invoice.id === coffeeOrder.invoice.id)
    //   setInvoice()
  }

  return (
    <Router>
      <NavBar currentUser={currentUser} handleLogout={handleLogout}/>
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
            <ShoppingCart pastOrders={pastOrders} currentCart={currentCart} removeFromCart={removeFromCart} />
          </Route>
          <Route exact path='/logout'>
            <p>Logout</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import ShoppingCart from './components/ShoppingCart';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [allCoffees, setAllCoffees] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [coffeeOrders, setCoffeeOrders] = useState([])
  const [invoice, setInvoice] = useState({})
  
  const updateUser = (user) => setCurrentUser(user)
  const newUser = (newUser) => {
      setUsers([...users, newUser])
  }
  
  const currentCart = coffeeOrders?.filter(coffee => coffee?.invoice.id === invoice.id)
  const pastOrders = coffeeOrders?.filter(coffee => coffee?.invoice.id !== invoice.id)
  
  const addToCart = () => toast('Added to cart!')

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
    addToCart()
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
    const newOrders = coffeeOrders.filter(order => order.id !== coffeeOrder.id)
    setCoffeeOrders(newOrders)
    console.log(coffeeOrder)

    fetch(`/coffee_orders/${coffeeOrder.id}`, {
      method: 'DELETE'
    })
  }

  const callToast = () => toast('Checkout successful!')

    function handleCheckout(order){
    pastOrders.push(order)
    setInvoice({})
    callToast()
  }

  return (
    <div>
      <ToastContainer />
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
              <ShoppingCart pastOrders={pastOrders} currentCart={currentCart} removeFromCart={removeFromCart} handleCheckout={handleCheckout}/>
            </Route>
            <Route exact path='/logout'>
              <p>Logout</p>
            </Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;

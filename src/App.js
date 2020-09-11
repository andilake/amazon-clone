import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from 'firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51HPwYJFT3ZcmUMbTN3jsDz5nmfx1k85My3C1BzQgCHNGNkfnWazxdp9AJfMc8IcZ6iESw3cXk8TE2w85tJGKby2M00Fi4PPJ7x');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...
    //if you write a variable inside the square brakets it will run when that variable changes 
    auth().onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser);

      if (authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  }, [dispatch])

  return (
    // BEM convention nombre app
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    // La ruta por defecto, debe estar siempre al final
  );
}

export default App;

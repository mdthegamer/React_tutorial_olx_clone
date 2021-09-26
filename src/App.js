
import './App.css';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { AuthContext,FirebasesContext } from './store/FireBaseContext';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import React,{useEffect,useContext} from 'react';
import Post from './store/PostContext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setUser} =useContext(AuthContext)
  const {firebase}=useContext(FirebasesContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Route exact path='/'>
      <Home />
      </Route>
      <Route exact path='/signup'>
      <Signup />
      </Route>
      <Route exact path='/login'>
      <Login />
      </Route>
      <Route exact path='/create'>
      <Create />
      </Route>
      <Route exact path='/view'>
      <View />
      </Route>
      </Router>
    </Post>
    </div>
  );
}

export default App;

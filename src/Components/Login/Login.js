
import React,{useState,useContext} from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import {FirebasesContext} from '../../store/FireBaseContext'
import {useHistory} from 'react-router-dom'
function Login() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const {firebase}=useContext(FirebasesContext)
  const history = useHistory()
  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((err)=>{
      alert(err.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a className='btn btn-primary' href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;

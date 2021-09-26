import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebasesContext} from './store/FireBaseContext'
import Context from './store/FireBaseContext'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import firebase from './firebase/config'
ReactDOM.render(
<Router>
<FirebasesContext.Provider value={{firebase}}>
<Context>
<App />
</Context>
</FirebasesContext.Provider>  
</Router>  
, 
document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Index from './pages/Index/index.jsx'
import Login from './pages/Login/login.jsx'
import './index.css'
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <Switch> 
      <Route to='/login' exact component={Login}></Route>
      <Route to='/' exact component={Index}></Route>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

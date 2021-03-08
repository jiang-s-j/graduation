import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

import Index from '@/pages/Index/index.jsx'
import Login from '@/pages/Login/login.jsx'
import './index.css'
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom'
import store from '@/store/index'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
          <Route  path={'/index'} component={Index}></Route>
          <Route exact path={'/login'} component={Login}></Route>
          <Redirect from='/' to='/index/recommend'></Redirect>
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

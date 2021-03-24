import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

import Index from '@/pages/Index/index.jsx'
import Login from '@/pages/Login/login.jsx'
import NotFound from '@/pages/notFound/notFound.jsx'
import List from '@/components/ListView/listView.jsx'
import './index.css'
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom'
import store from '@/store/index'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
          <Route  path={'/index'} component={Index}></Route>
          <Route exact path={'/login'} component={Login}></Route>
          <Route exact path={'/404'}>
            <NotFound></NotFound>
          </Route>
          <Route exact path={'/list'}>
            <List></List>
          </Route>
          {/* <Redirect from='/' to='/404'></Redirect> */}
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

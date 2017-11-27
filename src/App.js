import React, {
  Component
} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
import './css/antd.css';
import {
  connect
} from 'react-redux';
import {
  Icon,
  Button
} from 'antd'
import Home from './home';
import FenLei from './fenlei';
import QianXian from './qianxian';
import Car from './car';
import My from './my';
import './css/index.css'
const App = () => (
  <Router>
    <div>
      <ul className="list">
        <li><NavLink activeClassName="active" to="/home"><Icon type="home"/><span>首页</span></NavLink></li>
        <li><NavLink activeClassName="active" to="/qianxian"><Icon type="up-square"/><span>抢先</span></NavLink></li>
        <li><NavLink activeClassName="active" to="/fenlei"><Icon type="appstore-o"/><span>分类</span></NavLink></li>
        <li><NavLink activeClassName="active" to="/car"><Icon type="shopping-cart"/><span>购物车</span></NavLink></li>
        <li><NavLink activeClassName="active" to="/my"><Icon type="user"/><span>我的银泰</span></NavLink></li>
      </ul>

      <hr/>
      <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home}/>
      <Route path="/fenlei" component={FenLei}/>
      <Route path="/qianxian" component={QianXian}/>
      <Route path="/car" component={Car}/>
      <Route path="/my" component={My}/>
      </Switch>
    </div>
  </Router>
)
export default App
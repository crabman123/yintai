import React, {
  Component
} from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import TuiJian from './tuijian';
import ZuiXin from './zuixin';
import TeMai from './temai';
import DaoJi from './daoji';
import YuGao from './yugao';
import './qiancss/index.css'
const Qianxian = () => (
  <Router>
    <div>
        <h3>抢先</h3>
      <ul className="list1">
        <li><NavLink activeClassName="active1" to="/qianxian/tuijian"><span>推荐</span></NavLink></li>
        <li><NavLink activeClassName="active1" to="/qianxian/zuixin"><span>最新</span></NavLink></li>
        <li><NavLink activeClassName="active1" to="/qianxian/temai"><span>特卖爆推</span></NavLink></li>
        <li><NavLink activeClassName="active1" to="/qianxian/daoji"><span>倒计时</span></NavLink></li>
        <li><NavLink activeClassName="active1" to="/qianxian/yugao"><span>预告</span></NavLink></li>
      </ul>

      <hr/>
      <Switch>
        <Redirect exact from="/qianxian" to="/qianxian/tuijian" />
        <Route path="/qianxian/tuijian" component={TuiJian}/>
        <Route path="/qianxian/zuixin" component={ZuiXin}/>
        <Route path="/qianxian/temai" component={TeMai}/>
        <Route path="/qianxian/daoji" component={DaoJi}/>
        <Route path="/qianxian/yugao" component={YuGao}/>
      </Switch>
    </div>
  </Router>
)
export default Qianxian
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
import XiangQing from './xiangqing';
import './qiancss/index.css';
import './qiancss/qianxian.css';

const Qianxian = () => (
  <Router>
    <div>
      <h3>抢先</h3>
      <Switch>
        <Redirect exact from="/qianxian" to="/qianxian/tuijian" />
        <Route path="/qianxian/tuijian" component={TuiJian}/>
        <Route path="/qianxian/zuixin" component={ZuiXin}/>
        <Route path="/qianxian/temai" component={TeMai}/>
        <Route path="/qianxian/daoji" component={DaoJi}/>
        <Route path="/qianxian/yugao" component={YuGao}/>
        <Route path="/qianxian/xiangqing" component={XiangQing}/>
      </Switch>
    </div>
  </Router>
)
export default Qianxian
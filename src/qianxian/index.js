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
import axios from 'axios';


class Product extends Component {
  constructor() {
    super()
    this.state = {
      product: {},
      largeimgurls: []
    }
  }
  componentDidMount() {
    var that = this
    axios.get(`/Services/Proxy.ashx?data=%7B"itemcode"%3A"${this.props.match.params.num}"%2C"userid"%3A""%7D&userid=&methodName=products.getproductdetail_1.0.0&method=products.getproductdetail&ver=1.0.0&r=20171130908`)
      .then(function(res) {
        console.log(res)
        that.setState({
          product: res.data.data.products[0],
          largeimgurls: res.data.data.products[0].largeimgurls
        })
      })
  }
  render() {
    var items = this.state.product ? this.state.product : {}
    return (
      <div>
        <div>{items.longname}</div>
        <div>{items.genders}</div>
        <div>{items.showcategory}</div>
        <div>{items.name}</div>
        {
          this.state.largeimgurls.map((item,index)=>{
            return(
              <div key={index}>
                <img src={item}/>
              </div>
              )
          })
        }
        <NavLink to="/car">
        <div className="product_car">
          加入购物车
        </div>
        </NavLink>
      </div>
    )
  }
}

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
        <Route path="/qianxian/xiangqing/:num/:fname" component={XiangQing}/>
        <Route path="/qianxian/product/:num/:fname" component={Product}/>
      </Switch>
    </div>
  </Router>
)
export default Qianxian
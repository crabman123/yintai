import React, {
    Component
} from 'react'
import axios from 'axios';
import '../qiancss/qianxian.css';
import {
    NavLink,
} from 'react-router-dom';
import PageMask from '../PageMask.js'
class TuiJian extends Component {
    constructor() {
        super()
        this.state = {
            activitylist: []
        }
    }
    componentDidMount() {
        var that = this
        axios.get('/Services/Proxy.ashx?r=0.7560145697186798&type=5&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1')
            .then(function(res) {
                that.setState({
                    activitylist: res.data.data.activityinfo[0].activitylist
                })
            })
    }
    time(leftsecond) {
        return Math.floor((leftsecond) / 86400)
    }
    render() {
        if (this.state.activitylist.length == 0) {
            //代表还没有完成 数据交互,显示一个蒙版
            return <PageMask />
        }
        return (
            <div>
      <ul className="list1">
        <li><NavLink activeClassName="active1" to="/qianxian/tuijian"><span>推荐</span></NavLink></li>
        <li><NavLink activeClassName="active1" to="/qianxian/zuixin"><span>最新</span></NavLink></li>
        <li><NavLink activeClassName="active1" to="/qianxian/temai"><span>特卖爆推</span></NavLink></li>
        <li><NavLink activeClassName="active1" to="/qianxian/daoji"><span>倒计时</span></NavLink></li>
        <li><NavLink activeClassName="active1" to="/qianxian/yugao"><span>预告</span></NavLink></li>
      </ul>
            {
                this.state.activitylist.map((item,index)=>{
                    return(
                        <div key={index} className='box' >
                            <div className='tuijian'>
                                <span>{item.discount}</span>
                                <NavLink to={"/qianxian/xiangqing/"+item.id+"/" + item.name}><img src={item.imgurl}/></NavLink>
                                <div style={{paddingBottom:'10px'}}>
                                <p>{item.title}</p>
                                <p className='day'>剩余<span className='day_time'>{this.time(item.leftsecond)}</span>天</p>  
                                </div>
                            </div>
                        </div>
                        )
                })
            }
            </div>
        )
    }
}

export default TuiJian
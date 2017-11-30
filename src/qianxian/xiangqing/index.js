import React, {
    Component
} from 'react'
import {
    NavLink,
} from 'react-router-dom';
import axios from 'axios';
import PageMask from '../PageMask.js';
class XiangQing extends Component {
    constructor() {
        super()
        this.state = {
            product_list: []
        }
    }
    componentDidMount() {
        var that = this
        axios.get(`/Services/Proxy.ashx?r=0.0870120363518263&order_type=0&page_index=1&displaycount=30&query_string=&keyword=&bargainid=${this.props.match.params.num}&method=products.getlimitlist&ver=2.1`)
            .then(function(res) {
                console.log(res)
                console.log(res.data.data.product_list)
                that.setState({
                    product_list: res.data.data.product_list
                })
            })
    }
    time(leftsecond) {
        return Math.floor((leftsecond) / 86400)
    }
    render() {
        if (this.state.product_list.length == 0) {
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

                this.state.product_list.map((item,index)=>{
                    return(
                        <div key={index}>
                            <div className='TMbox'>
                                <div className='TMimg'>
                                    <NavLink to={"/qianxian/product/"+item.itemcode+"/" + item.name}><img src={item.image}/></NavLink>
                                </div>
                                <h4>{item.name}</h4>
                                <div className='TMprice'>                                    
                                    <p>{item.price}</p>
                                    <p>{item.yt_price}</p>
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

export default XiangQing
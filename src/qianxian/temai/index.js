import React, {
    Component
} from 'react'
import PageMask from '../PageMask.js'
import axios from 'axios';
class TeMai extends Component {
    constructor() {
        super()
        this.state = {
            activitylist: []
        }
    }
    componentDidMount() {
        var that = this
        axios.get('/Services/Proxy.ashx?r=0.8177640962774151&type=3&pageindex=1&pagesize=30&methodName=products.getrecommendedproductlist_1.2.0&method=products.getrecommendedproductlist&ver=2.1')
            .then(function(res) {
                console.log(res)
                    // console.log(res.data.data.activityinfo[0].activitylist)
                that.setState({
                    activitylist: res.data.data.productlist,
                })
            })
    }
    time(leftsecond) {
        return Math.floor((leftsecond) / 3600)
    }
    render() {
        if (this.state.activitylist.length == 0) {
            //代表还没有完成 数据交互,显示一个蒙版
            return <PageMask />
        }
        return (
            <div>
            {
                this.state.activitylist.map((item,index)=>{
                    return(
                        <div key={index}>
                            <div className='TMbox'>
                <div className='TMimg'>
                                    <img src={item.image}/>
                                </div>
                                <h4>{item.name}</h4>
                                <div className='TMprice'>                                    
                                    <p>{item.price}</p>
                                    <p>{item.yt_price}</p>
                                    <div className='TMday'>
                                        <p>{this.time(item.endtimesecond)}小时</p>
                                    </div>  
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

export default TeMai
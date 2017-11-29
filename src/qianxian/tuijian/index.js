import React, {
    Component
} from 'react'
import axios from 'axios';
import '../qiancss/qianxian.css';
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
                console.log(res)
                console.log(res.data.data.activityinfo[0].activitylist)
                that.setState({
                    activitylist: res.data.data.activityinfo[0].activitylist,
                })
            })
    }
    time(leftsecond) {
        return Math.floor((leftsecond) / 86400)
    }
    render() {
        return (
            <div>
            {
                this.state.activitylist.map((item,index)=>{
                    return(
                        <div key={index} className='box' >
                            <div className='tuijian'>
                                <span>{item.discount}</span>
                                <img src={item.imgurl}/>
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
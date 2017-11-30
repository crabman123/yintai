import React, {
    Component
} from 'react'
import '../css/antd.css';
import './input.css';
import {
    Icon
} from 'antd';
import axios from 'axios';
class Input extends Component {
    constructor() {
            super();
            this.state = {
                list: []
            };

            this.addTodo = this.addTodo.bind(this);
            this.add = this.add.bind(this);
        }
        // componentDidMount() {
        //     this.setState({
        //         if (res.data.data.product_list = null) {
        //             list: []
        //         }
        //     })
        // }
    addTodo(data, e) {
        var that = this;
        // this.state.list.push("对不起，检查不到你输入的内容！！！！");
        // this.setState({
        //     list: this.state.list.slice(0, 1)
        // });
        axios.get(`/Services/Proxy.ashx?r=201711301303&method=products.getlist&ver=2.1&data=%7B"order_type"%3A0%2C"page_index"%3A1%2C"displaycount"%3A30%2C"query_string"%3A""%2C"keyword"%3A"${data}"%7D`)
            .then(function(res) {
                console.log(res)
                if (res.data.data != null) {
                    that.setState({
                        list: res.data.data.product_list
                    })

                    return

                }
                that.setState({
                    list: [{
                        price: '你的商品查找不到！！！！'
                    }]

                })


            })
        this.refs.ipt.value = " "
    }
    add(e) {
        var that = this;
        if (e.keyCode == 13) {
            axios.get(`/Services/Proxy.ashx?r=201711301303&method=products.getlist&ver=2.1&data=%7B"order_type"%3A0%2C"page_index"%3A1%2C"displaycount"%3A30%2C"query_string"%3A""%2C"keyword"%3A"${e.target.value}"%7D`)
                .then(function(res) {
                    console.log(res)
                    if (res.data.data != null) {
                        that.setState({
                            list: res.data.data.product_list
                        })

                        return
                    }
                    that.setState({
                        list: []

                    })

                })
            this.refs.ipt.value = " "
            return
        }
    }
    render() {

        return (
            <div>
                <header>
                    <img src="https://r.ytrss.com/mobile/img/newlogo.png"/>
                    <div className="sea-txt">
                        <input type="text" placeholder="搜索商品or品牌" id="txtKeyword" ref='ipt' onKeyUp={this.add}/>
                        <span id="btnSearch">
                            <Icon type="search" onClick={(e)=>{this.addTodo(this.refs.ipt.value)}} style={{paddingLeft:'8px'}}/>
                        </span>
                    </div>
                    <div className="user">
                        <a href='/'>
                        <span>
                           <Icon type="user-add" style={{ color: '#666' }}/> 
                        </span>
                        </a>
                    </div>
                </header>

                    {
                      this.state.list.map((item, index)=>{
                        return (
                            <div key={index}>
                                <img src={item.image}/>
                                <p>{item.price}</p>
                                <p>{item.name}</p>
                            </div>
                        );
                      })
                    }

         </div>
        )
    }
}
export default Input
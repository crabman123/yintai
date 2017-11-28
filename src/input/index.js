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
    }
    addTodo(data) {
        this.state.list.push("对不起，检查不到你输入的内容！！！！");
        this.setState({
            list: this.state.list.slice(0, 1)
        });

    }
    render() {
        return (
            <div>
                <header>
                    <img src="https://r.ytrss.com/mobile/img/newlogo.png"/>
                    <div className="sea-txt">
                        <input type="text" placeholder="搜索商品or品牌" id="txtKeyword"  ref='ipt'/>
                        <span id="btnSearch">
                            <Icon type="search" onClick={()=>{this.addTodo(this.refs.ipt.value)}} style={{paddingLeft:'8px'}}/>
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
                <ul>
                    {
                      this.state.list.map((item, index)=>{
                        return (
                          <li key={index}>{item}</li>
                        );
                      })
                    }
                </ul>
            </div>
        )
    }
}

export default Input
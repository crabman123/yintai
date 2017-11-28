import React, {Component} from 'react';
import "./my.css";
class My extends Component {
	constructor(){
		super();
		this.showLeft = this.showLeft.bind(this);
		this.showRight = this.showRight.bind(this);
		this.state={
			isShowBorderL : true,
			isShowContentL : true,
			isShowBorderR : false,
			isShowContentR:false
			
		};
	}
	showLeft(){
		this.setState({
			isShowBorderL:true,
			isShowContentL:true,
			isShowBorderR:false,
			isShowContentR:false
		})
		
	}
	showRight(){
		this.setState({
			isShowBorderL:false,
			isShowContentL:false,
			isShowBorderR : true,
			isShowContentR:true
		})
		
	}
    render() {
        return (
            <div id="my">
            	<div id="my_header">登陆</div>
            	<div id="my_content">
            		<div className="content_header">
            			<span onClick={this.showLeft} className={this.state.isShowBorderL?'showBorderL':'hideBorderL'}>银泰登陆</span>
            			<span></span>
            			<span onClick={this.showRight} className={this.state.isShowBorderR?'showBorderR':'hideBorderR'}>注册</span>
            		</div>
            		<div className={this.state.isShowContentL?'showContentL':'hideContentL'} id="login">
            			<input placeholder="请输入账号或手机号"/><br/>
            			<input placeholder="请输入密码"/><br/><br/>
            			<button>登陆</button>
            		</div>
            		<div className={this.state.isShowContentR?'showContentR':'hideContentR'} id="regist">
            			<input placeholder="请输入账号或手机号"/><br/>
            			<input placeholder="请输入密码"/><br/><br/>
            			<button>注册</button>
            		</div>
            	</div>
            </div>
        )
    }
};

export default My;
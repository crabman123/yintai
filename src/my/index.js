import React, {Component} from 'react';
import axios from "axios";
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
	regist(name,psw){
		axios.post('/api/regist',{
			username:name,
			psw:psw
		}).then(function(res){
			console.log(res);
			if(res.data.code !=1){
				alert(res.data.msg);
				return;
			}
			alert('成了');
		})
	}
	login(name,psw){
		axios.post('/api/login',{
			username:name,
			psw:psw
		}).then(function(res){
			console.log(res);
			if(res.data.code !=1){
				alert(res.data.msg);
				return;
			}
			alert("登陆成功")
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
            			<input placeholder="请输入账号或手机号" ref="name_l"/><br/>
            			<input placeholder="请输入密码" ref="psw_l"/><br/><br/>
            			<button onClick={()=>{this.login(this.refs.name_l.value,this.refs.psw_l.value)}}>登陆</button>
            		</div>
            		<div className={this.state.isShowContentR?'showContentR':'hideContentR'} id="regist">
            			<input placeholder="请输入账号或手机号" ref="name_r"/><br/>
            			<input placeholder="请输入密码" ref="psw_r"/><br/><br/>
            			<button onClick={()=>{this.regist(this.refs.name_r.value,this.refs.psw_r.value)}}>注册</button>
            		</div>
            	</div>
            </div>
        )
    }
};

export default My;
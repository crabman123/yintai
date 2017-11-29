import React, {Component} from 'react';
import "../css/antd.css";
import "../css/fenlei.css";
import axios from"axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';

import {
	Icon
} from 'antd';

class FenLei extends Component {
	constructor(){
		super();
		this.state={
			isShow:false,
			films:[],
			top_name:'',
			films_center:[],
			center_name:'',
			films_bottom:[],
			bottom_name:''
		}
	}
	componentDidMount(){
		var that = this;
		axios.post("/Services/Proxy.ashx?r=0.8460764949920416&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=88")
		.then((res)=>{
			console.log(res);
			that.setState({
				films:res.data.data.recommend.categoryrecommend,
				top_name:res.data.data.recommend.name,
				films_center:res.data.data.brand.brandrecommend,
				center_name:res.data.data.brand.name,
				films_bottom:res.data.data.more.morerecommend,
				bottom_name:res.data.data.more.name,
			})
			
		})
	}
	hd(){
		if(!this.state.isShow){
			this.setState({
				isShow:true
			})
		}else{3
			this.setState({
				isShow:false
			})
		}
		
	}
    render() {
    	var list = this.state.films.map((item,index)=>{
    			return(
    				<div key={item.categoryid} className="lists">
    					<img src={item.imageurl}/>
    					<p>{item.name}</p>
    				</div>
    				
    			)
    	})
    	
    	var list_centent = this.state.films_center.map((item,index)=>{
    			return(
    				<div key={item.categoryid} className="lists_center">
    					<img src={item.imageurl}/>
    				</div>
    				
    			)
    	})
    	
    	var list_bottom = this.state.films_bottom.map((item,index)=>{
    			return(
    				<div key={item.categoryid} className="lists_bottom">
    					<span>{item.name}</span>
    				</div>
    				
    			)
    	})
        return (
            <div id="fenlei">
            	<div className="fenlei_header">
            		<Link to="/home"><Icon type="left" /></Link>
            		<span>分类</span>
            		<span onClick={()=>{this.hd()}}><Icon type="ellipsis"/></span>
            		
            	</div>
            	<div className="fenlei_main">
            		<div className={this.state.isShow?"show":"hide" } id="opc">
            			<ul>
            				<li><span><Icon type="home" /></span>        <span>银泰首页</span></li>
            				<li><span><Icon type="appstore-o" /></span>  <span>分类</span></li>
            				<li><span><Icon type="car" /></span>         <span>购物车</span></li>
            				<li><span><Icon type="user-add" /></span>    <span>我的银泰</span></li>
            			</ul>
            		</div>
            		<div id="main_search" >
            			<div>
            				<input type="text" placeholder="搜索商品or品牌"/>
            				<span><Icon type="search" /></span>
            			</div>
            		</div>
            		<div id="main_list">
            				<ul className="out_ul">
            					<li className="out_li1">时尚名品
            					</li>
            					<li>潮流女装</li>
            					<li>精品男装</li>
            					<li>品质内衣</li>
            					<li>护肤彩妆</li>
            					<li>品质鞋靴</li>
            					<li>时尚箱包</li>
            					<li>户外运动</li>
            					<li>珠宝饰品</li>
            					<li>母婴精选</li>
            					<li>家居家纺</li>
            				</ul>
            				
            		</div>
            		<div className="right">
							<div className="top">
								<div className="top_header">
									<span></span>
									{this.state.top_name}
									<span></span>
								</div>
								<div className="top_content">
									{list}
								</div>
            				</div>
            				<div className="center">
								<div className="center_header">
									<span></span>
									{this.state.center_name}
									<span></span>
								</div>
								<div className="center_content">
									{list_centent}
								</div>
            				</div>
            					<div className="bottom">
								<div className="bottom_header">
									<span></span>
									{this.state.bottom_name}
									<span></span>
								</div>
								<div className="bottom_content">
									{list_bottom}
								</div>
            				</div>
            		</div>
            	</div>
            </div>
        )
    }
}

export default FenLei
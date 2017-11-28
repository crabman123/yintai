import React, {
    Component
} from 'react';
import {
    Icon,
    Button,
    Carousel,
} from 'antd';
import '../css/antd.css';
import './home.css';
import axios from 'axios';
class Home extends Component {
    constructor() {
        super()
        this.state = {
            templatelist_bao: [],
            templatelist_TongTou: [],
            templatelist_Tongshen:[],
            templatelist_Tongwei:[],
            templatelist_MeiTou:[],
            templatelist_MeiShen:[],
            templatelist_MeiWei:[],
            templatelist_SheTou:[],
            templatelist_SheShen:[],
            templatelist_SheWei:[],
            templatelist_NvTou:[],
            templatelist_NvShen:[],
            templatelist_NvWei:[],
            templatelist_NanTou:[],
            templatelist_NanShen:[],
            templatelist_NanWei:[],

        }
    }
    componentDidMount() {
        var that = this
        axios.get('/Services/Proxy.ashx?r=20171127209&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1')
            .then(function(res) {
                console.log(res)
                console.log(res.data.data.templatelist[17])
                // console.log(res.data.data.templatelist[11].items[0].imgurl)
                that.setState({
                    templatelist_bao: res.data.data.templatelist[3].items,
                    templatelist_TongTou:res.data.data.templatelist[11].items[0].imgurl,
                    templatelist_Tongshen: res.data.data.templatelist[12].items,
                    templatelist_Tongwei: res.data.data.templatelist[13].items,
                    templatelist_MeiTou:res.data.data.templatelist[16].items[0].imgurl,
                    templatelist_MeiShen:res.data.data.templatelist[17].items,
                    templatelist_MeiWei:res.data.data.templatelist[18].items,
                    templatelist_SheTou:res.data.data.templatelist[21].items[0].imgurl,
                    templatelist_SheShen:res.data.data.templatelist[22].items,
                    templatelist_SheWei:res.data.data.templatelist[23].items,
                    templatelist_NvTou:res.data.data.templatelist[29].items[0].imgurl,
                    templatelist_NvShen:res.data.data.templatelist[30].items,
                    templatelist_NvWei:res.data.data.templatelist[31].items,
                    templatelist_NanTou:res.data.data.templatelist[39].items[0].imgurl,
                    templatelist_NanShen:res.data.data.templatelist[40].items,
                    templatelist_NanWei:res.data.data.templatelist[41].items,

                })
            })
    }
    render() {
        var items0 = this.state.templatelist_MeiShen['0']?this.state.templatelist_MeiShen['0']:[]
        var items1 = this.state.templatelist_MeiShen['1']?this.state.templatelist_MeiShen['1']:[]
        var items2 = this.state.templatelist_MeiShen['2']?this.state.templatelist_MeiShen['2']:[]
        console.log(this.state.templatelist_MeiShen)
        return (
            <div>
                <header>
                    <img src="https://r.ytrss.com/mobile/img/newlogo.png"/>
                    <div className="sea-txt">
                        <input type="text" placeholder="搜索商品or品牌" id="txtKeyword"/>
                        <span id="btnSearch">
                            <Icon type="search" style={{paddingLeft:'8px'}}/>
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
                <Carousel autoplay className='lun'>
                    <div><img src="https://yrs.yintai.com/rs/img/AppCMS/images/6d10c603-da74-4d4e-b875-f4f0c07c30c1.jpg"/></div>
                    <div><img src="https://yrs.yintai.com/rs/img/AppCMS/images/ad56418c-a0d1-4c34-a075-8a783760de56.jpg"/></div>
                    <div><img src="https://yrs.yintai.com/rs/img/AppCMS/images/5a743d05-1fdc-4d55-b3ec-454ecc293bf9.jpg"/></div>
                    <div><img src="https://yrs.yintai.com/rs/img/AppCMS/images/ad56418c-a0d1-4c34-a075-8a783760de56.jpg"/></div>
                </Carousel>
                <ul className="lun_list">
                    <li>
                    <img src="https://yrs.yintai.com/rs/img/AppCMS/images/e81ba9c3-4968-43a6-8085-100cc1e5d136.png"/>
                    <span>商场同款</span>
                    </li>
                    <li>
                    <img src="https://yrs.yintai.com/rs/img/AppCMS/images/79b77acb-051b-4aee-b05e-0d45b351fe69.png"/>
                    <span>奢品</span>
                    </li>
                     <li>
                    <img src="https://yrs.yintai.com/rs/img/AppCMS/images/6d19ba1c-a544-4128-abae-d152c0840520.png"/>
                    <span>断码名品</span>
                    </li>
                    <li>
                    <img src="https://yrs.yintai.com/rs/img/AppCMS/images/4abc2286-a12c-4585-a482-458c366fe588.png"/>
                    <span>会员专区</span>
                    </li>
                    <li>
                    <img src="https://yrs.yintai.com/rs/img/AppCMS/images/19e9f0d9-9605-483c-be42-0c4185555f4d.png"/>
                    <span>惠生活</span>
                    </li>
                </ul>

                <div className="baokuan">
                        {
                            this.state.templatelist_bao.map(function(item, index) {
                                return (<div key={index}>
                                            <img src={item.imgurl}/>
                                            <span>{item.extra.productdetail.name}</span>
                                        </div>)
                            })  
                        }
                </div>
                <div className="mall">
                    <img src="https://yrs.yintai.com/rs/img/AppCMS/images/6344048d-146b-4e77-80b3-3d1cb1ba1dd9.jpg"></img>
                </div>
                
                <div className="Shop_Tong" >
                   <img src={this.state.templatelist_TongTou} style={{width:'100%'}}/>                
                    {
                        this.state.templatelist_Tongshen.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                            })  
                    },
                    {
                        this.state.templatelist_Tongwei.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                            })  
                    }
                </div>
                <img src={this.state.templatelist_MeiTou} style={{width:'100%'}}/>
                <div className="Shop_Mei" >                   
                   <div className='Shop_MeiQ'>                
                        <div className='Shop_MeiS'>
                            <img src={items0.imgurl}/>
                            <img src={items1.imgurl}/>
                        </div>
                        <div className='Shop_MeiB'>
                            <img src={items2.imgurl}/>
                        </div>
                    </div>
                    <div className="Shop_Mei1">
                    {
                        this.state.templatelist_MeiWei.map(function(item, index) {
                            return (
                                <div key={index}>
                                 <img src={item.imgurl}/>
                                </div>
                                )
                            })  
                    }
                    </div>
                </div>
                <div className="Shop_Tong" >
                   <img src={this.state.templatelist_SheTou} style={{width:'100%'}}/>                
                    {
                        this.state.templatelist_SheShen.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                            })  
                    },
                    {
                        this.state.templatelist_SheWei.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                            })  
                    }
                </div>
                <div className="Shop_Tong" >
                   <img src={this.state.templatelist_NvTou} style={{width:'100%'}}/>                
                    {
                        this.state.templatelist_NvShen.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                            })  
                    },
                    {
                        this.state.templatelist_NvWei.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                            })  
                    }
                </div>
                <div className="Shop_Tong" >
                   <img src={this.state.templatelist_NanTou} style={{width:'100%'}}/>                
                    {
                        this.state.templatelist_NanShen.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                            })  
                    },
                    {
                        this.state.templatelist_NanWei.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                            })  
                    }
                </div>
        </div>
        )
    }
}

export default Home
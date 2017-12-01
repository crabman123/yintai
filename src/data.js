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
                </div> < img src = {
                    this.state.templatelist_MeiTou
                }
                style = {
                    {
                        width: '100%'
                    }
                }
                /> < div className = "Shop_Mei" >
                    <div className='Shop_MeiQ'>                
                        <div className='Shop_MeiS'>
                            <img src={items0.imgurl}/>
                            <img src={items1.imgurl}/>
                        </div>
                        <div className='Shop_MeiB'>
                            <img src={items2.imgurl}/>
                        </div>
                    </div> < div className = "Shop_Mei1" > {
                        this.state.templatelist_MeiWei.map(function(item, index) {
                            return (
                                <div key={index}>
                                 <img src={item.imgurl}/>
                                </div>
                            )
                        })
                    } < /div> < /div> < div className = "Shop_Tong" >
                    <img src={this.state.templatelist_SheTou} style={{width:'100%'}}/> {
                        this.state.templatelist_SheShen.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                        })
                    }, {
                        this.state.templatelist_SheWei.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                        })
                    } < /div> < div className = "Shop_Tong" >
                    <img src={this.state.templatelist_NvTou} style={{width:'100%'}}/> {
                        this.state.templatelist_NvShen.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                        })
                    }, {
                        this.state.templatelist_NvWei.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                        })
                    } < /div> < div className = "Shop_Tong" >
                    <img src={this.state.templatelist_NanTou} style={{width:'100%'}}/> {
                        this.state.templatelist_NanShen.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                        })
                    }, {
                        this.state.templatelist_NanWei.map(function(item, index) {
                            return (<div key={index}>
                                 <img src={item.imgurl}/>
                                </div>)
                        })
                    } < /div>


                var items0 = this.props.state.templatelist_MeiShen['0'] ? this.props.state.templatelist_MeiShen['0'] : []
                var items1 = this.props.state.templatelist_MeiShen['1'] ? this.props.state.templatelist_MeiShen['1'] : []
                var items2 = this.props.state.templatelist_MeiShen['2'] ? this.props.state.templatelist_MeiShen['2'] : []
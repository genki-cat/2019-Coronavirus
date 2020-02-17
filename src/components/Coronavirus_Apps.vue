<template>
    <div class="container">
        <div class="app-list">
            <ul>
                <li v-for="item in list">
                    <a :href="item.link">
                        <div class="icon"><img :src="item.icon"/></div>
                        <div class="info"><span class="title">{{item.name}}</span><span class="description">{{item.description}}</span></div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
var appList=[
    {name:'患者同程查询',icon:'static/icon_train.png',description:'新型肺炎患者同程航班/列车查询，返工必备神器！多走点心，兄嘚~',link:'https://h5.133.cn/gtgjwap/h5/virusTrip/home?use_type=h5&from=singlemessage&isappinstalled=0'},
    {name:'出入境管控查询',icon:'static/icon_traval.png',description:'出入境管控信息一键查询，口岸通行，各国管控政策，出门在外关注一下',link:'https://www.nia.gov.cn/n794014/n1050176/n1077211/n1215569/index.html?from=timeline&isappinstalled=0'},
    {name:'珍茗金龙水',icon:'static/icon_zhenming.png',description:'云南人都知道的，在线预订了解一下',link:'http://weixin.gemmy.com.cn/wx/Index/Index?actiontype=1&Random=2&from=singlemessage&isappinstalled=0'},
    {name:'美团外卖',icon:'static/icon_meituan.png',description:'不能出门的日子里，饭还是要吃好的~ 当然，除了饭也可以关注下口罩和医药',link:'https://h5.waimai.meituan.com/waimai/mindex/home'},
    {name:'达达快送',icon:'static/icon_dada.png',description:'不能当面给，快递又太慢？有时候还是需要同程快速送下东西',link:'https://kuai.imdada.cn/toc/corp/index_v2#/home'}
];

export default {
    name: 'App',
    data(){
        this.$parent.cur='apps';
        return {list:appList} 
    },
    methods:{
        goOusite:function(link){
           window.location.href = link; 
        }
    },
    create(){
    }
}
</script>
<style>
    .app-list ul{
        position:relative;
        width:90%;
        margin:0 5%;
        padding:5px 0;
        list-style:none;
    }
    .app-list ul li{
        width:100%;
        height:64px;
        margin:0;
        padding:20px 0;
        text-align:left;
        border-bottom: 1px solid #e1e1e1;
    }
    .app-list ul li:last-child{
        border:none;
    }
    .app-list ul li a{
        display:inline-block;
        width:100%;
        height:100%;
        text-decoration: none;        
        color:#000;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .app-list ul li div.icon{
        width:66px;
        height:66px;
    }
    .app-list ul li img{
        width:100%;
        border-radius:12px;
    }

    .app-list ul li div.info{
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-flex: 1;
        flex: 1 1 0;
        height: 64px;
        margin-left: 15px;
        overflow: hidden;
    }

    div.info .title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 20px;
        white-space: nowrap;
        font-size: 16px;
        color: #000;
        margin-bottom:6px;
        
    }

    div.info .description {
        line-height: 18px;
        color: rgba(0,0,0,.5);
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>

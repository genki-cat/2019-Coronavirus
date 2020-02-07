<template>
    <div class="container">
        <div class="news_list" v-for="v in list">
            <div @click="goOusite(v.link)" class="recommendItemWrap___3TEAs ">
                <div>
                    <div class="right___3rs0q">
                        <div class="lazyImage___PGYxM loaded___1Yilv cover___36RDw">
                            <img alt="cover" class="" :src="v.img" style="border-radius: 0px;">
                        </div>
                    </div>
                    <div class="left___2HDYh">
                        <div class="title___26zAA">
                            <span class="typeTag___37u0I" :class="'_'+v.category">{{v.categoryName}}</span>
                            {{v.title}}
                        </div>
                        <div class="date___BggNA">{{v.date}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
var newsdata=[
    {title:'昆明部分高速收费站实行交通管制！7条高速入昆车辆“逢车必检”',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1247218284,2007855333&fm=26&gp=0.jpg',category:'1',categoryName:'政府通告',date:'2020-02-05',link:'https://mp.weixin.qq.com/s?__biz=MzUyNTcyODcwOQ==&mid=2247531440&idx=4&sn=e21b99b8c6cf6d050da4fce9ccb6f846&chksm=fa1b951acd6c1c0cd9f73e9862efd373df2df0067d44127f6ba2e9b5dcb3afc34a7f216e2668&mpshare=1&scene=1&srcid=&sharer_sharetime=1580898869385&sharer_shareid=e79ffb202b363b13b5d91a2a1223d50d&exportkey=A%2Bw3xI%2B2irTrQvckUtJk8ac%3D&pass_ticket=4x6oB8My6XhL9nuFIsaxIp1buXNIkC%2FoNlim7f6MlnUPMAyKsYGyjDKqocj6%2BQDs#rd'},
    {title:'重磅！昆明所有小区村庄单位封闭管理，严控人车！倡导家庭每两天派1人外出采购',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=72850553,1154565069&fm=11&gp=0.jpg',category:'1',categoryName:'政府通告',date:'2020-02-05',link:'https://mp.weixin.qq.com/s?__biz=MzUyNTcyODcwOQ==&mid=2247531683&idx=1&sn=5b8cb3d5308653b5e387eb29acc89425&chksm=fa1b9209cd6c1b1ff1b12c0e6c24fcb95b3c9fa43a954389d5f2425abcf58691a9c27a91f74a&mpshare=1&scene=1&srcid=&sharer_sharetime=1580898853583&sharer_shareid=e79ffb202b363b13b5d91a2a1223d50d&exportkey=A5BiEdzc88OuIZpV0FN0PHM%3D&pass_ticket=4x6oB8My6XhL9nuFIsaxIp1buXNIkC%2FoNlim7f6MlnUPMAyKsYGyjDKqocj6%2BQDs#rd'},
    {title:'使用过的口罩该怎么处理？科普来了！',img:'https://img1.dxycdn.com/2020/0205/207/3394910023897006215-135.jpg',category:'2',categoryName:'防护与谣言',date:'2020-02-05',link:'https://mp.weixin.qq.com/s?__biz=MzUyNTcyODcwOQ==&mid=2247531137&idx=4&sn=2fd6d90244f2c4305d5124975e5740d9&chksm=fa1b942bcd6c1d3d8b7221a4422dfce681a7fe606553e47c1878e7d1f8a0ff19c8d9ecaf70e9&scene=21#wechat_redirect'},
    {title:'好消息！936.09万个口罩抵滇！将适量投放市场，并限量销售！',img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2092346008,861193214&fm=11&gp=0.jpg',category:'3',categoryName:'民生快讯',date:'2020-02-05',link:'https://mp.weixin.qq.com/s?__biz=MzUyNTcyODcwOQ==&mid=2247531606&idx=2&sn=24cb883e51f9b39bb10743cdbe73f707&chksm=fa1b92fccd6c1beadaf3fa04cbb8d9bf433faa947417c70433a7eff2cc9696cc9ed7be8d6fc6&mpshare=1&scene=1&srcid=&sharer_sharetime=1580899000193&sharer_shareid=e79ffb202b363b13b5d91a2a1223d50d&exportkey=Aw77x0BfiPg3IM6j9zdGvTk%3D&pass_ticket=4x6oB8My6XhL9nuFIsaxIp1buXNIkC%2FoNlim7f6MlnUPMAyKsYGyjDKqocj6%2BQDs#rd'}
]
export default {
    name: 'App',
    data(){
        this.$parent.cur='news';
        return {list:newsdata} 
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

    .recommendItemWrap___3TEAs {
        box-sizing: border-box;
        height: 100px;
        padding: 16px;
        background-color: #fff;
        border-bottom: 0.5px solid #ebebeb;
        text-align:left;
    }
    .recomendList___26gWl .recommendTitle___3zsIR {
        height: 40px;
        padding: 0 16px;
        color: #333;
        font-weight: 500;
        font-size: 16px;
        line-height: 4px;
        background-color: #f7f7f7;
    }
    .recommendItemWrap___3TEAs .right___3rs0q {
        float: right;
    }
    .lazyImage___PGYxM.loaded___1Yilv {
        -webkit-filter: none;
        filter: none;
        animation: fadeIn___1lDGV 1s forwards;
    }
    .lazyImage___PGYxM {
        height: 100%;
        overflow: hidden;
        background: #eee;
    }
    .recommendItemWrap___3TEAs .right___3rs0q .cover___36RDw {
        width: 91px;
        height: 68px;
        object-fit: cover;
        border-radius: 6px;
    }
    .lazyImage___PGYxM img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .recommendItemWrap___3TEAs .left___2HDYh {
        overflow: hidden;
        padding-right: 16px;
    }
    .recommendItemWrap___3TEAs .left___2HDYh .title___26zAA {
        height: 44px;
        color: #333;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.38;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .recommendItemWrap___3TEAs .left___2HDYh .typeTag___37u0I._1 {
        background-color: #4169e2;
    }
    .recommendItemWrap___3TEAs .left___2HDYh .typeTag___37u0I._2 {
        background-color: #eb89c8;
    }
     .recommendItemWrap___3TEAs .left___2HDYh .typeTag___37u0I._3 {
        background-color: #28b7a3;
    }
    .recommendItemWrap___3TEAs .left___2HDYh .typeTag___37u0I {
        position: relative;
        top: -1px;
        display: inline-block;
        height: 20px;
        padding: 1px 4px;
        margin-right: 6px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        border-radius: 2px;
        vertical-align: text-bottom;
        box-sizing: border-box;
    }

    .recommendItemWrap___3TEAs .left___2HDYh .date___BggNA {
        height: 20px;
        margin-top: 4px;
        color: #999;
        font-size: 12px;
        line-height: 20px;
    }
</style>

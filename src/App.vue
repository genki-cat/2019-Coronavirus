<template>
  <div id="app">
    <div v-if="showTop" class="c_topbanner"></div>
    <div v-if="showTop" id="main-tap">
        <div class="inner___32SGr ">
            <span @click="maintab(0,'index')" :class="{active:cur=='map'}" >疫情地图<i></i></span>
            <span @click="maintab(1,'cases')" :class="{active:cur=='case'}" >确诊病例<i></i></span>
            <span @click="maintab(3,'support')" :class="{active:cur=='support'}" >医疗防护<i></i></span>
            <span @click="maintab(2,'news')" :class="{active:cur=='news'}" >实用工具<i></i></span>
        </div>
    </div>
    <router-view/>
    <div v-if="showTop" class="footer">
        <img src="static/footer.png"/>
    </div>
  </div>
</template>
<script>
export default {
    name: 'App',
    data(){
        return {cur:'map',showTop:true}
    },
    methods:{
        maintab(index,path){
            this.cur=index;
            this.$router.push({ path:path}) ;
        }
    },
    create(){
        console.log('index');
        console.log(this.cur);
    }
}
</script>
<style>
body{
    height: 100%;
    margin: 0;
    padding: 0;
    background: #fff;
}

#app {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    text-size-adjust:none;
    --swiper-navigation-size: 44px;
    --swiper-theme-color: #007aff;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #f7f7f7;
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
    text-size-adjust: none;
    min-height:800px;
}

#app .c_topbanner {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 33.5%;
    color: #fff;
    font-size: .28rem;
    text-align: center;
    background: url(../static/kv.png) no-repeat;
    background-size: cover;
}

#main-tap {
    height: 44px;
    line-height: 44px;
    background-color: #fff;
}

#main-tap .inner___32SGr {
    display: flex;
    height: 44px;
    line-height:44px;
    color: #333;
    background-color: #fff;
}

#main-tap .inner___32SGr span.active {
    color: #4169e2;
}
#main-tap .inner___32SGr span {
    position: relative;
    flex: 1 1;
    color: #333;
    font-size: 18px;
    line-height: 44px;
    text-align: center;
    vertical-align: top;
}
#main-tap .inner___32SGr span.active{
    font-weight:bold;
}
#main-tap .inner___32SGr span.active i {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: inline-block;
    width: 60px;
    height: 3px;
    margin: auto;
    background-color: #4169e2;
}
.container{
   margin-top:15px;
   background-color:#fff;
}
</style>

<style>
    .mapTop___2VZCl {
        margin-bottom: 16px;
        padding: 16px;
        background: #fff;
    }
    .mapTop___2VZCl .statistics___1cFUQ {
        margin: -16px 0 0;
        font-size: 14px;
    }
    .mapTop___2VZCl .statistics___1cFUQ .title___2d1_B {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 4px;
        line-height:24px;
    }
    .mapTop___2VZCl .statistics___1cFUQ .title___2d1_B .title___2d1_B span {
        color: #666;
    }
    .mapTop___2VZCl .statistics___1cFUQ .count___3GCdh {
        display: flex;
        margin: 0 -6px;
        padding: 0;
    }
    .mapTop___2VZCl .statistics___1cFUQ .count___3GCdh {
        display: -webkit-box;
        display: -ms-flexbox;
    }
    .mapTop___2VZCl .statistics___1cFUQ .count___3GCdh li {
        position: relative;
        display: flex;
        flex: 1 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: 85px;
        margin: 7.5px 2px 14px;
        border-left:1px solid #ebebeb;
    }
    .mapTop___2VZCl .statistics___1cFUQ .count___3GCdh li:first-child{
        border:none
    }
    .wrapper___3xhNP .mapBox___qoGhu .mapTop___2VZCl .statistics___1cFUQ .count___3GCdh li span {
        color: #333;
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
    }
    .mapTop___2VZCl .statistics___1cFUQ .count___3GCdh li p {
        margin-bottom: 3px;
        margin-top:0px;
        color: #666;
        font-size: 10px;
    }
    .mapTop___2VZCl .statistics___1cFUQ .count___3GCdh li p em {
        font-weight: 700;
        font-style: normal;
    }
    .mapTop___2VZCl .statistics___1cFUQ .count___3GCdh li strong {
        margin-bottom: 3px;
        font-weight: 700;
        font-size: 22px;
        line-height: 30px;
    }
    .mapTop___2VZCl .statistics___1cFUQ .count___3GCdh li span {
        color: #333;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
    }

    .mapTap___1k3MH {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 44px;
        margin:0;
        padding: 0 10px;
        font-weight: 500;
        font-size: 20px;
        line-height: 44px;
        background: #fff;
        border-bottom: 0.1px solid #ebebeb;
    }
    .mapTap___1k3MH i {
        display: inline-block;
        width: 4px;
        height: 16px;
        margin-right: 8px;
        vertical-align: middle;
        background: #4169e2;
    }
    .mapTap___1k3MH .mapTapTip___7Itvn {
        flex: 1 1;
        color: #999;
        font-weight: 400;
        font-size: 14px;
        text-align: right;
    }

    .footer img{
        width:94%;
        position: relative;
        text-align:center;
        margin:14px 3%;
    }
</style>


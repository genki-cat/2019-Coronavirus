<template>
    <div class= "wrapper___3xhNP container">
        <p class="mapTap___1k3MH"><i></i>确诊患者详细信息</p>
        <div id="case-list" class="tab2___PhOZ6" v-for="(v,i) in list">
            <div class="block___wqUAz">
                <div class="tabLeft2___SbuNE">
                    <span class="leftTime___2zf53">第{{v.id}}例<br>
                        <span style="font-size: 10px; color: rgb(153, 153, 153);">{{v.upateTime}}</span>
                    </span>
                    <span class="leftDot___2cvKP"></span><span class="leftLine___31ohl"></span>
                </div>
                <div class="tabRight___3Z0eJ">
                    <p class="topicTitle___2ovVO"><i v-if="i<4">最新</i>{{v.title}}</p>
                    <p class="topicContent___1KVfy">{{v.detail}}</p>
                    <p class="topicFrom___3xlna">信息来源：{{v.source}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        this.$parent.cur='case';
        return {list:[]};
    },
    methods:{
    },
    created(){
        this.$axios.all([
            this.$axios.get('static/cases.json').then(res => res.data)
	    ]).then(this.$axios.spread((cases) => {
            this.list = cases;
 	    })).catch(err => {
		    console.log(err) 
	    })
    }
}
</script>
<style>
    .wrapper___3xhNP{
        padding-bottom: calc(.6rem + env(safe-area-inset-bottom));
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        background-color: #f7f7f7;
        border: .01rem solid transparent;
    }
    .block___wqUAz p {
        margin: 0;
        padding: 0;
    }
    .wrapper___3xhNP .tab2___PhOZ6 {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        margin-top: 16px;
        padding-right: 16px;
        overflow: hidden;
        vertical-align: top;
    }
    .tab2___PhOZ6 .block___wqUAz {
        display: flex;
    }
    .wrapper___3xhNP .tab2___PhOZ6 .tabLeft2___SbuNE {
        position: relative;
        flex: none;
        width: 120px;
        overflow: hidden;
        transform: translateY(.08rem);
    }    
    .tab2___PhOZ6 .tabLeft2___SbuNE .leftTime___2zf53 {
        position: absolute;
        right: 42px;
        font-weight: 500;
        font-size: 14px;
        text-align: right;
    }

   .wrapper___3xhNP .tab2___PhOZ6 .tabLeft2___SbuNE .leftDot___2cvKP {
        position: absolute;
        top: 0;
        left: 94px;
        z-index: 2;
        display: inline-block;
        width: 14px;
        height: 14px;
        background: url(../../static/data_image_png.png) no-repeat;
        background-size: cover;
    }    
    .wrapper___3xhNP .tab2___PhOZ6 .tabLeft2___SbuNE .leftLine___31ohl {
        position: absolute;
        top: 2px;
        left: 100px;
        display: inline-block;
        width: 1px;
        height: 999px;
        background: #ebebeb;
    }

   .wrapper___3xhNP .tab2___PhOZ6 .tabRight___3Z0eJ {
        position: relative;
        flex-grow: 1;
        margin-bottom: 12px;
        padding: 12px 14px;
        background: #fff;
        border-radius: 4px;
        text-align:left;
    }    

    .wrapper___3xhNP .tab2___PhOZ6 .tabRight___3Z0eJ .topicTitle___2ovVO {
        color: #333;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        text-overflow: ellipsis;
    }

    .tabRight___3Z0eJ .topicTitle___2ovVO i {
        display: inline-block;
        width: 28px;
        height: 16px;
        margin-right: 6px;
        padding:2px;
        color: #fff;
        font-size: 12px;
        font-style: normal;
        line-height: 18px;
        text-align: center;
        background-color: #f74c31;
        border-radius: 2px;
    }
    .tab2___PhOZ6 .tabRight___3Z0eJ .topicContent___1KVfy {
        display: -webkit-box;
        margin-top: 4px;
        overflow: hidden;
        color: #999;
        font-size: 14px;
        line-height: 18px;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-line-clamp: 5;
    }
    .wrapper___3xhNP .tab2___PhOZ6 .tabRight___3Z0eJ .topicFrom___3xlna {
        right: 16px;
        bottom: 12px;
        margin-top: 4px;
        color: #999;
        font-size: 14px;
        text-align: right;
    }
</style>


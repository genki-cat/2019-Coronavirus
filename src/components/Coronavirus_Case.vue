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
//   {id:126,area:'',province:'',title:'',detail:'',upateTime:'2-06 14:38',source:'云南省卫健委网站'},


var casedata=[
    {id:136,area:'',province:'',title:'71岁男性，湖北武汉人',
    detail:'71岁男性，湖北武汉人，1月20日随团队从武汉乘机到缅甸曼德勒旅游，25日从曼德勒乘机到昆明，集中隔离医学观察后在昆明医疗机构收治入院隔离治疗。',
    upateTime:'2-07 14:38',source:'云南省卫健委网站'},
    {id:135,area:'',province:'',title:'39岁，男性，湖北武汉人',
    detail:'39岁男性，湖北武汉人，1月22日与家人乘机从武汉至丽江，24日乘火车从丽江至大理，29日其家人确诊，本人经密切接触者排查隔离医学观察，在大理医疗机构收治入院隔离治疗。',
    upateTime:'2-07 14:38',source:'云南省卫健委网站'},
    {id:134,area:'',province:'',title:'62岁，女性，湖北武汉人',
    detail:'62岁女性，湖北武汉人，1月15日与家人自驾车由武汉经贵州到云南，19日至24日先后到罗平、弥勒、元阳、建水、隆阳、瑞丽等地，25日到腾冲，26日经排查隔离医学观察后在腾冲医疗机构收治入院隔离治疗。',
    upateTime:'2-07 14:38',source:'云南省卫健委网站'},
    {id:133,area:'',province:'',title:'46岁，男，湖北武汉人',
    detail:'46岁男性，湖北武汉人，常住大理，2019年12月31日乘机从武汉到大理，2020年1月24至26日在大理与确诊病例（湖南省2月1日确诊）有接触，2月4日入留验站医学观察后在大理医疗机构收治入院隔离治疗。',
    upateTime:'2-06 14:38',source:'云南省卫健委网站'},
    {id:132,area:'',province:'',title:'15岁，男，湖北武汉人',
    detail:'15岁男性，湖北武汉人，1月21日与家人乘高铁从武汉至昆明，换乘动车至大理，22日后在大理、丽江自驾旅游，25日返回大理，2月1日其外婆确诊，本人经密切接触者排查发现入留验站隔离医学观察，在大理医疗机构收治入院隔离治疗。',
    upateTime:'2-06 14:38',source:'云南省卫健委网站'},
    {id:131,area:'',province:'',title:'45岁，男，云南曲靖人',
    detail:'45岁男性，云南曲靖人，常住昆明，因发热、咳嗽、咳痰7天，2月5日到医院就诊后在昆明医疗机构收治入院隔离治疗。流行病学史尚不明确。',
    upateTime:'2-06 14:38',source:'云南省卫健委网站'},
    {id:130,area:'',province:'',title:'48岁，女，湖北孝感人',
    detail:'48岁女性，湖北孝感人，常住昆明，1月15日与家人自驾回湖北老家，27日自驾回昆明，28日到达昆明后开始居家隔离观察，2月5日出现症状后在昆明医疗机构收治入院隔离治疗。',
    upateTime:'2-06 14:38',source:'云南省卫健委网站'},
    {id:129,area:'',province:'',title:'47岁，男，湖北孝感人',
    detail:'47岁男性，湖北孝感人，常住昆明，1月15日与家人自驾回湖北老家，27日自驾回昆明，28日到达昆明后开始居家隔离观察，2月5日出现症状后在昆明医疗机构收治入院隔离治疗。',
    upateTime:'2-06 14:38',source:'云南省卫健委网站'},
    {id:128,area:'',province:'',title:'43岁，女，湖北武汉人',
    detail:'43岁女性，湖北武汉人，1月21日与家人乘高铁从武汉至昆明，换乘动车至大理，22日后在大理、丽江自驾旅游，25日返回大理，2月1日其母亲确诊，本人经密切接触者医学观察发现，在大理医疗机构收治入院隔离治疗。',
    upateTime:'2-06 14:38',source:'云南省卫健委网站'},
    {id:127,area:'',province:'',title:'10岁，女，湖北武汉人',
    detail:'10岁女童，湖北武汉人，1月19日随母亲乘飞机从武汉至玉溪探亲，住亲戚家中，31日经排查进行医学隔离观察，在玉溪医疗机构收治入院隔离治疗。',  
    upateTime:'2-06 14:38',source:'云南省卫健委网站'},
    {id:126,area:'',province:'',title:'63岁, 男，常住武汉',
    detail:'63岁男性，常住武汉，一家5人于1月22日由武汉乘飞机至昆明，入住安宁自购房，2月4日由120转送至安宁医疗机构收治入院隔离治疗。',
    upateTime:'2-06 14:38',source:'云南省卫健委网站'},
    {id:125,area:'',province:'',title:'62岁，女，常住武汉',
    detail:'62岁女性，常住武汉，一家5人于1月22日由武汉乘飞机至昆明，入住安宁自购房，26日出现畏寒等症状自行服药，2月4日病情加重，由120转送至安宁医疗机构收治入院隔离治疗。',
    upateTime:'2-06 14:38',source:'云南省卫健委网站'},
    {id:124,area:'',province:'',title:'17岁，男，云南昆明人',
    detail:'17岁男性，云南昆明人，1月23日乘车从武汉经鄂州到长沙，24日乘火车从长沙至昆明，25日乘公共汽车从昆明至寻甸，到家后居家观察未外出，29日经排查由寻甸留验站医学隔离观察，在寻甸县医疗机构收治入院隔离治疗。',
    upateTime:'2-05 14:38',source:'云南省卫健委网站'},
    {id:123,area:'',province:'',title:'49岁，女，重庆万州人',
    detail:'49岁女性，重庆万州人，常住西双版纳，1月22日后在其经营店铺接待过湖北籍客人，1月31日出现不适就诊，在西双版纳州医疗机构收治入院隔离治疗。',
    upateTime:'2-05 14:38',source:'云南省卫健委网站'},
    {id:122,area:'',province:'',title:'28岁，男，湖北武汉人',
    detail:'28岁男性，湖北武汉人，1月21日从武汉自驾途经贵阳于22日到达昆明，23日后跟旅行团至楚雄、大理，31日经排查由曲靖留验站留观，在曲靖医疗机构收治入院隔离治疗。',
    upateTime:'2-05 09:11',source:'云南省卫健委网站'},
     {id:121,area:'',province:'',title:'60岁，男，安徽淮南人',
     detail:'1月18日至22日与女婿自驾由安徽合肥出发经湖北到达昭通永善，2月3日女婿确诊，本人经密切接触者医学观察发现，在永善医疗机构收治入院隔离治疗。',
upateTime:'2-05 09:11',source:'云南省卫健委网站'},
     {id:120,area:'',province:'',title:'20岁，女，重庆万州人',
     detail:'20岁女性，重庆万州人，1月15日随父从重庆乘机至景洪，2月2日其父确诊，本人经密切接触者医学观察发现，在西双版纳医疗机构收治入院隔离治疗。',
     upateTime:'2-05 09:11',source:'云南省卫健委网站'},
     {id:119,area:'',province:'',title:'22岁，女，云南曲靖人',
     detail:'22岁女性，云南曲靖人，1月23日从武汉返回宣威，26日出现发热等症状，31日在宣威医疗机构收治入院隔离治疗。',
     upateTime:'2-05 09:11',source:'云南省卫健委网站'},
     {id:118,area:'',province:'',title:'12岁，女，湖北武汉人',
     detail:'12岁女性，湖北武汉人，1月20日乘高铁从武汉至昆明，21日乘动车从昆明至楚雄，22日乘客车从楚雄至大姚，经排查2月1日开始隔离医学观察，2月3日在大姚医疗机构收治入院隔离治疗。',
     upateTime:'2-05 09:11',source:'云南省卫健委网站'},
     {id:117,area:'',province:'',title:'25岁，男，湖北仙桃人',
     detail:'25岁男性，湖北仙桃人，1月22日乘高铁由武汉至曲靖，1月30日开始隔离医学观察，2月2日在曲靖医疗机构收治入院隔离治疗。',
     upateTime:'2-05 09:11',source:'云南省卫健委网站'},
     {id:116,area:'',province:'',title:'17岁，男，曲靖会泽人',
     detail:'17岁男性，曲靖会泽人，1月23日从武汉坐私家车至长沙，1月25日乘高铁由长沙至曲靖，1月27日乘客车由曲靖至会泽，当日开始居家隔离医学观察，2月2日在会泽医疗机构收治入院隔离治疗。',
     upateTime:'2-05 09:11',source:'云南省卫健委网站'},
     {id:115,area:'',province:'',title:'71岁，女，湖北武汉人',
     detail:'71岁女性，湖北武汉人，1月22日从武汉至昆明，1月26日起集中隔离医学观察，2月2日在昆明医疗机构收治入院隔离治疗。',
     upateTime:'2-05 09:11',source:'云南省卫健委网站'},
];

export default {
    name: 'App',
    data(){
        this.$parent.cur='case';
        return {list:casedata};
    },
    methods:{
    },
    create(){
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
        background: url('/static/data_image_png.png') no-repeat;
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


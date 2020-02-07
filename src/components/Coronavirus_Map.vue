<template>
    <div class= "c_map">
        <div class="mapTop___2VZCl container">
            <div class="statistics___1cFUQ">
                    <div class="title___2d1_B"><span>截至 2020-02-05 07:04 数据统计</span></div>
                    <ul class="count___3GCdh">
                        <li>
                            <p>较昨日<em style="color: rgb(247, 76, 49);">+2</em></p>
                            <strong style="color: rgb(247, 76, 49);">138</strong>
                            <span>确诊</span></li>
                        <li>
                            <p>较昨日<em style="color: rgb(247, 130, 7);">+0</em></p>
                            <strong style="color: rgb(247, 130, 7);">225</strong>
                            <span>疑似</span>
                        </li>
                        <li>
                            <p>较昨日<em style="color: rgb(162, 90, 78);">+2</em></p>
                            <strong style="color: rgb(162, 90, 78);">18</strong>
                            <span>重症</span>
                        </li>
                        <li>
                            <p>较昨日<em style="color: rgb(93, 112, 146);">+0</em></p>
                            <strong style="color: rgb(93, 112, 146);">0</strong>
                            <span>死亡</span>
                        </li>
                        <li>
                            <p>较昨日<em style="color: rgb(40, 183, 163);">+0</em></p>
                            <strong style="color: rgb(40, 183, 163);">12</strong>
                            <span>治愈</span>
                        </li>
                    </ul>
            </div>
        </div>
        <div class="mapBody container">
            <p class="mapTap___1k3MH"><i></i>云南省疫情地图<span class="mapTapTip___7Itvn">数据来源：省市地区卫健委</span></p>
            <div id="mapBody" ></div>
        </div>
         <div class="areaBox___3jZkr container">
                <div class="areaBlock1___3V3UU titleBlock___37B7v">
                    <p class="subBlock1___j0DGa title___2d1_B">地区</p>
                    <p class="subBlock2___E7-fW title___2d1_B">确诊</p>
                    <p class="subBlock4___ANk6l title___2d1_B">死亡</p>
                    <p class="subBlock3___3mcDz title___2d1_B">治愈</p>
                </div>
                <div v-for="c in CoronaVirusData" class="areaBlock1___3V3UU">
                    <p class="subBlock1___j0DGa">{{c.name}}</p>
                    <p class="subBlock2___E7-fW">{{c.value}}</p>
                    <p class="subBlock4___ANk6l">{{c.dead}}</p>
                    <p class="subBlock3___3mcDz">{{c.cur}}</p>
                </div>
        </div>
        <div id="unity" class="unityList container">
            <p class="mapTap___1k3MH"><i></i>确诊隔离小区<span class="mapTapTip___7Itvn">数据来源：市地区卫健委</span></p>
            <div class="city-select">
                <template>
                    <el-select v-model="city" @change="changeCity" placeholder="Select">
                        <el-option
                            v-for="item in cityList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                            style="font-size:14px;" >
                        </el-option>
                    </el-select>
                </template>
            </div>
            <div class="data-table" v-for="u in unityData.data"> 
                <div class="train-lst">
                    <div class="title">{{u.name}} &nbsp ({{u.list.length}}个确诊地点)</div>
                    <div class="wrap">
                        <table id="trafficList">
                            <thead>
                                <tr><th width="47%">确诊地点</th><th width="35%">人数</th><th width="28%"></th></tr>
                            </thead>
                            <tbody>
                                <tr v-for="l in u.list"><td><p class="area">{{l.name}}</p></td><td><p>{{l.value}}&nbsp;人</p></td><td><p><a class="icon" v-on:click="goMap(l,$event)">查看</a></p></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
import bmap from 'echarts/extension/bmap/bmap.js'
import yunnan from 'echarts/map/json/province/yunnan.json'

export default{
    data(){
        this.$parent.showTop=true;
        this.$parent.cur='map';
        return{
            userId:666,
　　　　    token:'',
            city:'1',
            center:[102.715615,25.048101],
            cityList:[],
            unityData:[],
            oragnalData:[],
            CoronaVirusData:[],
            scroll:this.$route.query.scroll
        }
    },
    methods:{
       changeCity(value){
          this.city=value; 
          this.unityData=this.oragnalData.filter(item=> {return item.city == this.city})[0];
        },
        goMap(unity,e){
            this.$router.push({
                path:'/unity',
                query:{
                   city:unity.city,
                   geo:unity.geo
                }
            })
        }
    },
    created(){

        //获取隔离小区和城市列表
        this.$axios.all([
            this.$axios.get('/static/blockUnity.json').then(res => res.data),
            this.$axios.get('/static/cityList.json').then(res => res.data)
	    ]).then(this.$axios.spread((data,cityList) => {

            this.oragnalData=data;

            // 省疫情分布地图
            echarts.registerMap('Yunnan',yunnan);
            this.pmapObj = echarts.init(document.getElementById('mapBody'));
            //this.pmapObj.showLoading() ;
            this.pmapObj.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter:function(data){
                        return data.value?(data.name+':'+'<br/>'+data.value+' 例'):(data.name +':'+ '<br/> 无')
                    }
                },
                visualMap: {
                    min: 1,
                    max: 60,
                    text: ['高发', '较少'],
                    orient:'horizontal',
                    left:'2%',
                    realtime: false,
                    calculable: false,
                    inRange: {
                        color: ['lightskyblue', 'yellow', 'orangered']
                    }
                },
                series: [{
                    name: '云南省新型肺炎疫情地图',
                    type: 'map',
                    mapType: 'Yunnan', // 自定义扩展图表类型
                    aspectScale:1,
                    label: {
                        show: true
                    },
                    data: CoronaVirusData
                }]
            });

           this.CoronaVirusData=CoronaVirusData;

           //初始化城市筛选列表
            for(var i = 0; i < data.length; i++){
                var city=cityList.filter(item=>{ return item.id == data[i].city})[0];
                this.cityList.push({
                    id:city.id,
                    name:city.name,
                    center:city.center
                })
            }

            this.unityData=data.filter(item=> {return item.city == this.city})[0];
            //if(this.scroll && this.scroll!='')
                //document.getElementById(this.scroll).scrollIntoView();

           
		})).catch(err => {
		    console.log(err) 
	    })

        
    },
    mounted(){
    }
}

var CoronaVirusData = [
    {name: '昆明市', value: 41,cur:0,dead:0}, 
    {name: '西双版纳傣族自治州', value: 15,cur:1,dead:0}, 
    {name: '玉溪市', value: 11,cur:1,dead:0}, 
    {name: '昭通市', value: 10,cur:1,dead:0}, 
    {name: '曲靖市', value: 11,cur:1,dead:0}, 
    {name: '保山市', value: 8,cur:0,dead:0}, 
    {name: '大理白族自治州', value: 10,cur:1,dead:0}, 
    {name: '丽江市', value: 7,cur:0,dead:0}, 
    {name: '红河哈尼族彝族自治州', value: 5,cur:1,dead:0}, 
    {name: '德宏傣族景颇族自治州', value: 5,cur:0,dead:0}, 
    {name: '普洱市', value: 4,cur:0,dead:0}, 
    {name: '楚雄彝族自治州', value: 4,cur:0,dead:0}, 
    {name: '文山壮族苗族自治州', value: 1,cur:0,dead:0}, 
    {name: '临沧市', value: 1,cur:0,dead:0},
    {name: '待确定地区', value:'',cur:1,dead:''}
]

</script>
<style>
    #mapBody{
        height:480px;
    }
    .areaBox___3jZkr {
        position: relative;
        padding: 12px 16px 16px;
        background: #fff;
    }
    .areaBox___3jZkr .areaBlock1___3V3UU {
        display: flex;
        width: 100%;
        height: 32px;
        overflow: hidden;
        color: #333;
        font-weight: 700;
        font-size: 15px;
        background: #f7f7f7;
        border-bottom: 0.5px solid #ebebeb;
    }

    .areaBox___3jZkr .titleBlock___37B7v .subBlock1___j0DGa {
        box-sizing: border-box;
        text-align: left;
        background: #e3e7f3;
    }
    .areaBox___3jZkr .areaBlock1___3V3UU .subBlock1___j0DGa {
        width: 40%;
        height: 32px;
        line-height: 32px;
        border-right: 0.5px solid #fff;
        text-align:left;
        text-indent:10px;
    }
    .areaBox___3jZkr p {
        margin: 0;
        padding: 0;
    }

    .areaBox___3jZkr .titleBlock___37B7v .subBlock2___E7-fW {
        background: #f3bab0;
    }

    .areaBox___3jZkr .areaBlock1___3V3UU .subBlock2___E7-fW {
        width: 24%;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-right: 0.5px solid #fff;
    }

    .areaBox___3jZkr .titleBlock___37B7v .subBlock4___ANk6l {
        background: #b4c0d5;
    }
    .areaBox___3jZkr .areaBlock1___3V3UU .subBlock4___ANk6l {
        width: 18%;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-right: 0.5px solid #fff;
    }

    .areaBox___3jZkr .titleBlock___37B7v .subBlock3___3mcDz {
        background: #6c9;
    }
    .areaBox___3jZkr .areaBlock1___3V3UU .subBlock3___3mcDz {
        width: 18%;
        height: 32px;
        line-height: 32px;
        text-align: center;
    }


    .areaBox___3jZkr .expand___wz_07 {
        height: unset;
        overflow: unset;
    }

    .unityList .data-table{
        background-color:#f7f7f7;
    }
    .train-lst {
        width: 100%;
        padding: 32px 0 0;
        box-sizing: border-box;
    }
    .train-lst .title {
        width: calc(100% - 31px);
        margin: 0 6px 11px auto;
        font-size: 18px;
        color: #242424;
        font-weight: 700;
        line-height: 18px;
        text-align: left;
    }
    .train-lst .wrap {
        width: calc(100% - 31px);
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 16px;
        background: #fff;
        box-shadow: 0 2px 4px 0 hsla(0,0%,85.9%,.5);
        border-radius: 5px;
    }
    .train-lst table {
        width: 100%;
        margin: 0 auto;
        font-size: 12px;
        border-collapse: collapse;
        table-layout: fixed;
    }
    .train-lst table thead th:first-of-type {
        text-align: left;
    }
    .train-lst table thead th:last-of-type {
        text-align: right;
    }
    .train-lst table thead th {
        height: 45px;
        vertical-align: middle;
        color: #242424;
        font-size: 16px;
        white-space: nowrap;
    }
    .train-lst table tbody tr:last-of-type {
        border-bottom: 0;
    }
    .train-lst table tbody tr {
        border-bottom: 1px solid #e1e1e1;
    }
    .train-lst table td {
        height: 43px;
        font-size: 16px;
        text-align: center;
        overflow: hidden;
        padding: 3px 0;
        margin: 0;
        vertical-align: middle;
    }
    .train-lst table .area {
        text-align: left;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .train-lst table td:last-of-type {
        text-align: right;
    }
    .train-lst table td p {
        margin: 0;
    }

    .train-lst .icon{
        width:10px;
        height:10px;
        margin:0 4px;
        padding-left:20px;
        line-height:16px;
        background:url(/static/position.svg) no-repeat;
        background-size:contain;
        position:relative;
    }
    .city-select{
        position:relative;
        height:41px;
        line-height:36px;
        margin:5px 0;
    }
    .city-select .el-select{
        float:right;
        margin-right:8px;
    }
    .city-select .el-select input{
        font-size:16px !important;
    }
</style>


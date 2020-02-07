<template>
    <div class= "c_map">
        <div class="Bmap">
            <p class="mapTap___1k3MH"><i></i>新型肺炎确诊隔离小区<span class="mapTapTip___7Itvn">数据来源：市地区卫健委</span></p>
            <div id="Bmap" ></div>
            <div v-if="!mapModel" class="unityList container">
                <div class="data-table" v-if="showTable" v-for="u in unityData.data"> 
                    <div class="train-lst">
                        <div class="title">{{u.name}} &nbsp ({{u.list.length}}个确诊地点)</div>
                        <div class="wrap">
                            <table id="trafficList">
                                <thead>
                                    <tr><th width="50%">确诊地点</th><th width="35%">人数</th><th width="25%">与我距离</th></tr>
                                </thead>
                                <tbody>
                                    <tr v-for="l in u.list">
                                        <td><p class="area">{{l.name}}</p></td>
                                        <td><p>{{l.value}}&nbsp;人</p></td>
                                        <td><p><a class="icon">查看</a></p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
             <div class="city-select">
                <div v-on:click="back" class="backBtnBox___2vrCJ"><span class="backBtn___uQyW2">返回疫情动态</span></div>
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
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
import bmap from 'echarts/extension/bmap/bmap.js'

export default{
    data(){
        this.$parent.showTop=false;
        return{
            city:this.$route.query.city,
            center:this.$route.query.geo,
            cityList:[],
            unityData:[],
            mapModel:true
        }
    },
    methods:{
       changeCity(value){
            this.city=value; 
            this.unityData=this.oragnalData.filter(item=> {return item.city == this.city})[0];
            this.center=this.cityList.filter(item=>{return item.id == this.city})[0].center; 
            this.bmapObj.setOption(getBmapOption(this.unityData,{id:this.city,center:this.center}));
            document.getElementById('app').scrollIntoView();
       },
       showMap(){

       },
       back(){
           this.$router.push({path:'/index',query:{scroll:'unity'}});
       }
    },
    created(){
        this.$axios.all([
            this.$axios.get('/static/blockUnity.json').then(res => res.data),
            this.$axios.get('/static/cityList.json').then(res => res.data)
	    ]).then(this.$axios.spread((data,cityList) => {

            this.oragnalData=data;
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
            this.showTable=true;
            
            this.bmapObj = echarts.init(document.getElementById('Bmap'));
            this.bmapObj.hideLoading() ;
            this.bmapObj.setOption(getBmapOption(this.unityData,{id:this.city,center:this.center}));
            
            document.getElementById('app').scrollIntoView();

		})).catch(err => {
		    console.log(err) 
	    })
    }
}

var convertBmapData = function(city){
    
    var res=[];

    for(var i = 0; i < city.data.length; i++){

        var areaData = city.data[i];

        for(var j = 0; j< areaData.list.length; j++ ){

            var unity = areaData.list[j];
            
            res.push({
                name:unity.name,
                value:unity.geo.concat(unity.value)
            });
        }
    }
    return res;
}

var getBmapOption=function(optionData,city){
    if(!optionData || optionData.length<1 || !city) 
        return false;
        
    var bmapOptions={
        title: {
            right: '10px',
            top:'10px'
        },
        tooltip : {
            trigger: 'item',
            formatter: function(data) {
                return data.name+' '+data.value[2]+' 例';
            } 
        },
        bmap:{
            center:city.center,
            zoom: 13,
            roam: true,
            mapStyle: {
            styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#f3f3f3'
                }
            },{
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            },{
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                'color': '#fdfdfd'
            }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'on'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'on'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'on'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'on'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#999999'
                }
            }]}
        },
        series : [
            {
                name: '病例隔离',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                /*data:optionData.sort(function (a, b) {
                    return b.value - a.value;
                }),*/
                data:convertBmapData(optionData,city),
                symbolSize: function (val) {
                    return val[2]*10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                itemStyle: {
                    color: 'purple',
                    shadowBlur: 8,
                    shadowColor: '#333'
                },
                zlevel: 1
            }
        ]
    }
    return bmapOptions;
}


</script>
<style>
    .Bmap{
        background-color:#fff;
    }

    #Bmap{
        width: 100%;
        height:100%;
	    min-height: 100%;
	    overflow: hidden;
	    margin: 0;
	    position: absolute

    }
    .Bmap .city-select{
        background-color:#fff;
        position:fixed;
        width:100%;
        height:40px;
        line-height:40px;
        text-align:center;
        bottom:0px;
        padding:10px 0;
        margin:0;
    }
    .Bmap .city-select select{
        float:right;
        margin:0 10px;
        padding:0 10px;
        font-size:18px;
        direction:rtl;
    }

    .backBtnBox___2vrCJ {
        float:left;
        padding: 0 22px;
        position: relative;
    }
    .backBtn___uQyW2 {
        display: inline-block;
        width: 110px;
        height: 35px;
        color: #fff;
        font-size: 14px;
        line-height: 35px;
        text-align: center;
        background-color: rgba(19,15,133,.5);
        border-radius: 12px;
    }
</style>


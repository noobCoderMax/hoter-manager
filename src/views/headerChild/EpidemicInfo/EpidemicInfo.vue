<template lang="">
    <div>
        <div class="info">请您根据各地疫情情况合理规划出行计划</div>
        <div class="tabs">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="疫情地图" name="first" class="mapBox">
                    <div class="title" style="background-color: #ffffff;padding: 10px;">国内数据:截至 {{formmaData()}} </div>
                    <div id="chinaMap"></div>
                </el-tab-pane>
                <el-tab-pane label="最新消息" name="second">
                    <div id="news">
                        <div class="new" v-for="(item, index) in news" :key="index">
                            <div class="title">{{item.title}}</div>
                            <div class="time">{{item.pubDateStr}}</div>
                            <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.summary}}</p>
                            <a class="link" :href="item.sourceUrl">新闻来源:{{item.infoSource}} </a>
                        </div>

                    </div>
                </el-tab-pane>
                <el-tab-pane label="最新数据" name="third">

                    <div class="title">国内数据:截至 {{formmaData()}} </div>
                    <div class="cards">
                        <div class="card">
                            <el-card shadow="hover">
                                <strong style="color: #ff1110">现存确诊人数 :
                                    {{newsList.currentConfirmedCount}}</strong>
                            </el-card>
                            <el-card shadow="hover">
                                <strong><span style="margin-right: 10px;">较昨日:
                                    </span>{{newsList.currentConfirmedIncr}}</strong>
                            </el-card>
                        </div>
                        <div class="card">
                            <el-card shadow="hover">
                                <strong style="color:#d62e42 ">累计确诊人数 :
                                    {{newsList.confirmedCount}}</strong>
                            </el-card>
                            <el-card shadow="hover">
                                <strong><span style="margin-right: 10px;">较昨日:
                                    </span>{{newsList.confirmedIncr}}</strong>
                            </el-card>
                        </div>
                        <div class="card">
                            <el-card shadow="hover">
                                <strong style="color:#ffa453 ">累计境外输入人数 :
                                    {{newsList.suspectedCount}}</strong>
                            </el-card>
                            <el-card shadow="hover">
                                <strong><span style="margin-right: 10px;">较昨日:
                                    </span>{{newsList.suspectedIncr}}</strong>
                            </el-card>
                        </div>
                        <div class="card">
                            <el-card shadow="hover">
                                <strong style="color:#3ab07b ">累计治愈人数 :
                                    {{newsList.curedCount}}</strong>
                            </el-card>
                            <el-card shadow="hover">
                                <strong><span style="margin-right: 10px;">较昨日:
                                    </span>{{newsList.curedIncr}}</strong>
                            </el-card>
                        </div>
                        <div class="card">
                            <el-card shadow="hover">
                                <strong style="color:#6b625a ">累计死亡人数 :
                                    {{newsList.deadCount}}</strong>
                            </el-card>
                            <el-card shadow="hover">
                                <strong><span style="margin-right: 10px;">较昨日:
                                    </span>{{newsList.deadIncr}}</strong>
                            </el-card>
                        </div>
                        <div class="card">
                            <el-card shadow="hover">
                                <strong style="color:#791518 ">现存无症状人数 :
                                    {{newsList.seriousCount}}</strong>
                            </el-card>
                            <el-card shadow="hover">
                                <strong><span style="margin-right: 10px;">较昨日:
                                    </span>{{newsList.seriousIncr}}</strong>
                            </el-card>
                        </div>
                    </div>


                    <div class="title">国外数据:截至 {{formmaData()}} </div>
                    <div class="cardsF">
                        <div class="card" v-for="(item,index) in foreignCount" :key="index">
                            <el-card shadow="hover">
                                <strong :style="{color: item.color}">{{item.title}} : {{item.count}}</strong>
                            </el-card>
                        </div>
                    </div>


                </el-tab-pane>
                <el-tab-pane label="历史上的今天" name="firth">
                    <div id="todays">
                        <div class="today" v-for="(item, index) in historyToday" :key="index">
                            <div class="time">{{item.year}}-{{item.month}}-{{item.day}}</div>
                            <div class="content">{{item.title}}</div>
                        </div>

                    </div>
                </el-tab-pane>
                <el-tab-pane label="近期天气" name="five">
                    <div class="top">
                        <strong class="city"><i class="el-icon-location-outline"></i>默认城市：{{city}}</strong>
                        <div class="btn">
                            <el-input placeholder="输入城市名查询天气" v-model="inputCity" clearable></el-input>
                            <el-button type="primary" size="small" @click="searchWeather">查询天气</el-button>

                        </div>


                    </div>
                    </el-input>


                    <div id="weathers">
                        <div class="weather" v-for="(item, index) in weather" :key="index">
                            <div class="day"><strong>日期</strong><span>{{item.day}}</span></div>
                            <div class="weather1"><strong>天气</strong><span>{{item.weather}}</span></div>
                            <div class="wind_direction">
                                <strong>风向</strong><span>{{item.wind_direction_1}}->{{item.wind_direction_2}}</span>
                            </div>
                            <div class="wind_level"><strong>风级</strong><span>{{item.wind_level}}</span></div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>


    </div>
</template>
<script>
    import * as echarts from 'echarts';
    import "echarts/map/js/china.js";


    export default {
        name: 'EpidemicInfo',
        data() {
            return {
                inputCity: '',
                city: '',
                todayWeather: {},
                weather: [],
                newsList: {},
                news: [],
                riskArea: [],
                foreignCount: [{
                        id: 1,
                        title: '现存确诊',
                        count: 100000
                    },
                    {
                        id: 1,
                        title: '累计确诊',
                        count: 100000
                    },
                    {
                        id: 1,
                        title: '累计治愈',
                        count: 100000
                    },
                    {
                        id: 1,
                        title: '累计死亡',
                        count: 100000
                    }
                ],
                activeName: 'first',

            }
        },
        updated() {

        },
        mounted() {
            this.initMap()
        },
        created() {

            this.initInfo()
            this.getIPAdress()
            this.historyToday()

        },
        methods: {
            // 获取天气
            getWeather(city) {
                this.$axios.get('https://api.muxiaoguo.cn/api/tianqi?api_key=65420b6790db9d61&city=' + city +
                    '&type=2').then(res => {
                    if (res.data.data.length == 0) {
                        this.$message.error("未查到有关天气！")
                    } else {
                        this.weather = res.data.data
                    }

                }).catch(err => {
                    this.$message.error("未查到有关天气！")
                })
            },
            searchWeather() {
                let city = this.inputCity.replace("市", "")
                this.city = city
                this.getWeather(city)
            },
            getCity(ip) {
                this.$axios.get('https://api.muxiaoguo.cn/api/ip?api_key=2aba4c28931b45c6&ip=' + ip + '&type=m')
                    .then(res => {
                        let length = res.data.data.city.length
                        let city = res.data.data.city.slice(0, length - 1)
                        this.city = city
                        this.getWeather(city)
                    })
            },
            // 获取本机电脑IP
            getIPAdress() {
                this.$axios.get('https://api.ipify.org/').then(res => {
                    let ip = res.data
                    this.getCity(ip)

                })
            },
            refreshData() {
                this.option.series[0].data = this.provice

                var chinaMap = echarts.init(document.getElementById("chinaMap"))
                setInterval(function () {
                    chinaMap.setOption({
                        option: this.option
                    })

                }, 5000)

                // console.log(this.provice);
                // console.log(this.option.series[0].data);

            },
            historyToday() {
                this.$axios.get('https://api.muxiaoguo.cn/api/lishijr?api_key=8281b47c458b2605').then(res => {
                    this.historyToday = res.data.data
                })
            },
            async initMapInfo() {
                var chinaMap = echarts.init(document.getElementById("chinaMap"))
                let provices = []
                var option = {
                    historyToday: [],
                    title: {
                        text: '新型冠状病毒肺炎实时数据图',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['中国疫情图']
                    },
                    visualMap: {
                        type: 'piecewise',
                        pieces: [{
                                min: 1000,
                                max: 10000000000000,
                                label: '大于等于1000人',
                                color: '#372a28'
                            },
                            {
                                min: 500,
                                max: 999,
                                label: '确诊500-999人',
                                color: '#4e160f'
                            },
                            {
                                min: 100,
                                max: 499,
                                label: '确诊100-499人',
                                color: '#974236'
                            },
                            {
                                min: 10,
                                max: 99,
                                label: '确诊10-99人',
                                color: '#ee7263'
                            },
                            {
                                min: 1,
                                max: 9,
                                label: '确诊1-9人',
                                color: '#f5bba7'
                            },
                        ],
                        color: ['#E0022B', '#E09107', '#A3E00B']
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            mark: {
                                show: true
                            },
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    roamController: {
                        show: true,
                        left: 'right',
                        mapTypeControl: {
                            'china': true
                        }
                    },
                    series: [{
                        name: '确诊数',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        label: {
                            show: true,
                            color: 'rgb(249, 249, 249)'
                        },
                        data: []
                    }, ]
                }
                await this.$axios.get(
                    'https://api.muxiaoguo.cn/api/epidemic?api_key=11c5a8e1dc0b0daf&type=epidemicInfectionData'
                ).then(res => {
                    res.data.data.forEach(item => {
                        provices.push({
                            name: item.provinceShortName,
                            value: parseInt(item.currentConfirmedCount)
                        })
                    });
                })
                option.series[0].data = provices
                chinaMap.setOption(option)
            },
            initMap() {
                // 绘制地图
                var chinaMap = echarts.init(document.getElementById("chinaMap"))
                this.initMapInfo()
            },
            initInfo() {
                this.$axios.get('http://api.tianapi.com/ncov/index?key=8314c7db8f098fac8ea6f089885a5c9a').then(
                    res => {
                        this.news = res.data.newslist[0].news
                        let data = res.data.newslist[0].desc

                        this.newsList = {
                            modifyTime: data.modifyTime,
                            currentConfirmedCount: data.currentConfirmedCount,
                            confirmedCount: data.confirmedCount,
                            suspectedCount: data.suspectedCount,
                            curedCount: data.curedCount,
                            deadCount: data.deadCount,
                            seriousCount: data.seriousCount,

                            suspectedIncr: data.suspectedIncr,
                            currentConfirmedIncr: data.currentConfirmedIncr,
                            confirmedIncr: data.confirmedIncr,
                            curedIncr: data.curedIncr,
                            deadIncr: data.deadIncr,
                            seriousIncr: data.seriousIncr,
                        }
                        this.foreignCount[0].count = data.foreignStatistics.currentConfirmedCount
                        this.foreignCount[1].count = data.foreignStatistics.confirmedCount
                        this.foreignCount[2].count = data.foreignStatistics.curedCount
                        this.foreignCount[3].count = data.foreignStatistics.deadCount


                        this.riskArea = res.data.newslist[0].riskarea
                    }).catch(err => {
                    this.$message.error("获取信息出错！")
                })
            },
            handleClick(tab, event) {
                // console.log(tab, event);
            },

            //获取时间
            formmaData() {
                let date = new Date(this.newsList.modifyTime)
                let YY = date.getFullYear() + '-'
                let MM = this.addZero(date.getMonth() + 1) + "-"
                let DD = this.addZero(date.getDate()) + " "
                let hh = this.addZero(date.getHours()) + ":"
                let ss = this.addZero(date.getSeconds()) - 10
                return YY + MM + DD + hh + ss
            },
            addZero(i) {
                if (i < 10) {
                    i = "0" + i
                }
                return i
            }
        },
    }
</script>
<style lang="less" scoped>
    @import url('./EpidemicInfo.less');

    #chinaMap {
        width: 1500px;
        height: 800px;
        background-color: #fff;
    }
</style>
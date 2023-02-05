<template>
    <div>

        <div id="container">
            <div class="mapSearch">
                <el-input v-model="userInput" placeholder="请输入你要查找的关键词" id="tishikuang"></el-input>
                <el-button type="primary" @click="biu">确定选址</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getLocation
    } from '../../../assets/api/hotel.js'
    import AMapLoader from '@amap/amap-jsapi-loader'
    window._AMapSecurityConfig = {
        securityJsCode: 'a490f6142f4c5808ccf04a6972da68a2' //在这里填写你的安全密钥
    }
    export default {
        data() {
            return {
                userAddress: [],
                map: null,
                autoOptions: {
                    input: 'tishikuang' //绑定的搜索关键字的input标签ID，用这个注册
                },
                auto: null,
                userInput: '', //绑定的搜索关键字的的内容
                placeSearch: null,
                searchHere: null, //根据搜索组件搜索到以后的地点信息
            }
        },
        created() {
            let id = JSON.parse(localStorage.getItem('user')).id
            let array = []
            getLocation(id).then(res => {
                if (res.flag) {
                    console.log(res.data);
                    Object.values(res.data).forEach(item => {
                        this.userAddress.push(item)
                    });
                }
            })
        },
        mounted() {
            this.initMap()
        },
        methods: {

            // poi搜索以后 点击确认选址以后的操作
            biu() {
                if (this.searchHere) {
                    this.$message({
                        message: '确认地点：' + this.searchHere.name,
                        type: 'success'
                    });
                    // this.$emit('mapHere',this.searchHere);
                    alert(`地址数据都在data里面this.searchHere，包括经纬度，以及其他各种地址信息，该有的都有，当poi搜索以后select(e){}方法里面的参数e就是地址信息，我把单独拿出来。地点名：` +
                        this.searchHere.name)
                }
            },
            initMap() {

                AMapLoader.load({
                    key: "71a0384ae3e5bc707de27f09ec759b31", // 申请好的Web端开发者Key，首次调用 load 时必填
                    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                    plugins: ['AMap.ToolBar', 'AMap.Scale', 'AMap.HawkEye', 'AMap.MapType',
                        'AMap.Geolocation', 'AMap.AutoComplete', 'AMap.PlaceSearch', 'AMap.Geocoder',

                    ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
                }).then((AMap) => {

                    console.log("map", this.userAddress);

                    this.map = new AMap.Map("container", { //设置地图容器id
                        viewMode: "3D", //是否为3D地图模式
                        zoom: 8, //初始化地图级别
                        // center: [108.948024, 34.263161], //初始化地图中心点位置
                        center: this.userAddress, //初始化地图中心点位置

                    });
                    //引入高德地图的空间绑定使用
                    this.map.addControl(new AMap.Scale())
                    this.map.addControl(new AMap.ToolBar())
                    this.map.addControl(new AMap.HawkEye())
                    this.map.addControl(new AMap.MapType())
                    this.map.addControl(new AMap.Geolocation())
                    this.auto = new AMap.AutoComplete(this.autoOptions)
                    //
                    this.placeSearch = new AMap.PlaceSearch({
                        map: this.map
                    }) //构造地点查询类
                    this.auto.on('select', this.select) //绑定查询事件

                }).catch(e => {
                    console.log(e);
                })
            },

            //poi搜索 这里面的这个参数 e 就是搜索以后的地址信息 你可以把它打印出来看一看经纬度什么的都有
            select(e) {
                this.placeSearch.setCity(e.poi.adcode) //依据城市ID搜索
                this.placeSearch.search(e.poi.name) //关键字查询查询
                this.map.setZoom(10, true)
                this.searchHere = e.poi
                this.$message({
                    message: '选择地点:' + this.searchHere.name,
                    type: 'success'
                });
            }
        },

    }
</script>

<style lang="less" scoped>
    @import url('./Map.less');
</style>
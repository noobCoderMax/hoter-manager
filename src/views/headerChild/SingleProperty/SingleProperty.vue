<template lang="">
    <div style="background: #f5f5f5;">
        <!-- 轮播图 -->
        <el-carousel :interval="5000" arrow="always" height="100vh">
            <el-carousel-item v-for="item in 4" :key="item">
                <img class="img"
                    src="http://img.zx123.cn/Resources/zx123cn/uploadfile/2017/0602/20170602161844_36827.jpg" alt="">
            </el-carousel-item>
        </el-carousel>


        <div class="row">
            <div class="left">
                <section class="topBox">
                    <div class="headers">
                        <div class="title">{{hotel.name}}</div>
                        <div class="btn">
                            <el-button type="primary" @click="orderHotel">预定</el-button>
                        </div>
                    </div>
                    <div style="width:90%;height: 2px;margin: 0px 5%;">
                        <el-divider></el-divider>
                    </div>
                    <div style="display: flex;justify-content: start;margin: 30px 60px;">
                        <ul style="margin-right: 100px;">
                            <li><span>卧室 :</span> 3 Room</li>
                            <li><span>浴室 :</span> 5 Room</li>
                            <li><span>车库大小 :</span> Yes - 200 SqFt </li>
                            <li><span>建造年份 :</span> 2018-01-09</li>
                            <li><span>评分 :</span> {{hotel.score}}</li>
                            <li><span>星级 :</span> {{hotel.starName}}</li>
                            <li><span>商圈 :</span> {{hotel.business}}</li>
                            <li><span>品牌 :</span> {{hotel.brand}}</li>
                            <li><span>价格 :</span> ￥{{hotel.price}}</li>
                            <li><span>城市 :</span> {{hotel.city}}</li>
                            <li><span>具体地址 :</span> {{hotel.address}}</li>
                            <li><span>距离 :</span> 当前相距{{distance}}千米</li>
                        </ul>

                        <div style="border: 10px soild red;width: 500px;">
                            <img style="width: 700px;height: 400px;margin:30px;" :src="hotel.pic" alt="酒店图片">
                        </div>

                    </div>
                </section>

                <section class="topBox">
                    <div style="position: relative;">
                        <h4 class="title">Description </h4>
                        <div id="point">Print This
                            Property <i class="el-icon-s-help"></i></div>

                    </div>
                    <div style="width:90%;height: 2px;margin: 0px 5%;">
                        <el-divider></el-divider>
                    </div>
                    <p style="margin: 30px 60px;font-size: 26px;line-height: 140%;">pulvinar pharetra, sem metus
                        pulvinar
                        leo, ut adipiscing
                        velit ipsum vel
                        dui. Nam volutpat
                        lacinia viverra. Proin tristique tortor sit amet viverra scelerisque. Vivamus convallis
                        varius massa id dictum. Sed facilisis massa turpis, ut dictum leo laoreet nec. Nam ac
                        scelerisque sapien, eu laoreet justo. Cras vel tristique nunc. Nulla risus mi, laoreet eu
                        commodo at, faucibus sed diam. Vivamus ac augue lacinia, aliquam urna nec, accumsan ante.
                        Pellentesque rutrum massa ut augue gravida, et feugiat diam fringilla. Ut rhoncus pulvinar
                        mi a ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere
                        cubilia curae duis at urna ac nulla vestibulum.</p>
                </section>


                <section class="topBox">
                    <h4 class="title">Property Features</h4>
                    <div style="width:90%;height: 2px;margin: 0px 5%;">
                        <el-divider></el-divider>
                    </div>
                    <ul class="tags">
                        <li class="el-icon-success">Air Conditioning</li>
                        <li class="el-icon-success">Cable TV</li>
                        <li class="el-icon-success">Cot</li>
                        <li class="el-icon-error">Fan</li>
                        <li class="el-icon-success"> Lift</li>
                        <li class="el-icon-success">Parking</li>
                        <li class="el-icon-success">Separate Shower</li>
                        <li class="el-icon-success">Office/den</li>
                        <li class="el-icon-error">Air Conditioning</li>
                        <li class="el-icon-success">Cable TV</li>
                        <li class="el-icon-success">Cot</li>
                        <li class="el-icon-success">Fan</li>
                        <li class="el-icon-success">Lift</li>
                        <li class="el-icon-error">Parking</li>
                        <li class="el-icon-success">Cot</li>
                        <li class="el-icon-success">Fan</li>
                        <li class="el-icon-success">Lift</li>
                        <li class="el-icon-success">Parking</li>
                        <li class="el-icon-success">Separate Shower</li>
                        <li class="el-icon-error">Office/den</li>

                        <li class="el-icon-success">Cable TV</li>
                    </ul>
                </section>

                <section class="topBox" style="height: 900px;">
                    <h4 class="title">Video Tour</h4>

                    <div style="width:90%;height: 2px;margin: 0px 5%;">
                        <el-divider></el-divider>
                    </div>

                    <video src="../../../assets/video/test.mp4" type="video/mp4" controls height="700px"
                        style="margin-left: 80px;margin-top: 40px;"></video>

                </section>

                <section class="topBox">
                    <h4 class="title">Near By Places</h4>

                    <div style="width:90%;height: 2px;margin: 0px 5%;">
                        <el-divider></el-divider>
                    </div>
                    <div>
                        <el-empty description="描述文字"></el-empty>
                    </div>
                </section>

                <section class="topBox">
                    <h4 class="title">Contact Agent</h4>
                    <div style="width:90%;height: 2px;margin: 0px 5%;">
                        <el-divider></el-divider>
                    </div>

                    <div class="rowFooter">
                        <div class="left">
                            <div class="row">
                                <div style="display: flex;justify-content: start;height: 200px;">
                                    <div> <img src="../../../assets/images/agents/2.jpg" alt="Agent Image"></div>
                                    <div class="imgRight">
                                        <div style="font-size: 20px;font-weight:bolder;width: 200px;">Michelle Ramirez
                                        </div>
                                        <div style="width: 300px;">Company Agent at Realtory Inc. </div>
                                        <el-button color="#f0a34a" type="primary">View Profile</el-button>
                                    </div>
                                </div>
                                <div style="width: 600px;margin: 20px;">
                                    <p style="line-height: 140%;font-size: 20px;font-weight: bolder;">Lorem ipsum dolor
                                        sit amet,
                                        consectetur adipiscing elit. luctus ligula ac
                                        faucibus faucibus. Cras in nisi in turpis eleifend vehicula at at massa. Vivamus
                                        aliquet porttitor odio.</p>
                                </div>
                                <div class="lis">
                                    <div><i class="el-icon-location-information"></i> 4 Tottenham Road, London,
                                        England.
                                    </div>
                                    <div><i class=" el-icon-mobile-phone"></i> (123) 45678910</div>
                                    <div><i class="el-icon-message"></i> huycoi.art@gmail.com</div>
                                    <div><i class="el-icon-phone"></i> +84 962 216 601</div>
                                    <div><i class="el-icon-stopwatch"></i> Mon - Sat: 9:00 - 18:00</div>
                                </div>
                            </div>

                        </div>

                        <div class="right">
                            <div>
                                <el-form ref="" :model="ContactAgent" label-width="80px">
                                    <el-form-item label="Full Name">
                                        <el-input v-model="ContactAgent.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Phone Number">
                                        <el-input v-model="ContactAgent.phone"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Email">
                                        <el-input v-model="ContactAgent.email"></el-input>
                                    </el-form-item>
                                    <el-form-item label="Message">
                                        <el-input type="textarea" v-model="ContactAgent.message"></el-input>
                                    </el-form-item>
                                </el-form>
                                <div id="btnR">
                                    <el-button type="primary">B=SUBMIT REQUEST</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="right" style="margin-top: 20px;">
                <div>
                    <div style="width: 380px;margin-bottom: 20px;box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);">
                        <el-tabs v-model=" activeName" @tab-click="handleClick" type="border-card">
                            <el-tab-pane label="Sale" name="first">
                                <div class="select">
                                    <div>
                                        <el-select v-model="select" slot="prepend" placeholder="All Location">
                                            <el-option label="All Cities" value="1"></el-option>
                                            <el-option label="Chicago" value="2"></el-option>
                                            <el-option label="Los Angeles" value="3"></el-option>
                                            <el-option label="Miami" value="4"></el-option>
                                            <el-option label="New York" value="5"></el-option>
                                        </el-select>
                                    </div>
                                    <div>
                                        <el-select v-model="select" slot="prepend" placeholder="Sub Location">
                                            <el-option label="brickell" value="1"></el-option>
                                            <el-option label="brickyard" value="2"></el-option>
                                            <el-option label="brooklyn" value="3"></el-option>
                                            <el-option label="downtown" value="3"></el-option>
                                            <el-option label="midtown" value="3"></el-option>
                                        </el-select>
                                    </div>
                                    <div>
                                        <el-select v-model="select" slot="prepend" placeholder="All Status">
                                            <el-option label="All Status" value="1"></el-option>
                                            <el-option label="For Rent" value="2"></el-option>
                                            <el-option label="For Sale" value="3"></el-option>
                                            <el-option label="Foreclosures" value="4"></el-option>
                                            <el-option label="New Costruction" value="5"></el-option>
                                        </el-select>

                                    </div>
                                    <div>
                                        <el-select v-model="select" slot="prepend" placeholder="All Types">
                                            <el-option label="All Types" value="1"></el-option>
                                            <el-option label="Apartment" value="2"></el-option>
                                            <el-option label="Condo" value="3"></el-option>
                                            <el-option label="Farm" value="4"></el-option>
                                            <el-option label="Loft" value="5"></el-option>
                                            <el-option label="villa" value="6"></el-option>
                                            <el-option label="townhouse" value="7"></el-option>
                                            <el-option label="multi-family-home" value="8"></el-option>
                                        </el-select>
                                    </div>
                                    <div>
                                        <el-select v-model="select" slot="prepend" placeholder="No.Beds">
                                            <el-option label="Beds" value="1"></el-option>
                                            <el-option label="1" value="2"></el-option>
                                            <el-option label="2" value="3"></el-option>
                                            <el-option label="3" value="4"></el-option>
                                            <el-option label="4" value="5"></el-option>
                                            <el-option label="Any" value="6"></el-option>
                                        </el-select>

                                    </div>
                                    <div>
                                        <el-select v-model="select" slot="prepend" placeholder="No.Baths">
                                            <el-option label="Bathrooms" value="1"></el-option>
                                            <el-option label="1" value="2"></el-option>
                                            <el-option label="2" value="3"></el-option>
                                            <el-option label="3" value="3"></el-option>
                                            <el-option label="4" value="3"></el-option>
                                            <el-option label="Any" value="3"></el-option>
                                        </el-select>
                                    </div>
                                    <div>
                                        <el-input v-model="input" placeholder="Min Area(sqft)"></el-input>

                                    </div>
                                    <div>
                                        <el-input style="margin-left: 10px;" v-model="input"
                                            placeholder="Max Area(sqft)"></el-input>
                                    </div>
                                    <div>
                                        <el-select v-model="select" slot="prepend" placeholder="Min Prices">
                                            <el-option label="any" value="1"></el-option>
                                            <el-option label="1000" value="2"></el-option>
                                            <el-option label="5000" value="4"></el-option>
                                            <el-option label="10000" value="5"></el-option>
                                            <el-option label="50000" value="6"></el-option>
                                            <el-option label="300000" value="7"></el-option>
                                            <el-option label="1000000" value="8"></el-option>
                                        </el-select>

                                    </div>
                                    <div>
                                        <el-select v-model="select" slot="prepend" placeholder="Max Prices">
                                            <el-option label="any" value="1"></el-option>
                                            <el-option label="1000" value="2"></el-option>
                                            <el-option label="5000" value="3"></el-option>
                                            <el-option label="10000" value="4"></el-option>
                                            <el-option label="50000" value="5"></el-option>
                                            <el-option label="300000" value="6"></el-option>
                                            <el-option label="1000000" value="7"></el-option>
                                        </el-select>
                                    </div>
                                    <el-button style="width: 300px;margin: 10px 30px;" type="primary">Search
                                        Property
                                    </el-button>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="Rent" name="second">Rent</el-tab-pane>
                            <el-tab-pane label="office for rent" name="third">office</el-tab-pane>
                            <el-tab-pane label="office for rent" name="fifth">empty</el-tab-pane>
                        </el-tabs>
                    </div>


                    <section class="section">
                        <div class="Rtitle"> Recent Properties</div>

                        <div v-for="(item, index) in 4" :key="index">
                            <div class="Bigbox">
                                <div style="width:90%;height: 2px;margin: 0px 5%;">
                                    <el-divider></el-divider>
                                </div>
                                <div class="boxs">
                                    <div><img data-action="zoom" style="width: 120px;height: 80px;"
                                            src="../../../assets/images/property/3.jpg" alt="Property Image"></div>
                                    <div>
                                        <div class="entry-title">Luxury family home</div>
                                        <span class="btn-price">$389.000</span>

                                        <div class="tagImgs">
                                            <div><i class="el-icon-menu"></i>3060 SqFt</div>
                                            <div><i class="el-icon-refrigerator
                                                    "></i> 3 Beds</div>
                                            <div><i class="el-icon-ship"></i> 3 Baths</div>
                                            <div><i class="el-icon-truck"></i> Yes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section class="section">
                        <div class="Rtitle" style="margin-bottom: 10px;">Recent Status
                        </div>
                        <div style="width:90%;height: 2px;margin: 0px 5%;">
                            <el-divider></el-divider>
                        </div>
                        <ul>
                            <li><i class="el-icon-arrow-right"></i>For Rent <SPan>30</SPan></li>
                            <li><i class="el-icon-arrow-right"></i>For Sale <SPan>30</SPan></li>
                            <li><i class="el-icon-arrow-right"></i>Office For Rent <SPan>30</SPan> </li>
                        </ul>
                    </section>
                    <section class="section">
                        <div class="Rtitle">
                            Recent Type</div>
                        <div style="width:90%;height: 2px;margin: 0px 5%;">
                            <el-divider></el-divider>
                        </div>
                        <ul>
                            <li><i class="el-icon-arrow-right"></i>Apartment <SPan>30</SPan></li>
                            <li><i class="el-icon-arrow-right"></i>Loft <SPan>05</SPan></li>
                            <li><i class="el-icon-arrow-right"></i>Single Family Home <SPan>28</SPan></li>
                            <li><i class="el-icon-arrow-right"></i>Vila <SPan>37</SPan></li>
                        </ul>

                    </section>
                </div>
            </div>
        </div>

        <!-- 预定表单 -->
        <el-dialog title="预定时间" :visible.sync="dialogFormVisible" width="30%" top="5vh">
            <div style="margin:100px;">
                <el-form>
                    <el-form-item label="">
                        <strong>酒店名称：{{hotel.name}}</strong>
                    </el-form-item>
                    <el-form-item label="">
                        <strong>酒店地址：{{hotel.address}}</strong>
                    </el-form-item>
                    <el-form-item label="开始时间">
                        <el-date-picker v-model="orderForm.startTime" type="datetime" placeholder="选择日期时间"
                            value-format="yyyy-MM-dd HH:mm:ss">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="结束时间">
                        <el-date-picker v-model="orderForm.endTime" type="datetime" placeholder="选择日期时间"
                            value-format="yyyy-MM-dd HH:mm:ss">
                        </el-date-picker>
                    </el-form-item>
                </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addOrders">确 定</el-button>
            </div>
        </el-dialog>

        <Footer />
    </div>
</template>
<script>
    import Footer from '@/components/Footer.vue'
    import {
        getById,
        getLocation
    } from '../../../assets/api/hotel.js'
    import {
        addBrowserRecord
    } from '../../../assets/api/user.js'

    import {
        addOrder
    } from '../../../assets/api/order.js'

    import AMapLoader from '@amap/amap-jsapi-loader'
    window._AMapSecurityConfig = {
        securityJsCode: 'a490f6142f4c5808ccf04a6972da68a2' //在这里填写你的安全密钥
    }
    export default {
        name: "SingleProperty",
        data() {
            return {
                select: '',
                input: '',
                value: '',
                dialogFormVisible: false,
                activeName: 'first',
                ContactAgent: {
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                },
                hotel: {},
                userId: '',
                browse: {
                    browseTime: '',
                    hotelId: '',
                    userId: '',
                },
                orderForm: {
                    hotelId: '',
                    userId: '',
                    createTime: '',
                    money: '',
                    startTime: '',
                    endTime: ''
                },
                userAddress: [],
                hotelAddress: [],
                distance: 0
            }
        },
        created() {
            this.$route.params.location.split(',').forEach(item => {
                this.hotelAddress.push(item)
            })


            this.initHotelChoose(this.$route.params.id)
            this.userId = JSON.parse(localStorage.getItem('user')).id
            this.browse.userId = JSON.parse(localStorage.getItem('user')).id
            this.browse.hotelId = this.$route.params.id
            this.initCurtime()

            this.orderForm.hotelId = this.$route.params.id
            this.orderForm.userId = JSON.parse(localStorage.getItem('user')).id

            this.getUserLocation()

            this.initMapUtils()


        },
        mounted() {
            this.setBrowse()
        },
        comments: {
            footer: Footer
        },
        methods: {
            async getUserLocation() {
                await getLocation(this.userId).then(res => {
                    if (res.flag) {
                        Object.values(res.data).forEach(item => {
                            this.userAddress.push(item)
                        })
                        this.initMap()
                    }
                })
            },
            initMap() {
                AMapLoader.load({
                    key: "71a0384ae3e5bc707de27f09ec759b31", // 申请好的Web端开发者Key，首次调用 load 时必填
                    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                    plugins: ['AMap.GeometryUtil'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
                }).then((AMap) => {
                    let p5 = [parseFloat(this.hotelAddress[0]), parseFloat(this.hotelAddress[1])]
                    let p6 = [parseFloat(this.userAddress[0]), parseFloat(this.userAddress[1])]

                    // 返回 p1 到 p2 间的地面距离，单位：米
                    let dis = AMap.GeometryUtil.distance(p5, p6);
                    this.distance = parseInt(dis) / 1000
                }).catch(e => {
                    console.log(e);
                })
            },
            initCurtime() {
                let date = new Date()
                let YY = date.getFullYear() + '-'
                let MM = this.addZero(date.getMonth() + 1) + "-"
                let DD = this.addZero(date.getDate()) + " "
                let hh = this.addZero(date.getHours()) + ":"
                let ff = this.addZero(date.getMinutes()) + ":"
                let ss = this.addZero(date.getSeconds())
                this.browse.browseTime = YY + MM + DD + hh + ff + ss
                return YY + MM + DD + hh + ff + ss
            },
            setBrowse() {
                addBrowserRecord(this.browse).then(res => {
                    if (res.flag) {}
                })
            },
            async initHotelChoose(id) {
                await getById(id).then(res => {
                    if (res.flag) {
                        this.hotel = res.data
                        this.orderForm.money = res.data.price
                    }
                }).catch(err => {
                    this.$message.error("服务器出错了")
                })
            },

            handleClick(tab, event) {
                console.log(tab, event);
            },
            addZero(i) {
                if (i < 10) {
                    i = "0" + i
                }
                return i
            },
            orderHotel() {
                this.dialogFormVisible = true
            },
            addOrders() {
                let key = localStorage.getItem('user')
                if (key) {
                    this.dialogFormVisible = false
                    this.orderForm.createTime = this.initCurtime()
                    addOrder(this.orderForm).then(res => {
                        if (res.flag) {
                            this.$message.success("预定成功！")
                        }
                    }).catch(err => {
                        this.$message.error("预定出错了！")
                    })
                } else {
                    alert("请您登陆后再预定相关内容！")
                    this.$router.replace({
                        name: 'login'
                    })
                    return
                }

            },
            initMapUtils() {


            }
        },
    }
</script>
<style lang="less" scoped>
    @import url('./singleProperty.less');
</style>
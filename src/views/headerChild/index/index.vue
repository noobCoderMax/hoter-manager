<template>
    <div style="background-color: #f7f7f7; " id="top">
        <!-- 轮播图 -->
        <el-carousel :interval="5000" arrow="hover" height="100vh" class="loopImg">
            <el-carousel-item v-for="(item, index) in imgList" :key="index">
                <img style="background: rgba(0, 0, 0, 0.4);" :src="item.src" alt="Slide" class="imgLoop">
            </el-carousel-item>
        </el-carousel>

        <!-- 标语 -->
        <div class="loopZindex">
            <h1 style="color:white;font-size: 100px;">Find Your Dream House</h1>
            <div>
                <p>If you dream of designing a new home that takes full advantage
                    of <br>
                    the unique geography and views of land that you love</p>
            </div>
        </div>




        <!-- 内容展示 -->
        <section style="background-color: #f5f5f5;margin: 20px auto 50px;">
            <header>
                <div>
                    <div class="text">精品酒店</div>
                    <p style="text-align: center;font-size: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do
                        eiusmod
                        tempor incididunt ut <br>
                        labore et dolore magna aliquan ut enim ad minim veniam.</p>
                </div>
            </header>
            <div class="cards">
                <div class="card" v-for="(item, index) in hotels" :key="index" @click="goDetail(item)">
                    <article>
                        <!-- 图片 -->
                        <figure class="figure">
                            <a href="#"><img style="width: 340px;height: 260px;" :src="item.pic" alt="精品酒店"></a>
                            <span class="tag">for sale</span>
                        </figure>
                        <!-- 描述 -->
                        <div>
                            <div style="display: flex;justify-content: space-between;width: 380px;">
                                <div
                                    style="display: flex;justify-content: start;flex-direction: column;margin:2px 40px 9px;">
                                    <h6><a style="font-size: 16px;" href="#">{{item.name}}</a> </h6>
                                    <span style="display: block;margin-top: 10px;"><i
                                            class="el-icon-location-information"></i>地址：{{item.address}}</span>
                                </div>
                                <div>
                                    <el-button type="primary" plain>￥{{item.price}}</el-button>
                                </div>
                            </div>
                            <el-divider></el-divider>

                            <div
                                style="display: flex;justify-content: space-around;margin: 10px 30px 10px;background-color: #ffffff;">
                                <div><i class="el-icon-menu"></i>价格：{{item.price}}</div>
                                <div><i class="el-icon-refrigerator
                                    "></i>评分：{{item.score}}</div>
                                <div><i class="el-icon-ship"></i>城市：{{item.city}}</div>
                            </div>

                        </div>
                    </article>
                </div>
            </div>
        </section>


        <div class="bgCity ">
            <div>
                <div style="font-size: 50px;color: white;margin-top: 50px;text-align: center;">Download Our Latest App
                </div>
                <p style="display: block;margin-top: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                    eiusmod
                    tempor
                    incididunt ut <br>
                    labore et dolore magna aliquan ut enim ad minim veniam.</p>
            </div>
            <div style="display: flex;justify-content:space-around;width: 600px;">
                <img style="width: 260px;height: 70px; " src="../../../assets/images/iso-btn.png" alt="ISO Button">
                <img style="width: 260px;height: 70px; " src="../../../assets/images/playstore-btn.png"
                    alt="Play Store Button">
            </div>
        </div>

        <section style="margin: 50px auto;">
            <header class="banGong">
                <div style="margin-top: 50px;">
                    <h2 style="font-size: 50px;color: white;text-align:center;">办公酒店</h2>
                </div>
                <div style="width: 200px;height: 10px;">
                    <el-divider></el-divider>
                </div>
                <div style="width: 100px;">
                    <el-divider></el-divider>
                </div>
                <p style="display: block;color: white;margin: 20px auto 50px;font-size: 26px;">Lorem ipsum dolor sit
                    amet,
                    consectetur
                    adipiscing elit, sed do eiusmod
                    tempor incididunt ut <br>
                    labore et dolore magna aliquan ut enim ad minim veniam.</p>
            </header>
            <div style="margin-top: 30px;background: #272727;margin-top: -10px;">
                <el-carousel :interval="4000" type="card" height="500px">
                    <el-carousel-item v-for="(item,index) in businessHotel" :key="index">
                        <img style="width: 100%;height: 100%;" :src="item.pic" alt="workHotels">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </section>

        <section>
            <header class="why">
                <div style="color: black;font-size: 50px;font-family: fantasy;margin: 20px auto 10px;">为什么选择我们</div>
                <!-- 分割线 -->
                <div style="width: 200px;height: 10px;">
                    <el-divider></el-divider>
                </div>
                <div style="width: 100px;">
                    <el-divider></el-divider>
                </div>
                <div style="font-size: 26px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut
                </div>
                <div style="font-size: 26px;margin-bottom: 50px;"> labore et dolore magna aliquan ut enim ad minim
                    veniam.</div>
            </header>

            <div class="allIcon">
                <div>
                    <div class="icons">
                        <div> <i class="icon"><img src="../../../assets/images/features/1.png" alt="Feature Icon"></i>
                        </div>
                        <div style="font-weight: 600;font-size: 26px;">良好的反馈体系</div>
                        <div>您可以及时提出您的意见，收到您的反馈都我们会立即采取措施
                        </div>
                    </div>
                </div>
                <div class="icons">
                    <div> <i class="icon"><img src="../../../assets/images/features/2.png" alt="Feature Icon"></i>
                    </div>
                    <div style="font-weight: 600;font-size: 26px;">种类繁多的选择</div>
                    <div>您可以选择各种各样不同的酒店
                    </div>
                </div>
                <div class="icons">
                    <div> <i class="icon"><img src="../../../assets/images/features/3.png" alt="Feature Icon"></i>
                    </div>
                    <div style="font-weight: 600;font-size: 26px;">贴心的出行提示</div>
                    <div>及时获取天气以及疫情信息，方便您的出行
                    </div>
                </div>
                <div class="icons">
                    <div> <i class="icon"><img src="../../../assets/images/features/4.png" alt="Feature Icon"></i>
                    </div>
                    <div style="font-weight: 600;font-size: 26px;">贴心的服务</div>
                    <div>我们会尽最大努力让您满意
                    </div>
                </div>
            </div>
            <div class="bgPerson">
                <img src="../../../assets/images/bgPerson.jpg" alt="">
            </div>
        </section>

        <Footer />
        <div style="font-size: 60px;">
            <a href="#top" style="position: fixed;right: 150px;bottom: 100px;display: block;z-index: 9999;"><i
                    class="el-icon-caret-top"></i></a>
        </div>
    </div>

</template>

<script>
    import Footer from '@/components/Footer.vue'

    import {
        boutiqueHotel,
        classify,
        businessHotel,
        pageHotel
    } from '../../../assets/api/hotel.js'


    export default {
        data() {
            return {
                hotels: [

                ],
                businessHotel: [

                ],
                formInline: {
                    city: '',
                    business: '',
                    star_name: '',
                    brand: '',
                    lowPrice: '',
                    highPrice: ''
                },
                imgList: [{
                        src: 'https://images.unsplash.com/photo-1547473078-cbab237054c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
                        id: 1
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1631049552240-59c37f38802b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80',
                        id: 2
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80',
                        id: 3
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1563206098-9834172eeccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2231&q=80',
                        id: 4
                    }
                ],
                boutiqueHotelImg: [{
                        id: 1,
                        src: require("@/assets/images/property/1.jpg")
                    },
                    {
                        id: 2,
                        src: require('@/assets/images/property/2.jpg')
                    },
                    {
                        id: 3,
                        src: require('@/assets/images/property/3.jpg')
                    }
                ],
            }
        },
        comments: {
            footer: Footer,
        },
        mounted() {

        },
        created() {
            this.initHotel()
            this.initbusinessHotel()
        },
        methods: {
            initHotel() {
                boutiqueHotel().then(res => {
                    if (res.flag) {
                        this.hotels = res.data.hotels
                    }
                }).catch(err => {
                    this.$message.error("获取信息失败！")
                })
            },
            initbusinessHotel() {
                businessHotel().then(res => {
                    if (res.flag) {
                        this.businessHotel = res.data.hotels.slice(0, 5)
                    }
                })

            },
            goDetail(val) {
                this.$router.push({
                    name: 'singleproperty',
                    params: {
                        id: val.id,
                        location: val.location
                    }
                })

            },
        },
    }
</script>
<style lang="less" scoped>
    @import url('./index.less');
</style>
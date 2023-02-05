<template lang="">
    <div>
        <div style="position:relative;">
            <img src="http://img.zx123.cn/Resources/zx123cn/uploadfile/2017/0602/20170602161844_36827.jpg" class="img"
                alt="backGroundImg">
        </div>

        <!-- 查找框 -->
        <div class="queryBox">
            <div class="littleBox">查找酒店</div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="100px">
                <el-form-item>
                    <el-select v-model="formInline.city" placeholder="城市">
                        <el-option label="北京" value="北京"></el-option>
                        <el-option label="上海" value="上海"></el-option>
                        <el-option label="深圳" value="深圳"></el-option>
                        <el-option label="广州" value="广州"></el-option>
                        <el-option label="成都" value="成都"></el-option>
                        <el-option label="杭州" value="杭州"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="formInline.business" placeholder="商圈">
                        <el-option label="天安门/王府井地区" value="天安门/王府井地区"></el-option>
                        <el-option label="四川北路商业区" value="四川北路商业区"></el-option>
                        <el-option label="浦东金桥地区" value="浦东金桥地区"></el-option>
                        <el-option label="浦东机场核心区" value="浦东机场核心区"></el-option>
                        <el-option label="徐家汇地区" value="徐家汇地区"></el-option>
                        <el-option label="国展中心地区" value="国展中心地区"></el-option>
                        <el-option label="平谷城区" value="平谷城区"></el-option>
                        <el-option label="华强北商业区" value="华强北商业区"></el-option>
                        <el-option label="会展中心/CBD" value="会展中心/CBD"></el-option>
                        <el-option label="深圳北站地区" value="深圳北站地区"></el-option>
                        <el-option label="东门商业区" value="东门商业区"></el-option>
                        <el-option label="科技园" value="科技园"></el-option>
                        <el-option label="华侨城" value="华侨城"></el-option>
                        <el-option label="长风公园地区" value="长风公园地区"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="formInline.starname" placeholder="星级">
                        <el-option label="一星" value="一星"></el-option>
                        <el-option label="二星" value="二星"></el-option>
                        <el-option label="三星" value="三星"></el-option>
                        <el-option label="四星" value="四星"></el-option>
                        <el-option label="五星" value="五星"></el-option>
                        <el-option label="一钻" value="一钻"></el-option>
                        <el-option label="二钻" value="二钻"></el-option>
                        <el-option label="三钻" value="三钻"></el-option>
                        <el-option label="四钻" value="四钻"></el-option>
                        <el-option label="五钻" value="五钻"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="formInline.brand" placeholder="品牌">
                        <el-option label="速8" value="速8"></el-option>
                        <el-option label="7天酒店" value="7天酒店"></el-option>
                        <el-option label="万怡" value="万怡"></el-option>
                        <el-option label="豪生" value="豪生"></el-option>
                        <el-option label="华美达" value="华美达"></el-option>
                        <el-option label="皇冠假日" value="皇冠假日"></el-option>
                        <el-option label="皇冠假日" value="皇冠假日"></el-option>
                        <el-option label="丽笙" value="丽笙"></el-option>
                        <el-option label="希尔顿" value="希尔顿"></el-option>
                        <el-option label="喜来登" value="喜来登"></el-option>
                        <el-option label="万豪" value="万豪"></el-option>
                        <el-option label="如家" value="如家"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="formInline.minPrcie" placeholder="最低价格">
                        <el-option label="￥100" value="100"></el-option>
                        <el-option label="￥200" value="200"></el-option>
                        <el-option label="￥500" value="500"></el-option>
                        <el-option label="￥1000" value="1000"></el-option>
                        <el-option label="￥1500" value="1500"></el-option>
                        <el-option label="￥2000" value="2000"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="formInline.maxPrice" placeholder="最高价格">
                        <el-option label="￥10000" value="10000"></el-option>
                        <el-option label="￥9000" value="9000"></el-option>
                        <el-option label="￥8000" value="8000"></el-option>
                        <el-option label="￥5000" value="5000"></el-option>
                        <el-option label="￥2500" value="2500"></el-option>
                        <el-option label="￥2000" value="2000"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="margin-left:41vh;">
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div class="container">
            <div class="h2">酒店列表</div>
            <div class="pull">
                <div class="sort">

                    <el-select placeholder="排序" v-model="formInline.sortScore">
                        <el-option label="默认" value="-1">
                        </el-option>
                        <el-option label="评分" value="1">
                        </el-option>
                        <el-option label="价格" value="1">
                        </el-option>

                    </el-select>
                    </select>
                </div>
                <div class="view">
                    <p style="font-size: 26px;">视图 :</p>
                    <i class="el-icon-s-unfold" data-layout="12"></i>
                    <i class="el-icon-menu" data-layout="4"></i>
                    <i class="el-icon-s-grid" data-layout="6"></i>

                </div>
            </div>
        </div>

        <section>
            <!-- 内容 -->
            <div class="row" style="background: #ffffff;">
                <div class="crads" v-for="(item, index) in hotels" :key="index">

                    <div class="card" @click="goDetail(item)" :id="item.id">
                        <article>
                            <figure class="imgHotel">
                                <img data-action="zoom" :src="item.pic" alt="酒店图片" @click="goDetail(item)">
                                <span class="saleTag">for sale</span>
                            </figure>

                            <div class="cardRight">

                                <header>
                                    <div class="content" style="padding: 20px 0px; ">
                                        <h6 style="font-size: 20px;font-weight: bolder;margin-bottom: 6px;">
                                            <div style="cursor: pointer;">{{item.name}}</div>
                                        </h6>
                                        <span><i class="el-icon-location-outline"><strong> {{item.city}}-</strong></i>

                                            {{item.address}}</span>
                                    </div>
                                    <div class="btn">
                                        <el-button type="primary" size="medium">价格：￥{{item.price}}</el-button>
                                    </div>
                                </header>

                                <div class="tagImg">
                                    <div><i class="el-icon-star-off"></i>星级：{{item.starName}}</div>
                                    <div><i class="el-icon-document-copy
                                        "></i> 评分：{{item.score}}分</div>
                                    <div><i class="el-icon-s-flag"></i>：品牌 {{item.brand}}</div>
                                </div>

                                <div class="p">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                        vero
                                        eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea
                                        takimata sanctus est Lorem ipsum dolor sit amet. </p>
                                </div>

                                <div class="author">
                                    <a href="#" class="author-img"><img src="../../../assets/images/agents/1.jpg"
                                            alt="Agent Image"></a>
                                    <div class="content">
                                        <div class="author-name">Personal Seller: <a href="#">Linda Garret</a></div>
                                        <div class="phone" style="color: #6ca8ea;"><i style="font-size: 20px;"
                                                class="el-icon-phone-outline"></i>
                                            00894
                                            692-49-22</div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>


            </div>
        </section>

        <!-- 分页 -->
        <div class="page">
            <div class="pageSelect">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="params.page" :page-sizes="[6, 9, 12]"
                    layout="total, sizes, prev, pager, next, jumper" :total="total">
                </el-pagination>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
    import Footer from '@/components/Footer.vue'
    import {
        pageHotel,
        businessHotel
    } from '../../../assets/api/hotel.js'

    export default {
        name: "PeopertyListening",
        data() {
            return {
                total: 6,
                formInline: {
                    page: "1",
                    size: "10",
                    city: '',
                    business: '',
                    starname: '',
                    brand: '',
                    minPrice: '',
                    maxPrice: '',
                    business: '',
                    sortScore: '-1',
                    sortPrice: '-1'
                },
                options: [{
                    value: 'default',
                    label: '默认'
                }, {
                    value: 'date',
                    label: '日期'
                }, {
                    value: 'price',
                    label: '价格'
                }],
                value: '',
                hotels: [],
                params: {
                    page: "1",
                    size: "6",
                    sort: ''
                },
                currentPage: 10
            }
        },
        comments: {
            footer: Footer,

        },
        created() {
            this.initHotels()
        },
        methods: {
            goDetail(val) {
                this.$router.push({
                    name: 'singleproperty',
                    params: {
                        id: val.id,
                        location: val.location
                    }
                })

            },
            async initHotels() {
                await pageHotel(this.params).then(res => {
                    if (res.flag) {
                        this.hotels = res.data.hotels
                    }
                }).catch(err => {
                    console.log("初始化出错了");
                })
            },
            onSubmit() {
                this.formInline.lowPrice = parseInt(this.formInline.lowPrice)
                this.formInline.highPrice = parseInt(this.formInline.highPrice)

                pageHotel(this.formInline).then(res => {
                    if (res.flag) {
                        this.hotels = res.data.hotels
                        this.total = parseInt(res.data.total)
                    }
                }).catch(err => {
                    this.$message.error("查询失败！")
                })
            },
            handleSizeChange(val) {
                this.params.size = val.toString()
                pageHotel(this.params).then(res => {
                    if (res.flag) {
                        this.hotels = res.data.hotels
                    }
                }).catch(err => {
                    console.log("初始化出错了");
                })
            },
            handleCurrentChange(val) {
                this.params.page = val.toString()
                pageHotel(this.params).then(res => {
                    if (res.flag) {
                        this.hotels = res.data.hotels
                        console.log(this.hotels);
                    }
                }).catch(err => {
                    console.log("初始化出错了");
                })
            }
        },
    }
</script>
<style lang="less" scoped>
    @import url('./peopertyListening.less');
</style>
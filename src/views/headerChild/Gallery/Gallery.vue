<template lang="">
    <div class="total">
        <div style="position:relative;">
            <img src="http://img.zx123.cn/Resources/zx123cn/uploadfile/2017/0602/20170602161844_36827.jpg" class="img"
                alt="backGroundImg">
        </div>

        <div>
            <div style="margin:50px 200px ;">
                <el-tabs v-model="activeName" @tab-click="handleClick" style="font-size: 30px;">
                    <el-tab-pane label="全部" name="1">
                        <div class="flex">
                            <div v-for="(item, index) in hotels" :key="index" @click="goDetail(item)">
                                <div class="div">
                                    <img style="width: 490px;height: 300px;" :src="item.pic" alt="Property Image">
                                    <span style="background-color: #f0a34a;color: white;">for sale</span>
                                    <div id="cardFooter">
                                        <div>{{item.name}}</div>
                                        <div>评分：{{item.score}}</div>
                                        <div>价格：￥{{item.price}}</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </el-tab-pane>
                    <el-tab-pane label="公寓" name="2">
                        <div class="flex">
                            <div v-for="(item, index) in hotels" :key="index" @click="goDetail(item)">
                                <div class="div">
                                    <img style="width: 490px;height: 300px;" :src="item.pic" alt="Property Image">
                                    <span style="background-color: #f0a34a;color: white;">for sale</span>
                                    <div id="cardFooter">
                                        <div>{{item.name}}</div>
                                        <div> 评分：{{item.score}}</div>
                                        <div>价格：￥{{item.price}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="海景" name="3">
                        <div class="flex">
                            <div v-for="(item, index) in hotels" :key="index" @click="goDetail(item)">
                                <div class="div">
                                    <img style="width: 490px;height: 300px;" :src="item.pic" alt="Property Image">
                                    <span style="background-color: #f0a34a;color: white;">for sale</span>
                                    <div id="cardFooter">
                                        <div>{{item.name}}</div>
                                        <div> 评分：{{item.score}}</div>
                                        <div>价格：￥{{item.price}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="民宿" name="4">
                        <div class="flex">
                            <div v-for="(item, index) in hotels" :key="index" @click="goDetail(item)">
                                <div class="div">
                                    <img style="width: 490px;height: 300px;" :src="item.pic" alt="Property Image">
                                    <span style="background-color: #f0a34a;color: white;">for sale</span>
                                    <div id="cardFooter">
                                        <div>{{item.name}}</div>
                                        <div> 评分：{{item.score}}</div>
                                        <div>价格：￥{{item.price}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="庄园" name="5">
                        <div class="flex">
                            <div v-for="(item, index) in hotels" :key="index" @click="goDetail(item)">
                                <div class="div">
                                    <img style="width: 490px;height: 300px;" :src="item.pic" alt="Property Image">
                                    <span style="background-color: #f0a34a;color: white;">for sale</span>
                                    <div id="cardFooter">
                                        <div>{{item.name}}</div>
                                        <div> 评分：{{item.score}}</div>
                                        <div>价格：￥{{item.price}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="别墅" name="6">
                        <div class="flex">
                            <div v-for="(item, index) in hotels" :key="index" @click="goDetail(item)">
                                <div class="div">
                                    <img style="width: 490px;height: 300px;" :src="item.pic" alt="Property Image">
                                    <span style="background-color: #f0a34a;color: white;">for sale</span>
                                    <div id="cardFooter">
                                        <div>{{item.name}}</div>
                                        <div> 评分：{{item.score}}</div>
                                        <div>价格：￥{{item.price}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="办公" name="7">
                        <div class="flex">
                            <div v-for="(item, index) in hotels" :key="index" @click="goDetail(item)">
                                <div class="div">
                                    <img style="width: 490px;height: 300px;" :src="item.pic" alt="Property Image">
                                    <span style="background-color: #f0a34a;color: white;">for sale</span>
                                    <div id="cardFooter">
                                        <div>{{item.name}}</div>
                                        <div> 评分：{{item.score}}</div>
                                        <div>价格：￥{{item.price}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <!-- 分页 -->
        <div class="pageSelect">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="searchForm.page" :page-sizes="[6, 9, 12]" :page-size="searchForm.size"
                layout="total, sizes, prev, pager, next, jumper" :total="totalPage">
            </el-pagination>
        </div>

        <Footer />
    </div>
</template>
<script>
    import Footer from '@/components/Footer.vue'
    import {
        classify
    } from '../../../assets/api/hotel.js'
    export default {
        name: "Gallery",
        comments: {
            footer: Footer
        },
        data() {
            return {
                totalPage: 0,
                activeName: '1',
                hotels: [],
                searchForm: {
                    classify: "1",
                    page: 1,
                    size: 6
                }
            }
        },
        created() {
            this.initHotel()
        },
        methods: {
            initHotel() {
                classify(this.searchForm).then(res => {
                    if (res.flag) {
                        this.hotels = res.data.hotels
                        this.totalPage = parseInt(res.data.total)
                    }
                }).catch(err => {
                    this.$message.error("获取酒店信息失败！")
                })
            },
            handleClick(tab, event) {
                this.searchForm.classify = (parseInt(tab.index) + 1).toString()
                classify(this.searchForm).then(res => {
                    if (res.flag) {
                        this.hotels = res.data.hotels

                    }
                }).catch(err => {
                    this.$message.error("获取酒店信息失败！")
                })
            },
            handleSizeChange(val) {
                this.searchForm.size = val.toString()
                classify(this.searchForm).then(res => {
                    if (res.flag) {
                        this.hotels = res.data.hotels
                        this.totalPage = parseInt(res.data.total)
                    }
                }).catch(err => {
                    this.$message.error("获取酒店信息失败！")
                })
            },
            handleCurrentChange(val) {
                this.searchForm.page = val.toString()
                classify(this.searchForm).then(res => {
                    if (res.flag) {
                        this.hotels = res.data.hotels
                        this.totalPage = parseInt(res.data.total)
                    }
                }).catch(err => {
                    this.$message.error("获取酒店信息失败！")
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
        }
    }
</script>
<style lang="less" scoped>
    @import url('./gallery.less');
</style>
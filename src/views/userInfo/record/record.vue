<template lang="">
    <div class="right">
        <header>
            <div class="it"></div>
            <strong v-bind="$attrs">我的记录</strong>
        </header>

        <div class="cont">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="登录记录" name="first">
                    <div class="header">
                        <strong style="margin-left: -50px;">登录记录 </strong>

                        <p>您最近的登录情况</p>
                        <div style="margin-left: 30px;">
                            <el-button size="mini" type="danger" @click="handleDelete">
                                删除全部</el-button>
                        </div>
                    </div>
                    <el-divider></el-divider>

                    <p>根据登录时间，IP，地理位置，若判断为异常情况，请在核实后及时 <span style="color: #00a1d6;cursor: pointer;"
                            @click="gochangePsd">修改密码</span></p>

                    <div style="margin-top: 10px;">
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="id" label="ID" width="80">
                            </el-table-column>
                            <el-table-column prop="time" label="时间" width="180">
                            </el-table-column>
                            <el-table-column prop="ipAddress" label="IP" width="180">
                            </el-table-column>
                            <el-table-column prop="address" label="地理位置">
                            </el-table-column>

                        </el-table>
                    </div>
                </el-tab-pane>



                <el-tab-pane label="浏览记录" name="second">
                    <div class="header">
                        <strong style="margin-left: -50px;"> 浏览记录 </strong>

                        <p>您最近的浏览情况</p>
                        <div style="margin-left: 30px;">
                            <el-button size="mini" type="danger" @click="handleDeleteBrowse">
                                删除全部</el-button>
                        </div>
                    </div>
                    <el-divider></el-divider>
                    <div style="margin-top: 10px;">
                        <el-table :data="browseData" style="width: 100%">
                            <el-table-column prop="id" label="ID" width="80">
                            </el-table-column>
                            <el-table-column prop="browseTime" label="时间" width="180">
                            </el-table-column>
                            <el-table-column prop="hotel.name" label="酒店名称">
                            </el-table-column>
                            <el-table-column prop="hotel.city" label="城市">
                            </el-table-column>
                            <el-table-column prop="hotel.address" label="地点">
                            </el-table-column>
                            <el-table-column prop="hotel.starName" label="星级">
                            </el-table-column>
                            <el-table-column prop="hotel.score" label="评分">
                            </el-table-column>

                        </el-table>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
    import {
        getLoginRecord,
        delLoginRecord,
        getBrowserRecord,
        delBrowserRecord
    } from '../../../assets/api/user.js'
    export default {
        data() {
            return {
                activeName: 'first',
                tableData: [],
                browseData: [],
            }
        },
        created() {
            this.initUserInfo()
        },
        methods: {
            initUserInfo() {
                this.userData = JSON.parse(localStorage.getItem('user'))
                this.getRecord(this.userData.id)
            },
            // 获取浏览记录
            getBrowseData(id) {
                getBrowserRecord(id).then(res => {
                    if (res.flag) {
                        if (res.data.length === 0) {
                            this.$message.info("暂未有浏览记录！")
                            return
                        }
                        this.browseData = res.data
                    }
                }).catch(err => {
                    this.$message.error("获取浏览记录失败！")
                })
            },
            // 获取登录记录
            getRecord(id) {
                getLoginRecord(id).then(res => {
                    if (res.flag) {
                        if (res.data.length === 0) {
                            this.$message.info("暂未有登录记录！")
                            return
                        }
                        this.tableData = res.data
                    }

                }).catch(err => {
                    this.$message.err("获取登录记录失败！")
                })
            },
            // 删除登录记录
            handleDelete() {
                delLoginRecord(this.userData.id).then(res => {
                    if (res.flag) {
                        this.$message.success("删除记录成功！")
                        this.tableData = []
                    }
                }).catch(err => {
                    this.$message.error("服务器出错了！")
                }).finally(function () {

                })
            },
            gochangePsd() {
                this.$router.push({
                    name: 'changePassword'
                })
            },
            // 删除浏览记录
            handleDeleteBrowse() {
                delBrowserRecord(this.userData.id).then(res => {
                    if (res.flag) {
                        this.$message.success("删除成功！")
                        this.browseData = []
                    }
                }).catch(err => {
                    this.$message.error("删除失败！")
                }).finally(function () {

                }, )

            },
            handleClick(tab, event) {
                if (tab.index === '1') {
                    this.getBrowseData(this.userData.id)
                } else {
                    this.getRecord(this.userData.id)
                }
            }
        },

    }
</script>
<style lang="less" scoped>
    @import url('./record.less');
</style>
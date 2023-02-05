<template lang="">
    <div class="right">
        <header>
            <div class="it"></div>
            <strong>我的预定</strong>
        </header>

        <div class="table">
            <el-table :data="orderList" stripe style="width: 100%">
                <el-table-column prop="orderId" label="订单号" width="180">
                </el-table-column>
                <el-table-column prop="money" label="价格" width="180">
                </el-table-column>
                <el-table-column prop="startTime" label="开始时间">
                </el-table-column>
                <el-table-column prop="endTime" label="截至时间">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="success" @click="getDetail(scope.$index, scope.row)">查看详情
                        </el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>


        <el-dialog title="详细信息" :visible.sync="dialogTableVisible">
            <div class="form">
                <div><span>酒店名称：</span> {{hotelForm.name}}</div>
                <div><span>酒店地址：</span> {{hotelForm.address}}</div>
                <div><span>价格： </span> {{hotelForm.price}}</div>
                <div><span>评分： </span> {{hotelForm.score}}</div>
                <div><span>品牌： </span> {{hotelForm.brand}}</div>
                <div><span>所在城市：</span> {{hotelForm.city}}</div>
                <div><span>星级： </span> {{hotelForm.starName}}</div>
                <div><span>商圈： </span> {{hotelForm.business}}</div>
                <div><img :src="hotelForm.pic" alt=""></div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import {
        addOrder,
        getOrderById,
        queryAllOrder,
        delOrder
    } from '../../../assets/api/order.js'
    import {
        getById
    } from '../../../assets/api/hotel.js'
    export default {
        name: 'order',
        data() {
            return {
                orderList: [],
                userId: '',
                hotelForm: {
                    name: '',
                    address: '',
                    price: '',
                    score: '',
                    brand: '',
                    city: '',
                    starName: '',
                    business: '',
                    pic: ''
                },
                dialogTableVisible: false
            }
        },
        created() {
            this.initUser()
        },
        methods: {
            initUser() {
                this.userId = JSON.parse(localStorage.getItem('user')).id
                this.getOrders(this.userId)
            },
            getOrders(id) {
                queryAllOrder(id).then(res => {
                    if (res.flag) {

                        this.orderList = res.data
                    }
                }).catch(err => {
                    this.$message.error("获取预定订单失败！")
                })
            },
            getDetail(index, row) {
                getById(row.hotelId).then(res => {
                    if (res.flag) {
                        this.dialogTableVisible = true
                        this.hotelForm = res.data
                    }
                }).catch(err => {
                    this.$message.error("获取详情失败！")
                })
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    delOrder(row.id).then(res => {
                        if (res.flag) {
                            this.$message.success("删除成功！")
                            this.getOrders(this.userId)
                        }
                    }).catch(err => {
                        this.$message.error("删除失败！")
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },
    }
</script>
<style lang="less" scoped>
    @import url('./order.less');
</style>
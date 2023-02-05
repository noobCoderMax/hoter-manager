<template lang="">
    <div class="right">
        <header>
            <div class="it"></div>
            <strong v-bind="$attrs">账号安全</strong>
        </header>

        <div class="grade">
            <strong>账号安全评分:</strong>
            <div>{{safeScore}}</div>
            <strong>分</strong>
        </div>
        <el-divider></el-divider>

        <div class="cards" v-for="(item, index) in codeSafeItem" :key="index">
            <div class="card">
                <div class="i" :style="{'color': (item.i ==='el-icon-success' ? '#48bd86':'#efa957')}">
                    <i :class="item.i"></i><strong>{{item.title}}</strong>
                </div>
                <div>{{item.desc}}</div>
                <div class="op" @click="toOp(item)">{{item.optxt}}</div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                safeScore: '',
                userData: {},
                codeSafeItem: [{
                        id: 1,
                        i: 'el-icon-success',
                        title: '设置密码',
                        desc: "已设置",
                        optxt: '修改密码'
                    },
                    {
                        id: 2,
                        i: 'el-icon-success',
                        title: '绑定手机',
                        desc: "已设置",
                        optxt: '修改手机'
                    },
                    {
                        id: 3,
                        i: 'el-icon-success',
                        title: '绑定邮箱',
                        desc: "未设置",
                        optxt: '修改邮箱'
                    },
                ]
            }
        },
        created() {
            this.userData = JSON.parse(localStorage.getItem('user'))
        },
        mounted() {
            this.initUserInfo()
        },
        methods: {
            initUserInfo() {

                if (this.userData.phone === '') {
                    this.codeSafeItem[2].i = 'el-icon-warning'
                    this.codeSafeItem[2].desc = '未设置'
                    this.safeScore = '66'
                } else {
                    this.codeSafeItem[2].i = 'el-icon-success'
                    this.codeSafeItem[2].desc = '已经设置'
                    this.safeScore = '100'
                }
            },
            toOp(val) {
                console.log(val);
                if (val.optxt === '修改手机' || val.optxt === '修改邮箱') {
                    this.$router.push({
                        name: 'changeInfo'
                    })
                } else {
                    this.$router.push({
                        name: 'changePassword'
                    })
                }
            }
        },
    }
</script>
<style lang="less" scoped>
    @import url('./codeSafe.less');
</style>
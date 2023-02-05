<template lang="">
    <div class="right">
        <header>
            <div class="it"></div>
            <strong> 我的头像</strong>
        </header>
        <!-- 首页 -->
        <div class="avatar">
            <img :src="userData.avator" alt="头像" />
            <strong>{{ userData.nickname }}</strong>
            <div class="ident">正式会员</div>
            <div class="changeInfo" @click="toUpdateInfo">修改信息</div>

            <div v-if="name" class="toLogin">
                <div @click="goLogin" style="cursor: pointer;">退出登录</div>

            </div>
        </div>
        <el-divider></el-divider>
        <div class="codeSafe">
            <div class="header">
                <strong><i class="el-icon-key"></i> 账号安全</strong>
                <div class="more">
                    更多账号安全 <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div class="items">
                <div v-for="(item, index) in safeItem" :key="index">
                    <div class="item">
                        <div class="i">
                            <i :class="item.i"></i>
                        </div>
                        <div class="r">
                            <strong>{{item.title}}</strong>
                            <p>{{item.desc}}</p>
                            <div class="btn">
                                <div>
                                    <el-button color="#22a1d6" type="primary">{{item.btnType}}</el-button>
                                </div>
                                <div class="txt" v-show="item.btnTxt" @click="toUpdateInfo(item)">{{item.btnTxt}}<i
                                        class="el-icon-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import {
        getUserById
    } from '../../../assets/api/user.js'

    export default {
        name: 'index',
        data() {
            return {
                userData: {},
                name: "假面骑士彡kuuga",
                safeItem: [{
                        id: 1,
                        i: 'el-icon-message',
                        title: '我的邮箱',
                        desc: '绑定邮箱后即可使用邮箱登录',
                        btnType: '已绑定',
                        btnTxt: '更改邮箱'
                    },
                    {
                        id: 2,
                        i: 'el-icon-s-opportunity',
                        title: '修改密码',
                        desc: '获取邮箱验证码后即可修改密码',
                        btnType: '已设置',
                        btnTxt: '查看并设置'
                    },

                ],

            }
        },
        created() {
            this.initInfo()
        },
        methods: {
            initInfo() {
                this.userData = JSON.parse(localStorage.getItem('user'))
            },
            toUpdateInfo(val) {
                if (val.id === 1) {
                    this.$router.push({
                        name: 'changeInfo'
                    })
                } else if (val.id === 2) {
                    this.$router.push({
                        name: 'changePassword'
                    })
                }
                console.log(val);

            },
            goLogin() {
                this.$router.replace({
                    name: 'login'
                })
                window.localStorage.removeItem('user')

            }
        },
    }
</script>
<style lang="less" scoped>
    @import url('./index.less');
</style>
<template lang="">
    <div>
        <div style="margin-top: 20px;"></div>
        <div class="main">
            <div class="left">
                <div>
                    <router-link to="/userindex">个人中心</router-link>
                </div>
                <div v-for="(item, index) in opItem" :key="index" @click="goItem(item)">
                    {{item.title}}
                </div>
            </div>
            <div class="right">
                <router-view :title="toChild"></router-view>
            </div>
            <div class="changeStyle">
                <button @click="defaultTheme">默认主题</button>
                <button @click="dark">暗黑主题</button>
                <button @click="custom">自定义主题</button>
            </div>
        </div>

        <Footer />
    </div>
</template>
<script>
    import {
        setTheme
    } from "../../../theme/theme";
    import Footer from '@/components/Footer.vue'
    export default {
        name: "UserInfo",
        components: {
            Footer
        },
        data() {
            return {
                userData: {},
                toChild: '',
                opItem: [{
                        id: 1,
                        title: '首页',
                        name: 'userIndex',
                        to: '/userIndex'
                    },
                    {
                        id: 2,
                        title: '我的信息',
                        name: 'changeInfo',
                        to: '/changeInfo'
                    },
                    {
                        id: 3,
                        title: '我的头像',
                        name: 'avatar',
                        to: '/avatar'
                    },
                    {
                        id: 4,
                        title: '账号安全',
                        name: 'codeSafe',
                        to: '/codeSafe'
                    },
                    {
                        id: 5,
                        title: '我的记录',
                        name: 'record',
                        to: '/record'
                    }, {
                        id: 6,
                        title: '修改密码',
                        name: 'changePassword',
                        to: '/changePassword'
                    }, {
                        id: 7,
                        title: '我的预定',
                        name: 'order',
                        to: '/order'
                    }, {
                        id: 8,
                        title: '关于我们',
                        name: 'aboutUs',
                        to: '/aboutUs'
                    }
                ],
            };
        },
        mounted() {
            this.init(); // 初始化主题
            this.initUser()
        },
        methods: {
            initUser() {
                // this.userData = JSON.parse(localStorage.getItem('user'))
            },
            goItem(val) {
                this.$router.push({
                    name: val.name
                })
            },
            init() {
                setTheme("default"); // 初始化未默认主题
            },
            // 更改为默认主题
            defaultTheme() {
                setTheme("default");
            },
            // 更改为暗黑主题
            dark() {
                setTheme("dark");
            },
            // 更改为自定义主题
            custom() {
                let newColor = {
                    r: 12,
                    g: 33,
                    b: 234,
                };
                let newPrimaryColor = `${newColor.r},${newColor.g},${newColor.b}`;
                localStorage.setItem("primaryColor", newPrimaryColor); // 将新的主题色存入本地
                setTheme();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import url("./userInfo.less");
</style>
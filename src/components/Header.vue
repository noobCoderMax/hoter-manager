<template lang="">
    <div>
        <header style="position: relative;">
            <router-link to="/index" class="logo">
                <img src="../assets/images/logo.png" alt="Logo">
            </router-link>

            <nav style="margin-left:30px;" v-for="(item, index) in routers" :key="item.id">
                <router-link :to="item.link" class="rw">{{item.title}}</router-link>
            </nav>
            <div class="x"></div>
            <div class="kefu" style="color: deepskyblue;">
                <i class="el-icon-phone"></i>在线客服
                <strong
                    style="color: rgb(66, 67, 138);font-size: 20px;margin-top: 10px;font-size: 24px">1914275425</strong>
            </div>
        </header>
        <router-view></router-view>

    </div>
</template>
<script>
    import '@/assets/css/vBase.css'
    import '@/assets/css/demo.css'
    export default {
        data() {
            return {
                routers: [{
                        id: 1,
                        title: '首页',
                        link: '/index'
                    },
                    {
                        id: 2,
                        title: '酒店',
                        link: '/peopertylistening'
                    }, {
                        id: 3,
                        title: '画廊',
                        link: '/gallery'
                    }, {
                        id: 4,
                        title: '联系我们',
                        link: '/contact'
                    }, {
                        id: 5,
                        title: '疫情信息',
                        link: '/epidemicInfo'
                    }, {
                        id: 6,
                        title: '个人信息',
                        link: '/userinfo'
                    }, {
                        id: 7,
                        title: '地图服务',
                        link: '/map'
                    }
                ]
            }
        },
    }
</script>

<style scoped lang="less">
    header {
        height: 120px;
        display: flex;
        justify-content: start;
        background-color: #fff;
        min-width: 100vh;
    }

    header .logo {
        width: 370px;
        height: 120px;
    }

    header .logo img {
        width: 180px;
        height: 70px;
        margin: 3vh 20vh 0;
    }

    header nav {
        display: flex;
        justify-content: start;
    }

    header nav .rw {
        width: 100px;
        text-align: center;
        line-height: 70px;
        margin: auto 2vh;
        font-size: 20px;
    }

    header nav .rw:hover {
        border-bottom: 6px solid #ecf1f9;
    }

    .kefu {
        position: absolute;
        right: 60px;
        top: 4px;
        font-size: 24px;
        line-height: 120px;
        text-align: center;
        margin-left: 6vh;
    }

    .x {
        position: absolute;
        right: 330px;
        top: 4px;
        margin: 20px 10px;
        background-color: #dcdfe6;
        border: 1px solid #dcdfe6;
        height: 80px;
    }

    .toUser {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .toUser .content {
        width: 100px;
        text-align: center;
        line-height: 70px;
        margin: auto 2vh;
        font-size: 20px;
    }
</style>
<template>
    <div class="total">
        <footer>
            <div class="flexTotal">
                <div class="flex">
                    <div><img style="width: 200px;height: 80px;margin-top: 60px;" src="../assets/images/footer-logo.png"
                            alt="Footer Logo"></div>
                    <div>
                        <p style="color: white;font-size: 20px;margin-top: 30px;">Lorem ipsum dolor sit amet,
                            consectetur adipiscing
                            elit, sed do eiusmod tempor
                            incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi</p>
                    </div>
                    <ul class="content" style="display: block;">
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                    </ul>
                </div>

                <div class="flex">
                    <div class="title">最新消息</div>
                    <ul class="content" style="display: block;">
                        <li style="cursor: pointer;" @click="goWeather">温馨提示</li>
                        <li style="cursor: pointer;" @click="goWeather">天气预报</li>
                    </ul>
                </div>
                <div class="flex">
                    <div class="title">联系我们</div>
                    <ul class="content" style="display: block;">
                        <li><i class="el-icon-location-information"></i> 4 Tottenham Road, London, England.</li>
                        <li><i class="
                            el-icon-mobile-phone
                            "></i> (123) 45678910</li>
                        <li><i class="el-icon-message"></i> huycoi.art@gmail.com</li>
                        <li><i class="
                            el-icon-phone
                            "></i> +84 962 216 601</li>
                        <li> <i class="el-icon-time"></i> Mon - Sat: 9:00 - 18:00</li>
                    </ul>
                </div>
            </div>

        </footer>

        <div style="width: 100%;height: 80px;background-color: #272727;">
            <div class="buttom">
                <div class="div">
                    <div>
                        Copyright &copy; 2022.Company name All rights
                        reserved.
                    </div>

                    <div style="display: flex;justify-content: end">
                        <div class="txt">Terms & Conditions</div>
                        <div class="txt">Pricing</div>
                        <div class="txt">Contactdiv</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'Footer',
        data() {
            return {

            }
        },
        methods: {
            goWeather() {
                this.$router.push({
                    name: 'epidemicInfo'
                })
            }
        },
    }
</script>
<style scoped>
    .total {
        position: relative;
        background: rgba(0, 0, 0, 0.6);
    }

    footer {
        height: 600px;
        width: 100%;
        height: 500px;
        background-image: url('../assets/images/footer-bg.png');
        background-size: cover;
    }

    .flexTotal {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin: 20px 200px;
    }

    .flexTotal div {
        flex: 1;
    }

    .flex {
        display: flex;
        flex-direction: column;
        justify-content: start
    }

    .flex .title {
        flex: 1;
        color: white;
        font-size: 25px;
        font-family: fantasy;
        margin: 60px 40px 10px;
    }


    .flex .content {
        flex: 3;
        margin: 0px 40px 20px;
        color: #879191;
        font-size: 16px;
    }



    .flex ul li {
        display: block;
        margin: 10px auto;
    }

    .buttom {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
    }


    .buttom .div {
        margin: 30px 180px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        color: #879191;
        font-size: 20px;

    }

    .txt {
        color: #879191;
        margin-left: 30px;
    }

    .txt:hover {
        color: white;
        cursor: pointer;
    }
</style>
<template lang="">
    <div>
        <div class="posImg">
            <img src="http://img.zx123.cn/Resources/zx123cn/uploadfile/2017/0602/20170602161844_36827.jpg" class="img"
                alt="backGroundImg">
        </div>

        <div style="margin: 60px 200px;display: flex;justify-content: space-between;">
            <div
                style="flex: 2;display: flex;justify-content:space-between;flex-direction: row;flex-direction: column;">
                <h3 style="font-size: 40px;font-weight: 700;">联系我们</h3>
                <div style="font-size: 20px
                ;margin-top: 20px;">
                    <div style="padding: 10px;">
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sed perspiciatis unde natus error sit voluptatem accusantium
                            doloremque
                            laudantium,
                            totam
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            <br>vitae.</p>
                    </div>
                </div>
                <div class="inputs">
                    <el-input v-model="contactform.nickname" prefix-icon="el-icon-user-solid" placeholder="您的姓名">
                    </el-input>
                    <el-input v-model="contactform.email" prefix-icon="el-icon-message" placeholder="您的邮箱">
                    </el-input>
                    <el-input v-model="contactform.phone" prefix-icon="el-icon-mobile-phone" placeholder="您的电话号码">
                    </el-input>


                    <el-date-picker v-model="contactform.time" type="datetime" placeholder="选择日期"
                        value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>



                    <el-select v-model="contactform.theme" slot="prepend" placeholder="请选择留言主题">
                        <el-option label="建议" value="建议"></el-option>
                        <el-option label="举报" value="举报"></el-option>
                        <el-option label="反馈" value="反馈"></el-option>
                        <el-option label="赞扬" value="赞扬"></el-option>
                    </el-select>


                </div>
                <div style="margin:20px 50px;">
                    <el-input prefix-icon="
                    el-icon-s-comment" type="textarea" v-model="contactform.message" :rows="2" placeholder="详细留言">
                    </el-input>
                </div>
                <div style="display: flex;justify-content: end;margin-right: 50px;">
                    <el-button type="warning" style="width: 100px;margin-left: 40px;" round @click="resetForm">重置
                    </el-button>
                    <el-button type="primary" style="width: 100px;margin-left: 40px;" round @click="sendMessage">留言
                    </el-button>
                </div>



            </div>
            <div style="flex: 1;">
                <div class="icon">
                    <i class="el-icon-location"></i></i></div>
                邮箱地址
                <p style="margin: 10px 20px;">95 Amphitheatre Parkway Mountain View CA, United States</p>
            </div>
            <div style="flex: 1;">
                <div class="icon">
                    <i class="
                    el-icon-phone-outline"></i></div>
                联系信息
                <div style="margin:10px 20px;">
                    <div style="margin-top: 10px;">手机: (123) 45678910</div>
                    <div style="margin-top: 10px;">邮箱: company@domain.com</div>
                    <div style="margin-top: 10px;">电话: +84 962 216 601</div>
                </div>
            </div>


        </div>



        <Footer />
    </div>
</template>
<script>
    import {
        contact
    } from '../../../assets/api/user.js'
    import Footer from '@/components/Footer.vue'
    export default {
        name: "Contact",
        comments: {
            footer: Footer
        },
        data() {
            return {
                contactform: {
                    nickname: '',
                    message: '',
                    email: '',
                    phone: '',
                    time: '',
                    theme: '',
                    type: 0
                }
            }
        },
        mounted() {

        },
        methods: {
            sendMessage() {
                console.log(this.contactform);
                contact(this.contactform).then(res => {
                    if (res.flag) {
                        this.$message.success('留言成功！感谢您的反馈！')
                    }
                }).catch(err => {
                    this.$message.error('留言失败！')
                })
            },
            resetForm() {
                this.contactform.nickname = '',
                    this.contactform.message = '',
                    this.contactform.email = '',
                    this.contactform.phone = '',
                    this.contactform.time = '',
                    this.contactform.theme = '',
                    this.contactform.type = 0
            }

        },
    }
</script>
<style lang="less" scoped>
    @import url('./contact.less');
</style>
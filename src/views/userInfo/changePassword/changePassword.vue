<template lang="">
    <div class="right">
        <header>
            <div class="it"></div>
            <strong v-bind="$attrs">修改密码</strong>
        </header>

        <div class="psdForm">
            <el-form ref="pswForm" :model="pswForm" label-width="80px">
                <el-form-item label="用户ID:">
                    <strong>{{pswForm.id}}</strong>
                </el-form-item>
                <el-form-item label="用户邮箱:">
                    <strong>{{pswForm.email}}</strong>
                </el-form-item>
                <el-form-item label="验证码:">
                    <el-input v-model="pswForm.code"></el-input>
                </el-form-item>
                <el-form-item label="新密码:">
                    <el-input v-model="pswForm.password"></el-input>
                </el-form-item>

            </el-form>
            <div class="btn1">
                <el-button type="primary" @click="changePsd">修改密码</el-button>
            </div>
            <div class="btn">
                <el-button type="primary" @click="getCode">获取验证码</el-button>
            </div>
        </div>

    </div>
</template>
<script>
    import {
        changePassword,
        getActivationCode
    } from '../../../assets/api/user.js'
    export default {
        name: 'changePassword',
        data() {
            return {
                pswForm: {
                    id: '',
                    email: '',
                    code: '',
                    password: ''
                },
                emailForm: {
                    email: ''
                }
            }
        },
        created() {
            this.initUser()
        },
        methods: {
            initUser() {
                let data = JSON.parse(localStorage.getItem('user'))
                this.pswForm.id = data.id
                this.pswForm.email = data.email
                this.emailForm.email = data.email
            },
            changePsd() {
                if (this.pswForm.password == '' || this.pswForm.code == '') {
                    this.$message.error("密码或验证码不可为空！")
                    return
                }
                changePassword(this.pswForm).then(res => {
                    if (res.flag) {
                        this.$message.success("修改成功！")
                        this.$router.replace({
                            name: "login"
                        })
                    }
                }).catch(err => {
                    this.$message.error("修改失败！")
                })
            },
            getCode() {
                getActivationCode(this.emailForm).then(res => {
                    if (res.flag) {
                        this.$message.success("邮箱验证码发送成功，请您注意查看！")
                    }
                }).catch(err => {
                    this.$message.error("验证码发送失败！")
                })
            }
        },
    }
</script>
<style lang="less" scoped>
    @import url('./changePassword.less');
</style>
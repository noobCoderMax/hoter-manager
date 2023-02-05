<template lang="">
    <div class="right">
        <header>
            <div class="it"></div>
            <strong>修改信息</strong>
        </header>

        <div class="form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

                <el-form-item label="昵称:" prop="nickname">
                    <el-input v-model="ruleForm.nickname"></el-input>
                </el-form-item>

                <el-form-item label="用户ID:" prop="id">
                    <p :ID="ruleForm.ID">{{ruleForm.id}}</p>
                </el-form-item>

                <el-form-item label="性别:" prop="region">
                    <el-select v-model="ruleForm.gender" placeholder="请选择性别">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="0"></el-option>
                        <el-option label="保密" value="-1"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="邮箱:" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>

                <el-form-item label="手机号码:" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>

                <el-form-item label="我的签名：" prop="sign">
                    <el-input type="textarea" v-model="ruleForm.sign" placeholder="设置您的签名"></el-input>
                </el-form-item>


                <el-form-item label="出生日期：" prop="date">
                    <el-date-picker v-model="ruleForm.birth" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
                    </el-date-picker>
                </el-form-item>

                <el-divider></el-divider>

                <el-form-item>
                    <el-button type="primary" @click="submitForm">保存</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>
<script>
    import {
        updateUserInfo,
        getUserById
    } from '../../../assets/api/user.js'

    export default {
        data() {
            return {
                ruleForm: {
                    nickname: '',
                    id: '',
                    gender: -1,
                    sign: '',
                    birth: '',
                    phone: '',
                    email: '',
                },
                userID: '',
                rules: {
                    name: [{
                            required: true,
                            message: '请输入昵称',
                            trigger: 'blur'
                        },
                        {
                            min: 5,
                            max: 10,
                            message: '长度在 5 至 10 个字符内',
                            trigger: 'blur'
                        }
                    ],
                    phoneNumber: [{
                            required: true,
                            messages: '请输入手机号码',
                            trigger: 'blur'
                        },
                        {
                            min: 11,
                            max: 11,
                            message: '长度为 11 个数字',
                            trigger: 'blur'
                        }
                    ],
                    email: [{
                        required: true,
                        message: '请填写个人邮箱',
                        trigger: 'blur'
                    }],
                    gender: [{
                        required: true,
                        message: '性别',
                        trigger: 'change'
                    }],
                    date: [{
                        type: 'date',
                        required: false,
                        message: '请选择日期',
                        trigger: 'change'
                    }],
                    desc: [{
                        required: false,
                        message: '请填写个人签名',
                        trigger: 'blur'
                    }]
                }
            }
        },
        created() {
            this.initUserInfo()
        },
        methods: {
            initUserInfo() {
                this.userID = JSON.parse(localStorage.getItem('user')).id
                this.getUser()
            },
            submitForm() {
                if (this.ruleForm.email === '') {
                    this.$message.warning("邮箱不可以为空！")
                    return
                } else {
                    console.log(this.ruleForm);
                    updateUserInfo(this.ruleForm).then(res => {
                        if (res.flag) {
                            this.$message.success("修改成功！")
                            this.getUser()
                        }
                    }).catch(err => {
                        this.$message.error("修改失败！")
                    })
                }
            },
            resetForm(formName) {
                this.ruleForm.sign = ''
                this.ruleForm.phone = ''
                this.ruleForm.email = ''
                this.ruleForm.birth = ''
            },
            getUser() {
                getUserById(this.userID).then(res => {
                    if (res.flag) {


                        this.ruleForm = res.data
                        if (this.ruleForm.gender == '1') {
                            this.ruleForm.gender = '男'
                        } else if (this.ruleForm.gender == '0') {
                            this.ruleForm.gender = '女'
                        } else {
                            this.ruleForm.gender = '保密'
                        }
                        localStorage.setItem('user', JSON.stringify(this.ruleForm))
                    }
                })
            }
        },
    }
</script>
<style lang="less" scoped>
    @import url('./changeinfo.less');
</style>
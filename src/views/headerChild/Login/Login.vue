<template>
    <div class="container">
        <header class="header">
            <h1>欢迎您使用酒店预约系统</span></h1>
        </header>
        <section>
            <div id="container_demo">
                <a class="hiddenanchor" id="toregister"></a>
                <a class="hiddenanchor" id="tologin"></a>
                <div id="wrapper">
                    <div id="login" class="animate form">
                        <form id="login_form">
                            <h1>登录</h1>
                            <p>
                                <label for="username" class="uname" data-icon="u"> 邮箱 </label>
                                <input id="login_email" name="email" required="required" type="email"
                                    v-model="loginForm.email" placeholder="myusername or mymail@mail.com" />
                            </p>
                            <p>
                                <label for="password" class="youpasswd" data-icon="p"> 密码 </label>
                                <input id="login_password" name="password" required="required" type="password"
                                    v-model="loginForm.password" placeholder="password" />
                            </p>
                            <p class="keeplogin">
                                <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" />
                                <label for="loginkeeping">记住密码</label>
                            </p>
                            <p class="login button">
                                <el-button @click="resetLoginForm" type="primary">重置</el-button>
                                <el-button type="primary" @click="toLogin">登录</el-button>
                            </p>
                            <p class="change_link">
                                没有账号 ?
                                <a href="#toregister" class="toRegister">注册</a>
                            </p>
                        </form>
                    </div>

                    <div id="register" class="animate form">
                        <form id="signup_form">
                            <h1> 注册 </h1>
                            <p>
                                <label for="usernamesignup" class="uname" data-icon="u">用户名</label>
                                <input id="usernamesignup" name="usernamesignup" required="required" type="text"
                                    v-model="registerForm.nickname" placeholder="用户名" />
                            </p>
                            <p>
                                <label for="emailsignup" class="youmail" data-icon="e"> 邮箱</label>
                                <input ref="email" id="emailsignup" name="emailsignup" required="required" type="email"
                                    v-model="registerForm.email" placeholder="xxx@xxx.com" />
                            </p>
                            <p>
                                <label for="passwordsignup" class="youpasswd" data-icon="p">密码 </label>
                                <input id="passwordsignup" name="passwordsignup" required="required" type="password"
                                    v-model="registerForm.password" placeholder="密码" />
                            </p>
                            <p>
                                <label for="passwordsignup_confirm" class="youpasswd" data-icon="p">确认密码 </label>
                                <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required"
                                    v-model="checkPassword" type="password" placeholder="确认密码" />
                            </p>
                            <p>
                                <label for="passwordsignup_confirm" class="youpasswd" data-icon="p">邮箱验证码 </label>
                                <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required"
                                    v-model="registerForm.code" placeholder="邮箱确认码" />
                            </p>
                            <p class="signin button">
                                <el-button @click="resetRegisterForm" type="primary">重置</el-button>
                                <el-button @click="toRegister" type="primary">注册</el-button>
                                <el-button @click="getEmailCheck" type="primary">获取邮箱验证码</el-button>
                            </p>
                            <p class="change_link">
                                已有账号 ?
                                <a href="#tologin" class="to_register"> 登录 </a>
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import "@/assets/css/demo.css"
    import "@/assets/css/style.css"
    import "@/assets/css/animate-custom.css"
    import Cookies from 'js-cookie'

    import {
        register,
        login,
        getActivationCode
    } from '../../../assets/api/user.js'
    let t = null
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                },
                registerForm: {
                    nickname: '',
                    email: '',
                    password: '',
                    code: ''
                },
                checkPassword: '',
                emailCheck: ''

            }
        },
        beforeDestroy() {

        },
        methods: {
            toLogin() {
                login(this.loginForm).then(res => {
                    if (res.flag) {

                        let value = res.data
                        this.keepValue(value)

                        this.$message.success("登录成功！")
                        this.$router.replace({
                            name: 'index'
                        })
                    } else {
                        this.$message.error("请您重新检查邮箱或密码！")
                        return
                    }
                }).catch(err => {
                    this.$message.error("请您重新检查邮箱或密码！")
                })

            },
            keepValue(value) {
                let key = 'user'
                localStorage.setItem(key, JSON.stringify(value))
            },
            toRegister() {
                console.log(this.registerForm);
                let emailRole = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                if (this.registerForm.nickname == '' || this.registerForm.email == '' || this.registerForm.password ==
                    '' || this.registerForm.code == '') {
                    this.$message.error("信息不能为空")
                    return
                }

                let flag = emailRole.test(this.registerForm.email);
                if (this.checkPassword !== this.registerForm.password) {
                    this.$message.error("请检查确认密码，确保输入一致！")
                    return
                } else if (flag) {
                    console.log(this.registerForm);
                    register(this.registerForm).then(res => {
                        if (res.flag) {
                            this.$message.success("注册成功！")
                            this.resetRegisterForm()
                        }
                    }).catch(err => {
                        this.$message.error("服务器出错了！")
                    })

                } else if (!flag) {
                    this.$message.error("邮箱地址不合法！")
                    return
                }

            },
            resetRegisterForm() {
                this.registerForm.nickname = ''
                this.registerForm.email = ''
                this.registerForm.password = ''
                this.checkPassword = ''
            },
            resetLoginForm() {
                this.loginForm.email = ''
                this.loginForm.password = ''
            },
            getEmailCheck() {
                console.log(this.registerForm);
                getActivationCode(this.registerForm).then(res => {
                    if (res.flag) {
                        this.$message.success("发送验证码成功，请注意查看！")
                    }
                }).catch(err => {
                    this.$message.error("发送验证码失败！")
                })
            }


        },
    }
</script>
<style lang="less" sc>
    @import url('./login.less');
</style>
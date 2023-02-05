<template lang="">
    <div class="right">
        <header>
            <div class="it"></div>
            <strong v-bind="$attrs">我的头像</strong>
        </header>

        <div class="imgBox">
            <el-upload class="avatar-uploader" ref='upload' action="http://localhost:8089/user/avator" :limit="1"
                :show-file-list="false" :on-preview="handlePictureCardPreview" :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload" :on-error="imgUploadError" :on-change="handleEditChange">
                <img v-if="userAvator.avator" :src="userAvator.avator" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>

            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            <div class="line"></div>
            <img :src="userData.avator" alt="用户头像">
        </div>

        <el-divider content-position="center">头像只支持JPG格式，且大小不能超过2MB</el-divider>
        <div class="btn">
            <el-button type="primary" @click="saveAvator">保存</el-button>
        </div>
    </div>
</template>
<script>
    import {
        updateAvator,
        updateUserInfo,
        getUserById
    } from '../../../assets/api/user.js'

    export default {
        data() {
            return {
                userAvator: {
                    avator: '',
                    id: ''
                },
                dialogVisible: false,
                hideUploadEdit: false,
                dialogImageUrl: '',
                disabled: false,
                userData: {}
            }
        },
        inheritAttrs: false,
        created() {
            this.initUserInfo()
        },

        methods: {
            initUserInfo() {
                this.userData = JSON.parse(localStorage.getItem('user'))
                console.log(this.userData);
                this.userAvator.id = this.userData.id
            },
            againInit() {
                getUserById(this.userData.id).then(res => {
                    if (res.flag) {
                        this.userData = res.data
                        this.keepUser(res.data)
                    }
                })
            },
            keepUser(data) {
                localStorage.setItem('user', JSON.stringify(data))
            },
            saveAvator() {
                console.log(this.userAvator);
                updateUserInfo(this.userAvator).then(res => {
                    if (res.flag) {
                        this.$message.success("修改头像成功！")
                        this.againInit()
                    }
                }).catch(err => {
                    this.$message.error("修改头像失败！")
                })
            },

            handleEditChange(file, fileList) {
                let vm = this
                vm.hideUploadEdit = fileList.length >= this.imgLimit
            },

            handlePictureCardPreview(file) {
                //预览图片时调用
                this.editForm.uploadingurl = file.url;
                this.dialogVisible = true;
            },

            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            beforeAvatarUpload(file) {
                //文件上传之前调用做一些拦截限制
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 20;

                if (!isJPG) {
                    this.$message.error('上传广告图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error("上传图片大小不能超过 2MB!");
                }
                return isJPG && isLt2M;
            },
            handleAvatarSuccess(res, file) {
                this.userAvator.avator = res.data
                //图片上传成功
            },
            imgUploadError(err, file, fileList) {
                console.log(file);
                //图片上传失败调用
                this.$message.error("上传图片失败!");
            },
        },
    }
</script>


<style lang="less" scoped>
    @import url('./avatar.less');
</style>
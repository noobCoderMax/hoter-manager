<template lang="">
    <div class="queryBox">
        <div class="littleBox">查找酒店</div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="100px">
            <el-form-item>
                <el-select v-model="formInline.city" placeholder="城市">
                    <el-option label="北京" value="北京"></el-option>
                    <el-option label="上海" value="上海"></el-option>
                    <el-option label="西安" value="西安"></el-option>
                    <el-option label="广州" value="广州"></el-option>
                    <el-option label="成都" value="成都"></el-option>
                    <el-option label="杭州" value="杭州"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-select v-model="formInline.businessDistrict" placeholder="商圈">
                    <el-option label="Brickell" value="Brickell"></el-option>
                    <el-option label="brickyard" value="brickyard"></el-option>
                    <el-option label="bronx" value="bronx"></el-option>
                    <el-option label="brooklyn" value="brooklyn"></el-option>
                    <el-option label="downtown" value="downtown"></el-option>
                    <el-option label="englewood" value="englewood"></el-option>
                    <el-option label="hermosa" value="hermosa"></el-option>
                    <el-option label="hollywood" value="hollywood"></el-option>
                    <el-option label="lincoln-park" value="lincoln-park"></el-option>
                    <el-option label="manhattan" value="manhattan"></el-option>
                    <el-option label="midtown" value="midtown"></el-option>
                    <el-option label="queens" value="queens"></el-option>
                    <el-option label="westwood" value="westwood"></el-option>
                    <el-option label="wynwood" value="wynwood"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-select v-model="formInline.star" placeholder="星级">
                    <el-option label="一星" value="一星"></el-option>
                    <el-option label="二星" value="二星"></el-option>
                    <el-option label="三星" value="三星"></el-option>
                    <el-option label="四星" value="四星"></el-option>
                    <el-option label="五星" value="五星"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-select v-model="formInline.brand" placeholder="品牌">
                    <el-option label="Apartment" value="Apartment"></el-option>
                    <el-option label="Condo" value="Condo"></el-option>
                    <el-option label="farm" value="farm"></el-option>
                    <el-option label="loft" value="loft"></el-option>
                    <el-option label="lot" value="lot"></el-option>
                    <el-option label="multi-family-home" value="multi-family-home"></el-option>
                    <el-option label="single-family-home" value="single-family-home"></el-option>
                    <el-option label="townhouse" value="townhouse"></el-option>
                    <el-option label="villa" value="villa"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-select v-model="formInline.lowPrice" placeholder="最低价格">
                    <el-option label="￥100" value="100"></el-option>
                    <el-option label="￥200" value="200"></el-option>
                    <el-option label="￥500" value="500"></el-option>
                    <el-option label="￥1000" value="1000"></el-option>
                    <el-option label="￥1500" value="1500"></el-option>
                    <el-option label="￥2000" value="2000"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-select v-model="formInline.highPrice" placeholder="最高价格">
                    <el-option label="￥10000" value="10000"></el-option>
                    <el-option label="￥9000" value="9000"></el-option>
                    <el-option label="￥8000" value="8000"></el-option>
                    <el-option label="￥5000" value="5000"></el-option>
                    <el-option label="￥2500" value="2500"></el-option>
                    <el-option label="￥2000" value="2000"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item style="margin-left:41vh;">
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>
<script>
    export default {
        name: 'Search'
    }
</script>
<style lang="less" scoped>
    .queryBox {
        position: relative;
        background-color: #fff;
        padding: 40px 50vh 20px;
    }

    .queryBox .littleBox {
        background-color: #fff;
        z-index: 999;
        width: 200px;
        height: 90px;
        position: absolute;
        top: -90px;
        left: 482px;
        font-size: 32px;
        font-weight: bolder;
        line-height: 90px;
        text-align: center;
    }

    .figure {
        position: relative;
    }

    .tag {
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: #f0a34a;
        color: white;
        border-radius: 10px;
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: block;
    }
</style>
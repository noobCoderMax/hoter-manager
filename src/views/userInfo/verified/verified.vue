<template lang="">
    <div class="right">
        <header>
            <div class="it"></div>
            <strong v-bind="$attrs">实名认证</strong>
        </header>

    </div>
</template>
<script>
    export default {
        inheritAttrs: false,
        name: 'verified',
        props: ['toChild'],
        watch: {
            toChild: function (val) {
                console.log(val);
            }
        }
    }
</script>


<style lang="less" scoped>
    @import url('./verified.less');
</style>
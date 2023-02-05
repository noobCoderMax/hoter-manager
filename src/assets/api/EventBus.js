import Vue from 'vue'

// 1
// 组件之前传参
// export const EventBus = new Vue()

// 发送方
// EventBus.$emit(key,value)
// 接收方
// EventBus.$on(key,res=>{res处理})



//2
const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})
// 在main.js注册
// this.$bus.$emit(key,value)
// this.$bus.$on(key,res=>{res})
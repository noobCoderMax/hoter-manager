import echarts from "echarts"

const install = function (Vue) {
    Object.defineProperties(Vue.protoType, {
        $charts: {
            get() {
                return {
                    chinaMap(id) {
                        this.chart = echarts.init(document.getElementById(id))

                        var option = {
                            series: [{
                                    name: "省",
                                    type: "map",
                                    map: "china",
                                    roam: false,
                                    zoom: 1.2,
                                    label: {
                                        normal: {
                                            show: true,
                                            textStyle: {
                                                fontSize: 8
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            areaColor: 'rgba(0,255,236,0)',
                                            borderColor: 'raba(0,0,0,0.2)'
                                        },
                                        emphasis: {
                                            areaCo1or: 'rgba(255,180,8,0.8)',
                                            shadowoffsetx: 0,
                                            shadowoffsetY: 0,
                                            shadowBlur: 20,
                                            borderWidth: 0,
                                            shadowColor: 'rgba(0,0,0,0.5)'
                                        }
                                    }
                                }

                            ]
                        }


                        this.chart.setOption(option)
                    }
                }
            }
        }
    })
}

export default install
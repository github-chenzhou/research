<template>
  <section class="index__page page">
  	<div class="charts">
      <section id="charts_1" class="chart__1">
  	  </section>

      <section id="charts_2" class="chart__1">
  	  </section>

      <section id="charts_3" class="chart__1">
  	  </section>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

export default {
  name: "research-home",
  data() {
    return {
      index: 0
    };
  },
  components: {},
  computed: {},
  watch: {},
  filters: {
    formatTime(time) {}
  },
  mixins: [],
  methods: {
    /*
      * @method 图表绘制
      * @param 
      */
    renderCharts(data) {
      // 基于准备好的dom，初始化echarts实例
      let chart = this.$echarts.init(document.getElementById("charts_1"));

      // 绘制图表
      chart.setOption({
        title: { text: "科研2018年立项（按项目级别）", left: "center" },
        // tooltip: {},
        xAxis: {
          data: [
            "采购部",
            "业务部",
            "行政部",
            "安保部",
            "测试部",
            "研发部",
            "经理部"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });

      this.renderChart2();
      this.renderChart3();
    },

    renderChart2(data) {
      let chart = this.$echarts.init(document.getElementById("charts_2"));

      // 绘制图表
      chart.setOption({
        title: { text: "科研2018年立项（按项目级别）", left: "center" },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: [
          {
            type: "category",
            data: [
              "采购部",
              "业务部",
              "行政部",
              "安保部",
              "测试部",
              "研发部",
              "经理部"
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      });
    },

    renderChart3(data) {
      let chart = this.$echarts.init(document.getElementById("charts_3"));

      // 绘制图表
      chart.setOption({
        title: { text: "科研2018年立项（按项目级别）", left: "center" },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: [
          {
            type: "category",
            data: [
              "采购部",
              "业务部",
              "行政部",
              "安保部",
              "测试部",
              "研发部",
              "经理部"
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      });
    },

    /*
      * @method 返回
      * @param
      */
    handleBack() {
      this.$router.back();
    }
  },
  created() {
    // this.renderCharts();
  },
  mounted() {
    this.renderCharts();
  },
  beforeDestroy() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.charts {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.chart__1 {
  margin: .4rem auto;
  width: 100vw;
  height: 45vh;
}
</style>

<template>
  <section class="index__page page">
  	<div class="charts">
      正在研发中
    </div>
  </section>
</template>

<script>

export default {
  name: "research-approval",
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

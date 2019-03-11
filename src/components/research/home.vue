<template>
  <section class="index__page page">
  	<div class="page__inner">
      <section id="charts_1" class="chart__1">
  	  </section>
      <section id="charts_2" class="chart__1">
  	  </section>
      <section id="charts_3" class="chart__1">
  	  </section>
      <section id="charts_4" class="chart__1">
      </section>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import request from '@/utils/request.js'
import api from '@/utils/api.js'
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

export default {
  name: "research-home",
  data() {
    return {
      // 科研经费
      feeList: null,
      // 立项项目
      prodjectList: null,
      // 成果
      productList: null,
      // 标准项目
      standardList: null,
    };
  },
  components: {},
  computed: {},
  watch: {},
  filters: {
  },
  mixins: [],
  methods: {

    /*
     * @method 图标数据
     * @param 
     */
    getData() {
      let url = api.COMMON_ACTION;
      let params = { actionType: 'statistic' };

      request.get(url, params).
      then((res)=>{
        this.feeList = this.formatData(res.feeList && res.feeList[0]);
        this.prodjectList = this.formatData(res.prodjectList && res.prodjectList[0]);
        this.productList = this.formatData(res.productList && res.productList[0]);
        this.standardList = this.formatData(res.standardList && res.standardList[0]);
      }).
      then(()=>{
        this.renderCharts();
      })
    },

    /**
     * @method 格式化成图标数据
     * @param 
     */
    formatData(data) {
      let result = null;

      if(data) {
        result = {
          labels: Object.keys(data),
          values: Object.values(data).map((value)=>{ return +value; })
        }
      }

      return result;
    },

    /*
      * @method 图表绘制
      * @param 
      */
    renderCharts() {
      this.renderChart1(this.feeList);
      this.renderChart2(this.prodjectList);
      this.renderChart3(this.productList);
      this.renderChart4(this.standardList);
    },

    renderChart1(data) {
      let chart = this.$echarts.init(document.getElementById("charts_1"));

      // 绘制图表
      chart.setOption({
        title: { text: "科研经费（按项目性质）", left: "center" },
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
            data: data.labels,
            // X轴文字倾斜显示
            axisLabel:{
              interval: 0,
              rotate:'30'
            },
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
            data: data.values
          }
        ]
      });
    },

    renderChart2(data) {
      let chart = this.$echarts.init(document.getElementById("charts_2"));

      // 绘制图表
      chart.setOption({
        title: { text: "立项项目（按项目级别）", left: "center" },
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
            data: data.labels,
            // X轴文字倾斜显示
            axisLabel:{
              interval: 0,
              rotate:'30'
            },
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
            data: data.values
          }
        ]
      });
    },

    renderChart3(data) {
      let chart = this.$echarts.init(document.getElementById("charts_3"));

      // 绘制图表
      chart.setOption({
        title: { text: "成果（按成果类型）", left: "center" },
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
            data: data.labels,
            // X轴文字倾斜显示
            axisLabel:{
              interval: 0,
              rotate:'30'
            },
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
            data: data.values
          }
        ]
      });
    },

    renderChart4(data) {
      let chart = this.$echarts.init(document.getElementById("charts_4"));

      // 绘制图表
      chart.setOption({
        title: { text: "标准项目（按项目标准）", left: "center" },
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
            data: data.labels,
            // X轴文字倾斜显示
            axisLabel:{
              interval: 0,
              rotate:'30'
            },
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
            data: data.values
          }
        ]
      });
    },
    
  },
  created() {
    document.title = '科研系统首页';
  },
  mounted() {
    // this.renderCharts();
    this.getData();
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
  margin: .4rem auto 0.6rem;
  width: 100vw;
  height: 45vh;
}
</style>

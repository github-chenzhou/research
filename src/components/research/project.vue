<template>
  <section class="project__page page">
    <!-- 列表 -->
    <section class="list__wrap page__inner">
      <ul class="page__list">
        <li class="list__item">
          <div class="item__box">
            <label class="box__left f16">项目编号</label>
            <h3 class="box__right c333 f16"><!-- 我的立项测试数据 -->{{ type === 1 ? '我的项目': '我的成果' }}</h3>
          </div>
        </li>
        <li class="list__item">
          <div class="item__box">
            <label class="box__left f16">项目名称</label>
            <h3 class="box__right c333 f16">{{ project.title }}</h3>
          </div>
        </li>
        <!-- 项目属性 -->
        <li class="list__item" v-for="(value, key) in project.content">
          <div class="item__box">
            <label class="box__left f16">{{ key }}</label>
            <h3 class="box__right c333 f16">{{ value }}</h3>
          </div>
        </li>
      </ul>
    </section>

  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import request from '@/utils/request.js'
import api from '@/utils/api.js'


export default {
  name: "research-project",
  data() {
    return {
      id: 0,
      project2: {
        'content': {
          '[获奖作者]': '金海娜', 
          '[所属科室]': '外国语学院', 
          '[获奖级别]': '其它', 
          '[获奖等级]': '其他奖', 
          '[获奖日期]': '2017-05-27', 
          '[发证机关]': '文化部', 
          '[审核状态]': '学校通过' 
        },
        'title': '图景与前景：2016中外影视互译合作研究报告',
        'date': '2018-08-28',
        'type': '研究报告',
        'fee': '100万',
        'principal': '负责人',
        'productid': 'yey234782348923418934234'
      }
    };
  },
  components: {},
  computed: {
    ...mapGetters([
      'user',
      'project',
    ])
  },
  watch: {},
  filters: {
  },
  mixins: [],
  methods: {
    /*
     * @method 加载数据
     * @param
     */
    getData(id) {
      let url = api.GET_PROJECT;
      let params = { userid: '', actionType: 'login' };

      request.get(url, params).
      then((res)=>{
        this.project = res;
      })
    },
  },
  created() {
    let id = this.$route.params.id;
    let type = +this.$route.params.type;

    console.info(id, type);
  },
  mounted() {
    document.title = '项目详情';
  },
  beforeDestroy() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .list__wrap {
    width: 100vw;
    padding: .4rem .266667rem;
    min-height: calc(100vh - 1.066667rem);
    background: #fff;
  }

  .item__box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    padding: 0.133333rem 0 0.133333rem 0;
    min-height: 1.2rem;
    border-bottom: 1px solid #e5e5e5;
  }

  .box__left {
    min-width: 80px;
    text-align: left;
  }

  .box__right {
    text-align: right;
  }

</style>

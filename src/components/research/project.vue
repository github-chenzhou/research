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

    <!-- 项目详情 -->
    <detail-cmp :product-id="id" :module="module"></detail-cmp>

  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import detailCmp from '@/components/research/approval-detail.vue'


export default {
  name: "research-project",
  data() {
    return {
      id: '',
      module: '',
      type: 1
    };
  },
  components: { detailCmp },
  computed: {
    ...mapGetters([
      'user',
      'project',
    ])
  },
  watch: {
  },
  filters: {
  },
  mixins: [],
  methods: {
    /*
     * @method 加载数据
     * @param
     */
    init(type) {
      if(type === 1) {
        this.module = this.project && this.project.content && this.project.content['[成果类型]'];
      } else {
        this.module = this.project && this.project.content && this.project.content['[成果类型]'];
      }
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.type = +this.$route.params.type;
  },
  mounted() {
    document.title = '项目详情';
    this.init(this.type);
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

<template>
  <section class="personal__page page">
    <!-- 分类导航 项目 成果 -->
    <nav class="personal__tabs">
      <div class="tab__item active">
        <span class="f15 pr10">我的项目</span>
        <span>(100)</span>
      </div>
      <div class="tab__item ">
        <span class="f15 pr10">我的成果</span>
        <span>(80)</span>
      </div>
    </nav>

    <!-- 列表 -->
    <section class="list__wrap">
      <ul class="page__list">
        <li class="list__item">
          <div class="item__box">
            <h3 class="f15">我的立项测试数据</h3>
            <p class="f12">2018.10.8</p>
          </div>
          <div class="item__box pb10 f14">
            <h3 class="">闫工</h3>
            <p class="blue">200万</p>
          </div>
        </li>
        <li class="list__item">
          <div class="item__box">
            <h3 class="f15">我的立项测试数据</h3>
            <p class="f12">2018.10.8</p>
          </div>
          <div class="item__box pb10 f14">
            <h3 class="">闫工</h3>
            <p class="blue">200万</p>
          </div>
        </li>
        <li class="list__item">
          <div class="item__box">
            <h3 class="f15">我的立项测试数据</h3>
            <p class="f12">2018.10.8</p>
          </div>
          <div class="item__box pb10 f14">
            <h3 class="">闫工</h3>
            <p class="">200万</p>
          </div>
        </li>
      </ul>
    </section>

  </section>
</template>

<script>
import Vue from "vue";


export default {
  name: "research-personal",
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
      * @method 返回
      * @param
      */
    handleBack() {
      this.$router.back();
    }
  },
  created() {
  },
  mounted() {

  },
  beforeDestroy() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .personal__tabs {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    width: 100vw;
    height: 1rem;
    background: #fff;
  }

  .tab__item {
    flex: 1;
    line-height: 1rem;
    border-bottom: 3px solid #fff;
  }

  .active {
    border-bottom: 3px solid #639EF4;
  }

  .list__wrap {
    padding: .4rem .266667rem;
  }

  .page__list {
    width: calc(100vw - .533333rem);
    min-height: 40vh;
    border-left: 1px solid rgba(93,161,244,.5);
  }


  .list__item {
    position: relative;
    padding: 0 0 .4rem .266667rem;

    .item__box {
      display: flex;
      justify-content: space-between;
      align-items: center;

      line-height: .8rem;
      padding: 0 .133333rem;
      background: #fff;
      border-radius: 2px;
    }
  }

  .list__item:before {
    content: '';
    position: absolute;
    top: .293333rem;
    left: -0.093333rem;
    display: block;
    width: .133333rem;
    height: .133333rem;
    background: #5096F5;
    border-radius: 50%;
    box-shadow: 0 0 .133333rem rgba(80, 150, 245, 1);
  }

</style>

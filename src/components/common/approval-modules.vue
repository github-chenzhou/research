/*
 * @page：审核模板
 * @author: chenzhou
 * @update: 2019.02.23
 * @desc 
 *
 */


<template>
  <section>
    <!-- 合同信息 -->
    <!-- <section class="approval__base mt10 mb10" v-if="project.contract">
      <header class="base--header f16">
        <h3 class="title">合同信息</h3>
      </header>
      <ul class="page__list">
        <li class="list__item" v-for="(value, key) in project.contract">
          <div class="item__box">
            <label class="box__left f16">{{ key }}</label>
            <h3 class="box__right c333 f16">{{ value }}</h3>
          </div>
        </li>
      </ul>
    </section> -->

    <!-- 合作单位 -->
    <section class="approval__record mt10 mb10" v-if="project.cooperationUnitInfo">
      <header class="base--header f16">
        <h3 class="title">合作单位（院内）</h3>
      </header>
      <ul class="record__list" v-for="info in project.cooperationUnitInfo">
        <li class="list__item">
          <div class="item__box">
            <label class="box__left f16">总经费</label>
            <h3 class="box__right c333 f16">{{ info.contractFee }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.selfProvideFee">
          <div class="item__box">
            <label class="box__left f16">自筹经费</label>
            <h3 class="box__right c333 f16">{{ info.selfProvideFee }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.otherFee">
          <div class="item__box">
            <label class="box__left f16">其他经费</label>
            <h3 class="box__right c333 f16">{{ info.otherFee }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.zxFee">
          <div class="item__box">
            <label class="box__left f16">专项经费</label>
            <h3 class="box__right c333 f16">{{ info.zxFee }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.unitName">
          <div class="item__box">
            <label class="box__left f16">单位名称</label>
            <h3 class="box__right c333 f16">{{ info.unitName }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.unitType">
          <div class="item__box">
            <label class="box__left f16">单位类型</label>
            <h3 class="box__right c333 f16">{{ info.unitType }}</h3>
          </div>
        </li>
           
      </ul>
    </section>
    <section class="approval__record mt10 mb10" v-if="project.cooperationUnitOuterInfo">
      <header class="base--header f16">
        <h3 class="title">合作单位（院外）</h3>
      </header>
      <ul class="record__list" v-for="info in project.cooperationUnitOuterInfo">
        <li class="list__item">
          <div class="item__box">
            <label class="box__left f16">总经费</label>
            <h3 class="box__right c333 f16">{{ info.contractFee }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.selfProvideFee">
          <div class="item__box">
            <label class="box__left f16">自筹经费</label>
            <h3 class="box__right c333 f16">{{ info.selfProvideFee }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.otherFee">
          <div class="item__box">
            <label class="box__left f16">其他经费</label>
            <h3 class="box__right c333 f16">{{ info.otherFee }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.zxFee">
          <div class="item__box">
            <label class="box__left f16">专项经费</label>
            <h3 class="box__right c333 f16">{{ info.zxFee }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.unitName">
          <div class="item__box">
            <label class="box__left f16">单位名称</label>
            <h3 class="box__right c333 f16">{{ info.unitName }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.unitType">
          <div class="item__box">
            <label class="box__left f16">单位类型</label>
            <h3 class="box__right c333 f16">{{ info.unitType }}</h3>
          </div>
        </li>
           
      </ul>
    </section>

    <!-- 年度经费 -->
    <section class="approval__record mt10 mb10" v-if="project.yearBudgetsInfo">
      <header class="base--header f16">
        <h3 class="title">年度经费</h3>
      </header>
      <ul class="record__list" v-for="info in project.yearBudgetsInfo">
        <li class="list__item">
          <div class="item__box">
            <label class="box__left f16">年度</label>
            <h3 class="box__right c333 f16">{{ info.year }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.selfProvideFee">
          <div class="item__box">
            <label class="box__left f16">自筹经费</label>
            <h3 class="box__right c333 f16">{{ info.selfProvideFee }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.zxFee">
          <div class="item__box">
            <label class="box__left f16">专项经费</label>
            <h3 class="box__right c333 f16">{{ info.zxFee }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.otherFee">
          <div class="item__box">
            <label class="box__left f16">其他经费</label>
            <h3 class="box__right c333 f16">{{ info.otherFee }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.totalFee">
          <div class="item__box">
            <label class="box__left f16">合计经费</label>
            <h3 class="box__right c333 f16">{{ info.totalFee }}</h3>
          </div>
        </li>
           
      </ul>
    </section>

    <!-- 标准项目发布 -->
    <section class="approval__record mt10 mb10" v-if="project.lxDeclareProjectUnitInfo">
      <header class="base--header f16">
        <h3 class="title">标准项目发布</h3>
      </header>
      <ul class="record__list" v-for="info in project.lxDeclareProjectUnitInfo">
        <li class="list__item">
          <div class="item__box">
            <label class="box__left f16">承担角色</label>
            <h3 class="box__right c333 f16">{{ info.role }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.type">
          <div class="item__box">
            <label class="box__left f16">单位类型</label>
            <h3 class="box__right c333 f16">{{ info.type }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.unitName">
          <div class="item__box">
            <label class="box__left f16">单位名称</label>
            <h3 class="box__right c333 f16">{{ info.unitName }}</h3>
          </div>
        </li>
      </ul>
    </section>

    <!-- 年度计划 -->
    <section class="approval__record mt10 mb10" v-if="project.yearProgressInfo">
      <header class="base--header f16">
        <h3 class="title">年度计划</h3>
      </header>
      <ul class="record__list" v-for="info in project.yearProgressInfo">
        <li class="list__item" v-if="info.year">
          <div class="item__box">
            <label class="box__left f16">年度</label>
            <h3 class="box__right c333 f16">{{ info.year }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.khItem">
          <div class="item__box">
            <label class="box__left f16">年度考核指标</label>
            <h3 class="box__right c333 f16">{{ info.khItem }}</h3>
          </div>
        </li>
        <li class="list__item" v-if="info.researchContent">
          <div class="item__box">
            <label class="box__left f16">年度任务</label>
            <h3 class="box__right c333 f16">{{ info.researchContent }}</h3>
          </div>
        </li>
      </ul>
    </section>


  </section>
</template>

<script>
export default {
  name: 'research-nav',
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
    };
  },
  watch: {
    user(newVal, oldVal) {
    }
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .base--header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 0.133333rem;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    font-weight:  bold;
    
    background: #e5e5e5;

    .title {
      font-weight:  bold;
    }
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

  .list__item:last-child .item__box{
    border-bottom: none;
  }

  .box__left {
    min-width: 80px;
    text-align: left;
  }

  .box__right {
    flex: 1;
    text-align: right;
  }

  .record__list {
    padding: 0 0.133333rem;
  }

  .record__list:nth-child(even) {
    background: #f6f7f8;
  }


</style>

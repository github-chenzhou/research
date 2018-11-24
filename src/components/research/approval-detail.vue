<template>
  <section class="approval__page page">
    <!-- 列表 -->
    <section class="list__wrap page__inner">
      <!-- 基本信息 -->
      <section class="approval__base">
        <header class="base--header f16">
          <h3 class="title">基本信息</h3>
          <i class="iconfont icon-unfold f18" @click="handleFoldBase(false)" v-if="baseFold"></i>
          <i class="iconfont icon-fold f18" @click="handleFoldBase(true)" v-else></i>
        </header>
        <ul class="page__list" v-show="!baseFold">
          <li class="list__item">
            <div class="item__box">
              <label class="box__left f16">项目编号</label>
              <h3 class="box__right c333 f16">我的立项测试数据</h3>
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

      <!-- 审批记录 -->
      <section class="approval__record mt10 mb10">
        <header class="base--header f16">
          <h3 class="title">审批记录</h3>
          <i class="iconfont icon-unfold f18" @click="handleFoldRecord(false)" v-if="recordFold"></i>
          <i class="iconfont icon-fold f18" @click="handleFoldRecord(true)" v-else></i>
        </header>
        <div v-show="!recordFold" >
          <ul class="record__list" v-for="record in records">
            <li class="list__item">
              <div class="item__box">
                <label class="box__left f16">审核人</label>
                <h3 class="box__right c333 f16">{{ record.reviewer }}</h3>
              </div>
            </li>
            <li class="list__item">
              <div class="item__box">
                <label class="box__left f16">审核状态</label>
                <h3 class="box__right c333 f16">{{ record.status }}</h3>
              </div>
            </li>
            <li class="list__item">
              <div class="item__box">
                <label class="box__left f16">审核意见</label>
                <h3 class="box__right c333 f16">{{ record.opinion }}</h3>
              </div>
            </li>
            <li class="list__item">
              <div class="item__box">
                <label class="box__left f16">审核时间</label>
                <h3 class="box__right c333 f16">{{ record.time }}</h3>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <!-- 附件 -->
      <section class="approval__annex mt10 mb10">
        <h3 class="base--header f16">附件</h3>
        <ul class="record__list" v-for="file in attachments">
          <li class="list__item">
            <div class="item__box">
              <label class="box__left f16">{{ file.name }}</label>
              <h3 class="box__right blue f16">查看</h3>
            </div>
          </li>
        </ul>
      </section>

      <!-- 审批已经确认 -->
      <section class="approval__form mt10 mb10">
        <h3 class="base--header f16">审批</h3>
        <section class="">
          <textarea class="approval--opinion f16" name="opinion" row=3 placeholder="请输入审批意见"></textarea>
          <footer class="approval__actions f16">
            <p class="approval--btn">通过</p>
            <p class="approval--btn disable">不通过</p>
          </footer>
          
        </section>
      </section>
     
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
      baseFold: false,
      recordFold: false,
      project: {
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
      },
      records: [{
        'reviewer': '关慧',
        'status': '已通过',
        'time': '2017-05-27 15:30',
        'opinion': 'XXXXXXXXXX',
      },{
        'reviewer': '闫工',
        'status': '已通过',
        'time': '2017-06-12 15:30',
        'opinion': 'XXXXXXXXXX',
      }],
      attachments: [{ name: '立项批准文件或主管部门任务书、合同书', url: '', size: '' }]
    };
  },
  components: {},
  computed: {
    ...mapGetters([
      'mobile',
      'user'
    ])
  },
  watch: {},
  filters: {
    formatTime(time) {}
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
        // this.$store.commit('setProjects', this.projects);
      })
    },

    handleFoldBase(baseFold) {
      this.baseFold = baseFold;
    },

    /*
     * @method 审批记录收起
     * @param
     */
    handleFoldRecord(recordFold) {
      this.recordFold = recordFold;
    }
  },
  created() {
    let id = this.$route.params.id;
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
    padding: 0.2rem.266667rem;
    min-height: calc(100vh - 1.066667rem);
    background: #fff;
  }

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
    text-align: right;
  }

  .record__list {
    padding: 0 0.133333rem;
  }

  .record__list:nth-child(even) {
    background: #f6f7f8;
  }




  .approval__form {
    padding-bottom: 1.333333rem;
  }

  .approval--opinion {
    display: block;
    width: 100%;
    height: 2.0rem;
    padding: 0.133333rem;

    border: 1px solid #c8c8c8;
  }

  .approval__actions {
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding-top: 0.4rem;
  }

  .approval--btn {
    width: 2.666667rem;
    height: 1.173333rem;
    line-height: 1.173333rem;
    color: #fff;
    background: #5096F5;
    border-radius: 0.106667rem;
  }

  .approval--btn.disable {
    opacity: 0.9;
  }

</style>

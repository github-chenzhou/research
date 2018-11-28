<template>
  <section class="personal__page page">
    <div class="page__inner">

      <!-- 分类导航 项目 成果 -->
      <nav class="personal__tabs" >
        <div :class="['tab__item', tab === 1 ? 'active' : '']" @click="handleTabs(1)">
          <span class="f15 pr10">我的项目</span>
          <span>({{ projects.length }})</span>
        </div>
        <div :class="['tab__item', tab === 2 ? 'active' : '']" @click="handleTabs(2)">
          <span class="f15 pr10">我的成果</span>
          <span>({{ achievements.length }})</span>
        </div>
      </nav>

      <!-- 列表 -->
      <section class="list__wrap">
        <ul class="page__list">
          <!-- 项目列表 -->
          <router-link tag="li" :to="'/project/'+item.productid" class="list__item" v-for="item in projects" v-if="tab === 1">
            <section class="box__wrap">
              <div class="item__box">
                <!-- 项目名称 -->
                <h3 class="title f15">{{ item.title }}</h3>
                <!-- 创建时间 -->
                <p class="date f12" v-if="item.content && item.content['[开始时间]']">{{ item.content['[开始时间]'] }}</p>
              </div>
              <div class="item__box pb10 f14">
                <!-- 负责人 -->
                <h3 class="" v-if="item.content && item.content['[负责人]']">{{ item.content['[负责人]'] }}</h3>
                <!-- 费用 -->
                <p class="blue">{{ item.fee }}</p>
              </div>
            </section>
          </router-link>
          <!-- 成果列表 -->
          <router-link tag="li" :to="'/project/'+item.productid" class="list__item" v-for="item in achievements" v-if="tab === 2">
            <section class="box__wrap">
              <div class="item__box">
                <!-- 项目名称 -->
                <h3 class="title f15">{{ item.title }}</h3>
                <!-- 创建时间 -->
                <p class="date f12">{{ item.date }}</p>
              </div>
              <div class="item__box pb10 f14">
                <!-- 负责人 -->
                <h3 class="" v-if="item.content && item.content['[录入人]']">{{ item.content['[录入人]'] }}</h3>
                <!-- 类型 -->
                <p class="" v-if="item.content && item.content['[成果类型]']">{{ item.content['[成果类型]'] }}</p>
              </div>
            </section>
    
          </router-link >
        </ul>
      </section>

    </div>

  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import request from '@/utils/request.js'
import api from '@/utils/api.js'


export default {
  name: "research-personal",
  data() {
    return {
      // tab: 1: 项目 2：成果
      tab: 1,
      // 成果列表
      achievements: [{
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
        'principal': '负责人',
        'productid': 'yey234782348923418934234'
      }, {
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
        'principal': '负责人',
        'productid': 'yey234782348923418934234'
      },{
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
        'principal': '负责人',
        'productid': 'yey234782348923418934234'
      }],
      // 项目列表
      projects: [{
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
      }, {
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
      }, {
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
      },{
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
      },{
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
      },{
        'title': '图景与前景：2016中外影视互译合作研究报告',
        'date': '2018-08-28',
        'type': '研究报告',
        'fee': '100万',
        'principal': '负责人',
        'productid': 'yey234782348923418934234'
      },{
        'title': '图景与前景：2016中外影视互译合作研究报告',
        'date': '2018-08-28',
        'type': '研究报告',
        'fee': '100万',
        'principal': '负责人',
        'productid': 'yey234782348923418934234'
      }],
    };
  },
  components: {},
  computed: {
    ...mapGetters([
      'mobile',
      'user',
      'projects',
      'achievements',
    ])
  },
  watch: {},
  filters: {
    formatTime(time) {}
  },
  mixins: [],
  methods: {
    /*
     * @method tab切换
     * @param
     */
    handleTabs(tab) {
      this.tab = tab || 1;

      if(tab === 1) {
        document.title = '我的项目';
      } else {
        document.title = '我的成果';
      }

      this.checkData(tab);
    },

    /*
     * @method 检测加载数据
     * @param phone
     */
    checkData(tab) {
      if(!this.projects.length && tab === 1) {
        this.getProjects(this.tab);
      }

      if(!this.achievements.length && tab === 1) {
        this.getProjects(this.tab);
      }
    },

    /*
     * @method 登陆
     * @param phone
     */
    getProjects(tab) {
      let url = api.GET_PROJECTS;
      // actionType=myproduct
      let params = { actionType: tab === 1 ? 'myprject' : 'myproduct' };

      request.get(url, params).
      then((res)=>{
        if(tab === 1) {
          this.projects = res.dataList;
          this.$store.commit('setProjects', this.projects);
        } else if(tab === 2) {
          this.achievements = res.dataList;
        }
      })
      
    },
  },
  created() {
    this.checkData();
    document.title = '个人中心';
  },
  mounted() {

  },
  beforeDestroy() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .page {

  }
  .personal__tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

    .box__wrap {
      padding: 0.133333rem 0.226667rem;
      line-height: .8rem;
      background: #fff;
      border-radius: 0.053333rem;
    }

    .item__box {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .title {
      text-align: left;
      line-height: 1.5;
    }

    .date {
      min-width: 135px;
      text-align: right;
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

  .list__item:nth-child(even) {
    .box__wrap {
      background: #e5e5e5;
    }
  }

</style>

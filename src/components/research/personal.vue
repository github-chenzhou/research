<template>
  <section class="personal__page page">
    <div class="page__inner">

      <!-- 分类导航 项目 成果 -->
      <nav class="personal__tabs" >
        <div :class="['tab__item c333 f14', tab === 1 ? 'active' : '']" @click="handleTabs(1)">
          <p>项目<span class="f12" >({{ projects.length }})</span></p>
        </div>
        <div :class="['tab__item c333 f14', tab === 2 ? 'active' : '']" @click="handleTabs(2)">
          <p>成果<span class="f12" >({{ achievements.length }})</span></p>
        </div>
      </nav>

      <!-- 列表 -->
      <section class="list__wrap">
        <ul class="page__list">
          <!-- 项目列表 -->
          <!-- <router-link tag="li" :to="'/project/'+item.productid" class="list__item" v-for="item in projects" v-if="tab === 1"> -->
          <li class="list__item" v-for="item in projects" v-if="tab === 1" @click="handleLinks(tab, item)">
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
          </li>
          <!-- 成果列表 -->
          <li class="list__item" v-for="item in achievements" v-if="tab === 2" @click="handleLinks(tab, item)">
            <section class="box__wrap">
              <div class="item__box">
                <!-- 项目名称 -->
                <h3 class="title f15">{{ item.title }}</h3>
                <!-- 完成日期 -->
                <p class="date f12" v-if="item.content && item.content['[完成日期]']">{{ item.content['[完成日期]'] }}</p>
              </div>
              <div class="item__box pb10 f14">
                <!-- 负责人 -->
                <h3 class="" v-if="item.content && item.content['[录入人]']">{{ item.content['[录入人]'] }}</h3>
                <!-- 成果成员 -->
                <h3 class="" v-if="item.content && item.content['[成果成员]']">{{ item.content['[成果成员]'] }}</h3>
                <!-- 类型 -->
                <p class="" v-if="item.content && item.content['[成果类型]']">{{ item.content['[成果类型]'] }}</p>
              </div>
            </section>
          </li>

          <!-- 暂无数据 -->
          <li class="" if="(tab === 1 && !projects.length) || (tab === 2 && !achievements.length)">
            <p class="empty f15 c333">暂无数据</p>
          </li>
        </ul>
      </section>

    </div>

  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import request from '@/utils/request.js'
import api from '@/utils/api.js'

// {
//         'content': {
//           '[获奖作者]': '金海娜', 
//           '[所属科室]': '外国语学院', 
//           '[获奖级别]': '其它', 
//           '[获奖等级]': '其他奖', 
//           '[获奖日期]': '2017-05-27', 
//           '[发证机关]': '文化部', 
//           '[审核状态]': '学校通过' 
//         },
//         'title': '图景与前景：2016中外影视互译合作研究报告',
//         'date': '2018-08-28',
//         'type': '研究报告',
//         'principal': '负责人',
//         'productid': 'yey234782348923418934234'
//       }

export default {
  name: "research-personal",
  data() {
    return {
      // tab: 1: 项目 2：成果
      tab: 1,
      // 成果列表
      achievements: [],
      // 项目列表
      projects: [],
    };
  },
  components: {},
  computed: {
    ...mapGetters([
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

      window.tab = tab;
    },

    /*
     * @method 检测加载数据
     * @param phone
     */
    checkData(tab) {
      this.getProjects(this.tab);
    },

    /*
     * @method 登陆
     * @param phone
     */
    getProjects(tab) {
      let url = api.GET_PROJECTS;
      let params = { actionType: tab === 1 ? 'myprject' : 'myproduct' };

      request.get(url, params).
      then((res)=>{
        if(tab === 1) {
          this.projects = this.formatData(res.dataList);
          this.$store.commit('setProjects', this.projects);
        } else if(tab === 2) {
          this.achievements = this.formatData(res.dataList);
          this.$store.commit('setAchievements', this.achievements);
        }
      })
      
    },

    /*
     * @method 格式化数据
     * @param 
     */
    formatData(list) {
      return list.map((item)=>{
        item.content = JSON.parse(item.content);

        if(item.content) {
          for(let key in item.content){
            if(item.content[key] === 'null') {
              item.content[key] = '';
            }
          }
        }

        return item;
      });
    },

    /*
     * @method 详情链接
     * @param 
     */
    handleLinks(tab, info) {
      this.$store.commit('setProject', info);
      this.$router.push({ name: 'project', params: { type: tab, id: info.productid }})
    },
  },
  created() {
    this.getProjects(1);

    setTimeout(()=>{
      this.getProjects(2);
    }, 1000);

    document.title = '个人中心';
    this.handleTabs(window.tab || 1);
  },
  mounted() {

  },
  beforeDestroy() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .page__inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .personal__tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    flex-direction: column;
    width: 20vw;
    min-height: 5rem;

    padding: .4rem 0;
    // background: #fff;
  }

  .tab__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    width: 100%;
    // line-height: 1rem;
    // border-bottom: 3px solid #fff;
    background: #e5e5e5;
  }

  .active {
    // border-bottom: 3px solid #639EF4;
    color: #5096F5;
    background: #fff;
  }

  .list__wrap {
    flex: 1;
    padding: .4rem .266667rem;
  }

  .page__list {
    width: calc(80vw - .533333rem);
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

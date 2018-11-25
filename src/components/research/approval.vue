<template>
  <section class="approval__page page">
  	<div class="page__inner">
      <!-- 审批列表 -->
      <ul class="approval__list">
        <router-link tag="li" :to="'/approvaldetail/'+item.id"  class="approval__item" v-for="item in approvals">
          <!-- 审批标题和日期 -->
          <div class="item__box">
            <h3 class="title blue f15">{{ item.title }}</h3>
            <p class="date f14">{{ item.date }}</p>
          </div>
          <!-- 负责人及审批类型 -->
          <div class="item__box pb10 f15">
            <!-- 负责人 -->
            <h3 class="c333">{{ item.principal }}</h3>
            <!-- 分类 -->
            <p class="f14 c666">{{ item.category }}</p>
          </div>
        </router-link>
      </ul>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import request from '@/utils/request.js'
import api from '@/utils/api.js'

export default {
  name: "research-approval",
  data() {
    return {
      approvals: [{
        title: '混凝土试验－自密实混凝土性能的检测ISO1920Part13',
        date: '2017-05-13',
        principal: '负责人/联系人',
        category: '标准项目发布',
        id: 1212
      }, {
        title: '标准测试180122',
        date: '2017-05-13',
        principal: '负责人',
        category: '经费认领',
        id: 1212
      }, {
        title: '测试技术开发合同',
        date: '2017-07-13',
        principal: '联系人',
        category: '技术开发/技术转让合同',
      },{
        title: '混凝土试验－自密实混凝土性能',
        date: '2017-05-13',
        principal: '负责人/联系人',
        category: '标准项目发布',
      },{
        title: '混凝土试验－自密实混凝土性能的检测ISO1920Part13',
        date: '2017-05-13',
        principal: '负责人/联系人',
        category: '标准项目发布',
      }, {
        title: '标准测试180122',
        date: '2017-05-13',
        principal: '负责人',
        category: '经费认领',
      }, {
        title: '测试技术开发合同',
        date: '2017-07-13',
        principal: '联系人',
        category: '技术开发/技术转让合同',
      },{
        title: '混凝土试验－自密实混凝土性能',
        date: '2017-05-13',
        principal: '负责人/联系人',
        category: '标准项目发布',
      },{
        title: '混凝土试验－自密实混凝土性能的检测ISO1920Part13',
        date: '2017-05-13',
        principal: '负责人/联系人',
        category: '标准项目发布',
      }, {
        title: '标准测试180122',
        date: '2017-05-13',
        principal: '负责人',
        category: '经费认领',
      }, {
        title: '测试技术开发合同',
        date: '2017-07-13',
        principal: '联系人',
        category: '技术开发/技术转让合同',
      },{
        title: '混凝土试验－自密实混凝土性能',
        date: '2017-05-13',
        principal: '负责人/联系人',
        category: '标准项目发布',
      }]
    };
  },
  components: {},
  computed: {
    ...mapGetters([
      'mobile',
      'user',
      'role'
    ])
  },
  watch: {},
  filters: {
  },
  mixins: [],
  methods: {
    /*
      * @method 根据当前角色读取审批列表
      * @param role
      */
    getApprovalList(role) {
      let url = api.GET_APPROVALS;
      let params = { userid: '', role };

      request.get(url, params).
      then((res)=>{
        this.projects = res.dataList;
        // this.$store.commit('setProjects', this.projects);
      })
    },

    /*
      * @method 格式化数据抽象数据mode
      * @param
      */
    formatData(data) {
      
    }
  },
  created() {
    // this.getApprovalList();
    document.title = '科研系统审批中心';
  },
  mounted() {
  },
  beforeDestroy() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .approval__item {
    margin-bottom: 0.333333rem;
    padding: 0.2rem 0.226667rem;
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
    min-width: 75px;
    text-align: right;
  }

  .approval__item:nth-child(even) {
    // background: #e5e5e5;
  }

</style>

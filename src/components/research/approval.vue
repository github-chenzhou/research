<template>
  <section class="approval__page page">
  	<div class="page__inner">
      <!-- 审批列表 -->
      <ul class="approval__list">
        <!-- <router-link tag="li" :to="'/approvaldetail/'+item.id"  class="approval__item" v-for="item in approvals"> -->
        <li class="approval__item J_approval" :data-id="item.productId" v-for="item in approvals" @click="handleLink(item)">
          <!-- 审批标题和日期 -->
          <div class="item__box">
            <h3 class="title blue f15">{{ item.title }}</h3>
            <p class="date f14">{{ item.date }}</p>
          </div>
          <!-- 负责人及审批类型 -->
          <div class="item__box pb10 f15">
            <!-- 负责人 -->
            <h3 class="c333">{{ item.chargerName }}</h3>
            <!-- 分类 -->
            <p class="f14 c666">{{ item.moduleName }}</p>
          </div>
        </li>

        <!-- 暂无数据 -->
        <li class="empty w100" if="!approvals.length">
          <p class="f15 c333">暂无数据</p>
        </li>
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
      approvals: []
    };
  },
  components: {},
  computed: {
    ...mapGetters([
      'approvals',
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
      let url = api.COMMON_ACTION;
      let params = { actionType: 'todolist', groupId: role };

      request.get(url, params).
      then((res)=>{
        this.approvals = res.dataList;
        this.$store.commit('setApprovals', this.approvals);
        window.approvals = this.approvals;
      })
    },

    /**
     * @method 恢复上次滚动位置
     *
     */
    restorelocation() {
      var $page = $(this.$el);
      var key = 'discussion' + this.id;
      var pageY = +localStorage.getItem(key);
      var scrollToPageY = function(c) {
        if (c > 0) {
          $page.scrollTop(c);
        }
      };

      // 定位到上次打开位置
      if(pageY > 300) {
        scrollToPageY(pageY);
      }
    },

    /*
     * @method 滚动到上次预览位置
     * @param
     */
    handleScrollToView(id) {
      setTimeout(()=>{
        this.$el.querySelector('.J_approval[data-id="'+id+'"]').scrollIntoView();
      }, 20)
    },

    /*
     * @method 详情链接
     * @param 
     */
    handleLink(info) {
      this.$router.push({ 
        name: 'approvaldetail', 
        params: { module: info.moduleId, id: info.productId }
      })

      // 记录当前帖子评论列表
      if(window.approvalsMap) {
        let record = {
          id: info.productId,
          module: info.moduleId
        };

        window.approvalsMap.set(this.role, record);
      }
    },
  },
  created() {
    if(window.approvals) {
      this.approvals = window.approvals;
    }

    // 评论列表数据做缓存
    if(window.approvalsMap) {
      let record = window.approvalsMap.get(this.role);

      record && this.handleScrollToView(record.id);
    } else {
      window.approvalsMap = new Map();
    }

    document.title = '科研系统审批中心';
  },
  mounted() {
    console.log(this.role);
    
    if(this.role) {
      this.getApprovalList(this.role);
    } else {
      setTimeout(()=>{
        this.getApprovalList(this.role);
      }, 1000)
    }
  },
  beforeDestroy() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .approval__item {
    margin-top: 0.333333rem;
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

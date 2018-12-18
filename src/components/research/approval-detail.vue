<template>
  <section class="approval__page page">
    <!-- 列表 -->
    <section class="list__wrap page__inner">
      <!-- 基本信息 -->
      <section class="approval__base">
        <header class="base--header f16">
          <h3 class="title">基本信息</h3>
          <i class="iconfont icon-unfold c9b f18" @click="handleFold(false, 'baseFold')" v-if="baseFold"></i>
          <i class="iconfont icon-fold c9b f18" @click="handleFold(true, 'baseFold')" v-else></i>
        </header>
        <ul class="page__list" v-show="!baseFold">
          <!-- <li class="list__item">
            <div class="item__box">
              <label class="box__left f16">项目名称</label>
              <h3 class="box__right c333 f16">{{ project.title }}</h3>
            </div>
          </li>  -->
          <!-- 项目属性 -->
          <li class="list__item" v-for="(value, key) in project.baseInfo">
            <div class="item__box">
              <label class="box__left f16">{{ key }}</label>
              <h3 class="box__right c333 f16">{{ value }}</h3>
            </div>
          </li>

          <!-- 详细信息 -->
          <li class="list__item" v-for="(value, key) in project.detailInfo">
            <div class="item__box">
              <label class="box__left f16">{{ key }}</label>
              <h3 class="box__right c333 f16">{{ value }}</h3>
            </div>
          </li>
        </ul>
      </section>

      <!-- 作者信息 -->
      <section class="approval__record mt10 mb10" v-if="project.authorInfo">
        <header class="base--header f16">
          <h3 class="title">作者信息</h3>
          <i class="iconfont icon-unfold c9b f18" @click="handleFold(false, 'authorFold')" v-if="authorFold"></i>
          <i class="iconfont icon-fold c9b f18" @click="handleFold(true, 'authorFold')" v-else></i>
        </header>
        <div v-show="!authorFold" >
          <ul class="record__list" v-for="author in project.authorInfo">
            <li class="list__item">
              <div class="item__box">
                <label class="box__left f16">姓名</label>
                <h3 class="box__right c333 f16">{{ author.authorName }}</h3>
              </div>
            </li>
            <li class="list__item">
              <div class="item__box">
                <label class="box__left f16">类型</label>
                <h3 class="box__right c333 f16">{{ author.authorType  }}</h3>
              </div>
            </li>
            <li class="list__item">
              <div class="item__box">
                <label class="box__left f16">机构</label>
                <h3 class="box__right c333 f16">{{ author.authorUnit }}</h3>
              </div>
            </li>
            <li class="list__item">
              <div class="item__box">
                <label class="box__left f16">学历/职称</label>
                <h3 class="box__right c333 f16">{{ author.eduLevelId || author.titleId }}</h3>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <!-- 审批记录 -->
      <section class="approval__record mt10 mb10">
        <header class="base--header f16">
          <h3 class="title">审批记录</h3>
          <i class="iconfont icon-unfold c9b f18" @click="handleFold(false, 'recordFold')" v-if="recordFold"></i>
          <i class="iconfont icon-fold c9b f18" @click="handleFold(true, 'recordFold')" v-else></i>
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
            <div class="item__box" @click="handleViewFile">
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

import approvalMixin from '@/components/common/approval-mixin.js'


export default {
  name: "research-project",
  data() {
    return {
      id: 0,
      baseFold: false,
      recordFold: false,
      authorFold: false,
      project: {
        'baseInfo': {
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
  mixins: [approvalMixin],
  methods: {
    /*
     * @method 加载数据
     * @param
     */
    getData(id, moduleId) {
      let url = api.COMMON_ACTION;
      let params = { actionType: 'todolist', moduleId: this.moduleID, productId: this.ID };

      request.get(url, params).
      then((res)=>{
        console.info(res);
        if(typeof res === 'string') {
          res = this.getValue(res);
        }

        if(res && res.content) {
          let content = res.content;
          this.formatData(content);

          this.setModule(this.moduleID, content);
        }

      })
    },

    /*
     * @method JSON格式不合理
     * @param 
     */
    getValue(jsonStr) {
      return new Function("return " + jsonStr)()
    },
    
    /*
     * @method 基础数据格式化
     * @param 
     */
    formatData(data) {
      // 基本信息
      let baseInfo = null;
      if(typeof data.baseInfo === 'string') {
        baseInfo = this.getValue(data.baseInfo);
      } else {
        baseInfo = JSON.parse(data.baseInfo);
      }

      if(baseInfo) {
        for(let key in baseInfo){
          if(baseInfo[key] === 'null') {
            baseInfo[key] = '';
          }
        }

        this.project.baseInfo = baseInfo;
      }

      if(data.detailInfo) {
        let detailInfo = JSON.parse(data.detailInfo);
        this.project.detailInfo = detailInfo;
      }

      // 作者信息
      if(data.authorInfo) {
        this.project.authorInfo = data.authorInfo;
      }

      console.info(this.project);
    },

    /*
     * @method 收起
     * @param
     */
    handleFold(isFold, key) {
      this[key] = isFold;
    },

    handleViewFile() {
      // 两种方案 一种直接打开 需要第三方应用
      location.href = 'http://sfe.ykt.io/o_1ct479fitgdk1fd91p05jousl69.docx';

      // 第二种微信api打开需要config签名之类
      wx.previewFile({
        // 需要预览文件的地址(必填，可以使用相对路径)
        url: 'http://sfe.ykt.io/o_1ct479fitgdk1fd91p05jousl69.docx',
        // 需要预览文件的文件名(不填的话取url的最后部分)
        name: '立项批准文件或主管部门任务书、合同书',
        // 需要预览文件的字节大小(必填)
        size: 1048576
      });
    }
  },
  created() {
    this.ID = this.$route.params.id;
    this.moduleID = this.$route.params.module;

    this.getData(this.ID, this.moduleID);
  },
  mounted() {
    document.title = '审批详情';
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
    flex: 1;
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

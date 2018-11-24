/*
 * @page：科研移动版导航
 * @author: chenzhou
 * @update: 2018.11.18
 * @desc 
 *
 */


<template>
  <section id="nav" class="nav-cmp">
  	<nav class="nav__wrap f14" @click="handleTab">
  		<div class="f16">
  			<!-- <i class="iconfont icon-logo f18"></i> -->
        <router-link to="/" data-index="1" :class="['nav--item ', active == 1 ? 'curr' : '' ]">首页</router-link> 
      </div>
      <div class="navs f16">
        <router-link to="/approval" data-index="2" :class="['nav--item mr25', active == 2 ? 'curr' : '' ]">审批</router-link>
        <router-link to="/personal" data-index="3" :class="['nav--item mr25', active == 3 ? 'curr' : '' ]">个人中心</router-link>
        <div class="nav--item" @click="handleRoleVisible">角色<i class="iconfont icon-unfold f15"></i></div>
      </div>
    </nav>
    <!-- 角色切换 -->
    <section class="role__modal" v-show="roleVisible">
      <ul class="role__list f16">
        <li class="">
          <div class="">
            <i class="iconfont icon-suijidianming1 f15"></i>
            <span class="pl10">科研人员</span><span>(当前角色)</span>
          </div>
        </li>
        <li class="">
          <div class="blue">
            <i class="iconfont icon-suijidianming1 f15"></i>
            <span class="pl10">技术中心科研主管</span>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: 'research-nav',
  // props: {
  //   active: 1
  // },
  data() {
    return {
      active: 1,
      roleVisible: false
    };
  },
  methods: {
    /*
      * @method tab切换
      * @param
      */
    handleTab(evt) {
      let target = evt.target;
      let index = target.dataset.index;

      if(index) {
        this.active = index;
      }
    },

    handleRoleVisible() {
      this.roleVisible = !this.roleVisible;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .mr25 {
  	margin-right: 0.333333rem;
  }

  .nav-cmp {
    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    color: #9B9B9B;
    background: #282C2F;
  }

  .nav__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 1.066667rem;

    padding: 0 0.266667rem;
  }

  .navs {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .nav--item {
    line-height: 1.066667rem;
    color: #C8C8C8;
    text-decoration: none;
  }

  .nav--item:hover {
    text-decoration: none;
  }

  .curr {
    color: #fff;
  }

  .icon-logo {
  	vertical-align: -0.066667rem;
    padding-right: .133333rem;
  }


  .role__modal {
    z-index: 2;
    position: fixed;
    top: 1.066667rem;
    left: 0;
    width: 100vw;
    line-height: 1.0rem;

    text-align: right;;
    padding: 0.226667rem 0.453333rem;

    color: #fff;
    background: rgba(0,0,0,0.75);
  }


</style>

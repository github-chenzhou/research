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
  		<div class="">
  			<i class="iconfont icon-logo f18"></i>
        <router-link to="/" data-index="1" :class="['nav--item ', active == 1 ? 'curr' : '' ]">首页</router-link> 
      </div>
      <div class="">
        <router-link to="/approval" data-index="2" :class="['nav--item mr30', active == 2 ? 'curr' : '' ]">审批</router-link>
        <router-link to="/personal" data-index="3" :class="['nav--item ', active == 3 ? 'curr' : '' ]">个人中心</router-link>
      </div>
    </nav>
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
      active: 1
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
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .mr30 {
  	margin-right: 0.4rem;
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

    padding: 0 .4rem;
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
</style>

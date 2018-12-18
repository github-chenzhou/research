/*
 * @page：科研移动版导航
 * @author: chenzhou
 * @update: 2018.12.12
 * @desc 
 *
 */


<template>
  <section id="nav" class="nav-cmp">
    <nav class="nav__wrap f14" @click="handleTab" >
      <router-link to="/" data-index="1" :class="['nav--item ', active == 1 ? 'curr' : '' ]">审批中心</router-link>
      <router-link to="/roles" data-index="2" :class="['nav--item', active == 2 ? 'curr' : '' ]" >角色切换</router-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'research-nav',
  props: {
    user: {
      type: Object,
      default: null
    },
    active: {
      type: Number,
      default: 1
    },
  },
  data() {
    return {
      // active: 1,
      roles: []
    };
  },
  watch: {
    user(newVal, oldVal) {
      newVal && this.setRoles(newVal);
    }
  },
  methods: {
    /*
     * @method 设置角色
     * @param
     */
    setRoles(user) {
      let roles = [];

      if(user.groups && user.groupNames) {
        let ids = user.groups.split(',');
        let names = user.groupNames.split(',');

        roles = ids.map((id, index)=>{
          return { id, name: names[index] };
        })

        this.roles = roles;

        // 设置当前角色

      }
    },

    /*
      * @method tab切换
      * @param
      */
    handleTab(evt) {
      let target = evt.target;
      let index = +target.dataset.index;

      if(index) {
        this.active = index;
      }
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
    background-color: #fff;
  }

  .nav__wrap {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    width: 100vw;
    height: 1.066667rem;

    padding: 0 0.266667rem;

    text-align: center;
  }

  .navs {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .nav--item {
    flex: 1;
    line-height: 1.066667rem;
    color: #C8C8C8;
    color: rgba(255,255,255,0.75);
    text-decoration: none;

    color: #666;
   
  }

  .nav--item:hover {
    text-decoration: none;
  }

  .curr {
    color: #26a2ff;
    border-bottom: 3px solid #26a2ff;
    margin-bottom: -3px;
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

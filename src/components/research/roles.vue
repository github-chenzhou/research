<template>
  <section class=" page">
    <!-- 角色列表 -->
    <ul class="role__list">
      <li class="role" v-for="(item, index) in roles" >
        <div :class="[ item.id === role ? 'blue': '' ]" @click="handleSetRole(item.id)">
          <i class="iconfont icon-suijidianming1 f15" v-if="item.id === role"></i>
          <span class="pl10">{{ item.name }}</span>
          <span v-if="item.id === role">(当前角色)</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "research-roles",
  data() {
    return {
      roles: []
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
  watch: {
    user(newVal, oldVal) {
      newVal && this.setRoles(newVal);
    }
  },
  filters: {
  },
  mixins: [],
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

    handleSetRole(id) {
      this.role = id;
      this.$store.commit('setRole', id);
    }
  },
  created() {
    document.title = '科研系统切换角色';
  },
  mounted() {
    if(this.user) {
      this.setRoles(this.user);
    } else {
      setTimeout(()=>{
        this.setRoles(this.user)
      }, 500);
    }
  },
  beforeDestroy() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .page {
    padding: 20px 15px;
    // background: #fff;
  }

  .role__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    flex-wrap: wrap;
    width: 100%;
  }

  .role {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.133333rem 0.133333rem;
    width: 33.3%;
    min-height: 1.6rem;
    border-left: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;

    background: #fff;
  }

  .list__item:nth-child(even) {
    .box__wrap {
      background: #e5e5e5;
    }
  }

  .role:nth-child(3n),
  .role:last-child {
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }

</style>

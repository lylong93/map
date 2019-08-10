<template>
  <div class="aside-wrapper">
    <div class="logo" @click="change">logo</div>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <item v-for="(i,index) in menus" :key="index"  :titleName="i.name" :children="i.children" :index="index"/>
    </el-menu>
  </div>
</template>

<script>
import item from './item'
import {mapState} from "vuex";

export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  computed: {
    ...mapState('route',[
      'menus'
    ]),
  },
  mounted(){
    console.log(this.menus)
  },
  methods: {
    change() {
      this.isCollapse = !this.isCollapse;
    }
  },
  components:{
    item
  }
};
</script>
<style lang="scss" scoped>
.aside-wrapper {
background: #4c4c4c;
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.logo {
  border: 1px solid blueviolet;
  height: 30px;
}
}
</style>

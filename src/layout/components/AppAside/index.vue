<template>
  <div class="aside-wrapper">
    <div class="logo" @click="change">logo</div>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <item v-for="i in menus" :key="i">{{i}}</item>
    </el-menu>
  </div>
</template>

<script>
import item from './item'
export default {
  data() {
    return {
      isCollapse: true,
      menus:[1,2,3]
    };
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.logo {
  border: 1px solid blueviolet;
  height: 30px;
}
</style>

<template>
  <el-submenu :index="parseIndex" :popper-append-to-body="false">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">{{titleName}}</span>
    </template>
    <router-link :to="i.path" v-for="(i,index) in children" :key="index">
      <el-menu-item>{{i.name}}</el-menu-item>
    </router-link>
  </el-submenu>
</template>
 <script>
export default {
  props: ["index", "titleName", "children"],
  computed: {
    parseIndex() {
      return this.index.toString();
    }
  }
};
</script>
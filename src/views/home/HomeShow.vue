<template>
  <div class="show-wrapper">
    <tabs value="tow">
      <tabPan v-for="(i,index) in tabs" :key="index" :lable="i">{{i}}</tabPan>
    </tabs>
  </div>
</template>
<script>
import tabs from "@/components/tab/tabs";
import tabPan from "@/components/tab/tabPan";

export default {
  data() {
    return {
      tabs: ["one", "tow", "three"]
    };
  },
  components: {
    tabs,
    tabPan
  }
};
</script>
<style lang="scss" scoped>
// .show-wrapper {
// //   display: flex;
// }
</style>


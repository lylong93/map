<template>
  <div class="shrink-wrapper">
    <div class="main" :style="showStyle">
      <slot></slot> 
    </div>
    <div class="over" v-show="show">.....</div>
    <div class="more-pan">
      <span v-if="show" @click="change">展开</span>
      <span v-else @click="change">合并</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    height: String
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    change() {
      this.show = !this.show;
    }
  },
  computed: {
    showStyle() {
      if (this.show) {
        return {
          "max-height": this.height
        };
      }
    }
  },
  mounted() {
    console.log(this.height);
  }
};
</script>
<style lang="scss" scoped>
.shrink-wrapper {
  background: #fff;
  width: 100%;
  padding: 10px;
  .main {
    overflow: hidden;
  }
  .more-pan {
    display: flex;
    color: red;
    justify-content: flex-end;
    height: 20px;
  }
}
</style>

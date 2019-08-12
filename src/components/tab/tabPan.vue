<template>
  <div class="tabPan-ui"  @click="say">
    <div class="contain" :class="{'light': isActive }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: ["lable"],
  methods:{
     say(){
       this.$parent.$emit('tab-select',this.lable)
      }
  },
  computed: {
    isActive() {
      return true;
    }
  },
};
</script>
<style lang="scss" scoped>
.tabPan-ui {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  .contain {
    height: 100%;
    width: 100%;
  }
  .light {
    background: red;
  }
}
</style>



<template>
  <div class="home-top-wrapper">
    <div class="left">欢迎</div>
    <div class="right">简介</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.home-top-wrapper {
  display: flex;
  justify-content: space-between;
  .left {
    flex-shrink:0;
    background: rgb(75, 75, 224);
    height: 160px;
    width: 50%;
    margin-right: 20px;
    border-radius: 15px;
  }
  .right {
    background: rgb(223, 132, 79);
    height: 160px;
    width: 50%;
    border-radius: 15px;
  }
}
</style>
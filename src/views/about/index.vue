<template>
    <div class="about">
          <el-progress :percentage="50" :format="format"></el-progress>
    </div>
  
</template>
<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      }
    }
  };
</script>

<style  scoped>
.about >>> .el-progress-bar__inner {
        background-color: red;

}
</style>
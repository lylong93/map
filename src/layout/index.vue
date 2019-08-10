<template>
  <div class="app-wrapper">
    <AppAside/>
    <div class="main-container">
      <AppNar/>
      <AppMain/>
    </div>
  </div>
</template>
<script>
import AppAside from './components/AppAside'
import AppNar from './components/AppNar'
import AppMain from './components/AppMain'

export default {
    components:{
      AppAside,
      AppMain,
      AppNar
    }
}
</script>

<style lang="scss" scoped>
.app-wrapper{
  display: flex;
  height: 100%;
}
.main-container {
  width: 100%;
  background: #e8ebe7;
  overflow-y: scroll;
}
</style>
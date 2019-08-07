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
}

.main-container {
  border:1px solid black;
  width: 100%;
}
</style>
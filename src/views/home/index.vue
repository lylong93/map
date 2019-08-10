<template>
  <div>
    <HomeTop/>
    <HomeCard/>
    <HomeShow/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HomeTop from './HomeTop'
import HomeCard from './HomeCard'
import HomeShow from './HomeShow'

export default {
  data() {
    return {
      kkk:[1,2,3],
      arr:[]
    }
  },
  computed: {
    ...mapGetters('user', ['getRoles'])
  },
  mounted() {
    for(var i =0;i<50;i++) {
      this.arr.push(i)
    }
    console.log(this.arr)
  },
  components:{
    HomeTop,
    HomeCard,
    HomeShow
  }
};
</script>

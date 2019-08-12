<template>
  <div class="show-wrapper">
    <div class="left">
      <tabs value="tow" @tab-select="handelClick">
        <tabPan v-for="(i,index) in tabs" :key="index" :lable="i">{{i}}</tabPan>
      </tabs>
    </div>
    <div class="right">
      <shrink height="80px">
        好想再问一遍
        你会等待还是离开
        刮风这天 我试过握着你手
        但偏偏 雨渐渐
        大到我看你不见
        还要多久 我才能在你身边
        等到放晴的那天
        也许我会比较好一点
        从前从前 有个人爱你很久
        但偏偏 风渐渐
        把距离吹得好远
        好不容易 又能再多爱一天
        但故事的最后
        你好像还是说了 拜拜
        所属专辑《叶惠美》封面
        所属专辑《叶惠美》封面
        为你翘课的那一天
        花落的那一天
        等到放晴的那天
        也许我会比较好一点
        从前从前 有个人爱你很久
        但偏偏 风渐渐
        把距离吹得好远
        好不容易 又能再多爱一天
        但故事的最后
        你好像还是说了 拜拜
        所属专辑《叶惠美》封面
        所属专辑《叶惠美》封面
        为你翘课的那一天
        花落的那一天
      </shrink>
    </div>
  </div>
</template>
<script>
import tabs from "@/components/tab/tabs";
import tabPan from "@/components/tab/tabPan";
import shrink from "@/components/shrink/shrink";

export default {
  data() {
    return {
      tabs: ["one", "tow", "three"]
    };
  },
  methods: {
    handelClick(tab, e) {
      console.log(tab);
    }
  },
  components: {
    tabs,
    tabPan,
    shrink
  }
};
</script>
<style lang="scss" scoped>
.show-wrapper {
  display: flex;
  justify-content: space-between;
  .left {
    // width:50%;
    margin-right: 20px;
  }
  .right{
    width:50%;
  }
}
</style>


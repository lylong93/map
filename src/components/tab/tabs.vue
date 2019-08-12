<script>
import tabPan from './tabPan'

export default {
  props: ["tabs", "value"],
  data() {
    return {
       curTab:this.value
    };
  },
  computed:{
      active(){
          return true
      }
  },
  methods:{
      change(cur) {
          console.log(cur)
          this.curTab = cur.propsData.lable
      }
  },
  render(h) {

    const tabs = this.$slots.default.map(({componentOptions}) => {
        return(
            <div class={{
                'light':componentOptions.propsData.lable === this.curTab,
                'tabs':true
            }}
            on-click={()=>this.change(componentOptions)}
            >
               {componentOptions.children}
            </div>
        )
    })

    return (
        <div class="tabs-ui" > 
            {tabs}
        </div>
    );
  }
};
</script>
<style lang="scss" scoped>
.tabs-ui {
  display: flex;
  border: 1px solid black;
  height: 40px;
  .tabs{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
  }
  .light {
      background: red;
  }
}

</style>

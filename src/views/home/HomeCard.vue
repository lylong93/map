<template>
    <div class="home-card-wrapper">
        <div v-for="(i,index) in arr" :key="index" class="card">
            <div class="left">
                <div class="title">总用户</div>
                <div>{{i.num}}</div>
            </div>
            <div class="right">
                <div>logo</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            arr:[{num:100},{num:200},{num:300},{num:400}]
        }
    }
}
</script>
<style lang="scss" scoped>
    .home-card-wrapper{
        display: flex;
        justify-content:space-between;
        margin:20px 0;
        .card{
            height: 100px;
            width:24%;
            display: flex;
            justify-content:space-between;
            background: #fff;
            .left{
                .title {
                    border-bottom: 2px solid black;
                }
            }
            .right{
               background: rgb(156, 113, 153); 
               width:100px;
            }
        }
    }
</style>



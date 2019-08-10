
<script>
export default {
    props:['tabs','value'],

    render(h) {
        return(
            <div class="tabs-ui">
            </div>
        )
    }
}
</script>
<style lang="scss" scoped>
    .tabs-ui{
        display: flex;
        border:1px solid black;
        height: 40px;
        .light{
            background: red;
        }
    }
</style>

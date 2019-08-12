<template>
    <div>
         <video id="videoElement" class="centeredVideo" controls autoplay width="1024" height="576">Your browser is too old which doesn't support HTML5 video.</video>
    </div>
</template>
<script>
import flvjs from 'flv.js'
export default {
    mounted(){
        var player = document.getElementById('videoElement');
        if (flvjs.isSupported()) {
            var flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: 'http://localhost:8500/live/home.flv'    
            });
            flvPlayer.attachMediaElement(videoElement);
            flvPlayer.load(); //加载
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
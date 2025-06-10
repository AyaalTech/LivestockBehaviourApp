<template>
    <VideoPlayer type="default" link="http://192.168.0.101:8000/output.m3u8" :isMuted="true" :isControls="true"
        class="stream-player" :autoplay="true" />
</template>

<script>
import { VideoPlayer } from "vue-hls-video-player";

export default {
    components: {
        VideoPlayer
    }
}
</script>
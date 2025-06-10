<template>
    <VideoPlayer type="default" link="http://10.193.155.190:8000/output.m3u8" :isMuted="true" :isControls="true"
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
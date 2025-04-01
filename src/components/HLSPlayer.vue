<template>
    <VideoPlayer type="default" link="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" :isMuted="true"
        :isControls="false" class="stream-player" :autoplay="true" />
</template>

<script>
import { VideoPlayer } from "vue-hls-video-player";

export default {
    components: {
        VideoPlayer
    }
}
</script>
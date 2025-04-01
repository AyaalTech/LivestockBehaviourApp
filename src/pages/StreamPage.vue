<template>
    <div>
        <h1>Стрим</h1>
        <p>Потоковые данные в реальном времени</p>

        <div class="stream-container">
            <VideoPlayer type="default" link="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" :isMuted="true"
                :isControls="false" class="stream-player" :autoplay="true" />
        </div>
    </div>
</template>

<script setup>
import { VideoPlayer } from 'vue-hls-video-player';
</script>

<style></style>
<template>
    <div>
        <h1>Стрим</h1>
        <p class="sdas">Потоковые данные в реальном времени</p>

        <div class="stream-container">
            <HLSPlayer />
        </div>
    </div>
</template>

<script>
import HLSPlayer from '../components/HLSPlayer.vue';

export default {
    components: {
        HLSPlayer
    }
}
</script>

<style>
.stream-player {
    width: 10%;
    border: 1px solid var(--p-red-300);
    border-radius: 0.25rem;
}

.stream-container {
    margin: 0 auto;
}
</style>
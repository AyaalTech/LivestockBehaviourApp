<template>
    <h1>Стрим</h1>
    <p>Потоковые данные в реальном времени</p>

    <div class="flex flex-row mb-3">
        <div class="card mr-3">
            <Panel header="Стрим 1" class="max-w-max">
                <HLSPlayer />
            </Panel>
        </div>

        <div class="card mr-3">
            <Panel header="Стрим 2" class="max-w-max">
                <HLSPlayer />
            </Panel>
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
    width: 100%;
    border: 1px solid var(--p-red-300);
    border-radius: 0.25rem;
}
</style>
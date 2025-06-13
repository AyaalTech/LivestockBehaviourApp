<template>
    <div class="settings-page">
        <p>Настройки приложения</p>

        <div class="flex flex-row mb-3">
            <div class="card mr-3">
                <Panel header="Порог уверенности">
                    <p class="m-0">
                        <Slider v-model="value" />
                    </p>
                </Panel>
            </div>

            <div class="card">
                <Panel header="Параметры CLAHE">
                    <p class="m-0">
                        <Slider v-model="value" />
                    </p>
                </Panel>
            </div>
        </div>

        <h3>Режим работы</h3>
        <ModeSelection :current-mode="currentMode" @update:mode="handleModeChange" />

        <Button label="Темная тема" @click="toggleDarkMode" class="dark-mode-toggle" />
    </div>
</template>

<script>
import ModeSelection from '../../components/ModeSelection.vue';

export default {
    components: {
        ModeSelection,
    },
    props: {
        currentMode: {
            type: String,
            required: true
        }
    },
    methods: {
        toggleDarkMode() {
            document.documentElement.classList.toggle('setting-app-dark');
        },
        handleModeChange(newMode) {
            this.$emit('update:mode', newMode);
        }
    }
}
</script>

<style scoped>
.dark-mode-toggle {
    margin-top: 1rem;
}
</style>
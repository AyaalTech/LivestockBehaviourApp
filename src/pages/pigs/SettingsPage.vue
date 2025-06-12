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

        <Button label="Темная тема" @click="toggleDarkMode" class="dark-mode-toggle" />
    </div>
</template>

<script>
export default {
    methods: {
        toggleDarkMode() {
            document.documentElement.classList.toggle('setting-app-dark');
        }
    }
}
</script>

<style scoped>
.dark-mode-toggle {}
</style>
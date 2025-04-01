<template>
    <div class="settings-page">
        <h1>Настройки</h1>
        <p>Настройки приложения</p>

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
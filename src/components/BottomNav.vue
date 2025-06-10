<template>
    <div class="bottom-nav">
        <TabMenu :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'Главная', icon: 'pi pi-home', command: () => this.navigateTo('home') },
                { label: 'Анализ', icon: 'pi pi-chart-bar', command: () => this.navigateTo('analysis') },
                { label: 'Стрим', icon: 'pi pi-video', command: () => this.navigateTo('stream') },
                { label: 'Настройки', icon: 'pi pi-cog', command: () => this.navigateTo('settings') },
                { label: 'Справка', icon: 'pi pi-info-circle', command: () => this.navigateTo('info') }
            ]
        }
    },
    methods: {
        navigateTo(route) {
            this.$emit('navigate', route);
        }
    }
}
</script>

<style scoped>
.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1),
        0 -2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
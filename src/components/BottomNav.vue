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
                { label: 'Статус', icon: 'pi pi-server', command: () => this.navigateTo('status') },
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
    position: sticky;
    z-index: 1000;
    top: 0;
}
</style>
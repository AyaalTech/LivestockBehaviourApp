<template>
    <div class="flex navbar justify-content-center shadow-3 w-full surface-overlay">
        <TabMenu :model="items" style="margin: -1px;" :activeIndex="activeIndex" @tab-change="onTabChange" />
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            items: [
                { label: 'Статус', icon: 'pi pi-server', route: 'status' },
                { label: 'Анализ', icon: 'pi pi-chart-bar', route: 'analysis' },
                { label: 'Стрим', icon: 'pi pi-video', route: 'stream' },
                { label: 'Настройки', icon: 'pi pi-cog', route: 'settings' },
                { label: 'Справка', icon: 'pi pi-info-circle', route: 'info' }
            ]
        }
    },
    computed: {
        activeIndex() {
            return this.items.findIndex(item => item.route === this.currentPage);
        }
    },
    methods: {
        onTabChange(event) {
            const selectedRoute = this.items[event.index].route;
            this.$emit('navigate', selectedRoute);
        }
    }
}
</script>

<style scoped>
.navbar {
    position: sticky;
    z-index: 1000;
    top: 0;
}
</style>
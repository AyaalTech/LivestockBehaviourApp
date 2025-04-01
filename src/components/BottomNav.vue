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
                { label: 'Настройки', icon: 'pi pi-cog', command: () => this.navigateTo('settings') }
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
}

:deep(.p-tabmenu .p-tabmenu-nav) {
    justify-content: space-between;
}

:deep(.p-tabmenu .p-tabmenu-nav .p-menuitem) {
    flex: 1;
    text-align: center;
}

:deep(.p-tabmenu .p-tabmenu-nav .p-menuitem-link) {
    justify-content: center;
}
</style>
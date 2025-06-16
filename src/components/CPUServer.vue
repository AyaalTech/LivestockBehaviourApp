<template>
    <Fieldset legend="Состояние локального сервера" class="mb-3">
        <div class="server-stats mb-3 p-3 surface-card border-round shadow-2">
            <h3 class="ml-2">Локальный сервер</h3>
            <div class="flex align-items-center gap-3 mt-3">
                <div class="stat-item col-4">
                    <label class="mb-3">CPU загрузка:</label>
                    <ProgressBar :value="cpu" :showValue="true" unit="%" class="h-2rem" :class="{
                        'high-load': cpu > 90,
                        'medium-load': cpu > 75 && cpu <= 90,
                        'low-load': cpu <= 75
                    }" />
                </div>
                <div class="stat-item col-4">
                    <label class="mb-3">Память:</label>
                    <ProgressBar :value="memory" :showValue="true" unit="%" class="h-2rem" :class="{
                        'high-load': cpu > 90,
                        'medium-load': cpu > 75 && cpu <= 90,
                        'low-load': cpu <= 75
                    }" />
                </div>
            </div>
        </div>
    </Fieldset>
</template>

<script>
export default {
    data() {
        return {
            cpu: 0,
            memory: 0,
            intervalId: null
        };
    },
    methods: {
        async fetchStats() {
            try {
                const response = await fetch('http://192.168.0.101:4000/stats');
                const data = await response.json();
                this.cpu = data.cpu;
                this.memory = data.memory;
            } catch (error) {
                console.error('Ошибка при получении статистики:', error);
            }
        }
    },
    mounted() {
        this.fetchStats();
        this.intervalId = setInterval(() => {
            this.fetchStats();
        }, 3000);
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
    }
};
</script>

<style scoped>
.stat-item label {
    font-weight: 600;
    display: block;
    margin-bottom: 0.25rem;
    color: #555;
    font-size: 0.9rem;
}

.high-load {
    --p-progressbar-value-background: #f44336 !important;
}

.medium-load {
    --p-progressbar-value-background: #ff9800 !important;
}

.low-load {
    --p-progressbar-value-background: #4caf50 !important;
}
</style>

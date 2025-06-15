<template>
    <div :class="['system-status', statusClass, 'flex', 'align-items-center', 'gap-2', 'mb-3']">
        <span class="status-indicator mr-2" @click="toggleStatus" style="cursor: pointer"></span>
        <h3 class="status-text">{{ statusText }}</h3>
    </div>

    <Fieldset legend="Статус серверов" class="mb-3">
        <div v-for="server in servers" :key="server.name"
            class="server-stats mb-3 p-3 surface-card border-round shadow-2">
            <h3 class="ml-2">{{ server.name }}</h3>
            <div class="flex align-items-center gap-3 mt-3">
                <div class="stat-item col-4">
                    <label class="mb-3">GPU загрузка:</label>
                    <ProgressBar :value="server.cpu" :showValue="true" unit="%" class="h-2rem" :class="{
                        'high-load': server.cpu > 90,
                        'medium-load': server.cpu > 75 && server.cpu <= 90
                    }" />
                </div>
                <div class="stat-item col-4">
                    <label class="mb-3">Память:</label>
                    <ProgressBar :value="server.memory" :showValue="true" unit="%" class="h-2rem" :class="{
                        'high-load': server.memory > 90,
                        'medium-load': server.memory > 75 && server.memory <= 90
                    }" />
                </div>
            </div>
        </div>
    </Fieldset>

    <Fieldset legend="Рекомендации по снижению нагрузки на сервера" class="mb-3">
        <ul class="recommendations-list">
            <li>Уменьшить разрешение входного видеопотока</li>
            <li>Увеличить задержку между входящим видеопотоком и его обработкой</li>
            <li>Ограничить количество одновременно обрабатываемых видеопотоков</li>
            <li>Переключение на облегчённую версию модели <span class="planned">(в разработке)</span></li>
            <li>Пакетная обработка кадров вместо потоковой <span class="planned">(в разработке)</span></li>
        </ul>
    </Fieldset>
</template>

<script>
export default {
    props: {
        status: {
            type: String,
            default: 'online',
            validator: (val) => ['online', 'offline'].includes(val)
        }
    },
    data() {
        return {
            currentStatus: this.status,
            servers: [
                { name: 'NVIDIA DGX A100', cpu: 72, memory: 65 },
                { name: 'NVIDIA RTX 3090 Server', cpu: 43, memory: 78 }
            ],
            intervalId: null,
        };
    },
    computed: {
        statusClass() {
            return this.currentStatus === 'online' ? 'online' : 'offline';
        },
        statusText() {
            return this.currentStatus === 'online'
                ? 'Все системы онлайн и работают'
                : 'Видеопотоки офлайн, обратитесь в поддержку';
        }
    },
    methods: {
        toggleStatus() {
            this.currentStatus = this.currentStatus === 'online' ? 'offline' : 'online';
        },
        updateServerLoads() {
            this.servers = this.servers.map(server => {
                // Случайное изменение в диапазоне -10 +10, потом будут реальные :)
                const changeCpu = Math.floor(Math.random() * 21) - 10;
                const changeMemory = Math.floor(Math.random() * 21) - 10;

                let newCpu = server.cpu + changeCpu;
                let newMemory = server.memory + changeMemory;

                newCpu = Math.min(100, Math.max(0, newCpu));
                newMemory = Math.min(100, Math.max(0, newMemory));

                return {
                    ...server,
                    cpu: newCpu,
                    memory: newMemory,
                };
            });
        }
    },
    mounted() {
        this.intervalId = setInterval(() => {
            if (this.currentStatus === 'online') {
                this.updateServerLoads();
            }
        }, 2000);
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
    }
};
</script>

<style scoped>
.status-indicator {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    animation: pulse 2s infinite ease-in-out;
    box-shadow: 0 0 8px 2px;
}

.online {
    color: #4caf50;
}

.online .status-indicator {
    background-color: #4caf50;
    box-shadow: 0 0 8px 2px rgba(76, 175, 80, 0.7);
}

.offline {
    color: #f44336;
}

.offline .status-indicator {
    background-color: #f44336;
    box-shadow: 0 0 8px 2px rgba(244, 67, 54, 0.7);
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
        opacity: 0.8;
    }

    50% {
        transform: scale(1.4);
        opacity: 0.4;
    }
}

.server-stats {
    background-color: #fff;
    border: 1px solid #ddd;
}

.stat-item label {
    font-weight: 600;
    display: block;
    margin-bottom: 0.25rem;
    color: #555;
    font-size: 0.9rem;
}

.system-status,
.server-stats {
    --p-progressbar-value-background: #4caf50;
}

.recommendations-list {
    list-style-type: disc;
}

.recommendations-list .planned {
    font-style: italic;
    color: #999;
    font-size: 0.85rem;
    margin-left: 0.5rem;
}

.high-load {
    --p-progressbar-value-background: #f44336 !important;
}

.medium-load {
    --p-progressbar-value-background: #ff9800 !important;
}
</style>

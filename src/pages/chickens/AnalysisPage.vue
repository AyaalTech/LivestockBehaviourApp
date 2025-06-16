<template>
    <div class="info-card">
        <h3>Анализ поведения</h3>

        <Card class="json-card w-6 min-h-25rem h-25rem max-h-25rem shadow-3">
            <template #content>
                <pre class="pretty-json">{{ prettyJson }}</pre>
            </template>
        </Card>

        <div class="text-sm text-gray-500 mt-2">
            Последнее обновление: {{ behaviorData?.timestamp || '—' }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'BehaviorInfoPage',
    data() {
        return {
            behaviorData: null,
            intervalId: null
        };
    },
    computed: {
        prettyJson() {
            return this.behaviorData
                ? JSON.stringify(this.behaviorData, null, 4)
                : 'Нет данных...';
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('http://192.168.0.101:4000/data/1');
                const data = await response.json();
                this.behaviorData = data;
                console.log('Обновлены данные поведения:', data);
            } catch (error) {
                console.error('Ошибка при получении данных поведения:', error);
            }
        }
    },
    mounted() {
        this.fetchData();
        this.intervalId = setInterval(this.fetchData, 1000);
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
    }
};
</script>

<style scoped>
.json-card {
    overflow-y: auto;
    border-radius: 8px;
}

.pretty-json {
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 0.8rem;
    white-space: pre-wrap;
    word-break: break-word;
}
</style>

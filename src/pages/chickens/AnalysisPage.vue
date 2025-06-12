<template>
    <div class="p-4">
        <div class="grid gap-8">
            <!-- График активности по времени суток -->
            <div class="card">
                <h2 class="text-xl font-semibold mb-4">Активность птиц по времени суток</h2>
                <Chart type="line" :data="activityData" :options="lineOptions" class="h-[25rem]" />
            </div>

            <!-- Распределение типов аномалий -->
            <div class="card">
                <h2 class="text-xl font-semibold mb-4">Распределение типов аномалий</h2>
                <Chart type="pie" :data="anomalyDistribution" :options="pieOptions" class="h-[25rem]" />
            </div>

            <!-- Статистика по дням недели -->
            <div class="card">
                <h2 class="text-xl font-semibold mb-4">Выявленные проблемы за неделю</h2>
                <Chart type="bar" :data="dailyStats" :options="barOptions" class="h-[25rem]" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Данные активности птиц
const activityData = ref({
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
        {
            label: 'Нормальная активность (здоровые особи)',
            data: [5, 3, 85, 92, 78, 15],
            borderColor: '#4ade80',
            backgroundColor: 'rgba(74, 222, 128, 0.1)',
            fill: true,
            tension: 0.3
        },
        {
            label: 'Аномальная активность (больные особи)',
            data: [12, 8, 45, 38, 62, 25],
            borderColor: '#f87171',
            backgroundColor: 'rgba(248, 113, 113, 0.1)',
            fill: true,
            tension: 0.3
        }
    ]
});

// Распределение аномалий
const anomalyDistribution = ref({
    labels: ['Снижение активности', 'Агрессия', 'Отказ от корма', 'Необычные позы', 'Другие'],
    datasets: [
        {
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
                '#f59e0b',
                '#ef4444',
                '#10b981',
                '#3b82f6',
                '#64748b'
            ],
            hoverOffset: 10
        }
    ]
});

// Ежедневная статистика
const dailyStats = ref({
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [
        {
            label: 'Выявленные аномалии',
            data: [12, 19, 15, 8, 24, 10, 5],
            backgroundColor: '#ef4444'
        },
        {
            label: 'Подтвержденные заболевания',
            data: [3, 5, 4, 2, 7, 1, 0],
            backgroundColor: '#7c3aed'
        }
    ]
});

// Опции для графиков
const lineOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top'
        },
        tooltip: {
            mode: 'index',
            intersect: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Процент активности'
            }
        }
    }
});

const pieOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right'
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    return `${context.label}: ${context.raw}%`;
                }
            }
        }
    }
});

const barOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top'
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Количество случаев'
            }
        }
    }
});

const radarOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top'
        }
    },
    scales: {
        r: {
            angleLines: {
                display: true
            },
            suggestedMin: 50,
            suggestedMax: 100
        }
    }
});
</script>

<style scoped>
.card {
    @apply p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700;
}
</style>
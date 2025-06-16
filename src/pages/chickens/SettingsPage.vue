<template>
    <div class="settings-page">
        <h3>Настройки приложения</h3>

        <div class="flex gap-3 mb-3">
            <Fieldset legend="Выбор режима работы приложения" class="w-6">
                <div class="flex gap-2 align-items-center p-3">
                    <i class="pi pi-sync"></i>
                    <span>Перейти к режиму:</span>
                    <ModeSelection :current-mode="currentMode" @update:mode="handleModeChange" class="ml-2" />
                </div>
            </Fieldset>

            <Fieldset legend="Тема оформления" class="w-6">
                <div class="flex gap-2 align-items-center p-3">
                    <i :class="darkMode ? 'pi pi-sun' : 'pi pi-moon'"></i>
                    <span>Перейти на:</span>
                    <Button :label="darkMode ? 'Светлую тему' : 'Темную тему'" @click="toggleDarkMode"
                        severity="primary" variant="text" raised class="ml-2" />
                </div>
            </Fieldset>
        </div>

        <Divider />

        <form @submit.prevent="handleSubmit">
            <div class="flex flex-row mb-3 gap-3">
                <div class="card w-6">
                    <Panel header="Порог уверенности" class="p-3">
                        <Slider v-model="confidenceThreshold" :step="0.1" :min="0.1" :max="1" class="mt-3" />
                        <label for="confidence-input" class="block mt-3 mb-1">Ввод:</label>
                        <InputText v-model.number="confidenceThreshold" class="mt-3" />
                        <small v-if="!isValidConfidence(confidenceThreshold)" class="p-error ml-3">
                            Значение должно быть от 0.1 до 1 (например 0.7)
                        </small>
                        <Button label="Применить" @click="applyConfidence" outlined class="mt-3 ml-3" />
                    </Panel>
                </div>

                <div class="card w-6">
                    <Panel header="Параметры CLAHE" class="p-3">
                        <Slider v-model="claheValue" :step="0.5" :min="0" :max="4" class="mt-3" />
                        <label for="clahe-input" class="block mt-3 mb-1">Ввод:</label>
                        <InputText id="clahe-input" v-model.number="claheValue" class="mt-3" />
                        <small v-if="!isValidClahe(claheValue)" class="p-error ml-3">
                            Значение должно быть от 0 до 4
                        </small>
                        <Button label="Применить" @click="applyClahe" outlined class="mt-3 ml-3" />
                    </Panel>
                </div>
            </div>
        </form>

        <Divider />
        <div class="card w-full">
            <Panel header="Выбор модели" class="p-3">
                <div class="flex align-items-center gap-2">
                    <label for="model-select" class="block mb-2">Модель:</label>
                    <Select id="model-select" :options="modelOptions" v-model="selectedModel" optionLabel="label"
                        placeholder="Выберите модель" class="w-20rem" />
                    <Button label="Применить" class="ml-3" outlined @click="applyModel" />
                </div>
                <small class="block mt-2">Текущая модель: <strong>{{ selectedModel.label }}</strong></small>
            </Panel>
        </div>
    </div>
</template>

<script>
import ModeSelection from '../../components/ModeSelection.vue';

export default {
    components: {
        ModeSelection,
    },
    props: {
        currentMode: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            darkMode: false,
            confidenceThreshold: 0.5,
            claheValue: 0,
            selectedModel: { label: 'chicken-behaviour-best.pt', value: 'chicken-behaviour-best.pt' },
            modelOptions: [
                { label: 'chicken-behaviour-best.pt', value: 'chicken-behaviour-best.pt' },
                { label: 'default.pt', value: 'default.pt' },
                { label: 'experimental-model.pt', value: 'experimental-model.pt' }
            ]
        }
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            document.documentElement.classList.toggle('setting-app-dark');
        },
        handleModeChange(newMode) {
            this.$emit('update:mode', newMode);
        },
        isValidConfidence(value) {
            return value >= 0.1 && value <= 1;
        },
        isValidClahe(value) {
            return value >= 0 && value <= 4;
        },
        applyConfidence() {
            if (this.isValidConfidence(this.confidenceThreshold)) {
                fetch('http://192.168.0.101:4000/change_conf', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ conf: this.confidenceThreshold })
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status) {
                            alert(`Порог уверенности применён: ${this.confidenceThreshold}`);
                        } else {
                            alert('Ошибка при применении нового порога.');
                        }
                    })
                    .catch(error => {
                        console.error('Ошибка при запросе:', error);
                        alert('Ошибка при соединении с сервером.');
                    });
            } else {
                alert('Некорректное значение уверенности. Введите число от 0.1 до 1.');
            }
        },
        applyClahe() {
            if (this.isValidClahe(this.claheValue)) {
                fetch('http://192.168.0.101:4000/change_clahe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ clahe: this.claheValue })
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status) {
                            alert(`CLAHE применён: ${this.claheValue}`);
                        } else {
                            alert('Ошибка при применении CLAHE');
                        }
                    })
                    .catch(error => {
                        console.error('Ошибка при запросе:', error);
                        alert('Ошибка при соединении с сервером.');
                    });
            } else {
                alert('Некорректное значение CLAHE. Введите число от 0 до 4.');
            }
        },
        handleSubmit() {
            if (this.isValidConfidence(this.confidenceThreshold) && this.isValidClahe(this.claheValue)) {
                alert('Настройки успешно сохранены');
            } else {
                alert('Пожалуйста, проверьте введенные значения:\n- Уверенность: от 0.1 до 1\n- CLAHE: от 0 до 4');
            }
        },
        applyModel() {
            alert(`Выбрана модель: ${this.selectedModel.label}`);
            this.$emit('update:model', this.selectedModel.value);
        }
    }
}
</script>
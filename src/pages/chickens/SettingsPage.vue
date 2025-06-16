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
                        <small v-if="!isValidConfidence(confidenceThreshold)" class="p-error ml-3">Значение должно быть
                            от 0.1 до 1
                            (например 0.7)</small>
                    </Panel>
                </div>

                <div class="card w-6">
                    <Panel header="Параметры CLAHE" class="p-3">
                        <Slider v-model="claheValue" :step="0.5" :min="0" :max="4" class="mt-3" />
                        <label for="clahe-input" class="block mt-3 mb-1">Ввод:</label>
                        <InputText id="clahe-input" v-model.number="claheValue" class="mt-3" />
                        <small v-if="!isValidClahe(claheValue)" class="p-error ml-3">Значение должно быть от 0 до
                            4</small>
                    </Panel>
                </div>
            </div>

            <Button type="submit" label="Сохранить настройки" severity="Primary" />
        </form>

        <Divider />
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
        handleSubmit() {
            if (this.isValidConfidence(this.confidenceThreshold) && this.isValidClahe(this.claheValue)) {
                alert('Настройки успешно сохранены');
            } else {
                alert('Пожалуйста, проверьте введенные значения:\n- Уверенность: от 0.1 до 1\n- CLAHE: от 0 до 4');
            }
        }
    }
}
</script>
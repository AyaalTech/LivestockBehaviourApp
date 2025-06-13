<template>
    <div class="settings-page">
        <p>Настройки приложения</p>

        <div class="flex flex-row mb-3">
            <div class="card mr-3">
                <Panel header="Порог уверенности">
                    <p class="m-0">
                        <Slider v-model="value" />
                    </p>
                </Panel>
            </div>

            <div class="card">
                <Panel header="Параметры CLAHE">
                    <p class="m-0">
                        <Slider v-model="value" />
                    </p>
                </Panel>
            </div>
        </div>

        <div class="flex gap-3">
            <Fieldset legend="Выбор режима работы приложения" class="w-6">
                <div class="flex gap-2 align-items-center p-3">
                    <i class="pi pi-sync"></i>
                    <span>Перейти к режиму:</span>
                    <ModeSelection :current-mode="currentMode" @update:mode="handleModeChange" />
                </div>
            </Fieldset>

            <Fieldset legend="Тема оформления" class="w-6">
                <div class="flex gap-2 align-items-center p-3">
                    <i :class="darkMode ? 'pi pi-sun' : 'pi pi-moon'"></i>
                    <span>Перейти на:</span>
                    <Button :label="darkMode ? 'Светлую тему' : 'Темную тему'" @click="toggleDarkMode"
                        severity="primary" variant="text" raised />
                </div>
            </Fieldset>
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
            value: 50
        }
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            document.documentElement.classList.toggle('setting-app-dark');
        },
        handleModeChange(newMode) {
            this.$emit('update:mode', newMode);
        }
    }
}
</script>
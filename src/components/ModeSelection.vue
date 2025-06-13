<template>
    <div>
        <Button :label="currentMode === 'chickens' ? 'Свиньи' : 'Курицы'" @click="showConfirmationDialog"
            class="mode-switcher" />

        <Dialog v-model:visible="displayConfirmation" header="Подтверждение" :style="{ width: '350px' }" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span>Приложение будет перезагружено. Продолжить?</span>
            </div>
            <template #footer>
                <Button label="Нет" icon="pi pi-times" @click="displayConfirmation = false" class="p-button-text" />
                <Button label="Да" icon="pi pi-check" @click="confirmModeChange" class="p-button-text" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    currentMode: {
        type: String,
        required: true,
        default: 'chickens'
    }
});

const emit = defineEmits(['update:mode']);

const displayConfirmation = ref(false);
const pendingMode = ref(null);

const showConfirmationDialog = () => {
    pendingMode.value = props.currentMode === 'chickens' ? 'pigs' : 'chickens';
    displayConfirmation.value = true;
};

const confirmModeChange = () => {
    emit('update:mode', pendingMode.value);
    displayConfirmation.value = false;
    // window.location.reload();
};
</script>

<style scoped>
.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.mode-switcher {
    margin: 0;
}
</style>
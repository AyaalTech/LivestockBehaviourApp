<template>
    <h3>Мониторинг камер фермы в реальном времени, с возможностью добавления новых камер.</h3>

    <Fieldset legend="Выбор камер" class="mb-3">
        <div class="mb-3 flex gap-3 p-3">
            <Button label="Выбрать все" icon="pi pi-check-square" class="p-button-sm" @click="selectAllCameras" />
            <Button label="Сбросить выбор" icon="pi pi-times" class="p-button-sm p-button-secondary"
                @click="clearSelectedCameras" />
            <Button label="Удалить выбранные" icon="pi pi-trash" class="p-button-sm p-button-warn"
                @click="deleteSelectedCameras" />
        </div>

        <div v-for="(cameras, groupName) in groupedCameras" :key="groupName" class="mb-3 px-3">
            <p class="mb-3">
                по адресу: <strong>{{ groupName }}</strong>
            </p>

            <div class="grid">
                <div v-for="camera in cameras" :key="camera.id" class="col-12 md:col-3">
                    <div class="flex align-items-center">
                        <Checkbox :inputId="camera.id" :value="camera" v-model="selectedCameras" class="mr-2" />
                        <label :for="camera.id">{{ camera.location }} (ID: {{ camera.id }})</label>
                    </div>
                </div>
            </div>
        </div>
    </Fieldset>

    <Fieldset legend="Добавление камер" class="mb-3">
        <div class="flex flex-wrap gap-3 p-3">
            <InputText v-model="newCameraId" placeholder="Номер камеры" class="w-12 md:w-2" />
            <InputText v-model="newCameraLocation" placeholder="Адрес фермы" class="w-12 md:w-3" />
            <InputText v-model="newCameraUrl" placeholder="URL потока" class="w-12 md:w-3" />
            <Button label="Добавить" icon="pi pi-plus" @click="addCamera" />
        </div>
    </Fieldset>

    <div class="flex align-items-center gap-3 mb-3">
        <label for="columnSelect" class="flex align-items-center gap-2">
            <i class="pi pi-th-large"></i>
            <strong>Сетка:</strong>
        </label>
        <Select id="columnSelect" v-model="columnClass" :options="columnOptions" optionLabel="label" optionValue="value"
            class="w-12 md:w-3" placeholder="Выберите размер" />
    </div>

    <div class="grid mb-3">
        <div v-for="(camera, index) in selectedCameras" :key="index" :class="['card-wrapper', columnClass]">
            <div class="card">
                <Panel :header="`${camera.location} (ID: ${camera.id})`">
                    <VideoPlayer type="default" :link="camera.url" :isMuted="true" :isControls="true"
                        class="stream-player shadow-3" :autoplay="true" />
                </Panel>
            </div>
        </div>
    </div>
</template>

<script>
import { VideoPlayer } from 'vue-hls-video-player';

export default {
    components: {
        VideoPlayer
    },
    props: {
        currentMode: String
    },
    data() {
        return {
            allCameras: [
                {
                    id: '23-1',
                    location: 'Фермовская 23',
                    url: 'http://192.168.9.101:8000/output2.m3u8'
                },
                {
                    id: '27-1',
                    location: 'Фермовская 27',
                    url: 'http://192.168.9.101:8000/output1.m3u8'
                }
            ],
            selectedCameras: [],
            newCameraId: '',
            newCameraLocation: '',
            newCameraUrl: '',
            columnClass: 'md:col-6',
            columnOptions: [
                { label: '1 колонка', value: 'md:col-12' },
                { label: '2 колонки', value: 'md:col-6' },
                { label: '4 колонки', value: 'md:col-3' }
            ]
        };
    },
    mounted() {
        // Камеры с Фермовской выбраны изначально
        this.selectedCameras = this.allCameras.filter(cam =>
            cam.location.includes('Фермовская')
        );
    },
    computed: {
        groupedCameras() {
            const groups = {};
            this.allCameras.forEach(cam => {
                const group = cam.location.split(' ')[0]; // первое слово
                if (!groups[group]) {
                    groups[group] = [];
                }
                groups[group].push(cam);
            });
            return groups;
        }
    },
    methods: {
        addCamera() {
            if (this.newCameraId && this.newCameraLocation && this.newCameraUrl) {
                const newCam = {
                    id: this.newCameraId,
                    location: this.newCameraLocation,
                    url: this.newCameraUrl
                };
                this.allCameras.push(newCam);
                this.newCameraId = '';
                this.newCameraLocation = '';
                this.newCameraUrl = '';
            }
        },
        selectAllCameras() {
            this.selectedCameras = [...this.allCameras];
        },
        clearSelectedCameras() {
            this.selectedCameras = [];
        },
        deleteSelectedCameras() {
            const selectedIds = new Set(this.selectedCameras.map(cam => cam.id));
            this.allCameras = this.allCameras.filter(cam => !selectedIds.has(cam.id));
            this.selectedCameras = [];
        }
    }
};
</script>

<style>
.stream-player {
    width: 100%;
    border-radius: 0.25rem;
    aspect-ratio: 16 / 9;
}
</style>

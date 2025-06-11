<template>
    <p>Потоковые данные в реальном времени</p>

    <Fieldset legend="Выбор камер">
        <div class="grid">
            <div v-for="camera in allCameras" :key="camera.id" class="col-12 md:col-3">
                <div class="flex align-items-center">
                    <Checkbox :inputId="camera.id" :value="camera" v-model="selectedCameras" class="mr-2" />
                    <label :for="camera.id">{{ camera.location }} (ID: {{ camera.id }})</label>
                </div>
            </div>
        </div>
    </Fieldset>

    <Fieldset legend="Добавление камер" class="mb-3">
        <div class="flex flex-wrap gap-2">
            <InputText v-model="newCameraId" placeholder="Номер камеры" class="w-12 md:w-2" />
            <InputText v-model="newCameraLocation" placeholder="Адрес фермы" class="w-12 md:w-3" />
            <InputText v-model="newCameraUrl" placeholder="URL потока" class="w-12 md:w-3" />
            <Button label="Добавить" icon="pi pi-plus" @click="addCamera" />
        </div>
    </Fieldset>

    <div class="grid">
        <div v-for="(camera, index) in selectedCameras" :key="index" class="col-12 md:col-6">
            <div class="card">
                <Panel :header="`${camera.location} (ID: ${camera.id})`">
                    <VideoPlayer type="default" :link="camera.url" :isMuted="true" :isControls="true"
                        class="stream-player" :autoplay="true" />
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
            newCameraUrl: ''
        };
    },
    mounted() {
        // Камеры с Фермовской выбраны изначально
        this.selectedCameras = this.allCameras.filter(cam =>
            cam.location.includes('Фермовская')
        );
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

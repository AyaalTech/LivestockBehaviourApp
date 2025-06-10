<template>
    <p>Потоковые данные в реальном времени</p>
    <Fieldset legend="Список адресов и камер">
        <div class="card mb-3">
            <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox"
                tableStyle="min-width: 50rem">
                <Column field="name" header="Name" expander style="width: 33%"></Column>
                <Column field="size" header="Size" style="width: 33%"></Column>
                <Column field="type" header="Type" style="width: 33%"></Column>
            </TreeTable>
        </div>
    </Fieldset>
    <Fieldset legend="Добавление камер" class="mb-3">
        <div class="flex flex-row">
            <div class="field w-2 mb-0 mr-2">
                <InputText id="camera-name" v-model="newCameraId" placeholder="Номер камеры" class="w-full" />
            </div>
            <div class="field w-3 mb-0 mr-2">
                <InputText id="camera-name" v-model="newCameraLocation" placeholder="Адрес фермы" class="w-full" />
            </div>
            <div class="field w-3 mb-0 mr-2">
                <InputText id="stream-url" v-model="newCameraUrl" placeholder="URL потока" class="w-full" />
            </div>
            <Button label="Добавить" icon="pi pi-plus" iconPos="left" @click="addCamera" />
        </div>
    </Fieldset>
    <div class="grid">
        <div v-for="(camera, index) in cameras" :key="index" class="col-6">
            <div class="card">
                <Panel :header="`${camera.name} (ID: ${camera.id})`">
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
            nodes: [],
            selectedKey: {},
            cameras: [
                {
                    id: '23-1',
                    name: 'Фермовская 23',
                    url: 'http://192.168.9.101:8000/output2.m3u8'
                },
                {
                    id: '27-1',
                    name: 'Фермовская 27',
                    url: 'http://192.168.9.101:8000/output1.m3u8'
                }
            ],
            newCameraName: '',
            newCameraUrl: ''
        };
    },
    mounted() {
        this.nodes = [
            {
                key: '0',
                data: {
                    name: 'Applications',
                    size: '100mb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'Vue.js',
                            size: '25mb',
                            type: 'File'
                        }
                    },
                    {
                        key: '0-1',
                        data: {
                            name: 'React',
                            size: '25mb',
                            type: 'File'
                        }
                    }
                ]
            },
            {
                key: '1',
                data: {
                    name: 'Documents',
                    size: '75mb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '1-0',
                        data: {
                            name: 'Resume.docx',
                            size: '30mb',
                            type: 'Document'
                        }
                    },
                    {
                        key: '1-1',
                        data: {
                            name: 'Project.pdf',
                            size: '45mb',
                            type: 'PDF'
                        }
                    }
                ]
            }
        ];
    },
    methods: {
        addCamera() {
            if (this.newCameraName && this.newCameraUrl) {
                this.cameras.push({
                    id: this.newCameraId,
                    location: this.newCameraLocation,
                    url: this.newCameraUrl
                });
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
}
</style>
<template>
    <p>Потоковые данные в реальном времени</p>
    <div class="card mb-3">
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox"
            tableStyle="min-width: 50rem">
            <Column field="name" header="Name" expander style="width: 33%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
        </TreeTable>
    </div>

    <div class="grid">
        <div class="col-6">
            <div class="card px-1">
                <Panel header="Стрим 1">
                    <HLSPlayer />
                </Panel>
            </div>
        </div>

        <div class="col-6">
            <div class="card px-1">
                <Panel header="Стрим 2">
                    <HLSPlayer />
                </Panel>
            </div>
        </div>

        <div class="col-6">
            <div class="card px-1">
                <Panel header="Стрим 3">
                    <HLSPlayer />
                </Panel>
            </div>
        </div>

        <div class="col-6">
            <div class="card px-1">
                <Panel header="Стрим 4">
                    <HLSPlayer />
                </Panel>
            </div>
        </div>
    </div>
</template>

<script>
import HLSPlayer from '../components/HLSPlayer.vue';
import { VideoPlayer } from 'vue-hls-video-player';

export default {
    components: {
        VideoPlayer,
        HLSPlayer
    },
    data() {
        return {
            nodes: [],
            selectedKey: {}
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
    }
};
</script>

<style>
.stream-player {
    width: 100%;
    border-radius: 0.25rem;
}
</style>
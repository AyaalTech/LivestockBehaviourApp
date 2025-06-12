<template>
    <div class="absolute top-4 left-4">
        <Button label="Выбор режима" icon="pi pi-cog" @click="showDialog = true" />

        <Dialog v-model:visible="showDialog" header="Выберите режим" modal class="w-6">
            <div class="flex gap-4 justify-center">
                <Card class="w-6 cursor-pointer hover:shadow-lg" @click="select('chickens')" style="overflow: hidden">
                    <template #header>
                        <img alt=" user header" src="../assets/chicken.png" class="w-full" />
                    </template>
                    <template #title>Advanced Card</template>
                    <template #subtitle>Card subtitle</template>
                    <template #content>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                            repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
                            ratione quam perferendis esse, cupiditate neque
                            quas!
                        </p>
                    </template>
                    <template #footer>
                        <div class="flex gap-4 mt-1">
                            <Button label="Cancel" severity="secondary" outlined class="w-full" />
                            <Button label="Save" class="w-full" />
                        </div>
                    </template>
                </Card>

                <Card class="w-6 cursor-pointer hover:shadow-lg" @click="select('pigs')">

                </Card>
            </div>
        </Dialog>
    </div>
</template>

<script>
export default {
    props: {
        visibleInitially: {
            type: Boolean,
            default: true
        }
    },
    emits: ['modeSelected'],
    data() {
        return {
            showDialog: this.visibleInitially
        };
    },
    methods: {
        select(mode) {
            this.showDialog = false;
            this.$emit('modeSelected', mode);
        }
    }
};
</script>

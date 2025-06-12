<template>
  <div>
    <ModeSelection v-if="!modeSelected" @modeSelected="selectMode" />

    <div v-if="modeSelected">
      <NavBar :currentPage="currentPage" @navigate="changePage" />
      <div class="content">
        <component :is="currentPageComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import ModeSelection from './components/ModeSelection.vue';
import NavBar from './components/NavBar.vue';

// Chicken pages
import ChickenStatusPage from './pages/chickens/StatusPage.vue';
import ChickenAnalysisPage from './pages/chickens/AnalysisPage.vue';
import ChickenStreamPage from './pages/chickens/StreamPage.vue';
import ChickenSettingsPage from './pages/chickens/SettingsPage.vue';
import ChickenInfoPage from './pages/chickens/InfoPage.vue';

// Pig pages
import PigStatusPage from './pages/pigs/StatusPage.vue';
import PigAnalysisPage from './pages/pigs/AnalysisPage.vue';
import PigStreamPage from './pages/pigs/StreamPage.vue';
import PigSettingsPage from './pages/pigs/SettingsPage.vue';
import PigInfoPage from './pages/pigs/InfoPage.vue';

export default {
  components: {
    ModeSelection,
    NavBar,

    ChickenStatusPage,
    ChickenAnalysisPage,
    ChickenStreamPage,
    ChickenSettingsPage,
    ChickenInfoPage,

    PigStatusPage,
    PigAnalysisPage,
    PigStreamPage,
    PigSettingsPage,
    PigInfoPage
  },
  data() {
    return {
      mode: null,
      currentPage: 'stream'
    };
  },
  computed: {
    modeSelected() {
      return this.mode !== null;
    },
    currentPageComponent() {
      const components = {
        chickens: {
          status: 'ChickenStatusPage',
          analysis: 'ChickenAnalysisPage',
          stream: 'ChickenStreamPage',
          settings: 'ChickenSettingsPage',
          info: 'ChickenInfoPage'
        },
        pigs: {
          status: 'PigStatusPage',
          analysis: 'PigAnalysisPage',
          stream: 'PigStreamPage',
          settings: 'PigSettingsPage',
          info: 'PigInfoPage'
        }
      };
      return components[this.mode][this.currentPage];
    }
  },
  methods: {
    selectMode(mode) {
      this.mode = mode;
    },
    changePage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style scoped>
.content {
  padding: 1rem 1.5rem;
}
</style>
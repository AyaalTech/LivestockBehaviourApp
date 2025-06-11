<template>
  <div>
    <NavBar :currentPage="currentPage" @navigate="changePage" />
    <div class="content">
      <component :is="currentPageComponent" />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import StatusPage from './pages/StatusPage.vue';
import AnalysisPage from './pages/AnalysisPage.vue';
import StreamPage from './pages/StreamPage.vue';
import SettingsPage from './pages/SettingsPage.vue';
import InfoPage from './pages/InfoPage.vue';

export default {
  components: {
    NavBar,
    StatusPage,
    AnalysisPage,
    StreamPage,
    SettingsPage,
    InfoPage
  },
  data() {
    return {
      currentPage: 'stream'
    }
  },
  computed: {
    currentPageComponent() {
      return {
        'status': 'StatusPage',
        'analysis': 'AnalysisPage',
        'stream': 'StreamPage',
        'settings': 'SettingsPage',
        'info': 'InfoPage'
      }[this.currentPage];
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    }
  }
}
</script>

<style>
.content {
  padding-top: 1rem;
  padding-bottom: 1rem;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
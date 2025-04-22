<template>
  <div>
    <div class="content">
      <component :is="currentPageComponent" />
    </div>
    <BottomNav @navigate="changePage" />
  </div>
</template>

<script>
import BottomNav from './components/BottomNav.vue';
import HomePage from './pages/HomePage.vue';
import AnalysisPage from './pages/AnalysisPage.vue';
import StreamPage from './pages/StreamPage.vue';
import SettingsPage from './pages/SettingsPage.vue';

export default {
  components: {
    BottomNav,
    HomePage,
    AnalysisPage,
    StreamPage,
    SettingsPage,
  },
  data() {
    return {
      currentPage: 'home'
    }
  },
  computed: {
    currentPageComponent() {
      return {
        'home': 'HomePage',
        'analysis': 'AnalysisPage',
        'stream': 'StreamPage',
        'settings': 'SettingsPage'
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
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
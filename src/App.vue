<template>
  <div>
    <Button label="Toggle Dark Mode" @click="toggleDarkMode" class="dark-mode-toggle" />

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
    SettingsPage
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
    toggleDarkMode() {
      document.documentElement.classList.toggle('my-app-dark');
    },
    changePage(page) {
      this.currentPage = page;
    }
  }
}
</script>

<style>
.dark-mode-toggle {
  position: fixed;
  z-index: 1000;
}

.content {
  padding-bottom: 60px;
  min-height: calc(100vh - 60px);
}
</style>
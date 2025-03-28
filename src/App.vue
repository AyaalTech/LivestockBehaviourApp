<template>
    <div>
      <Button 
        label="Toggle Dark Mode" 
        @click="toggleDarkMode" 
        class="dark-mode-toggle"
      />
      <h1>💖 Hello World!</h1>
      <p>Welcome to your Electron application.</p>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      toggleDarkMode() {
        document.documentElement.classList.toggle('my-app-dark');
      }
    }
  }
  </script>
  
  <style>
  .dark-mode-toggle {
    position: fixed;
    z-index: 1000;
  }
  </style>
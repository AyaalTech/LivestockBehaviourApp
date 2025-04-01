import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Nora from "@primeuix/themes/Material";
import "primeflex/primeflex.css";
import "./assets/primeflex-overrides.css";
import "primeicons/primeicons.css";

// Импорты компонентов
import TabMenu from "primevue/tabmenu";
import Button from "primevue/button";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Nora,
    options: {
      darkModeSelector: ".my-app-dark",
    },
  },
});

app.component("Button", Button);
app.component("TabMenu", TabMenu);

app.mount("#app");

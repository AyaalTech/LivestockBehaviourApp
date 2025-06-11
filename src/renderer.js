import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Material from "@primeuix/themes/Material";
import { definePreset } from "@primeuix/themes";

import "primeflex/primeflex.css";
import "./assets/primeflex-overrides.css";
import "primeicons/primeicons.css";

// Импорты компонентов
import TabMenu from "primevue/tabmenu";
import Button from "primevue/button";
import Chart from "primevue/chart";
import Slider from "primevue/slider";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import Panel from "primevue/panel";
import TreeTable from "primevue/treetable";
import Column from "primevue/column";
import Fieldset from "primevue/fieldset";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";

const app = createApp(App);

const RatimirTheme = definePreset(Material, {
  semantic: {
    primary: {
      50: "#fee2e2",
      100: "#fecaca",
      200: "#fca5a5",
      300: "#f87171",
      400: "#ef4444",
      500: "#dc2626",
      600: "#b91c1c",
      700: "#991b1b",
      800: "#7f1d1d",
      900: "#63171b",
      950: "#450a0a",
    },
  },
});

app.use(PrimeVue, {
  theme: {
    preset: RatimirTheme,
    options: {
      darkModeSelector: ".setting-app-dark",
    },
  },
});

app.component("Button", Button);
app.component("TabMenu", TabMenu);
app.component("Chart", Chart);
app.component("Slider", Slider);
app.component("InputText", InputText);
app.component("Select", Select);
app.component("Panel", Panel);
app.component("TreeTable", TreeTable);
app.component("Column", Column);
app.component("Fieldset", Fieldset);
app.component("Checkbox", Checkbox);
app.component("Dropdown", Dropdown);
app.mount("#app");

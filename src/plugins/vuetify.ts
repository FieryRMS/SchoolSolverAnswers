// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const mq = window.matchMedia("(prefers-color-scheme: dark)");

const vuetify = createVuetify({
  theme: { defaultTheme: mq.matches ? "dark" : "light" },
});

export default vuetify;

mq.addEventListener(
  "change",
  (e) => (vuetify.theme.global.name.value = e.matches ? "dark" : "light")
);
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

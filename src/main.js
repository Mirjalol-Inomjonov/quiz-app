import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/global.scss";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const app = createApp(App);

const options = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 5,
  newestOnTop: true,
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
};

app.use(router);
app.use(Toast, options);

app.mount("#app");

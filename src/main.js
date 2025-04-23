import "./scss/style.scss"
import {createApp} from "vue"
import App from "/src/vue/stack/App.vue"
import { registerPlugins } from "./utils/plugins"

const app = createApp(App)
registerPlugins(app)
app.mount("#app")
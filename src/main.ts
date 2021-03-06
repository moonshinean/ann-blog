import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icon/iconfont.css'
import { ElButton, ElTimeline, ElTimelineItem, ElTag} from 'element-plus';
// 导入下雪工具
import '@/utils/snow';
// 导入 markdown 工具
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
const app = createApp(App);
app.component(ElButton.name, ElButton)
app.component(ElTimelineItem.name, ElTimelineItem)
app.component(ElTimeline.name, ElTimeline)
app.component(ElTag.name, ElTag)
app.use(mavonEditor)
app.use(store)
app.use(router)
app.mount('#app')

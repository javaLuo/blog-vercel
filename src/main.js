import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { ElButton, ElMessage, ElInput, ElBreadcrumb, ElBreadcrumbItem, ElPagination, ElTooltip, ElIcon } from "element-plus";

import "dayjs/locale/zh-cn";

const app = createApp(App);
app.$message = ElMessage;
app.use();
app.use(ElButton).use(ElInput).use(ElBreadcrumb).use(ElBreadcrumbItem).use(ElPagination).use(ElTooltip).use(ElIcon);

app.use(router);
app.mount("#app");

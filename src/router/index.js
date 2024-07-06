import HelloWorld from "@/components/HelloWorld";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

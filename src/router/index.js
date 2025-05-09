// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/adminLayout.vue"),
    children: [
      {
        path: "system",
        component: () => import("@/views/admin/systemComponent.vue"),
      },
      {
        path: "component",
        component: () => import("@/views/admin/Component.vue"),
      },
      {
        path: "/",
        component: () => import("@/views/admin/defaultComponent.vue"),
      },
      {
        path: "form",
        component: () => import("@/views/admin/formComponent.vue"),
      },
      {
        path: "table",
        component: () => import("@/views/admin/tableComponent.vue"),
      },
      {
        path: "card",
        component: () => import("@/views/admin/cardComponent.vue"),
      },
      {
        path: "chart",
        component: () => import("@/views/admin/chartComponent.vue"),
      },
      {
        path: "widget",
        component: () => import("@/views/admin/widgetComponent.vue"),
      },
      {
        path: "addNews",
        component: () => import("@/views/admin/addNewsComponent.vue"),
      },
      {
        path: "mediaPhoto",
        component: () => import("@/views/admin/mediaPhotoComponent.vue"),
      },
      {
        path: "component-library",
        component: () => import("@/views/admin/ComponentLibrary.vue"),
      },
      {
        path: "employees",
        component: () => import("@/views/admin/employeeList.vue"),
      },
    ],
  },
  {
    path: "/index",
    component: () => import("@/views/layout/indexPage.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/layout/loginPage.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

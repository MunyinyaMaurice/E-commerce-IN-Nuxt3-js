import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router"; // Type-only import
import { isAuthenticated } from "~/composables/authService";
// Import components
import LoginPage from "pages/login/index.vue";
import RegisterPage from "pages/register/index.vue";
import ApplyPage from "pages/apply/index.vue";
import OpenPositionPage from "pages/openposition/[id].vue";
import HomePage from "index.vue"; // Assuming you have a home page
import DepartmentsPage from "pages/dashboard/department/index.vue";
import CreateDepartmentPage from "pages/dashboard/department/createDepartment/index.vue";
import UpdateDepartmentPage from "pages/dashboard/department/updateDepartment/[id].vue";
import HospitalsPage from "pages/dashboard/hospital/index.vue";
import CreateHospitalPage from "pages/dashboard/hospital/createHospital/index.vue";
import UpdateHospitalPage from "pages/dashboard/hospital/updateHospital/[id].vue";
import TasksPage from "pages/dashboard/task/index.vue";
import CreateTaskPage from "pages/dashboard/task/createTask/index.vue";
import UpdateTaskPage from "pages/dashboard/task/updateTask/[id].vue";
import ActiveApplicantsPage from "pages/dashboard/activeapplicant/index.vue";
import AssignedTaskToVolunteer from "pages/dashboard/volunteer/assignedTo/index.vue";

const routes: RouteRecordRaw[] = [
  // Unprotected Routes
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/apply", component: ApplyPage },
  { path: "/openposition/:id", component: OpenPositionPage },
  { path: "/", component: HomePage }, // Assuming a home page

  // Protected Routes
  {
    path: "/dashboard/department",
    component: DepartmentsPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/department/createDepartment",
    component: CreateDepartmentPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/department/updateDepartment/:id",
    component: UpdateDepartmentPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/hospital",
    component: HospitalsPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/hospital/createHospital",
    component: CreateHospitalPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/hospital/updateHospital/:id",
    component: UpdateHospitalPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/task",
    component: TasksPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/task/createTask",
    component: CreateTaskPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/task/updateTask/:id",
    component: UpdateTaskPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/activeapplicant",
    component: ActiveApplicantsPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/volunteer/assignedTo",
    component: AssignedTaskToVolunteer,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

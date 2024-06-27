
<template>
  <div>
    <AdminDashboardHospitalHospitals />
    <!-- <AdminDashboardHospitalHospitals v-if="isAuthenticated" /> -->
  </div>
</template>

<!-- <script setup>
import { useTheme } from "~/composables/state";
import { useRouter } from "vue-router";
import { computed, onMounted } from "vue";

const { accessToken, clearTokens } = useTheme();
const router = useRouter();

const isAuthenticated = computed(() => !!accessToken.value);

onMounted(() => {
  if (!isAuthenticated.value) {
    router.push("/login");
  }
});
</script> -->




<!-- <template>
  <div>
    <AdminDashboardHospitalHospitals v-if="isAuthenticated" />
  </div>
</template>

<script setup>
import { useTheme } from "~/composables/state";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const { accessToken, clearTokens } = useTheme();
const router = useRouter();

const isAuthenticated = computed(() => !!accessToken.value);

onMounted(() => {
  if (!isAuthenticated.value) {
    router.push("/login");
  }
});

// Example of how to clear tokens, e.g., on logout
// const logout = () => {
//   clearTokens();
//   router.push("/login");
// }
</script> -->

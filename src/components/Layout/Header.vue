<template>
  <q-header class="bg-primary">
    <q-toolbar>
      <q-avatar>
        <img
          src="https://cdn.pixabay.com/photo/2020/07/27/10/33/animal-crossing-leaf-5442035_1280.png"
        />
      </q-avatar>
      <RouterLink to="/" custom v-slot="{ navigate }">
        <q-toolbar-title @click="navigate" class="cursor-pointer"
          >Island Crossing</q-toolbar-title
        >
      </RouterLink>

      <q-space />

      <template v-if="userStore.user.id">
        <span>{{ userStore.user.username }}</span>
        <q-btn @click="logout" color="primary" unelevated>Déconnexion</q-btn>
      </template>
      <template v-else>
        <q-btn :to="{ name: 'login' }" color="primary" unelevated
          >Connexion</q-btn
        >
        <q-btn :to="{ name: 'register' }" color="primary" unelevated
          >Inscription</q-btn
        >
      </template>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import router from "@/router";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

async function logout() {
  await userStore.logout();
  router.push({ name: "login" });
}
</script>

<template>
  <q-page padding>
    <div class="row justify-center">
      <span>Bonjour {{ user.username }} 👋</span>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const { user } = useUserStore();
</script>

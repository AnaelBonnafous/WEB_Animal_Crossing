<template>
  <q-layout view="hHh lpR fFf">
    <Header />

    <q-page-container>
      <RouterView />
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
</script>

<style>
@import '@/assets/base.css';
</style>

<template>
  <base-layout>
    <RouterView />
  </base-layout>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';
import BaseLayout from './layouts/BaseLayout.vue';

</script>
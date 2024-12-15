<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <cq-header :leftDrawerOpen="leftDrawerOpen" @switchMenu="switchMenu"></cq-header> -->
    <cq-header :leftDrawerOpen="leftDrawerOpen" @update:leftDrawerOpen="leftDrawerOpen = $event"></cq-header>
    <slide-menu :leftDrawerOpen="leftDrawerOpen"></slide-menu>
    <q-page-container>
      <router-view></router-view>
      {{ leftDrawerOpen }}
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SlideMenu from './views/layout/SlideMenu.vue'
import CqHeader from './views/layout/CqHeader.vue'

const leftDrawerOpen = ref(true)

// const switchMenu = (value: string) => {
//   console.log('====', value)
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }
</script>

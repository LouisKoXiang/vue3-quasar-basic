<template>
  <q-drawer v-if="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
    <q-list>
      <q-item-label header>Essential Links</q-item-label>
      <q-item clickable tag="router-link" :to="{ name: 'home' }">
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label>首頁</q-item-label>
          <q-item-label caption>Home page</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="router-link" :to="{ name: 'product-list' }">
        <q-item-section avatar>
          <q-icon name="list" />
        </q-item-section>
        <q-item-section>
          <q-item-label>產品列表</q-item-label>
          <q-item-label caption>product-list</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="router-link" :to="{ name: 'create-product' }">
        <q-item-section avatar>
          <q-icon name="add_circle_outline" />
        </q-item-section>
        <q-item-section>
          <q-item-label>產品建立</q-item-label>
          <q-item-label caption>create-product</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="router-link" :to="{ name: 'user-info' }">
        <q-item-section avatar>
          <q-icon name="forum" />
        </q-item-section>
        <q-item-section>
          <q-item-label>個人資訊</q-item-label>
          <q-item-label caption>user info</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="router-link" :to="{ name: 'api-test' }">
        <q-item-section avatar>
          <q-icon name="rss_feed" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Api 獲取</q-item-label>
          <q-item-label caption>Api fetch test</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup type="ts">
import { defineProps, toRef } from 'vue'
const props = defineProps({
  leftDrawerOpen: Boolean
})

const leftDrawerOpen = toRef(props, 'leftDrawerOpen')

</script>

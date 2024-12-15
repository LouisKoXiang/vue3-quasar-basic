<template>
  <q-header elevated class="glossy">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="switchMenu"
        aria-label="Menu"
        icon="menu"
      />

      <q-toolbar-title> Quasar App </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>

<script setup type="ts">
import { defineProps, toRef, defineEmits } from 'vue'
const props = defineProps({
  leftDrawerOpen: Boolean
})

// const emit = defineEmits(['switchMenu'])
const emit = defineEmits(['update:leftDrawerOpen'])
const leftDrawerOpen = toRef(props, 'leftDrawerOpen')

const switchMenu = () => {
  //   emit('switchMenu')
  emit('update:leftDrawerOpen', !leftDrawerOpen.value)
}

</script>

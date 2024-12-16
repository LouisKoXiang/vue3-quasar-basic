<template>
  <q-page class="q-pa-md">
    <q-input
      v-model="zip"
      label="郵遞區號"
      filled
      @change="zipChange"
      class="q-mb-md"
      style="max-width: 300px"
    ></q-input>

    <q-select
      v-model="city"
      label="縣市"
      :options="cityOptions"
      option-value="value"
      option-label="text"
      filled
      @blur="selectCity"
      class="q-mb-md"
      style="max-width: 300px"
    ></q-select>
    {{ cityOptions }}

    <q-select
      v-model="district"
      label="行政區"
      :options="districtOptions"
      option-value="value"
      option-label="text"
      filled
      @blur="selectDistrict"
      style="max-width: 300px"
    ></q-select>
    {{ districtOptions }}
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { Notify } from 'quasar'

// State variables
const zip = ref(null)
const city = ref(null)
const district = ref(null)
const cityOptions = ref([])
const districtOptions = ref([])

// Data and filtered options
const data = ref([
  { text: '台北市', value: '台北市', parent: null, zip: null },
  { text: '新北市', value: '新北市', parent: null, zip: null },
  { text: '中正區', value: '中正區', parent: '台北市', zip: '100' },
  { text: '松山區1', value: '松山區1', parent: '台北市', zip: '105' },
  { text: '林口區', value: '林口區', parent: '新北市', zip: '244' }
])

// Methods
const selectCity = () => {
  zip.value = null // Reset zip
  district.value = null // Reset district
  districtOptions.value = data.value.filter(r => r.parent === city.value.value)
}

const updateDistrictOptions = () => {
  districtOptions.value = data.value.filter(r => r.parent === city.value)
}

const selectDistrict = () => {
  console.log('district.value', district.value)
  const matchDistrict = districtOptions.value.find(
    item => item.value === district.value.value
  )
  if (matchDistrict) {
    zip.value = matchDistrict.zip
  } else {
    zip.value = ''
  }
}

const zipChange = () => {
  const matchZip = data.value.find(item => item.zip === zip.value)
  if (matchZip) {
    city.value = matchZip.parent
    district.value = matchZip.value
    updateDistrictOptions()
  } else {
    Notify.create({
      type: 'warning',
      message: '找不到對應的郵遞區號！'
    })
    city.value = null
    district.value = null
  }
}

const fetchData = () => {
  cityOptions.value = data.value.filter(r => r.parent === null)
}

fetchData()
</script>

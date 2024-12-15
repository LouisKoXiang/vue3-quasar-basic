<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h6">產品表單</div>
        <div class="text-subtitle2">請輸入產品資訊</div>
      </q-card-section>

      <q-card-section>
        <q-form ref="formRef" @submit="submitForm" @reset="resetForm">
          <!-- 產品名稱 -->
          <q-input
            v-model="formData.name"
            label="產品名稱"
            :rules="[rules.required]"
            outlined
            dense
            clearable
          />

          <!-- 價格 -->
          <q-input
            v-model.number="formData.price"
            label="價格 (NTD)"
            type="number"
            :rules="[rules.required, rules.positiveNumber]"
            outlined
            dense
            clearable
          />

          <!-- 描述 -->
          <q-input
            v-model="formData.description"
            label="產品描述"
            type="textarea"
            :rules="[rules.required]"
            outlined
            dense
          />

          <!-- 類別 -->
          <q-select
            v-model="formData.category"
            label="類別"
            :options="categories"
            :rules="[rules.required]"
            outlined
            dense
          />

          <!-- 是否有庫存 -->
          <q-checkbox v-model="formData.inStock" label="有庫存" />

          <!-- 按鈕 -->
          <div class="q-mt-md">
            <q-btn
              label="提交"
              color="primary"
              type="submit"
              class="full-width"
            />
            <q-btn
              label="Reset"
              type="reset"
              color="secondary"
              flat
              class="full-width q-mt-sm"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import * as yup from 'yup'

export default {
  setup () {
    const $q = useQuasar()

    // 表單數據
    const formData = ref({
      name: '',
      price: null,
      description: '',
      category: null,
      inStock: false
    })

    // 類別選項
    const categories = ref([
      { label: '電子產品', value: 'electronics' },
      { label: '服飾', value: 'apparel' },
      { label: '家居用品', value: 'home' },
      { label: '書籍', value: 'books' }
    ])

    // Yup 驗證規則
    const schema = yup.object({
      name: yup.string().required('產品名稱為必填項'),
      price: yup
        .number()
        .typeError('價格必須是數字')
        .positive('價格必須大於零')
        .required('價格為必填項'),
      description: yup.string().required('產品描述為必填項'),
      category: yup.string().required('請選擇產品類別'),
      inStock: yup.boolean()
    })

    // Quasar 驗證規則
    const rules = {
      required: val => !!val || '此為必填項',
      positiveNumber: val => val > 0 || '價格必須大於零'
    }

    // 提交表單
    const submitForm = async () => {
      console.log('formData.value', formData.value)
      const validateData = {
        ...formData.value,
        category: ''
      }
      try {
        const temp = await schema.validate(validateData, { abortEarly: false })
        console.log(temp)
        $q.notify({ type: 'positive', message: '產品資訊已成功提交！' })
        console.log('表單數據:', validateData) // 模擬提交
      } catch (err) {
        console.log('err', err)
        // 顯示驗證錯誤
        const errors = err.inner.map(e => e.message)
        errors.forEach(error => {
          $q.notify({ type: 'negative', message: error })
        })
      }
    }

    // 重置表單
    const resetForm = () => {
      formData.value = {
        name: '',
        price: null,
        description: '',
        category: null,
        inStock: false
      }
      $q.notify({ type: 'info', message: '表單已重置' })
    }

    return { formData, categories, rules, submitForm, resetForm }
  }
}
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>

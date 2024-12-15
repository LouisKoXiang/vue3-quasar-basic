<template>
  <q-page class="q-pa-md">
    <!-- 歡迎區塊 -->
    <q-banner class="q-mb-md" color="primary" text-color="white">
      <div class="text-h6">歡迎來到我們的系統！</div>
      <div>這裡是您管理和查看資訊的地方。</div>
    </q-banner>

    <!-- 主要功能區塊 -->
    <div class="q-gutter-md">
      <div class="row">
        <div class="col-12 col-md-6">
          <q-card>
            <q-card-section>
              <div class="text-h6">功能區塊 1</div>
              <p>這裡可以放置一些功能區塊的描述，例如報表、分析等。</p>
            </q-card-section>
            <q-card-actions>
              <q-btn
                label="查看詳細"
                color="primary"
                flat
                @click="goToFeature('1')"
              />
            </q-card-actions>
          </q-card>
        </div>

        <div class="col-12 col-md-6">
          <q-card>
            <q-card-section>
              <div class="text-h6">功能區塊 2</div>
              <p>這裡可以放置其他功能的描述，例如用戶管理、設定等。</p>
            </q-card-section>
            <q-card-actions>
              <q-btn
                label="查看詳細"
                color="primary"
                flat
                @click="goToFeature('2')"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <!-- 最新資訊區塊 -->
    <div class="q-mt-md">
      <q-card>
        <q-card-section>
          <div class="text-h6">最新資訊</div>
          <q-separator />
          <q-list>
            <q-item v-for="(news, index) in newsList" :key="index" clickable>
              <q-item-section>
                <div class="text-body1">{{ news.title }}</div>
                <div class="text-caption">{{ news.date }}</div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()

    // 模擬最新資訊數據
    const newsList = ref([
      { title: '系統更新公告', date: '2024-12-08' },
      { title: '新功能介紹', date: '2024-12-01' },
      { title: '用戶協議更新', date: '2024-11-25' }
    ])

    // 功能區塊點擊跳轉
    const goToFeature = featureId => {
      console.log(`跳轉到功能區塊 ${featureId}`)
      // 這裡可以根據功能 ID 跳轉到相應頁面
    }

    // 導向用戶資訊頁
    const goToUserInfo = () => {
      router.push('/user-info')
    }

    // 登出功能
    const logout = () => {
      console.log('登出')
      // 清除登錄狀態、跳轉到登入頁等
    }

    return {
      newsList,
      goToFeature,
      goToUserInfo,
      logout
    }
  }
}
</script>

<style scoped>
.q-banner {
  margin-bottom: 16px;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.col-12 {
  width: 100%;
}
.col-md-6 {
  width: 48%;
  margin-right: 4%;
}
.q-card {
  min-height: 200px;
}
</style>

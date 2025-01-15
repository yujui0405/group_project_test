<template>
    <template v-if="GAcount === 'browse'">
        <!-- GA 網站瀏覽人數 -->
        <div class="WB-card-people-count">
            <div class="WB-card-people-count-top">
              <div class="WB-card-people-count-top-text">
                <p class="WB-card-people-count-top-text-title">瀏覽網站日人數</p>
              </div>
            </div>
            <p class="WB-card-people-count-btext">
              {{browseCount}}
            </p>
            <p class="WB-card-people-count-note">
              <i style="color: rgba(68, 133, 105, 1);" class="fa-solid fa-arrow-trend-up"><span style="color: rgba(68, 133, 105, 1);">&nbsp {{browsePercent}}%</span></i> 相較於上一時間單位
            </p>
          </div>
    </template>
    <template v-if="GAcount === 'login'">
        <!-- GA 網站登入人數 -->
        <div class="WB-card-people-count">
            <div class="WB-card-people-count-top">
              <div class="WB-card-people-count-top-text">
                <p class="WB-card-people-count-top-text-title">本月新增會員數量</p>
              </div>
            </div>
            <p class="WB-card-people-count-btext">
              {{loginCount}}%
            </p>
            <p class="WB-card-people-count-note">
              <i style="color: rgba(133, 68, 68, 1)" class="fa-solid fa-arrow-trend-down"><span style="color: rgba(133, 68, 68, 1);">&nbsp {{loginPercent}}%</span></i> 相較於上月
            </p>
          </div>
    </template>
</template>

<script setup>
import {ref} from 'vue'
const browseCount = ref("93")
const browsePercent = ref("23")
const loginCount = ref("12")
const loginPercent = ref("8")
defineProps({
    GAcount:{
        type:String,
        default:'browse'
    }
})

</script>

<style lang="scss" scoped>

</style>
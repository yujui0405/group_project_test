<template>
    <!-- bar 捐款金額明細表 -->
    <div class="WB-card-bar-chart">
          <div class="WB-card-bar-chart-top">
            <div class="WB-card-bar-chart-top-text">
              <p class="WB-card-bar-chart-top-text-title">捐款金額報表</p>
              <p class="WB-card-bar-chart-top-text-content">以每月金額明細與年度金額總計，協助您直觀掌握客戶捐款概況。</p>
            </div>
            <div class="WB-card-bar-chart-top-text2">
              <p class="WB-card-bar-chart-top-text2-content">{{totalMoney}}元</p>
            </div>
          </div>
          <div class="bar-chart">
            <img src="@/assets/images/bar.png" alt="">
          </div>
    </div>
</template>

<script setup>
    let totalMoney = 820400
</script>

<style lang="scss" scoped>

</style>
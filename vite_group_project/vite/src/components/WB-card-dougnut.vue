<template>
    <!-- 圓餅圖 -->
    <div class="WB-card-dougnut">
        <div class="WB-card-dougnut-top">
            <div class="WB-card-dougnut-top-text">
                <p class="WB-card-dougnut-top-text-title">交通工具占比</p>
                <p class="WB-card-dougnut-top-text-content">本月累積總減少碳排放量</p>
            </div>
            <div style="max-width: 200px; width: 100%;">
                <VueDatePicker v-model="date" range multi-calendars :enable-time-picker="false" :format="format"/>
            </div>
        </div>
        <div class="doughnut"><img style="max-width: 710px;" src="@/assets/images/dougnut.png" alt=""></div>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import VueDatePicker from '@vuepic/vue-datepicker'
    import '@vuepic/vue-datepicker/dist/main.css'

    component:{
        VueDatePicker
    }
    const date = ref([new Date(),new Date()]);
// In case of a range picker, you'll receive [Date, Date]
const format = (date) => {
  const dayStart = date[0].getDate();
  const monthStart = date[0].getMonth() + 1;
  const yearStart = date[0].getFullYear();

  const dayEnd = date[1].getDate();
  const monthEnd = date[1].getMonth() + 1;
  const yearEnd = date[1].getFullYear();

  return `${yearStart}/${monthStart}/${dayStart} - ${yearEnd}/${monthEnd}/${dayEnd}`;
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <!-- 5 種 button -->
    <!-- <div class="WB-btn-save"><span>儲存</span></div>
    <div class="WB-btn-news"><div><i class="fa-solid fa-plus"></i></div><span>新增新聞</span></div>
    <div class="WB-btn-file"><span>選擇檔案</span></div>
    <div class="WB-btn-search"><div><i class="fa-solid fa-magnifying-glass"></i></div><span>查詢</span></div>
    <div class="WB-btn-check"><span>前往前台查看</span></div> -->
    <div v-if="typeOfBtn === 'save'" :class="`WB-btn-${typeOfBtn}`"><span>儲存</span></div>
    <div v-else-if="typeOfBtn === 'news'" :class="`WB-btn-${typeOfBtn}`"><div><i class="fa-solid fa-plus"></i></div><span>新增新聞</span></div>
    <div v-else-if="typeOfBtn === 'file'" :class="`WB-btn-${typeOfBtn}`"><span>選擇檔案</span></div>
    <div v-else-if="typeOfBtn === 'search'" :class="`WB-btn-${typeOfBtn}`"><div><i class="fa-solid fa-magnifying-glass"></i></div><span>查詢</span></div>
    <div v-else-if="typeOfBtn === 'check'" :class="`WB-btn-${typeOfBtn}`"><span>前往前台查看</span></div>
</template>

<script setup>
    import {ref} from 'vue'
    let typeOfBtn = ref("check")
    const props = defineProps(
        {
          buttonType:{
            type: String,
            default:"check",
          },
        }
    )
    if(props.buttonType === 'save'){
        typeOfBtn.value = "save"
    }else if(props.buttonType === 'news'){
        typeOfBtn.value = "news"
    }else if(props.buttonType === 'file'){
        typeOfBtn.value = "file"
    }else if(props.buttonType === 'search'){
        typeOfBtn.value ="search"
    }else if(props.buttonType === 'check'){
        typeOfBtn.value = "check" 
    }
    
</script>

<style lang="scss" scoped>

</style>
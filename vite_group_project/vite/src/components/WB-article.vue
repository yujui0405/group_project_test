<template>
    <article class="WB-article">
        <div class="WB-article-div">
            <h4 class="WB-article-div-h4">歡迎來到後台管理系統</h4>
            <p class="WB-article-div-p">這裡是管理系統的主控台，您可以檢視數據、管理內容，並快速前往前台檢視網站運作情況。</p>
            <!-- <div class="WB-btn-check">前往前台查看</div> -->
             <WBBtn buttonType="check"></WBBtn>
        </div>
        <div><img src="@/assets/images/article-tree.png" alt=""></div>
    </article>
</template>

<script setup>
    import WBBtn from './WB-btn.vue';
    component:{
        WBBtn
    }
</script>

<style lang="scss" scoped>

</style>
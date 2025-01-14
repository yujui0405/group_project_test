<template>
    <div class="dashboard">
        <!-- left -->
        <section class="WB-left">
            <WBNav></WBNav>
        </section>
        
        <!-- right -->
        <section class="WB-right">
            <WBHeader></WBHeader>
            <!-- wrapper -->
            <div class="WB-right-wrapper">
                <!-- article區塊 -->
                <WBArticle></WBArticle>
            </div>
        </section>
    </div>
</template>

<script setup>
    import WBHeader from '../components/WB-header.vue'
    import WBNav from '../components/WB-nav.vue'
    import WBArticle from '../components/WB-article.vue';
    component:{
        WBHeader,WBNav,WBArticle
    }
</script>

<style lang="scss" scoped>

</style>
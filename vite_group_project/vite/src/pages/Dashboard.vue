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
                <!-- 圓餅圖 -->
                <WBCardDougnut></WBCardDougnut>
                <!-- 右側載具卡片-->
                <div class="WB-right-column">
                    <template v-for="transtype in transportationTypes" :key="transtype">
                        <WBTransportationCard :transportation="transtype"></WBTransportationCard>
                    </template>
                </div>
                <!-- line chart 走勢圖 -->
                <WBCardLineChart></WBCardLineChart>
                <!-- bar 捐款金額明細表 -->
                <WBCardBarChart></WBCardBarChart>
                <!-- 右側登入人數 -->
                <div class="WB-right-column">
                    <WBCardPeopleCount GAcount="browse"></WBCardPeopleCount>
                    <WBCardPeopleCount GAcount="login"></WBCardPeopleCount>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
    import WBHeader from '../components/WB-header.vue'
    import WBNav from '../components/WB-nav.vue'
    import WBArticle from '../components/WB-article.vue';
    import WBCardDougnut from '../components/WB-card-dougnut.vue';
    import WBTransportationCard from '../components/WB-transportation-card.vue';
    import WBCardLineChart from '../components/WB-card-line-chart.vue';
    import WBCardBarChart from '../components/WB-card-bar-chart.vue';
    import WBCardPeopleCount from '../components/WB-card-people-count.vue';
    component:{
        WBHeader,WBNav,WBArticle,WBCardDougnut,WBTransportationCard,WBCardLineChart,WBCardBarChart,WBCardPeopleCount
    }

    let transportationTypes = ["bus","MRT","bike"]

</script>

<style lang="scss" scoped>

</style>
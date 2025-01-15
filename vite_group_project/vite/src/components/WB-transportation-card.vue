<template>
    <template v-if="transportation === 'bus'">
        <!-- 公車 -->
        <div class="WB-card-transportation">
            <div class="WB-card-transportation-top">
                <div class="WB-card-transportation-top-text">
                    <p class="WB-card-transportation-top-text-title">公車</p>
                </div>
                <div class="WB-card-transportation-top-icon">
                    <i class="fa-solid fa-bus"></i>
                </div>
            </div>
            <div class="WB-card-transportation-note">
                <div>
                    <p>減少排出量(kgCO2e)</p>
                    <p class="bus-carbon WB-card-transportation-note-big">{{busMount}}</p>
                </div>
                <div>
                    <p>占比</p>
                    <p class="bus-carbon-percent WB-card-transportation-note-big">{{busPercent}}</p>
                </div>
            </div>
        </div>
    </template>
    <template v-if="transportation === 'MRT'">
        <!-- 捷運 -->
        <div class="WB-card-transportation">
            <div class="WB-card-transportation-top">
              <div class="WB-card-transportation-top-text">
                <p class="WB-card-transportation-top-text-title">捷運</p>
              </div>
              <div class="WB-card-transportation-top-icon">
                <i class="fa-solid fa-train-subway"></i>
              </div>
            </div>

            <div class="WB-card-transportation-note">
              <div>
                <p>減少排出量(kgCO2e)</p>
                <p class="MRT-carbon WB-card-transportation-note-big">{{MRTMount}}</p>
              </div>
              <div>
                <p>占比</p>
                <p class="MRT-carbon-percent WB-card-transportation-note-big">{{MRTPercent}}</p>
              </div>
            </div>
        </div>
    </template>
    <template v-if="transportation === 'bike'">
        <!-- 腳踏車 -->
        <div class="WB-card-transportation">
            <div class="WB-card-transportation-top">
              <div class="WB-card-transportation-top-text">
                <p class="WB-card-transportation-top-text-title">腳踏車</p>
              </div>
              <div class="WB-card-transportation-top-icon">
                <i class="fa-solid fa-bicycle"></i>
              </div>
            </div>

            <div class="WB-card-transportation-note">
              <div>
                <p>減少排出量(kgCO2e)</p>
                <p class="bike-carbon WB-card-transportation-note-big">{{bikeMount}}</p>
              </div>
              <div>
                <p>占比</p>
                <p class="bike-carbon-percent WB-card-transportation-note-big">{{bikePercent}}</p>
              </div>
            </div>
        </div>  
    </template>
</template>

<script setup>
    import {ref} from 'vue'

    let busMount = ref("4600")
    let MRTMount = ref("3800")
    let bikeMount = ref("1600")

    let busPercent = ref("46%")
    let MRTPercent = ref("38%")
    let bikePercent = ref("16%")
    defineProps({
        transportation:{
            type:String,
            default:"bus"
        }
    })

</script>

<style lang="scss" scoped>

</style>
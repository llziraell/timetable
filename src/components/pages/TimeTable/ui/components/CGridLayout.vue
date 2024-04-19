<script setup lang="ts">
import { GridLayout } from "grid-layout-plus"
import { defineProps } from "vue"
import { GridItem_ } from "./CTimeTablePlan.vue"

import CTableElement from "./CTableElement.vue"

const props = defineProps<{
    layout: GridItem_[]
    col: number
}>()

const max_rows = 12
const row_height = 22

</script>

<template>
        <GridLayout
        v-model:layout="props.layout"
        :row-height="row_height"
        :responsive="false"
        :vertical-compact="false"
        prevent-collision
        :col-num="props.col"
        :max-rows="max_rows" 
    >
        <CTableElement :layout="props.layout"></CTableElement>
    </GridLayout>   
</template>

<style lang="scss">
.vgl-layout {
    background-color: #f5f7fa;
    border-radius: 8px;
    border: 1px solid #d5d9dc;
    min-height: calc(100% - 24px);
}

.class {
    background-color: aqua;
}

</style>

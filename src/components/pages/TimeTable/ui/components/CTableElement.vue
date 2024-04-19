<script setup lang="ts">
import { GridItem } from "grid-layout-plus"
import { GridItem_ } from "./CTimeTablePlan.vue"
import { defineProps } from "vue"

import CTableChoiceModal from "./CTableChoiceModal.vue"

const props = defineProps<{
    layout: GridItem_[]
}>()
</script>

<template>
    <GridItem
        v-for="item in props.layout"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        @click="console.log('Hello, World')"
        style="cursor: pointer"
    >
       <CTableChoiceModal/>

        <span class="table_info"> {{ item.i }}</span>
    </GridItem>
</template>

<style scoped>
.vgl-item:not(.vgl-item--placeholder) {
    background-color: #ffffff;
    border: 1px solid rgb(155, 155, 155);
    border-radius: 5px;
}

.vgl-item--resizing {
    opacity: 90%;
}

.vgl-item--placeholder {
    z-index: var(--vgl-placeholder-z-index, 2);
    user-select: none;
    background-color: var(--vgl-placeholder-bg, red);
    opacity: var(--vgl-placeholder-opacity, 20%);
    transition-duration: 100ms;
}

.vg-item__resizer {
    display: none;
}

.table_info {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    font-size: 10px;
    line-height: 100%;
    color: black;
    align-items: center;
    display: flex;
    justify-content: center;
}
</style>

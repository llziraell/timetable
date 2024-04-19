<script setup lang="ts">
import { ref } from "vue"

import CGridLayout from "./CGridLayout.vue"

export interface GridItem_ {
    x: number
    y: number
    w: number
    h: number
    i: string
    static?: boolean
}

const col_count = ref<number>(0)

const layout_16_18 = ref<GridItem_[]>([
    { x: 12, y: 1, w: 2, h: 1, i: "1", static: false },
    { x: 14, y: 1, w: 2, h: 1, i: "2", static: false },
    { x: 12, y: 2, w: 2, h: 1, i: "3", static: false },
    { x: 14, y: 2, w: 2, h: 1, i: "4", static: false },
    { x: 12, y: 5, w: 2, h: 1, i: "5", static: false },
    { x: 14, y: 5, w: 2, h: 1, i: "6", static: false },
    { x: 12, y: 6, w: 2, h: 1, i: "7", static: false },
    { x: 14, y: 6, w: 2, h: 1, i: "8", static: false },
    { x: 20, y: 3, w: 2, h: 1, i: "9", static: false },
    { x: 18, y: 3, w: 2, h: 1, i: "10", static: false },
    { x: 20, y: 6, w: 2, h: 1, i: "11", static: false },
    { x: 18, y: 6, w: 2, h: 1, i: "12", static: false },
    { x: 20, y: 7, w: 2, h: 1, i: "13", static: false },
    { x: 18, y: 7, w: 2, h: 1, i: "14", static: false },
    { x: 20, y: 9, w: 2, h: 1, i: "15", static: false },
    { x: 18, y: 9, w: 2, h: 1, i: "16", static: false },
    //
    { x: 7, y: 1, w: 2, h: 1, i: "17", static: false },
    { x: 9, y: 1, w: 2, h: 1, i: "18", static: false },
    { x: 9, y: 2, w: 2, h: 1, i: "19", static: false },
    { x: 7, y: 2, w: 2, h: 1, i: "20", static: false },
    { x: 7, y: 7, w: 2, h: 1, i: "21", static: false },
    { x: 9, y: 7, w: 2, h: 1, i: "22", static: false },
    { x: 9, y: 8, w: 2, h: 1, i: "23", static: false },
    { x: 7, y: 8, w: 2, h: 1, i: "24", static: false },
    { x: 1, y: 6, w: 1, h: 2, i: "25", static: false },
    { x: 0, y: 6, w: 1, h: 2, i: "26", static: false },
    { x: 0, y: 10, w: 1, h: 2, i: "27", static: false },
    { x: 0, y: 8, w: 1, h: 2, i: "28", static: false },
    { x: 1, y: 10, w: 1, h: 2, i: "29", static: false },
    { x: 1, y: 8, w: 1, h: 2, i: "NO NAME", static: false },
    { x: 21, y: 0, w: 1, h: 3, i: "АССИСТЕНТ", static: false },
    { x: 0, y: 0, w: 6, h: 6, i: "КАБИНЕТ НАЧАЛЬНИКА ЦЕНТРА", static: false },
])

const layout_37 = ref<GridItem_[]>([
    { x: 0, y: 0, w: 1, h: 2, i: "41", static: false },
    { x: 0, y: 2, w: 1, h: 2, i: "40", static: false },
    { x: 0, y: 4, w: 1, h: 2, i: "39", static: false },
    { x: 5, y: 1, w: 2, h: 1, i: "32", static: false },
    { x: 7, y: 1, w: 2, h: 1, i: "31", static: false },
    { x: 9, y: 1, w: 2, h: 1, i: "30", static: false },
    { x: 5, y: 2, w: 2, h: 1, i: "35", static: false },
    { x: 7, y: 2, w: 2, h: 1, i: "34", static: false },
    { x: 9, y: 2, w: 2, h: 1, i: "33", static: false },
    { x: 5, y: 8, w: 2, h: 1, i: "38", static: false },
    { x: 7, y: 8, w: 2, h: 1, i: "37", static: false },
    { x: 9, y: 8, w: 2, h: 1, i: "36", static: false },
    { x: 0, y: 8, w: 3, h: 1, i: "АССИСТЕНТ", static: false },
    {
        x: 0,
        y: 9,
        w: 3,
        h: 2,
        i: "ЗАМЕСТИТЕЛЬ НАЧАЛЬНИКА ЦЕНТРА",
        static: false,
    },
])
</script>

<template>
    <v-container
        class="w-75 h-100 mr-3 px-5 py-5 bg-white"
        rounded
        border="opacity-50 sm"
        fluid
    >
        <div class="text-subtitle-2 font-weight-medium text-left mb-1">
            ПЛАН КОВОРКИНГА
        </div>
        <v-container class="d-flex flex-row px-0 py-0">
            <v-container class="mr-4 px-0 py-0">
                <div class="text-subtitle-2 font-weight-medium text-left mb-1 text-grey">
                    КАБИНЕТ 16-18
                </div>
                <CGridLayout
                    :layout="layout_16_18"
                    :col="(col_count = 22)"
                />
            </v-container>
            <v-container
                class="px-0 py-0 w-50"
                fluid
            >
                <div class="text-subtitle-2 font-weight-medium text-left mb-1 text-grey">
                    КАБИНЕТ 37
                </div>
                <CGridLayout
                    :layout="layout_37"
                    :col="(col_count = 11)"
                />
            </v-container>
        </v-container>
    </v-container>
</template>

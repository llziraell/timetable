<script setup lang="ts">
import { ref } from "vue"

const tables = ref<string[]>([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "NO NAME",
])
</script>

<template>
    <!-- <v-autocomplete
        class="table_menu"
        label="Стол"
        :items="tables"
        variant="outlined"
    ></v-autocomplete> -->
    <div class="vc-time-picker vc-invalid">
        <div class="vc-time-select-group">
            <!-- img -->
            <div class="vc-base-select">
                <select
                    modelmodifiers="[object Object]"
                    class="vc-time-select-hours vc-focus vc-align-right"
                >
                    <option value="0">00</option>
                    <option value="0">01</option>
                    <option value="0">02</option>
                </select>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.vc-bordered {
    border: none !important;
}
</style>

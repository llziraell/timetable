<script setup lang="ts">
import { ref } from "vue"

import CDatePicker from "./CHeaderPickerComponents/CDatePicker.vue"
import CTimePicker from "./CHeaderPickerComponents/CTimePicker.vue"
import CTableChoice from "./CHeaderPickerComponents/CTableChoice.vue"
import CTableFree from "./CHeaderPickerComponents/CTableFree.vue"
import CInputNameMenu from "./CHeaderPickerComponents/СInputNameMenu.vue"

const headers = ref([
    { title: "date", value: "date", component: CDatePicker },
    { title: "time", value: "time",  component: CTimePicker },
    { title: "table", value: "table",  component: CTableChoice },
    { title: "reservation", value: "reservation", component: CTableFree },
    { title: "reservation", value: "reservation", component: CInputNameMenu },
])

</script>

<template>
    <tr>
        <template
            v-for="(header, index) in headers"
        >
            <th class = "px-2 py-0">
                <component
                    :is="header.component"
                    :title="header.title"
                    :key = "index"
                />
            </th>
        </template>
    </tr>
</template>

<style lang="scss">
.head {
    background-color: red;
    width: 20px;
    height: 40px;
}

.table__header {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    padding: 5px 5px;
    width: 100%;
}
</style>

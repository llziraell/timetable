<script setup lang="ts">
import CHeaderPicker from "./CHeaderPicker.vue"

import CTableChoiceModal from "./CTableChoiceModal.vue"

import { ref, computed } from "vue"

// interface HeaderPicker {
//     title: string
//     align?: "start" | "center" | "end"
//     value: string
// }

// const headers = ref<HeaderPicker[]>([
//     { title: "date", align: "start", value: "date" },
//     { title: "time", align: "start", value: "time" },
//     { title: "table", align: "start", value: "table" },
//     { title: "reservation", align: "start", value: "reservation" },
// ])

///
///

const data = ref([
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "Петровский А.А.",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "Петровский А.А.",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "Петровский А.А.",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "Петровский А.А.",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "Петровский А.А.",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
    {
        date: "12.02.24",
        time: "10:00-12:00",
        table: "стол №8 (Кабинет 16-18)",
        reservation: "забронировать",
    },
])

const toggleStyles = (
    reservation: string
): { color: string; cursor: string } => {
    return reservation === "забронировать"
        ? { color: "green", cursor: "pointer" }
        : { color: "black", cursor: "pointer" }
}

const toggleStylesByReservation = computed(() => {
    return (reservation: string) => toggleStyles(reservation)
})

function openReservationForm(value: any): void {
    // Обработка клика на элементе
    console.log(value)
}
</script>

<template>
    <div class="time-table__header">
        <div class="text-subtitle-2 font-weight-medium text-left mb-3">
            РАСПИСАНИЕ КОВОРКИНГА
        </div>
        <!-- вставить картиночку принтера -->
    </div>
    <v-data-table-virtual
        :items="data"
        height="400"
        :fixed-header="true"
    >
        <template #headers>
            <CHeaderPicker />
        </template>
        <template v-slot:item.date="{ value }">
            <span style="font-weight: 600;">{{ value }}</span>
        </template>
        <template v-slot:item.reservation="{ value }">
            <span
                :style="toggleStylesByReservation(value)"
                @click="openReservationForm(value)"
                >{{ value }}
            </span>
        </template>
    </v-data-table-virtual>
</template>

<style lang="scss">
.time-table__header {
    border-bottom: 1px solid #d5d9dc;
}

.v-table--density-default {
    --v-table-header-height: 50px !important;
    --v-table-row-height: 30px !important;
}

.table__header {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    padding: 5px 5px;
    width: 100%;
}

.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td {
    border: none !important;
}

</style>

<script setup lang="ts">
import { ref } from "vue"

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

])
</script>

<template>
    <v-menu
        activator="parent"
        location="bottom"
        transition="fade-transition"
    >
        <div class="header">
            <div class="text-subtitle-2 font-weight-medium">СТОЛ №</div>
        </div>
        <v-list
            min-width="262"
            max-height="262"
            slim
            class="px-0 py-0"
            overflow-auto
        >
            <v-list-item
                v-for="(item, index) in data"
                :key="index"
                overflow-auto
                height="30px"
                cols = "auto"
                class = "px-0 py-0"
            >
                    <v-row no-gutters>
                        <v-col>
                           
                                <v-list-item>{{
                                item.time
                            }}</v-list-item>
                          
                        </v-col>
                        <v-col>
                            <v-list-item>
                              {{
                                item.reservation
                            }}
                            </v-list-item>
                        </v-col>
                    </v-row>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<style lang="scss">
.header {
    background-color: #f5f7fa;
    height: 32px;
    padding: 0 8px;
    display: flex;
    align-items: center;
}
</style>

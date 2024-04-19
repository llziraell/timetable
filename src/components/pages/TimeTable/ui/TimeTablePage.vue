<script setup lang="ts">
import CTimeTablePlan from "./components/CTimeTablePlan.vue"
import CTimeTableBlock from "./components/CTimeTableBlock.vue"
</script>

<template>
    <v-container
        fluid
        class="fill-height"
        style="background-color: #f5f7fa"
    >
        <v-container
            fluid
            class="fill-height px-7 py-16"
        >
            <v-container
                fluid
                class="w-100 d-flex flex-row px-0 py-0 h-50 mb-3 d-flex align-start"
            >
                <CTimeTablePlan />
                <v-container
                    class="w-25 h-100 bg-white"
                    rounded="pill"
                    border="opacity-50 sm"
                    fluid
                >
                </v-container>
            </v-container>
            <v-container
                fluid
                class="w-100 h-50 bg-white px-5 py-3"
                border="opacity-50 sm"
                rounded
            >
                <CTimeTableBlock />
            </v-container>
        </v-container>
    </v-container>
</template>

<style lang="scss">
@import "src/styles/colorVars.scss";
</style>

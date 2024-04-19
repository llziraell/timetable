<script setup lang="ts">
import { ref, Ref } from 'vue';

// Определение типа для inputValue
// const inputValue:string = ref('');
// // Определение типа для inputEvents
// const inputEvents: Ref<{ [key: string]: Function }> = ref({});
// // Определение типа для togglePopover
// const togglePopover: Ref<() => void> = ref(() => {});
</script>


const date = ref(new Date())

<template>
    <VDatePicker
        v-model="date"
        :popover="false"
    >
        <template #default="{ inputValue, inputEvents, togglePopover }">
            <div class="date-picker">
                <span
                    class="date-picker__icon"
                    @click="togglePopover"
                ></span>
                <input
                    class="date-picker__input"
                    :value="inputValue"
                    v-on="inputEvents"
                />
            </div>
        </template>
    </VDatePicker>
</template>

<style lang="scss">
.date-picker {
    width: 114px;
    height: 32px;
    border-radius: 4px;
    background-color: #f5f7fa;
    border: 1px solid #d5d9dc;
    padding: 0 4px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.date-picker__icon {
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    background-size: cover;
    background-image: url("/Users/llziraell/Documents/lk_project/timetable_local/timetable/src/components/pages/TimeTable/assets/calendar_icon.svg");
}

.date-picker__input {
    width: 80px;
    color: #0987fc;
    font-weight: 500;
}
</style>

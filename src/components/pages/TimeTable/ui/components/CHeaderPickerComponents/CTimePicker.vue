<script setup>
import { ref } from "vue"

const range = ref({
    start: new Date(new Date().setHours(8, 0)),
    end: new Date(new Date().setHours(22, 0)),
})
</script>

<template>
    <VDatePicker
        class="vc-bordered"
        v-model.range="range"
        mode="time"
        is24hr
        hide-time-header="true"
        prev-icon="/Users/llziraell/Documents/lk_project/timetable_local/timetable/src/components/pages/TimeTable/assets/time_icon.svg"
    >
      
    </VDatePicker>
</template>

<style lang="scss">
.vc-bordered {
    border: none !important;
}

.vc-base-select {
    padding: 0px 0px !important;
}

// .vc-time-select-group {
//     color: #0987FC;
// }

.vc-base-select select {
    font-size: 14px;
    color: #0987FC !important;
}

// .time-picker__icon {
//     background-image: url('/Users/llziraell/Documents/lk_project/timetable_local/timetable/src/components/pages/TimeTable/assets/time_icon.svg');
//   /* Устанавливаем размеры вашей картинки */
//   width: 16px;
//   height: 16px;
// }

// .vc-time-select-group {
//    color: #0987FC !important;
// }

// .vc-base-select {
//     color: #0987FC;
//     // background-color: red;
//     font-size: 14px;

// }
</style>

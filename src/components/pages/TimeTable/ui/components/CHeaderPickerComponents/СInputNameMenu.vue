<script setup lang="ts">
import {ref} from 'vue'

const names = ref<string[]>([
    "Васнецов Василий Валисьевич",
    "Васнецов Василий Валисьевич",
    "Васнецов Василий Валисьевич",
    "Васнецов Василий Валисьевич",
    "Васнецов Василий Валисьевич",
    "Васнецов Василий Валисьевич",
])

</script>

<template>
    <v-autocomplete
        label="ФИО стажера"
        :items="names"
        variant="outlined"
        :hide-details="true"
        density="compact"
        :clearable="true"
    ></v-autocomplete>
</template>

<style lang="scss">

.v-field {
    min-width: 200px !important;
}

.v-field__input {
    -v-field-input-padding-top: 0 !important;
    -v-field-input-padding-bottom: 0 !important;
    font-size: 14px !important;
}

.v-input {
    font-size: 13px !important;
}

</style>

<template>
    <div class="crossword-create-page">
        <my-dialog v-if="!storeForCreating.wasAlreadyStart" :show="!storeForCreating.wasAlreadyStart">
            <h1>начать диалог</h1>
        </my-dialog>
    </div>
</template>

<script setup>
import { createCrosswordStore } from '../stores/createCrosswordStore';
import MyDialog from '@/components/MyDialog.vue';

const storeForCreating = createCrosswordStore();

</script>

<style lang="scss">
.crossword-create-page {
    min-height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
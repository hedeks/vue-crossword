<template>
    <div class="dialog" v-if="props.show" @click="hideDialog">
        <div class="dialog-content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
import { crosswordStore } from "@/stores/store"

const store = crosswordStore();

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
});

function hideDialog (){
    store.showWinWindow = false;
}
</script>
<style lang="scss" scoped>
.dialog {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    background: rgba(161, 161, 161, 0.5);
    display: flex;
    z-index: 1000;
    &-content {
        margin: auto;
        background: #f2f2f2;
        padding: 20px;
        height: fit-content;
        border-radius: 10px;
        border: 1px solid white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease-in-out;

        &:hover {
            cursor: default;
            background-color: white;
            border: 1px solid black;
        }
    }
}
</style>
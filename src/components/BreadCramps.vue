<template>
    <div class="bread-cramps">
        <div class="bread-cramps-item" v-for="item in path" :key="item">{{ item }}</div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { watch, ref, computed } from 'vue'
const route = useRoute();

const path = computed(() => {
    let result = route.path.split('/').reverse();
    let popped = result.pop();
    result = result.reverse();
    if (result.length === 1) {
        if (result[0] === "") {
            result[0] = "home"
        } else {
            result.unshift('home');
        }
    } else {
        result.unshift('home');
    }
    return result;
});

</script>

<style lang="scss">
.bread-cramps {
    font-family: linux-libertine-o;
    background-color: #F2F2F2;
    margin: 0 -20px 0 -20px;
    padding: 0 20px 0 20px;
    height: 51px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 70px;
    padding-left: 70px;

    &:hover {
        cursor: default;
    }

    &-item {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-right: 1px solid rgba($color: #000000, $alpha: 0.1);
        padding-right: 70px;
    }
}

@media screen and (max-width: 768px) {
    .bread-cramps {
        display: none;
    }
}</style>
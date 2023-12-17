<template>
    <div class="types-menu">
        <router-link class="link" to="#">5 x 5</router-link>
        <router-link class="link" to="#">8 x 8</router-link>
        <router-link class="link" to="#">10 x 10</router-link>
    </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TypesMenu'
});
</script>
<style lang="scss">
.types-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 95px;
    height: 66px;
}

.link {
    text-decoration: none;
    color: black;
    transition: all 0.1s ease-in-out, color;
    font-family: Lohit Devanagari;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:hover {
        transform: scale(1.01);
        cursor: pointer;
        color: rgba(0, 0, 0, 0.6);
    }
}
</style>
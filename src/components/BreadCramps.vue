<template>
    <div class="bread-cramps">
    </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BreadCramps'
});
</script>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();
</script>

<style lang="scss">
.bread-cramps{
    font-family: linux-libertine-o;
    background-color: #F2F2F2;
    margin: 0 -20px 0 -20px;
    padding: 0 20px 0 20px;
    height: 51px;
}

@media screen and (max-width: 768px) {
    .bread-cramps{
        display: none;
    }
}
</style>
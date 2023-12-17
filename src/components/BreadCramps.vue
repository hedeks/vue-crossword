<template>
    <div class="bread-cramps">
        {{ router.getRoutes() }}
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
}
</style>
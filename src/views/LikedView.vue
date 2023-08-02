<template>
    <div v-for="item in store.getLiked" :key="item.id">
        <ProductCard 
        :title="item.title"
        :id="item.id"
        :item="item"
        />
    </div>
</template>

<script setup>
import { useProductsStore } from '@/store/products';
import ProductCard from '@/components/ProductCard.vue';
const store = useProductsStore()
</script>

<style lang="scss" scoped>

</style>
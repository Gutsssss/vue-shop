<template>
    <div class="onceCard">
        <ProductCard
        :image="store.productInfo.image"
        :title="store.productInfo.title"
        :price="store.productInfo.price"
        :id="this.$route.params.id"
        :info="false"
        :rating="store.productInfo.rating.rate"
        :desc="store.productInfo.description"
        :btn="true"
        :category="store.productInfo.category"
        @add-product-to-cart="store.addToCart(store.productInfo.id)"
        :item="item"
        />
    </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';
import {useProductsStore} from '@/store/products'
import { defineProps } from 'vue';
const props = defineProps({
    id:[Number,String]
})
const store = useProductsStore()
store.getOneProduct(props.id)
// console.log(store.productInfo.rating[0].rate)
</script>

<style scoped>
.onceCard {
    margin-top: 100px;
}
</style>
<template>
    <template v-if="!store.cart.length"><h1 style="margin-top: 100px; text-align: center;">Корзина пуста</h1></template>
    <div >
    <div class="cartList">
    <ProductCard 
    v-for="item in store.getCart" 
    :key="item.id"
    :title="item.title"
    :price="item.price"
    :image="item.image"
    :rating="item.rating.rate"
    :info="true"
    :id="item.id"
    @delete-from-cart="store.deleteFromCart(item.id)"
    />
</div>
    <p v-if="store.cart.length">Общая сумма заказа {{ store.cartSum.toFixed(2) }}$</p>
    </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { useProductsStore } from '@/store/products'
const store = useProductsStore()

</script>

<style  scoped>
.cartList {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 100px;
}
</style>
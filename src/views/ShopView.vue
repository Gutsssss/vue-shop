<template>
  <div class="shopPage">
  <input  style="height: 20px;margin-top:400px" v-model="store.filter"/>
  <div  class="filterButtons">
    <button @click="store.fetchProducts">ALL</button>
    <FilterButton 
    v-for="(btn,index) in store.categories" 
    :key="index" 
    :title="btn.toUpperCase()"
    @filter-category="store.filterCategory(btn)"
    :toggle="true"
    :shop-or-home="true"
    />
  </div>
  <div class="cardList">
    <ProductCard
    v-for="product in store.filteredProduct(store.filter)" 
    :key="product.id"
    :title="product.title"
    :category="product.category"
    :price="product.price"
    :rating="product.rating.rate"
    :image="product.image"
    @add-product-to-cart="addToCart(product.id)"
    :id="product.id"
    :btn="true"
    :item="product"
    />
  </div>
</div>
</template>
<script setup>
import FilterButton from '@/components/FilterButton.vue';
import ProductCard from '@/components/ProductCard.vue';
import {useProductsStore} from '@/store/products'

const store = useProductsStore()
store.fetchProducts()
const addToCart = store.addToCart
store.getCategories()


</script>
<style>
.shopPage {
  display: flex;
  margin: 0 auto;
}
.cardList {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 130px;
  width: 100%;
  margin-left: 230px;
  margin-top: 100px;
}
.filterButtons {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  left: 0;
  margin-top: 100px;
}
button {
  color: white;
  height: 40px;
  width: 200px;
  background: teal;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  border: none;
  margin: 10px;
}
</style>

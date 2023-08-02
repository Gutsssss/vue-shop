<template>
  <div class="home">
  <div>
    <h1>Home Page</h1>
    <p>You can buy some more!</p>
  </div>
  <div class="home-choose">
    <FilterButton v-for="btn in store.categories" 
    :key='btn'
    :title="btn"
    @click="store.filterCategory(btn)"
    />
  </div>
</div>
</template>

<script setup>
import FilterButton from '@/components/FilterButton.vue';
import {useProductsStore} from '@/store/products'
const store = useProductsStore()
store.getCategories()
</script>

<style>
* {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.home {
  margin-top: 100px;
}
.home-choose {
  text-align: center;
  display: flex;
  justify-content: center;
}
.home-choose-categories {
  display: flex;
  justify-content: space-evenly;
  margin-top: 150px;
}
.home-choose-OneCategory {
  width: 250px;
  height: 200px;
  border: 5px solid teal;
}
.home-choose-OneCategory p {
  margin-top: 80px;
  font-size: 24px;
}
</style>

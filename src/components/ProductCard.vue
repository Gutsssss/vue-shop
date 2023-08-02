<template>
  <div class="card">
    <img class="card-img" :src="image" />
    <RouterLink :to="{name:'productInfo',params:{id:props.id}}"><p>{{ props.title }}</p></RouterLink>
    <FilterButton :title="props.category" @click="store.filterCategory(props.category)"/>
    <p>
      <b>{{ price }}$</b>
    </p>
    <template v-if="desc">
      <p>{{ desc }}</p>
    </template>
    <p>Rating: {{ rating }}</p>
    <div class="btns">
    <template 
    v-if="btn">
    <button class="card-btn" @click="addToCart()">Добавить в корзину</button>
  </template>
  <template v-else-if="!btn"><button class="card-btn" @click="deleteFromCart()">Удалить</button></template>
  <input type="checkbox" :id="id" :value="props.item" v-model="store.likedProducts"  hidden>
  <label :for="id"><Icon width="40" height="40" color="red" :icon="store.likedProd(item) ? 'mdi:cards-heart' : 'mdi:cards-heart-outline'"/></label>
</div>
  </div>
</template>

<script setup>
import {useProductsStore} from '@/store/products'
import FilterButton from './FilterButton.vue';
import { Icon } from '@iconify/vue';
import { defineProps, defineEmits } from "vue";

const store = useProductsStore()
const emit = defineEmits(["addProductToCart","deleteFromCart","liked"]);
const addToCart = () => {
  emit("addProductToCart");
};
const deleteFromCart = () => {
  emit('deleteFromCart')
}
const props = defineProps({
  item:Object,
  title: String,
  category: String,
  price: Number,
  rating:Number,
  id:[Number,String],
  desc: String,
  image: String,
  btn:Boolean,
  info:Boolean,
  like:Boolean
});
</script>

<style scoped>
.card {
  border: 2px solid teal;
  width: 400px;
  padding: 10px;
  margin: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.card-img {
  max-width: 150px;
}
.card-btn {
  color: white;
  height: 40px;
  width: 200px;
  background: teal;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  border: none;
}
.card-btn:hover {
    background-color: rgb(9, 204, 204);
}
.btns {
  display: flex;
  align-items: center;
  gap:30px
}
</style>

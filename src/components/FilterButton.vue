<template>
  <div>
  <template v-if="shopOrHome">
    <button @click="filterCategory">{{ props.title }}</button>
  </template>
    <template v-if="!shopOrHome">
      <RouterLink :to="{name:'shop',params:{category:props.category}}">{{ props.title }}</RouterLink>
    </template>
  </div>
</template>

<script setup>
import { defineProps,defineEmits } from "vue";
const emit = defineEmits(['filterCategory','someClick'])
const filterCategory = () => {
    emit('filterCategory')
}
// const someClick = () => {
//   emit['someClick',props.category]
// }

const props = defineProps({
  title: String,
  category:String,
  shopOrHome:Boolean
});
</script>

<style scoped>
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

<template>
  <ShopNav />
  <router-view/>
</template>
<script>
import ShopNav from './components/ShopNav.vue';
export default {
  components: {
    ShopNav
  }
}
</script>
<style>
body {
  margin: 0;
}
</style>

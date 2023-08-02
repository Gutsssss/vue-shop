<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/shop">Shop</RouterLink></li>
      <li><RouterLink to="/cart">Cart</RouterLink></li>
      <li><RouterLink to="/liked">Liked</RouterLink></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
* {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
nav {
    background-color: teal;
    position: fixed!important;
    left: 0;
    right: 0;
    top: 0;
}
    ul {
        display: flex;
        gap: 15px;
        margin: 0;
        padding: 20px;
    }
    li {
        list-style: none;
        font-size: 30px;
        font-weight: 600;
        
    }
    a {
        text-decoration: none;
        color: white;
    }
</style>

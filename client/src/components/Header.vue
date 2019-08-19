<template>
  <header>
      <img :src="image">
  </header>

</template>

<script>
export default {
name: "Header",
data() {
    // A neat, clean way of storing image in data funtion.
    return {
      image: require('@/assets/Apex logo.png') 
    }
}
}
</script>

<style scoped>
img {
    width: 300px
}

/* When screen is small logo sets to the middle automatically. */
@media(max-width: 700px) {
img {
    display: block;
    margin: auto;
}
}
</style>

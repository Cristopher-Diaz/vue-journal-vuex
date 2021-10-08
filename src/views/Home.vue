<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola</h1>

    <button @click="goToDaybook" class="btn-primary btn">boton</button>
  </div>
</template>

<script>
export default {
  methods:{
    goToDaybook(){
      this.$router.push({
        name:'no-entry'
      })
    }
  }
}
</script>
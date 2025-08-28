<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" class="img-fluid"> -->
    <!-- <HelloWorld msg="Welcome | Bienvenidos | Irasshaimase"/> -->
    <CvProfile/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CvProfile from './components/CvProfile.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    CvProfile,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

/* .page-style {
  
  background-image: url('~@/assets/striped-background.svg');
  background-size: cover;
} */


</style>
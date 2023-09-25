<template>
  <div>
    <NavBar/>
    <HomePage/>
  </div>
</template>

<script>
import NavBar from './Components/AporiaNav.vue';
import HomePage from './Components/HomePage.vue';  

export default {
  components: {
    NavBar,
    HomePage
  },
  data() {
    return {
      
    };
  }
}
</script>

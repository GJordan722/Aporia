<template>
  <div>
    <NavBar/>
    <div class="container-fluid" id="homePage">
      <div class="d-flex flex-column align-items-center">
        <div class="w-75">
        <img class="img-fluid" src="./assets/Main_Page_First_Pic.jpg" alt="">
        </div>
      </div>
      <div class="">
        <p>
        Aporia is a New Orleans based fashion brand that sits on the crux of luxury and streetwear. The inspiration for our vision comes from a combination of stories, cultures, and ideologies shared between members who originate from all different walks of life. Young and ambitious, Aporia strives to define and redefine how creative expression and unique perspective can fuel next level design and an ever changing aesthetic. We discover and create within a state of apophenia, or a tendency to perceive meaningful connections between unrelated things. Seeking to reveal the full narrative through an all encompassing perspective, the lessons and stories that inspire our creativity lives in every thread and stitch of every piece of our incomparable apparel. 
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Components/AporiaNav.vue';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      
    };
  }
};
</script>
<template>
  <div>
    <!-- <NavBar/>
    <HomePage/> -->
    <div class="d-flex flex-column align-items-center">
      <div class="pb-5"></div>
      <div class="container-fluid text-center pt-5">
        <img class="img-fluid w-75" src="./assets/Images/Aporia_BLACK-cropped.svg" alt="">
      </div>
      <h1 id="demo" class="d-flex flex-row justify-content-center"></h1>
    </div>
  </div>
</template>

<script>
// import NavBar from './Components/AporiaNav.vue';
// import HomePage from './Components/HomePage.vue';  

export default {
  components: {
    // NavBar,
    // HomePage
  },
  data() {
    return {
      
    };
  },
  mounted() {
    // Set the date we're counting down to
var countDownDate = new Date("Sep 25, 2023 19:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
  }
};
</script>

<style scoped>
#demo {
  color: white;
  font-size: 10rem;
  -webkit-text-stroke-width: .15rem;
  -webkit-text-stroke-color: black;
}

#tbip {
  font-family: 'NEXT ART Thin';
}
</style>
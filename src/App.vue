<template>
  <div>
    <!-- <NavBar/>
    <HomePage/> -->
    <div class="d-flex flex-column align-items-center">
      <div class="pb-5"></div>
      <div class="container-fluid text-center pt-5">
        <img class="img-fluid w-75" src="./assets/Images/Aporia_BLACK-cropped.svg" alt="">
      </div>
      <div id="demo" class="d-inline-flex flex-row justify-content-center flex-wrap">
        <div class="d-flex flex-column">
          <h1 id="days" class=""></h1>
          <h4 class="text-center">DAY</h4>
        </div>
        <div class="d-flex flex-column">
          <h1 id="hours" class=""></h1>
          <h4 class="text-center">HOUR</h4>
        </div>
        <div class="d-flex flex-column">
          <h1 id="minutes" class=""></h1>
          <h4 class="text-center">MIN</h4>
        </div>
        <div class="d-flex flex-column">
          <h1 id="seconds" class=""></h1>
          <h4 class="text-center">SEC</h4>
        </div>
      </div>
      
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
    var countDownDate = new Date("Oct 2, 2023 01:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)) < 10 ? "0" + Math.floor(distance / (1000 * 60 * 60 * 24)).toString() : Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10 ? "0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString() : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) < 10 ? "0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString() : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
    var seconds = Math.floor((distance % (1000 * 60)) / 1000) < 10 ? "0" + Math.floor((distance % (1000 * 60)) / 1000) : Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days + ":";
    document.getElementById("hours").innerHTML = hours + ":";
    document.getElementById("minutes").innerHTML =  minutes + ":";
    document.getElementById("seconds").innerHTML = seconds + "";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      
    }
  });
  }
};
</script>

<style scoped>
h1 {
  color: white;
  font-size: 14rem;
  letter-spacing: .5rem;
  -webkit-text-stroke-width: .14rem;
  -webkit-text-stroke-color: black;
}

h4 {
  color: white;
  font-size: 3rem;
  letter-spacing: .5rem;
  -webkit-text-stroke-width: .07rem;
  -webkit-text-stroke-color: black;
}

#tbip {
  font-family: 'NEXT ART Thin';
}
</style>
<script setup>
  import { ref } from 'vue';
  const screenWidth = ref(window.innerWidth).value;
  var mobile = screenWidth > 768 ? false : true;
</script>

<template>
<div>
  <div v-if="mobile">
    <div class="d-flex flex-column align-items-center mx-2 position-relative ">
      <div class="d-flex flex-column align-items-center">
        <div class="d-flex flex-column position-absolute w-75 px-2" id="shopNow" style="top: 5vh;">
          <h1 class="w-100" style="color: #C8020D;">V1 COLLECTION OUT NOW</h1>
          <RouterLink to="/Store" class="">
            <button class="btn btn-light p-3 w-100" type="button" style="font-size: 1.3rem; font-weight: 700;">SHOP</button>
          </RouterLink>
        </div>
        <img class="img-fluid " src="../assets/Images/Main_Page_First_Pic.jpg" alt="" style="height: 80vh;">
      </div>
    </div>
  </div>
  <div class="container-fluid position-relative" v-else>
    <div class="d-flex flex-column align-items-center pb-4 position-relative ">
      <div class="w-75 d-flex flex-column align-items-center">
        <div class="d-flex flex-column position-absolute" id="shopNow">
          <h1>VOLUME 1</h1>
          <RouterLink to="/Store" class="">
            <button class="btn btn-light p-3 w-100" type="button">LIMITED STOCK - PREORDER NOW</button>
          </RouterLink>
        </div>
        <img class="img-fluid" src="../assets/Images/Main_Page_First_Pic.jpg" alt="">
      </div>
    </div>
    <div class="row w-100">
      <div class="col-1">

      </div>
      <div class="col m-5 pb-5 pt-5" :style="{overflowX: 'auto', height: '40vh'}">
        <p class="text-end" id="homeTxt">
        Aporia is a New Orleans based fashion brand that sits on the crux of luxury and streetwear. The inspiration for our vision comes from a combination of stories, cultures, and ideologies shared between members who originate from all different walks of life. Young and ambitious, Aporia strives to define and redefine how creative expression and unique perspective can fuel next level design and an ever changing aesthetic. We discover and create within a state of apophenia, or a tendency to perceive meaningful connections between unrelated things. Seeking to reveal the full narrative through an all encompassing perspective, the lessons and stories that inspire our creativity lives in every thread and stitch of every piece of our incomparable apparel. 
        </p>
      </div>
      <div class="col-6">
        <img class="img-fluid position-absolute" id="topPicLine" src="../assets/Images/Site_Deesign_Assets-03_FLIPPED.svg" alt="">
        <img class="img-fluid position-absolute w-50 " id="aporiaBlue" src="../assets/Images/A_BLUE-cropped.svg" alt="">
      </div>
    </div>
    <div class="d-flex flex-column align-items-center pt-5">
      <div class="w-75 pb-5">
        <img class="img-fluid" src="../assets/Images/Main_Page_Second_Pic.jpg" alt="">
      </div>
      <div class="pt-5 container-fluid text-center" id="timer">
        V1 COLLECTION ENDS
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
      <div class="row">
        <div class="col-3">

        </div>
        <div class="col">
          <p id="homeTxt" class="pb-5 mb-5">
            Pre-Orders end and the market will open for routine operation at the end of the timer. Pre-Orders should be received at least two week after the timer end.
          </p>
        </div>
        <div class="col-3">

        </div>
      </div>
      <div class="d-flex flex-column align-items-center w-100 pt-5 pb-5 mb-5 ">
        <div class="w-75">
          <div class="row position-relative">
            <div class="col-6 mb-4 pb-3">
              <img class="img-fluid position-absolute w-100 " id="btmGridLine" src="../assets/Images/Site_Deesign_Assets-03.svg" alt="">
              <img class="img-fluid"  src="../assets/Images/Main_Page_Bottom_Grid_Top_Left.jpg" alt="">
             
            </div>
            <div class="col-6 mb-4 pb-3">
              <img class="img-fluid" src="../assets/Images/Main_Page_Bottom_Grid_Top_Right.jpg" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <img class="img-fluid" src="../assets/Images/Main_Page_Bottom_Grid_Lower_Left.jpg" alt="">
            </div>
            <div class="col-6">
              <img class="img-fluid" src="../assets/Images/Main_Page_Bottom_Grid_Lower_Right.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid pb-5 pt-5 mb-5 mt-5">
        <img src="../assets/Images/Site_Deesign_Assets-10.svg" alt="" class="img-fluid">
      </div>
    </div>
  </div>
</div>
  
</template>

<script>

export default {
    data() {
        return {
            counter: "",
            mobile: ref(window.innerWidth).value > 768 ? false : true
        }
    },
    methods: {
      timer() {
        if (!this.mobile) {
          // Set the date we're counting down to
          var countDownDate = new Date("Dec 13, 2023 20:00:00").getTime();

          // Update the count down every 1 second
          this.counter = setInterval(function() {

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
              clearInterval(this.counter);
              
            }
          });
        }
      }
    },
    mounted() {
      this.timer();
    },
    beforeUnmount() {
      clearInterval(this.counter);
    }
}
</script>

<style scoped>
@font-face {
  font-family: 'NEXT ART Bold';
  font-style: normal;
  font-weight: normal;
  src: local('NEXT ART Bold'), url('../assets/Fonts/NEXTART_Bold.woff') format('woff');
}

@font-face {
  font-family: 'NEXT ART Regular';
  font-style: normal;
  font-weight: normal;
  src: local('NEXT ART Regular'), url('../assets/Fonts/NEXTART_Regular.woff') format('woff');
  }

#homeTxt {
  color: rgba(10,10,10,.5);
  font-size: 1.2rem;
  font-weight:200;
  word-spacing: .3rem;
  line-height: 3.5rem;
}

#shopNow {

  position: -webkit-sticky;
  height: 10vh;
  font-family: 'NEXT ART Regular';
  top: 0;
}

#shopNow h1 {
    font-family: 'NEXT ART Bold' !important;
    font-size: 5vw;
    color: #ffffff;
  }

  #shopNow  button {
    font-size: 1.1vw;
    letter-spacing: .01vw;
    font-weight: 500 !important;
  }

#timer {
  color: #C8020D;
  font-size: calc(100% + 1vw + 1.2vh);
  font-weight: lighter;
  letter-spacing: 0;
  line-height: .1rem;
  font-family: 'NEXT ART Bold';
}

#demo {
  color: white;
  font-family: 'NEXT ART Bold';
}

#demo h1 {
  font-size: 10rem;
  letter-spacing: .5rem;
  -webkit-text-stroke: 2px black; 
}

#demo h4 {
  font-size: 3rem;
  letter-spacing: .5rem;
  -webkit-text-stroke: 2px black;
}

#btmGridLine {
  height: 100vh;
  right: 40vw;
  bottom: 20vh;
}

#topPicLine {
  height: 120vh;
  top: 160vh;
  left: 60vw;
}

#aporiaBlue {
  height: 35vh;
  top: 210vh;
  left: 55vw;
}

#navHr {
        width: 90vw;
        border-top: .40rem solid #1B7367;
        margin-bottom: 0;
        margin-top: 0;
        margin-left: 5vw;
    }
</style>
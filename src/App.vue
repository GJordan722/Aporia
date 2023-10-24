<script setup>
  import { RouterView } from 'vue-router'
  import { ref } from 'vue';
  const screenWidth = ref(window.innerWidth).value;
  var mobile = screenWidth > 768 ? false : true;

  const checkActive = () => {
        const actives = document.querySelectorAll(".active");
        if (actives) {
           actives.forEach((element) => {
              element.classList.remove("active");
           })
        }
   
    }

  const hide = () => {
    const storeClassic = document.getElementById('storeClassic');
    const storeLimited = document.getElementById('storeLimited');
    const storeTailored = document.getElementById('storeTailored');
    const tag1 = document.getElementById('tag1Div');
    const tag2 = document.getElementById('tag2Div');
    const tag3 = document.getElementById('tag3Div');
    const hide = document.getElementById('hide');
    const hide1 = document.getElementById('hide1');

    if (tag1 && tag2 && tag3 && hide && hide1) {
      checkActive();
      tag1.style.top = '30vh';
      tag1.style.transition = 'all .4s linear'
      tag2.style.top = '40vh';
      tag2.style.transition = 'all .4s linear'
      tag3.style.top = '50vh';
      tag3.style.transition = 'all .4s linear';
      hide.style.visibility = 'visible';
      hide1.style.visibility = 'visible';
    }

    storeClassic.style.visibility = 'hidden';
    storeLimited.style.visibility = 'hidden';
    storeTailored.style.visibility = 'hidden';
  }
  

</script>

<template>
  <main>
    <div class="d-flex flex-column align-items-end sticky-top" :style="{backgroundColor: '#ffffff'}">
    <nav class="navbar navbar-expand-lg">
  
      <div class="">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/About" class="nav-link" @click="hide" v-if="!mobile">
              <img class="img-fluid" id="image" src="@/assets/Images/A_BLACK-cropped.svg" alt="">
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Store" class="nav-link" @click="hide">
              <img class="img-fluid" id="image" src="@/assets/Images/SHOPPING-cropped.svg" alt="">
            </RouterLink>
          </li>
          <!-- <li class="nav-item">
            <a href="#" class="nav-link">
              <img class="img-fluid" id="image" src="@/assets/Images/CART-cropped.svg" alt="">
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img class="img-fluid" id="image" src="@/assets/Images/INFLUENCER-cropped.svg" alt="">
            </a>
          </li> -->
        </ul>
      </div>
    </nav>
    <div class="container-fluid text-center mb-3" :style="{height: '9vh', width: '100vw'}">
      <RouterLink to="/" @click="hide">
        <img class="img-fluid brand" src="@/assets/Images/Site_Deesign_Assets-09-cropped.svg" alt="">
      </RouterLink>
    </div>
  </div>
      <RouterView/>
  </main>
</template>


<style scoped>
  #image {
      width: 30px;
      height: 30px;
    }
  .brand {
    width: 100vw;
    height: 100%;
  }
  .homeLogo {
    position: absolute;
    top: 40px;
    width: 100%;
    }
    .navbar-nav > li {
      padding-left: 30px;
      padding-right: 30px;
    }

    .nav-link:hover {
      background-color: #C8020D;
      img {
        filter: invert(100%) sepia(0%) saturate(2878%) hue-rotate(0deg) brightness(104%) contrast(97%);
      }
    }

    .nav-link:focus {
      background-color: #C8020D;
      img {
        filter: invert(100%) sepia(0%) saturate(2878%) hue-rotate(0deg) brightness(104%) contrast(97%);
      }
    }

    * {
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
   }
</style>

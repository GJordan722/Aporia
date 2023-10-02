<script setup>
import { RouterView } from 'vue-router'


</script>

<template>
  <main>
    <div class="d-flex flex-column align-items-end sticky-top" :style="{backgroundColor: '#ffffff'}">
    <nav class="navbar navbar-expand-lg">
      <button class="navbar-toggler navbartoggler-right" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/About" class="nav-link">
              <img class="img-fluid" id="image" src="@/assets/Images/A_BLACK-cropped.svg" alt="">
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Store" class="nav-link">
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
    <div class="container-fluid text-center mb-3" :style="{height: '10vh'}">
      <RouterLink to="/">
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
    width: auto;
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
</style>

<template>
  <div class="d-flex flex-column align-items-end sticky-top bg-light pb-3">
    <nav class="navbar navbar-expand-lg" :style="{position: absolute}">
      <button class="navbar-toggler navbartoggler-right" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img class="img-fluid " src="../assets/Images/A_BLACK-cropped.svg" alt="">
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img class="img-fluid " src="../assets/Images/SHOPPING-cropped.svg" alt="">
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img class="img-fluid " src="../assets/Images/CART-cropped.svg" alt="">
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img class="img-fluid " src="../assets/Images/INFLUENCER-cropped.svg" alt="">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="navbar-toggler-icon"></span>
            </a>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                <img class="img-fluid " src="../assets/Images/A_BLACK-cropped.svg" alt="">
                About
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                <img class="img-fluid " src="../assets/Images/SHOPPING-cropped.svg" alt="">
                Store
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                <img class="img-fluid " src="../assets/Images/CART-cropped.svg" alt="">  
                Cart
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                <img class="img-fluid " src="../assets/Images/INFLUENCER-cropped.svg" alt="">
                Influencers
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid text-center" :style="{height: '15vh'}">
      <a href="#">
        <img class="img-fluid brand" src="../assets/Images/Site_Deesign_Assets-09-cropped.svg" alt="">
      </a>
    </div>
    <!-- <hr class="container-fluid" :style="{width: '90vw', borderTop: '.55rem solid #000000'}"/> -->
  </div>
</template>

<script>
  export default {
      data() {
          return {
              
          }
      }
  }
</script>

<style scoped>
  img {
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
    height: 35vh;
    width: 100%;
    }

    .navbar-nav > li {
      padding-left: 30px;
      padding-right: 30px;
    }
</style>

<template>
    <div class="container-fluid" id="homePage">
      <div class="d-flex flex-column align-items-center pb-4">
        <div class="w-75">
        <img class="img-fluid" src="../assets/Images/Main_Page_First_Pic.jpg" alt="">
        </div>
      </div>
      <div class="row w-100">
        <div class="col-1">

        </div>
        <div class="col m-4 pb-5">
          <p class="text-end" id="homeTxt">
          Aporia is a New Orleans based fashion brand that sits on the crux of luxury and streetwear. The inspiration for our vision comes from a combination of stories, cultures, and ideologies shared between members who originate from all different walks of life. Young and ambitious, Aporia strives to define and redefine how creative expression and unique perspective can fuel next level design and an ever changing aesthetic. We discover and create within a state of apophenia, or a tendency to perceive meaningful connections between unrelated things. Seeking to reveal the full narrative through an all encompassing perspective, the lessons and stories that inspire our creativity lives in every thread and stitch of every piece of our incomparable apparel. 
          </p>
        </div>
        <div class="col-5"></div>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div class="bg-info w-75">
          <img class="img-fluid" src="../assets/Images/Main_Page_Second_Pic.jpg" alt="">
        </div>
      </div>
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
  #homeTxt {
    color: rgba(10,10,10,.5);
    font-size: 1.2rem;
    font-weight:200;
    word-spacing: .2rem;
    line-height: 3.5rem;
  }
</style>
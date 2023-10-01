<script setup>

</script>

<template>
    <div>
        <hr class="container-fluid mb-5" id="navHr"/>
        <div class="d-flex flex-column align-items-center">
            <div class="d-flex flex-row justify-content-center border border-dark" :style="{width: '40vh', height: '8vh'}">
                <h1>ABOUT</h1>
            </div>
            <div class="d-flex flex-row position-relative">
                    <div class="position-relative w-75">
                        <img class="img-fluid" src="../assets/Images/Site_Deesign_Assets-05.svg" alt="">
                        <img class="img-fluid position-absolute" src="../assets/Images/A_WHITE.svg" alt="" :style="{left: '-1vh', top: '35vh', zIndex: '1'}">
                    </div>
                    <div class="text-end pt-5  d-flex flex-column align-items-center w-75">
                        <div class="position-relative d-flex flex-column align-items-end w-75">
                            <p id="homeTxt" class="w-100 my-5 py-5">
                            Aporia is defined as an irresolvable internal contradiction or logical disjunction in a text, argument, or theory. To us, Aporia means celebrating the complexity and contradictions of the unexplored mythos, or stories of the underappreciated and overlooked. Aporia is enjoying every moment and every sensation from various perspectives as part of a whole.
                            </p>
                            <p id="homeTxt" class="w-75 pb-5 mb-5">
                                Our self-expression is a byproduct of our times, and modern times require modern myths. Who are we, or the heroes we champion, but a complete expression of self?
                            </p>
                        </div>
                        <div class="pt-5 mt-5">
                            <img class="img-fluid position-absolute" src="../assets/Images/About_Page_Pic.jpg" alt="" :style="{right: '4vw', width: '70%'}">
                            <img src="../assets/Images/Site_Deesign_Assets-03.svg" alt="" class="img-fluid position-absolute w-75 pt-5" :style="{top: '44vh', right: '-52vw'}">
                        </div>
                    </div>
               
            </div>
        </div>
        
    </div>
</template>


<style scoped>

    #navHr {
        width: 90vw;
        border-top: .40rem solid #1B7367;
        margin-bottom: 0;
    }

    @font-face {
        font-family: 'NEXT ART Regular';
        font-style: normal;
        font-weight: normal;
        src: local('NEXT ART Regular'), url('../assets/Fonts/NEXTART_Regular.woff') format('woff');
    }

    h1 {
        font-family: 'NEXT ART Regular';
        font-size: 6vh;
        color: #ffffff;
        -webkit-text-stroke-width: .08rem;
        -webkit-text-stroke-color: black; 
    }

    #homeTxt {
    color: rgba(10,10,10,.75);
    font-size: 2.2vh;
    font-weight:300;
    word-spacing: 0rem;
    line-height: 4rem;
  }
</style>
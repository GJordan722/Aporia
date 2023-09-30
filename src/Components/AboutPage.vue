<script setup>

</script>

<template>
    <div>
        <hr class="container-fluid mb-5" id="navHr"/>
        <div class="d-flex flex-column align-items-center">
            <div class="d-flex flex-row justify-content-center border border-dark" :style="{width: '40vh', height: '8vh'}">
                <h1>ABOUT</h1>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="position-relative col-5 mx-5">
                        <img class="img-fluid" src="../assets/Images/Site_Deesign_Assets-05.svg" alt="">
                        <img class="img-fluid position-absolute" src="../assets/Images/A_WHITE.svg" alt="" :style="{left: '-1vh', top: '30vh'}">
                    </div>
                    <div class="col text-end pt-5 mt-5 d-flex flex-column align-items-center h-50">
                        <p id="homeTxt" class="p-5 m-5 w-75">
                            Aporia is defined as an irresolvable internal contradiction or logical disjunction in a text, argument, or theory. To us, Aporia means celebrating the complexity and contradictions of the unexplored mythos, or stories of the underappreciated and overlooked. Aporia is enjoying every moment and every sensation from various perspectives as part of a whole.
                        </p>
                        <p id="homeTxt" class="w-75 px-5">
                            Our self-expression is a byproduct of our times, and modern times require modern myths. Who are we, or the heroes we champion, but a complete expression of self?
                        </p>
                        <div class="w-100 ">
                            <img class="img-fluid" src="../assets/Images/About_Page_Pic.jpg" alt="">
                        </div>
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
    line-height: 3rem;
  }
</style>
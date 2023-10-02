<script setup>

</script>

<template>
    <div>
        <hr class="container-fluid mb-5" id="navHr"/>
        <div class="d-flex flex-column align-items-center">
            <div class="d-flex flex-row justify-content-center border border-dark" :style="{width: '40vh', height: '8vh'}">
                <h1 id="topTxt">ABOUT</h1>
            </div>
            <div class="position-relative">
                 <div class="position-absolute" :style="{width: '50%'}">
                    <img class="img-fluid" src="../assets/Images/Site_Deesign_Assets-05.svg" alt="">
                    <img class="img-fluid position-absolute" src="../assets/Images/A_WHITE.svg" alt="" :style="{left: '0vh', top: '48vh', zIndex: '1'}">
                </div>
                <div class="container-fluid px-5">
                   <div class="row">
                    <div class="col-4">
                        
                    </div>
                    <div class=" col text-end pt-5  d-flex flex-column align-items-center w-100 px-5 mx-5">
                        <div class="d-flex flex-column align-items-end w-100 ">
                            <p id="homeTxt" class="w-100 my-5 p-5">
                            Aporia is defined as an irresolvable internal contradiction or logical disjunction in a text, argument, or theory. To us, Aporia means celebrating the complexity and contradictions of the unexplored mythos, or stories of the underappreciated and overlooked. Aporia is enjoying every moment and every sensation from various perspectives as part of a whole.
                            </p>
                            <p id="homeTxt" class="w-50 p-5 mb-5">
                                Our self-expression is a byproduct of our times, and modern times require modern myths. Who are we, or the heroes we champion, but a complete expression of self?
                            </p>
                        </div>
                        <div class="py-5 position-relative">
                            <img class="img-fluid w-100" src="../assets/Images/About_Page_Pic.jpg" alt="">
                            <img src="../assets/Images/Site_Deesign_Assets-03.svg" alt="" class="img-fluid position-absolute w-100 pt-5" :style="{top: '-20vh', left: '35vw'}">
                        </div>
                    </div>
                   </div>
              
                </div>
                <div class="d-flex flex-row mt-5 p-5" :style="{background: '#C8020D'}">
                    <div class="mx-5 p-5">
                        <img src="../assets/Images/trace.svg" alt="">
                    </div>
                    <div class="d-flex flex-column py-5 my-5 w-100" id="aboutText">
                        <p class="text-light w-75 pt-5">
                        Aporia's Logo is a symbol that in philosophy represents a logical paradox, a situation where two ideas are true at the same time. In art, history, and life, we choose to embrace the contradicitions. Even when you think you have everything figured out, there's always room for Aporia.
                        </p>
                        <p class="text-light w-75 pb-5 my-5">
                            Our self expression is a byproduct of our times, and modern times require modern myths. Success is one of many phases of the hero's journey, the penultimate exhale from a story riddled with strife, but the today the hero's journey doesn't have a happy ending. They rise, they shine, and they fall. The modern myth has no happy ending.
                        </p>
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-center w-100 py-5">
                    <div class="d-flex flex-column align-items-center border border-dark justify-content-center m-5 w-50" :style="{width: '40vh', height: '15vh'}" id="bottomTxt">
                        <p>
                            Aporia is all encompassing perspective.
                        </p>
                        <p>
                            The greater narrative.
                        </p>
                        <h1>
                           <em>Beauty in Paradox.</em>
                        </h1>
                    </div>
                </div>
            </div>
            <div class="container-fluid py-5 my-5">
                <img src="../assets/Images/Site_Deesign_Assets-10.svg" alt="" class="img-fluid">
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
        font-family: 'Acumin Pro';
        font-style: normal;
        font-weight: normal;
        src: local('Acumin Pro'), url('../assets/Fonts/Acumin-RPro.woff') format('woff');
    }

    @font-face {
        font-family: 'NEXT ART Regular';
        font-style: normal;
        font-weight: normal;
        src: local('NEXT ART Regular'), url('../assets/Fonts/NEXTART_Regular.woff') format('woff');
    }

    @font-face {
        font-family: 'NEXT ART Thin';
        font-style: normal;
        font-weight: normal;
        src: local('NEXT ART Thin'), url('../assets/Fonts/NEXTART_Thin.woff') format('woff');
    }

    #topTxt {
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

    #aboutText {
        line-height: 3rem;
        font-size: 1.5vh;
        font-weight: 200;
        
    }

    #bottomTxt {
        font-family: 'Acumin Pro';
        p {
            font-size: 1.2rem;
            word-spacing: .1rem;
            letter-spacing: .08rem;
        }
    }

</style>
<script setup>

    import { ref } from 'vue';

    const screenWidth = ref(window.innerWidth).value;
 

    var mobile = screenWidth > 768 ? false : true;


    const checkActive = (id) => {
        const actives = document.querySelectorAll(".active");
        if (actives != null) {
           actives.forEach((element) => {
            if (element.id != id) {
                element.classList.remove("active");
            }
           })
        }
   
    }

    const shiftTag = (event) => {
        const hide = document.getElementById('hide');
        const hide1 = document.getElementById('hide1');
        const storeClassic = document.getElementById('storeClassic');
        const storeLimited = document.getElementById('storeLimited');
        const storeTailored = document.getElementById('storeTailored');
        const tag1 = document.getElementById('tag1Div');
        const tag2 = document.getElementById('tag2Div');
        const tag3 = document.getElementById('tag3Div');

        if (mobile) {
            if (event.currentTarget.id == "tag1") {
                if (tag1.style.top == '30vh') {
                    tag1.style.top = '0vh';
                    tag1.style.transition = 'all .4s linear'
                    tag2.style.top = '60vh';
                    tag2.style.transition = 'all .4s linear'
                    tag3.style.top = '68vh';
                    tag3.style.transition = 'all .4s linear'
                }
                else if (tag1.style.top == '60vh') {
                    tag1.style.top = '0vh';
                    tag1.style.transition = 'all .4s linear'
                    tag2.style.top = '60vh';
                    tag2.style.transition = 'all .4s linear'
                    tag3.style.top = '68vh';
                } else {
                    tag1.style.top = '30vh';
                    tag1.style.transition = 'all .4s linear'
                    tag2.style.top = '40vh';
                    tag2.style.transition = 'all .4s linear'
                    tag3.style.top = '50vh';
                    tag3.style.transition = 'all .4s linear'
                }
            }
            else if (event.currentTarget.id == "tag2") {
                if (tag2.style.top == '40vh') {
                    tag1.style.top = '60vh';
                    tag1.style.transition = 'all .4s linear'
                    tag2.style.top = '0vh';
                    tag2.style.transition = 'all .4s linear'
                    tag3.style.top = '68vh';
                    tag3.style.transition = 'all .4s linear'
                }
                else if (tag2.style.top == '60vh' || tag2.style.top == '68vh') {
                    tag1.style.top = '60vh';
                    tag1.style.transition = 'all .4s linear'
                    tag2.style.top = '0vh';
                    tag2.style.transition = 'all .4s linear'
                    tag3.style.top = '68vh';
                    tag3.style.transition = 'all .4s linear'
                } else {
                    tag1.style.top = '30vh';
                    tag1.style.transition = 'all .4s linear'
                    tag2.style.top = '40vh';
                    tag2.style.transition = 'all .4s linear'
                    tag3.style.top = '50vh';
                    tag3.style.transition = 'all .4s linear'
                }
            }
            else if (event.currentTarget.id == "tag3") {
                if (tag3.style.top == '50vh') {
                    tag1.style.top = '60vh';
                    tag1.style.transition = 'all .4s linear'
                    tag2.style.top = '68vh';
                    tag2.style.transition = 'all .4s linear'
                    tag3.style.top = '0vh';
                    tag3.style.transition = 'all .4s linear'
                }
                else if (tag3.style.top == '68vh') {
                    tag1.style.top = '60vh';
                    tag1.style.transition = 'all .4s linear'
                    tag2.style.top = '68vh';
                    tag2.style.transition = 'all .4s linear'
                    tag3.style.top = '0vh';
                    tag3.style.transition = 'all .4s linear'
                } else {
                    tag1.style.top = '30vh';
                    tag1.style.transition = 'all .4s linear'
                    tag2.style.top = '40vh';
                    tag2.style.transition = 'all .4s linear'
                    tag3.style.top = '50vh';
                    tag3.style.transition = 'all .4s linear'
                }
            }
        }
        switch  (event.currentTarget.id) {
            case "tag1":
                if (!tag1.classList.contains("active")) {
                    checkActive("tag1");
                    tag1.classList.add("active");
                    hide.style.visibility = 'hidden';
                    hide1.style.visibility = 'hidden';
                    storeClassic.style.visibility = 'visible';
                    storeLimited.style.visibility = 'hidden';
                    storeTailored.style.visibility = 'hidden';
                }
                else {
                    tag1.classList.remove("active");
                    hide.style.visibility = 'visible';
                    hide1.style.visibility = 'visible';
                    storeClassic.style.visibility = 'hidden';
                    storeLimited.style.visibility = 'hidden';
                    storeTailored.style.visibility = 'hidden';
                }
                break;
            case "tag2":
                if (!tag2.classList.contains("active")) {
                    checkActive("tag2");
                    tag2.classList.add("active");
                    hide.style.visibility = 'hidden';
                    hide1.style.visibility = 'hidden';
                    storeClassic.style.visibility = 'hidden';
                    storeLimited.style.visibility = 'visible';
                    storeTailored.style.visibility = 'hidden';
                } else {
                    tag2.classList.remove("active");
                    hide.style.visibility = 'visible';
                    hide1.style.visibility = 'visible';
                    storeClassic.style.visibility = 'hidden';
                    storeLimited.style.visibility = 'hidden';
                    storeTailored.style.visibility = 'hidden';
                }
                break;
            case "tag3":
                if (!tag3.classList.contains("active")) {
                    checkActive("tag3");
                    tag3.classList.add("active");
                    hide.style.visibility = 'hidden';
                    hide1.style.visibility = 'hidden';
                    storeClassic.style.visibility = 'hidden';
                    storeLimited.style.visibility = 'hidden';
                    storeTailored.style.visibility = 'visible';
                } else {
                    tag3.classList.remove("active");
                    hide.style.visibility = 'visible';
                    hide1.style.visibility = 'visible';
                    storeClassic.style.visibility = 'hidden';
                    storeLimited.style.visibility = 'hidden';
                    storeTailored.style.visibility = 'hidden';
                }
                break;
            }


    }

  
</script>

<template>
    <div>
        <div v-if="mobile" class="position-relative m-0">
            <hr class="container-fluid mb-3" id="navHr"/>
            <div class="container-fluid">
                <div class="d-flex flex-row justify-content-center position-relative">
                    <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '-0.5vh', background: '#ffffff'}" id="hide1">
                        <h1 id="topTxt">V1 COLLECTION</h1>
                    </div>
                    <img src="../assets/Images/Site_Deesign_Assets-02.svg" alt="" class="position-absolute" :style="{top: '5vh', zIndex: '-1', width: '70vw'}" id="hide">
                    <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '30vh', background: '#C9A580'}" id="tag1Div">
                        <button @click="shiftTag" class="w-100 btn" id="tag1">
                            <h1 id="tagTxt">CLASSICS</h1>
                        </button>
                    </div>
                    <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '40vh', background: '#76C8BF'}" id="tag2Div">
                        <button @click="shiftTag" class="w-100 btn" id="tag2">
                            <h1 id="tagTxt">LIMITED</h1>
                        </button>
                    </div>
                    <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '50vh', background: '#239586'}" id="tag3Div">
                        <button @click="shiftTag" class="w-100 btn" id="tag3">
                            <h1 id="tagTxt">TAILORED</h1>
                        </button>
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-5 my-5 position-absolute" :style="{top: '67vh'}">
                <img src="../assets/Images/Site_Deesign_Assets-10.svg" alt="" class="img-fluid">
            </div>
        </div>

        <div v-else>
            <hr class="container-fluid mb-3" id="navHr"/>
            <div class="container-fluid">
                <div class="d-flex flex-row justify-content-center position-relative">
                    <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '10vh', background: '#ffffff'}" id="hide1">
                        <h1 id="topTxt">V1 COLLECTION</h1>
                    </div>
                    <img src="../assets/Images/Site_Deesign_Assets-02.svg" alt="" class="position-absolute" :style="{top: '5vh', zIndex: '-1', width: '40vw'}" id="hide">
                    <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '-0.5vh', left: '0vw', background: '#C9A580'}" id="tag1Div">
                        <button @click="shiftTag" class="w-100 btn" id="tag1">
                            <h1 id="tagTxt">CLASSICS</h1>
                        </button>
                    </div>
                    <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '-0.5vh', background: '#76C8BF', left: '37vw'}" id="tag2Div">
                        <button @click="shiftTag" class="w-100 btn" id="tag2">
                            <h1 id="tagTxt">LIMITED</h1>
                        </button>
                    </div>
                    <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '-0.5vh', background: '#239586', right: '0vw'}" id="tag3Div">
                        <button @click="shiftTag" class="w-100 btn" id="tag3">
                            <h1 id="tagTxt">TAILORED</h1>
                        </button>
                    </div>
                </div>
            </div>

            <div class="container-fluid pt-5 my-5 position-absolute" :style="{top: '80vh'}">
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
        margin-top: 0;
        margin-left: 5vw;
    }

    #topTxt {
        font-family: 'NEXT ART Regular';
        font-size: 5vh;
        color: #ffffff;
        -webkit-text-stroke-width: .06rem;
        -webkit-text-stroke-color: black; 
    }

    #tagTxt {
        font-family: 'NEXT ART Regular';
        font-size: 5vh;
        color: #ffffff;
        -webkit-text-stroke-width: .04rem;
        -webkit-text-stroke-color: black; 
    }

    .btn:hover {
        background-color: #C8020D;
    }

    .active {
        background-color: #C8020D !important;
    }
</style>
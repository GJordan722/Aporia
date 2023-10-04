<script setup>
    // import ClassicPage from '../Components/ClassicBuyPage.vue'
    

    const shiftTag = (event) => {
        const hide = document.getElementById('hide');
        const storeClassic = document.getElementById('storeClassic');
        const storeLimited = document.getElementById('storeLimited');
        const storeTailored = document.getElementById('storeTailored');
        const tag1 = document.getElementById('tag1Div');
        const tag2 = document.getElementById('tag2Div');
        const tag3 = document.getElementById('tag3Div');

        if (event.currentTarget.id == "tag1") {
            if (tag1.style.top == '35vh') {
                tag1.style.top = '2vh';
                tag1.style.transition = 'all .3s linear'
                tag2.style.top = '55vh';
                tag2.style.transition = 'all .3s linear'
                tag3.style.top = '65vh';
                tag3.style.transition = 'all .3s linear'
                hide.style.display = 'none';
                storeClassic.style.visibility = 'visible';
                storeLimited.style.visibility = 'hidden';
                storeTailored.style.visibility = 'hidden';
            }
            else if (tag1.style.top == '55vh') {
                tag1.style.top = '2vh';
                tag1.style.transition = 'all .3s linear'
                tag2.style.top = '55vh';
                tag2.style.transition = 'all .3s linear'
                tag3.style.top = '65vh';
                hide.style.display = 'none';
                storeClassic.style.visibility = 'visible';
                storeLimited.style.visibility = 'hidden';
                storeTailored.style.visibility = 'hidden';
            } else {
                tag1.style.top = '35vh';
                tag1.style.transition = 'all .3s linear'
                tag2.style.top = '45vh';
                tag2.style.transition = 'all .3s linear'
                tag3.style.top = '55vh';
                tag3.style.transition = 'all .3s linear'
                hide.style.display = 'block';
                storeClassic.style.visibility = 'hidden';
                storeLimited.style.visibility = 'hidden';
                storeTailored.style.visibility = 'hidden';
            }
            
        }
        else if (event.currentTarget.id == "tag2") {
            if (tag2.style.top == '45vh') {
                tag1.style.top = '55vh';
                tag1.style.transition = 'all .3s linear'
                tag2.style.top = '2vh';
                tag2.style.transition = 'all .3s linear'
                tag3.style.top = '65vh';
                tag3.style.transition = 'all .3s linear'
                hide.style.display = 'none';
                storeClassic.style.visibility = 'hidden';
                storeLimited.style.visibility = 'visible';
                storeTailored.style.visibility = 'hidden';
            }
            else if (tag2.style.top == '55vh' || tag2.style.top == '65vh') {
                tag1.style.top = '55vh';
                tag1.style.transition = 'all .3s linear'
                tag2.style.top = '2vh';
                tag2.style.transition = 'all .3s linear'
                tag3.style.top = '65vh';
                tag3.style.transition = 'all .3s linear'
                hide.style.display = 'none';
                storeClassic.style.visibility = 'hidden';
                storeLimited.style.visibility = 'visible';
                storeTailored.style.visibility = 'hidden';
            } else {
                tag1.style.top = '35vh';
                tag1.style.transition = 'all .3s linear'
                tag2.style.top = '45vh';
                tag2.style.transition = 'all .3s linear'
                tag3.style.top = '55vh';
                tag3.style.transition = 'all .3s linear'
                hide.style.display = 'block';
                storeClassic.style.visibility = 'hidden';
                storeLimited.style.visibility = 'hidden';
                storeTailored.style.visibility = 'hidden';
            }
        }
        else if (event.currentTarget.id == "tag3") {
            if (tag3.style.top == '55vh') {
                tag1.style.top = '55vh';
                tag1.style.transition = 'all .3s linear'
                tag2.style.top = '65vh';
                tag2.style.transition = 'all .3s linear'
                tag3.style.top = '2vh';
                tag3.style.transition = 'all .3s linear'
                hide.style.display = 'none';
                storeClassic.style.visibility = 'hidden';
                storeLimited.style.visibility = 'hidden';
                storeTailored.style.visibility = 'visible';
            }
            else if (tag3.style.top == '65vh') {
                tag1.style.top = '55vh';
                tag1.style.transition = 'all .3s linear'
                tag2.style.top = '65vh';
                tag2.style.transition = 'all .3s linear'
                tag3.style.top = '2vh';
                tag3.style.transition = 'all .3s linear'
                hide.style.display = 'none';
                storeClassic.style.visibility = 'hidden';
                storeLimited.style.visibility = 'hidden';
                storeTailored.style.visibility = 'visible';
            } else {
                tag1.style.top = '35vh';
                tag1.style.transition = 'all .3s linear'
                tag2.style.top = '45vh';
                tag2.style.transition = 'all .3s linear'
                tag3.style.top = '55vh';
                tag3.style.transition = 'all .3s linear'
                hide.style.display = 'block';
                storeClassic.style.visibility = 'hidden';
                storeLimited.style.visibility = 'hidden';
                storeTailored.style.visibility = 'hidden';
            }
        }


    }

  
</script>

<template>
    <div>
        <hr class="container-fluid mb-3" id="navHr"/>
        <div class="container-fluid">
            <div class="d-flex flex-row justify-content-center position-relative">
                <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '2vh', background: '#ffffff'}">
                    <h1 id="topTxt">V1 COLLECTION</h1>
                </div>
                <img src="../assets/Images/Site_Deesign_Assets-02.svg" alt="" class="w-50 position-absolute" :style="{top: '2vh'}" id="hide">
                <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '35vh', background: '#C9A580'}" id="tag1Div">
                    <button @click="shiftTag" class="w-100 btn" id="tag1">
                        <h1 id="tagTxt">CLASSICS</h1>
                    </button>
                </div>
                <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '45vh', background: '#239586'}" id="tag2Div">
                    <button @click="shiftTag" class="w-100 btn" id="tag2">
                    <h1 id="tagTxt">LIMITED</h1>
                    </button>
                </div>
                <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '55vh', background: '#C8020D'}" id="tag3Div">
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
        background-color: #76C8BF;
    }
</style>
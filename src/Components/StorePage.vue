<script setup>
    const hidePic = () => {
        const hide = document.getElementById('hide');
        if (hide.style.display == 'block') {
            hide.style.display = 'none'
        } else {
            hide.style.display = 'block'
        }
    }

    const shiftTag = (event) => {
        // const tag1 = document.getElementById('tag1');
        // const tag2 = document.getElementById('tag2');
        // const tag3 = document.getElementById('tag3');

        if (event.target. == "tag1") {
            console.log("penis")
            // tag1.classList.add("shifted");
            // tag1.style.height = '4vh';
        }

        // if (event.target == "tag1") {
           
        // }

    }

  
</script>

<template>
    <div>
        <hr class="container-fluid mb-5 position-fixed" id="navHr"/>
        <div class="container-fluid">
            <div class="d-flex flex-row justify-content-center position-relative" id="myDIV">
                <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '2vh', background: '#ffffff'}">
                    <h1 id="topTxt">MARKET</h1>
                </div>
                <img src="../assets/Images/Site_Deesign_Assets-02.svg" alt="" class="w-50 position-absolute" :style="{top: '2vh'}" id="hide">
                <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '35vh', left: '37vw', background: '#C9A580'}">
                    <button @click="shiftTag" class="w-100 btn" id="tag1">
                        <h1 id="tagTxt">ESSENTIALS</h1>
                    </button>
                </div>
                <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '45vh', left: '37vw', background: '#239586'}">
                    <button @click="hidePic" class="w-100 btn" id="tag2">
                    <h1 id="tagTxt">LIMITED</h1>
                    </button>
                </div>
                <div class="d-flex flex-row justify-content-center border border-dark position-absolute" :style="{width: '40vh', height: '7vh', zIndex: '1', top: '55vh', left: '37vw', background: '#C8020D'}">
                    <button @click="hidePic" class="w-100 btn" id="tag3">
                    <h1 id="tagTxt">CUSTOM</h1>
                    </button>
                </div>
            </div>
        </div>

        <div class="container-fluid py-5 my-5 position-absolute" :style="{top: '80vh'}">
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
        background-color: #000000;
    }
</style>
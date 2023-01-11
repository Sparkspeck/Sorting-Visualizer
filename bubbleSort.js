let hasPressedStop = new Boolean(false);  //Key press event

async function bubble() {
    const ele = document.querySelectorAll(".bar");   //Number of elements(bars)
    for(let i = 0; i < ele.length-1; i++){
        for(let j = 0; j < ele.length-i-1; j++){
            if(hasPressedStop == true){   //Event cancel
                return;
            }
            ele[j].style.background = 'cyan';  //Fade while sorting
            ele[j+1].style.background = 'cyan';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){ //Comparing height of the bars
                await delayTime(delay);
                swap(ele[j], ele[j+1]); //swap function swaps flex container(bar) height
            }
            ele[j].style.background = '#0904ed'; //Bar color whilst sorting (dark blue)
            ele[j+1].style.background = '#0904ed';
        }
        ele[ele.length-1-i].style.background = 'red'; //Sorted element color
    }
    ele[0].style.background = 'green'; //default color (green)
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider(); //Not working
    disableNewArrayBtn();
    enableStopSortingBtn();
    await bubble();
    if(hasPressedStop==true){ //Event check for stop button
        disableSpeedSlider(); //Not working
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});
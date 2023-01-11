// swap function util for sorting algorithms takes input of 2 elements next to each other with .style.height feature
function swap(el1, el2) {    
    let temp = el1.style.height;    //third variable for swapping
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    
}


function disableSizeSlider(){
    document.querySelector("#size_input").disabled = true; //Not working
}

function disableSpeedSlider(){
    document.querySelector("#speed_input").disabled = true;  //Not working
}

function enableSpeedSlider(){
    document.querySelector("#speed_input").disabled = false; //Not working
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#size_input").disabled = false; //Not working
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector(".new").disabled = true;
}

function enableNewArrayBtn(){
    document.querySelector(".new").disabled = false;
}

function enableStopSortingBtn(){
    document.querySelector(".stop").disabled = false;
}

function disableStopSortingBtn(){
    document.querySelector(".stop").disabled = true;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function delayTime(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Selecting size slider from DOM
let arraySize = document.querySelector('#size_input'); //Bugging out to 50 ??

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

// Hardcoded speed (in ms)
let delay = 50;                 //SORT SPEED



// Creating barArray to store randomly generated numbers
let barArray = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new barArray input size of barArray
function createNewArray(noOfBars = 30) {  //Hardcoded no. of elements since slider doesn't work
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an barArray of random numbers 
    barArray = [];
    for (let i = 0; i < noOfBars; i++) {
        barArray.push(Math.floor(Math.random() * 300));  //300 = minimum height constraint for bars 
    }
    console.log(barArray);

    const bars = document.querySelector("#sorting");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${barArray[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#sorting");
    bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArrayButton = document.querySelector(".new");
newArrayButton.addEventListener("click", function(){
    hasPressedStop = false;
    enableSpeedSlider();
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

const stopSortingButton = document.querySelector(".stop");
stopSortingButton.addEventListener("click", function(){
    disableSortingBtn();
    disableSizeSlider();
    hasPressedStop = true;
})
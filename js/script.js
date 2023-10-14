// const weight = document.getElementById("myWeight");
// let show = document.getElementById("w1")
//
// weight.addEventListener('range', () => {
// console.log(weight.value);
// })
const weight = document.getElementById("myWeight");
const height = document.getElementById("myHeight");
let w1 = document.getElementById("w1");
let h1 = document.getElementById("h1");
const result = document.getElementById('result')

let h = 0;
let w = 0;

weight.oninput = function () {
  w1.innerHTML = this.value;
  w = this.value;
    console.log(w);
};
height.oninput = function () {
  h1.innerHTML = this.value;
  h = this.value;
    console.log(h);
};

function calculate(){
    let x = 43;
    result.innerHTML = 43
}


// function upDateSlider1(e) {
//     console.log(e);
//     w1.innerHTML = e
// }
// function upDateSlider2(e) {
//     console.log(e);
//     h1.innerHTML = e
// }

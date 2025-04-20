//Adding - Section
let add_num1 = document.querySelector("#add-num1");
let add_num2 = document.querySelector("#add-num2");
let add_result = document.querySelector("#add-result");
let add_btn = document.querySelector(".add-btn");


add_btn.addEventListener('click', () => {
    let adds1 = parseFloat(add_num1.value);//Get the value of 1st number (.Value)
    let adds2 = parseFloat(add_num2.value);//Get the value of second number(.Value)
    add_result.value = adds1 + adds2;//shows the result box
});


//Minus Section
let minus_num1 = document.querySelector("#minus-num1");
let minus_num2 = document.querySelector("#minus-num2");
let munis_result = document.querySelector("#minus-result");
let minus_btn = document.querySelector(".minus-btn");

minus_btn.addEventListener('click', () => {
    let minus1 = parseFloat(minus_num1.value);
    let minus2 = parseFloat(minus_num2.value);
    munis_result.value = minus1 - minus2;
});


// Into Section
let into_num1 = document.querySelector("#into-num1");
let into_num2 = document.querySelector("#into-num2");
let into_result = document.querySelector("#into-result");
let into_btn = document.querySelector(".into-btn");

into_btn.addEventListener('click', () => {
    let into1 = parseFloat(into_num1.value);
    let into2 = parseFloat(into_num2.value)
    into_result.value = into1 * into2;
});



//Divide Section
let divide_num1 = document.querySelector("#divide-num1");
let devide_num2 = document.querySelector("#divide-num2");
let divide_result = document.querySelector("#divide-result");
let divide_btn = document.querySelector(".divide-btn");

divide_btn.addEventListener("click",()=>{
    let divide1 = parseFloat(divide_num1.value);
    let divide2 = parseFloat(devide_num2.value);
    divide_result.value = (divide1 / divide2).toFixed(2);
});





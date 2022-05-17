//Input GLOBAL
let farblos1 = document.getElementById("farblos1").value;
let kaufenA = Number(document.getElementById("kaufenA").value);
let kaufenb = Number(document.getElementById("kaufenB").value);




function ausrechnen(){
    let farblos1 = document.getElementById("farblos1").value;
    let kaufenA = Number(document.getElementById("kaufenA").value);
    let kaufenb = Number(document.getElementById("kaufenB").value);
    let dFA = document.getElementById("dFA").value * farblos1;
    let dFB = document.getElementById("dFB").value * farblos1;

    let gesamtA = kaufenA + dFA;
    let gesamtB = kaufenb + dFB;

    document.getElementById("gesamtA").value = gesamtA;
    document.getElementById("gesamtB").value = gesamtB;

}

function showSlider(){
    document.getElementById("sliderPrintA").innerHTML = document.getElementById("sliderInputA").value; 
    document.getElementById("sliderPrintB").innerHTML = document.getElementById("sliderInputB").value; 
    //document.getElementById("farblos1").value = document.getElementById("farblosTest").value;
} 

function sliderReact(){
    document.getElementById("farblosTest").value = document.getElementById("farblos1").value;
}
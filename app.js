//Input Global Section

    let colorPageInput = document.getElementById("sliderInputColor").value;
    let grayPageInput = document.getElementById("sliderPrintGray").value;
    let priceA = Number(document.getElementById("priceA").value);
    var priceB = Number(document.getElementById("priceB").value);
    var pageGrayA = document.getElementById("pageGrayA").value * grayPageInput;
    var pageGrayB = document.getElementById("pageGrayB").value * grayPageInput;
    var pageColorA = document.getElementById("pageColorA").value * colorPageInput;
    var pageColorB = document.getElementById("pageColorB").value * colorPageInput;
    var maintenanceA = Number(document.getElementById("maintenanceA").value);
    var maintenanceB = Number(document.getElementById("maintenanceB").value);
    var energyResult = document.getElementById("energieResult").value;
    var consumptionA = document.getElementById("consumptionA").value * energyResult;
    var consumptionB = document.getElementById("consumptionB").value * energyResult;

function ausrechnen(){
    

    var totalA = priceA + pageGrayA + pageColorA + maintenanceA + consumptionA;
    var totalB = priceB + pageGrayB + pageColorB + maintenanceB + consumptionB;

    document.getElementById("totalA").value = totalA;
    document.getElementById("totalB").value = totalB;
    
    if(totalA > totalB)
    {
            document.getElementById("result").innerHTML = "B";
            //document.getElementById("vA").style.color = "red";
        }else if(gesamtA < gesamtB){
            document.getElementById("reslut").innerHTML = "A";
            //document.getElementById("vA").style.color = "green";
        }else{
            document.getElementById("result").innerHTML = "Gleichstand";
    }
    
}

let farblos1 = document.getElementById("farblos1").value;
let kaufenA = Number(document.getElementById("kaufenA").value);
let kaufenb = Number(document.getElementById("kaufenB").value);
function showSlider(){
    document.getElementById("sliderPrintGray").innerHTML = document.getElementById("sliderInputGray").value; 
    document.getElementById("sliderPrintColor").innerHTML = document.getElementById("sliderInputColor").value; 
    //document.getElementById("farblos1").value = document.getElementById("farblosTest").value;
} 


/*

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



function sliderReact(){
    document.getElementById("farblosTest").value = document.getElementById("farblos1").value;
}

if(totalA > totalB){
}
*/


/*
<html>
<head>
<title>Druckerkosten</title>
</head>
<body>
<h1>Druckerkosten berechnen:</h1>
<h4>Druckvolumen S/W</h4>

<input type="range" oninput="ausrechnen()" id="farblos1" step="1000" min="0" max="100000"/>

<p id="farblos2"> </p>


Druckvolumen Farbe: <input type="number" id="farbe1"/><br>
Energiekosten pro kW/h: <input type="number" id="energie1"/><br>
<button type="button" onclick="JavaScript:ausrechnen()">Ausrechnen!</button>
<h2 id="vA">Variante A</h2>
Anschaffungskosten:<input type="number" id="kaufenA"/><br>
Druckkosten S/W:<input type="number" id="druckswA"/><br>
Druckkosten Farbe:<input type="number" id="farbeA"/><br>
Energieverbrauch:<input type="number" id="verbrauchA"/><br>
Wartungskosten:<input type="number" id="wartungA"/><br>
Gesamtkosten:<input type="number" id="gesamtA"/>
<h2 id="vB">Variante B</h2>
Anschaffungskosten:<input type="number" id="kaufenB"/><br>
Druckkosten S/W:<input type="number" id="druckswB"/><br>
Druckkosten Farbe:<input type="number" id="farbeB"/><br>
Energieverbrauch:<input type="number" id="verbrauchB"/><br>
Wartungskosten:<input type="number" id="wartungB"/><br>
Gesamtkosten:<input type="number" id="gesamtB"/>
<h2 id="fazit"></h2>
<script>
function ausrechnen(){
document.getElementById("farblos2").innerHTML =
document.getElementById("farblos1").value;
var farbe1 = document.getElementById("farbe1").value;
var farblos1 = document.getElementById("farblos1").value;
var kaufenA = Number(document.getElementById("kaufenA").value);
var kaufenB = Number(document.getElementById("kaufenB").value);
var druckswA = document.getElementById("druckswA").value * farblos1;
var druckswB = document.getElementById("druckswB").value * farblos1;
var farbeA = document.getElementById("farbeA").value * farbe1;
var farbeB = document.getElementById("farbeB").value * farbe1;
var wartungA = Number(document.getElementById("wartungA").value);
var wartungB = Number(document.getElementById("wartungB").value);
var energie1 = document.getElementById("energie1").value;
var verbrauchA = document.getElementById("verbrauchA").value * energie1;
var verbrauchB = document.getElementById("verbrauchB").value * energie1;
var gesamtA = kaufenA + druckswA + farbeA + wartungA + verbrauchA;
var gesamtB = kaufenB + druckswB + farbeB + wartungB + verbrauchB;
document.getElementById("gesamtA").value = gesamtA;
document.getElementById("gesamtB").value = gesamtB;

if(gesamtA > gesamtB){
document.getElementById("fazit").innerHTML = "Variante B gewinnt";
document.getElementById("vA").style.color = "red";
}else if(gesamtA < gesamtB){
document.getElementById("fazit").innerHTML = "Variante A gewinnt";
document.getElementById("vA").style.color = "green";
}else{
document.getElementById("fazit").innerHTML = "Gleichstand";
}

}
</script>
</body>
</html>

*/
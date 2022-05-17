//Input Global Section

    let colorPageInput = document.getElementById("sliderInputColor").value;
    let grayPageInput = document.getElementById("sliderInputGray").value;
    let priceA = Number(document.getElementById("priceA").value);
    let priceB = Number(document.getElementById("priceB").value);
    let pageGrayA = document.getElementById("pageGrayA").value * grayPageInput;
    let pageGrayB = document.getElementById("pageGrayB").value * grayPageInput;
    let pageColorA = document.getElementById("pageColorA").value * colorPageInput;
    let pageColorB = document.getElementById("pageColorB").value * colorPageInput;
    let maintenanceA = Number(document.getElementById("maintenanceA").value);
    let maintenanceB = Number(document.getElementById("maintenanceB").value);
    let energyCost = document.getElementById("energyCost").value;
    let consumptionA = document.getElementById("consumptionA").value * energyCost;
    let consumptionB = document.getElementById("consumptionB").value * energyCost;

function ausrechnen(){
    document.getElementById("sliderPrintGray").innerHTML = document.getElementById("sliderInputGray").value; 
    document.getElementById("sliderPrintColor").innerHTML = document.getElementById("sliderInputColor").value;

    let colorPageInput = document.getElementById("sliderInputColor").value;
    let grayPageInput = document.getElementById("sliderInputGray").value;
    let priceA = Number(document.getElementById("priceA").value);
    let priceB = Number(document.getElementById("priceB").value);
    let pageGrayA = document.getElementById("pageGrayA").value * grayPageInput;
    let pageGrayB = document.getElementById("pageGrayB").value * grayPageInput;
    let pageColorA = document.getElementById("pageColorA").value * colorPageInput;
    let pageColorB = document.getElementById("pageColorB").value * colorPageInput;
    let maintenanceA = Number(document.getElementById("maintenanceA").value);
    let maintenanceB = Number(document.getElementById("maintenanceB").value);
    let energyCost = document.getElementById("energyCost").value;
    let consumptionA = document.getElementById("consumptionA").value * energyCost;
    let consumptionB = document.getElementById("consumptionB").value * energyCost;

    let totalA = priceA + pageGrayA + pageColorA + maintenanceA + consumptionA;
    let totalB = priceB + pageGrayB + pageColorB + maintenanceB + consumptionB;

    document.getElementById("totalA").value = totalA;
    document.getElementById("totalB").value = totalB;
    if(totalA > totalB)
    {
            document.getElementById("result").innerHTML = "B";
            document.getElementById("deference").innerHTML = totalA - totalB;
            //document.getElementById("vA").style.color = "red";
        }else if(totalA < totalB){
            document.getElementById("result").innerHTML = "A";
            document.getElementById("reference").innerHTML = totalB - totalA;
            //document.getElementById("vA").style.color = "green";
        }else{
            document.getElementById("result").innerHTML = "Gleichstand";
            document.getElementById("deference").innerHTML = "Null";
    }
}



function showSlider(){
    document.getElementById("sliderPrintGray").innerHTML = document.getElementById("sliderInputGray").value; 
    document.getElementById("sliderPrintColor").innerHTML = document.getElementById("sliderInputColor").value; 
    let totalA = priceA + pageGrayA + pageColorA + maintenanceA + consumptionA;
    let totalB = priceB + pageGrayB + pageColorB + maintenanceB + consumptionB;
    //document.getElementById("farblos1").value = document.getElementById("farblosTest").value;
}


/*
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
let farbe1 = document.getElementById("farbe1").value;
let farblos1 = document.getElementById("farblos1").value;
let kaufenA = Number(document.getElementById("kaufenA").value);
let kaufenB = Number(document.getElementById("kaufenB").value);
let druckswA = document.getElementById("druckswA").value * farblos1;
let druckswB = document.getElementById("druckswB").value * farblos1;
let farbeA = document.getElementById("farbeA").value * farbe1;
let farbeB = document.getElementById("farbeB").value * farbe1;
let wartungA = Number(document.getElementById("wartungA").value);
let wartungB = Number(document.getElementById("wartungB").value);
let energie1 = document.getElementById("energie1").value;
let verbrauchA = document.getElementById("verbrauchA").value * energie1;
let verbrauchB = document.getElementById("verbrauchB").value * energie1;
let gesamtA = kaufenA + druckswA + farbeA + wartungA + verbrauchA;
let gesamtB = kaufenB + druckswB + farbeB + wartungB + verbrauchB;
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
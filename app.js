
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
            document.getElementById("result").innerText = "B";
            document.getElementById("difference").innerText = totalA - totalB;
        }else if(totalA < totalB){
            document.getElementById("result").innerText = "A";
            document.getElementById("difference").innerText = totalB - totalA;
        }else{
            document.getElementById("result").innerText = "Gleichstand";
            document.getElementById("difference").innerText = "Null";
    }
}

function showTable(){
    let infoTable = document.getElementById("infoTable");
    infoTable.classList.toggle('d-none');
    document.getElementById('tpriceA').innerText = document.getElementById("priceA").value;
    document.getElementById('tpriceB').innerText = document.getElementById("priceB").value;
    document.getElementById('tpageGrayA').innerText = document.getElementById("pageGrayA").value;
    document.getElementById('tpageGrayB').innerText = document.getElementById("pageGrayB").value;
    document.getElementById('tpageColorA').innerText = document.getElementById("pageColorA").value;
    document.getElementById('tpageColorB').innerText = document.getElementById("pageColorB").value;
    document.getElementById('tmaintenanceA').innerText = document.getElementById("maintenanceA").value;
    document.getElementById('tmaintenanceB').innerText = document.getElementById("maintenanceB").value;
    document.getElementById('tconsumptionA').innerText = document.getElementById("consumptionA").value;
    document.getElementById('tconsumptionB').innerText = document.getElementById("consumptionB").value;

}

function showSlider(){
    document.getElementById("sliderPrintGray").innerHTML = document.getElementById("sliderInputGray").value; 
    document.getElementById("sliderPrintColor").innerHTML = document.getElementById("sliderInputColor").value; 
    let totalA = priceA + pageGrayA + pageColorA + maintenanceA + consumptionA;
    let totalB = priceB + pageGrayB + pageColorB + maintenanceB + consumptionB;
}


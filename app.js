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
            document.getElementById("difference").innerHTML = totalA - totalB;
            //document.getElementById("vA").style.color = "red";
        }else if(totalA < totalB){
            document.getElementById("result").innerHTML = "A";
            document.getElementById("difference").innerHTML = totalB - totalA;
            //document.getElementById("vA").style.color = "green";
        }else{
            document.getElementById("result").innerHTML = "Gleichstand";
            document.getElementById("difference").innerHTML = "Null";
    }
}




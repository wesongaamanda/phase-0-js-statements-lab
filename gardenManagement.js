const temperature = 90;
function waterPlants() {
    if (temperature > 80) {
        return("Watering on");
    } else {
        return("Watering off");
    }
}
console.log(waterPlants());

const timeOfDay = "morning";
function timeofDay() {
    if (timeOfDay === "evening" || timeOfDay === "night") {
        return("Lights on");
    }
    else if (timeOfDay === "morning") {
        return("Lights off");
    }
    else {
        return("Lights off");
    }
}
console.log(timeofDay());

let soilMoisture = 30;
while (soilMoisture < 40) {
    soilMoisture += 5;
}
console.log(soilMoisture);






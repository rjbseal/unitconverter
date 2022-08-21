/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const units = document.getElementById("units-input")
const btnConvert = document.getElementById("btn-convert")
const convMeters = document.getElementById("conv-meters")

btnConvert.addEventListener("click", function() {
    convMeters.textContent = `${units.value} meters = ${convertMetersToFeet(units.value)} feet | ${units.value} feet = ${convertFeetToMeters(units.value)} meters`
})

function convertMetersToFeet (meters) {
    let result = meters * 3.281;
    return result.toFixed(2)
}
function convertFeetToMeters (feet) {
    let result = feet / 3.281
    return result.toFixed(2)
}


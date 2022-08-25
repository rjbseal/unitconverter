
// store unit conversions in object
const conversions = {
    toFeet: 0,
    toMeters: 0,
    toGallons: 0,
    toLiters: 0,
    toPounds: 0,
    toKilos: 0
}

let { toFeet, toMeters, toGallons, toLiters, toPounds, toKilos } = conversions;

// gather page elements
const units = document.getElementById("units-input")
const btnConvert = document.getElementById("btn-convert")
const convMeters = document.getElementById("conv-meters")
const convLiters = document.getElementById("conv-liters")
const convKilos = document.getElementById("conv-kilos")

btnConvert.addEventListener("click", function() {
    
    if(isNaN(units.value)) { // only dare to attempt calc if valid number
        units.value = "0"
        console.log("Not a number!")
    } else {  

        setConversions(units.value)

        // render meters/feet conversion
        convMeters.textContent = `
            ${units.value} meters = ${toFeet} feet | 
            ${units.value} feet = ${toMeters} meters`

        // render liters/gallons conversion
        convLiters.textContent = `
            ${units.value} liters = ${toGallons} gallons |
            ${units.value} gallons = ${toLiters} liters`
        
        // render kilos/pounds conversion
        convKilos.textContent = `
            ${units.value} kilos = ${toPounds} pounds |
            ${units.value} pounds = ${toKilos} kilos`
    }
})

function setConversions(unitsToConvert) {

    // set unit conversions and round to 2 decimal places
    toFeet = (unitsToConvert * 3.281).toFixed(2) // covert meters to feet
    toMeters = (unitsToConvert / 3.281).toFixed(2) // convert feet to meters
    toGallons = (unitsToConvert / 4.546).toFixed(2) // convert liters to gallons
    toLiters = (unitsToConvert * 4.546).toFixed(2) // convert gallons to liters
    toPounds = (unitsToConvert * 2.205).toFixed(2) // convert kilos to pounds
    toKilos = (unitsToConvert / 2.205).toFixed(2) // convert pounds to kilos
}

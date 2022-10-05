const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";

function updateDisplay() {
    display.value = displayValue;
}

keys.addEventListener('click', function(e) {
    const element = e.target;

    /* ulaştığımız elementin button olup olmama durumu -- matches metodu ile  */
    if (!element.matches("button")) {
        return; 
    }

    console.log(element);
});
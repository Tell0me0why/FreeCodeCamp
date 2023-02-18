// Only change code below this line
class Thermostat {
    constructor(temperature) {
        this.temperature = 5/9 * (temperature - 32);
    }
    get temperature() {
        return this._temperature;
    }
    set temperature(newTemperature) {
        this._temperature = newTemperature;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp); // 26 in Celsius
thermos.temperature = 26;// 24.44 in Celsius
temp = thermos.temperature;
console.log(temp);
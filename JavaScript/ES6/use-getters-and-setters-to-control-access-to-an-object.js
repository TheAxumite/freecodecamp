
// Only change code below this line
class Thermostat{
  constructor(temp){
    this._temp = temp
  }
  //getter
  get temperature(){
    return  5/9 * (this._temp-32) 
  }
  set temperature(newTemp){
    this._temp = newTemp * 9.0 / 5 + 32
    console.log(temp)
  }
  
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale

let temp = thermos.temperature; // 24.44 in Celsius

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
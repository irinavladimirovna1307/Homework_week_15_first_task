const cities = ["Алматы", "Астана", "Шымкент", "Караганда", "Актобе"];
let temperatures = [];


for (let i = 0; i < cities.length; i++) {
   
  temperature = prompt(`Введите температуру для города ${cities[i]}`);
  temperatures.push(Number(temperature));
}

console.log(temperatures);


const cityList = document.getElementById('cityList');

for (let i = 0; i < cities.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = cities[i] + ": " + temperatures[i] + "°C";
  cityList.appendChild(listItem);
}


const maxTemp = Math.max(...temperatures);
const minTemp = Math.min(...temperatures);

document.getElementById('maxTemp').textContent = `Максимальная температура: ${maxTemp}°C`;
document.getElementById('minTemp').textContent = `Минимальная температура: ${minTemp}°C`;

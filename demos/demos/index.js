const API_KEY = "99eafab321e9a24f779cddd51d7a7ba9";
const city = "Atlanta";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

async function fetchData() {
    const response = await fetch(BASE_URL); //fetching info from URL
    const data = await response.json(); //converting to json
    const temperature = data.main.temp;
    const cityName = data.name;
    const weather = data.weather[0].description;
    console.log(response);

    const nameDiv = document.getElementById("name");
    const weatherHTML = `
    <p>City: ${cityName}</p>
    <p>Temperature: ${temperature}</p>
    <p>Weather Description: ${weather}</p>
    `;
    weatherDiv.innerHTML = weatherHTML;
}

document.addEventListener('click', () => {
    fetchData();
});

let count = 0;

document.addEventListener('click', (event) => {
    const button = document.getElementById("button");
    if (event.target === button) {
        //update count
        count++;
        const textElement = document.getElementById("button-info");
        textElement.textContent = count;
    }

});


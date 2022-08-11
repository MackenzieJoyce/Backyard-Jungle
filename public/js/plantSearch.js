console.log("HEY! I am plant search JS file and Im connected!");


const searchFormHandler = async (event) => {
    event.preventDefault();
    console.log("Click Click!")
    // Collect values from the login form
    const plant = document.getElementById('pSearch').value.trim();
    console.log(plant);
    let qJoined = plant.split(' ').join('%20');


    // Send a GET request to the API endpoint
    // const response = await fetch('http://localhost:3001/api/searchplant?plant='
    const response = await fetch('/api/searchplant?plant='
        + qJoined, {
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/api/searchplant?plant=' + qJoined);
    } else {
        alert("Sadly we don't have this plant in our database...")
    }

};

document
    .getElementById('plantSearch')
    .addEventListener('submit', searchFormHandler);

//******************************* */
// WEATHER API BELOW

var weather = {
    APIKey: "d23ee897efa94295b3514040220808",
    myURL: 'http://api.weatherapi.com/v1/current.json?key=',
    fetchWeather: function () {

        fetch(this.myURL + this.APIKey + '&q=auto:ip')
            .then((response) => {
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        console.log(data);
        console.log(data.current.condition.icon);
        document.getElementById("icon").src = data.current.condition.icon;
        document.getElementById("city").innerText = data.location.name;
        document.querySelector(".temp").innerText = "Temp: " + data.current.feelslike_f + " °F";
        document.querySelector(".wind").innerText = "Wind: " + data.current.wind_mph + " MPH";
        document.querySelector(".humidity").innerText = "Humidity: " + data.current.humidity + "%";
    }


};

weather.fetchWeather();

/************************************************************** */

const plantID = document.querySelectorAll('.collection-add');

plantID.forEach(response => {
    response.addEventListener('click', async function myFunction(e) {
        let plant_id = e.target.id;
        const response = await fetch('/api/searchplant/add', {
            method: 'POST',
            body: JSON.stringify({ plant_id }),
            headers: { 'Content-Type': 'application/json' },
    
        });
    
        if (response.ok) {
            document.location.replace('/api/profile');
        } else {
            console.log("Failed to add to collection...")
        }
    })
})

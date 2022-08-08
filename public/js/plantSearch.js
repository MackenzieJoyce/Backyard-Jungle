console.log("HEY! I am plant search JS file and Im connected!");


//Right now it will only search potato no matter what you entered.
const searchFormHandler = async (event) => {
    event.preventDefault();
    console.log("Click Click!")
    // Collect values from the login form
    const plant = document.getElementById('pSearch').value.trim();
    console.log(plant);
    let qJoined = plant.split(' ').join('%20');


    // Send a GET request to the API endpoint
    const response = await fetch('http://localhost:3001/api/searchplant?plant=' 
    + qJoined , {
        headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
        document.location.replace('/api/searchplant?plant=' + qJoined);
    } else {
        console.log("Sadly this API doesn't work...")
    }

};

document
.getElementById('plantSearch')
.addEventListener('submit', searchFormHandler);

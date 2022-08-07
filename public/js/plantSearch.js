console.log("HEY! I am plant search JS file and Im connected!");
const url = 'http://localhost:3001/api/searchplant';
const searchFormHandler = async (event) => {
    event.preventDefault();
    console.log("Click Click!")
    // Collect values from the login form
    const plant = document.getElementById('pSearch').value.trim();

    // Send a POST request to the API endpoint
    const response = await fetch(url , {
        method: 'POST',
        body: JSON.stringify({ plant }),
        headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
        document.location.replace('/api/searchplant');
    } else {
        console.log("Sadly this API doesn't work...")
    }

};

document
.getElementById('plantSearch')
.addEventListener('submit', searchFormHandler);

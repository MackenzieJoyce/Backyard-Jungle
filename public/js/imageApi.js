

fetch('https://www.googleapis.com/customsearch/v1?num=1&imgSize=small&key=AIzaSyAOMapkVritaEyTjG9qlmwvX5q_CjvsrX4&cx=41f8fc9ff288c4c86&q=orchid+plant')  
.then(response => response.json())  
.then(response => console.log(response.items[0].pagemap.cse_thumbnail[0].src))
.catch(err => console.error(err));


console.log('TEST IMAGE JS');
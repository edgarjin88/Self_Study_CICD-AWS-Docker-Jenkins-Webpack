
import '../styles/image_viewer.css'; 
//.css has to be specified as it is not a js file. 

const image = document.createElement('img'); 

image.src = "http://lorempixel.com/400/400"; 

document.body.appendChild(image); 

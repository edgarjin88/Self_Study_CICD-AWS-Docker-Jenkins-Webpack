// import big from '../assets/big.jpeg'
import small from '../assets/small.jpeg' //not function = no "from or require"
import '../styles/image_viewer.css'; 
//.css has to be specified as it is not a js file. 

export default () =>{

  const image = document.createElement('img'); 
  
  image.src = small; 
  
  document.body.appendChild(image); 
}


// const bigImage = document.createElement("img");

// bigImage.src = big;

// document.body.appendChild(bigImage); 

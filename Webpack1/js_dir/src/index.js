// // Commonjs 
// // module.exports, require

// // AMD
// // define, require 
// import sum from './sum'
// import './image_viewer';  //no export, so just import without from. 
// // it will just run inside index.js 

// const total = sum(10, 5); 

// console.log(total);

//////////////////////////

const button = document.createElement('button'); 
button.innerText = 'Click me'; 
button.onclick = () => {
  // global variable. part of es15. Only calling a single module. 
  System.import('./image_viewer.js').then(module =>{
    //code splitting here
    module.default();
  })
}


document.body.appendChild(button); 
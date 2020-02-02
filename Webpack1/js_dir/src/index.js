// Commonjs 
// module.exports, require

// AMD
// define, require 
import sum from './sum'
import './image_viewer';  //no export, so just import without from. 
// it will just run inside index.js 

const total = sum(10, 5); 

console.log(total);
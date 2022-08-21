import {convertHeightCmToFt, convertWeightKgToLb } from './unitConvertor.js';

const weightKg = 66;
const heightCm = 193;

const weightLb = convertWeightKgToLb(weightKg); //we use our variables here, though we just as easily could have written 'const weightLb = convertWeightKgToLb(60);' but that isn't as clear
const heightFt = convertHeightCmToFt(heightCm);

console.log(weightKg + ' KG converted to LBS is: ' + weightLb + 'LBS.');
console.log(heightCm + ' Cm converted to feet is ' + heightFt + 'Ft.');
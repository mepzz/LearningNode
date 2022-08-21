/**
 * //Funtion to convert kg to lbs. 1 KG = 2.2 lb
 * @param weightKg 
 * @returns convertedWeight: number
 */
export function convertWeightKgToLb(weightKg) {
    const convertedWeight = weightKg * 2.2;
    return convertedWeight; //you are using good coding practices by creating the variable and then returning it. 
}

/**
 * You can automatically generate this after writing your function by typing '/**' and hitting enter. 
 * Also useful for writing ongoing notes like this...
 */

/** 
 * Funtion to convert cm to ft. 1 cm = 0.033 ft  
 * @param heightCm: number
 * @returns convertedHeight: number
 */
export function convertHeightCmToFt(heightCm) { //this is how you receive a parameter
    const convertedHeight = heightCm * 0.033 // Set a local variable rather than a global variable. 
                                             // For example... what if you had two functions which BOTH used converted height?
                                             // They'd interfere with each other if they use the same variable.
    return convertedHeight; //don't use [convertedHeight] unless your plan to return an array; For example return [convertedHeightOne, convertedHeightTwo] -> [55, 112]
}


const weightKg = 60;
const heightCm = 190;

const weightLb = convertWeightKgToLb(weightKg); //we use our variables here, though we just as easily could have written 'const weightLb = convertWeightKgToLb(60);' but that isn't as clear
const heightFt = convertHeightCmToFt(heightCm);

console.log(weightKg + ' KG converted to LBS is: ' + weightLb + 'LBS.');
console.log(heightCm + ' Cm converted to feet is ' + heightFt + 'Ft.');
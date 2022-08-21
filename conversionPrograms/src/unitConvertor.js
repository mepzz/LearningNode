let weightKg = 87
let heightCm = 174
let convertedWeight = 0
let convertedHeight = 0



const weightLb = convertWeight();
const heightFt = convertHeight();
console.log(weightLb);
console.log(heightFt);

function convertWeight(){           //Funtion to convert kg to lbs. 1 KG = 2.2 lb
    
    convertedWeight = weightKg * 2.2

    return convertedWeight
}

function convertHeight(){          //Funtion to convert cm to ft. 1 cm = 0.032808 ft
    convertedHeight = heightCm * 0.032808 

    
    return[convertedHeight];
}
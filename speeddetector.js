/* 
Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. 
If the speed is less than 70, it should print “Ok”. 
Otherwise, for every 5 km/s above the speed limit (70), 
it should give the driver one demerit point and
print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. 
If the driver gets more than 12 points, 
the function should print: “License suspended”.
*/



//detectSpeed(100)

const speedDetect = require('prompt-sync');
const prompt = speedDetect();

function detectSpeed(){
    let speed = prompt ('How fast is the driver going?')
    const speedLimit = 70;
    const kmAboveSpeedLimit = 5;

    //calculate points 
    const points = Math.floor((speed - speedLimit) / kmAboveSpeedLimit)

    if (speed < speedLimit){
        return 'Ok'
    }

    if (points >= 12){
        return('License suspended')
    } else {
        console.log("Points: ", points)
        return; 
    }
}

//invoke function 
detectSpeed();

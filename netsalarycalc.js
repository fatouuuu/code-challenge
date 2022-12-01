const net = require('prompt-sync');
const prompt = net();


//gross salary and benefits input by user 
let grossSalary = prompt('Please input your gross monthly salary');

//personal relief 
let personalRelief = 2400;
// tax deduction 
let tax;

function salaryPaye(grossSalary) {
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1
    }
    else if (grossSalary >= 24001 && grossSalary <= 32333) {
        tax = (24000 * 0.1) + ((grossSalary - 24000)*0.25)
    }
    else if (grossSalary > 32333) {
        tax = (24000 * 0.1) + (8333 * 0.25) + ((grossSalary - 32333)*0.3)
    }

    return tax - personalRelief;
} 


// medical cover deduction

function medicalCover (){
    if (grossSalary <= 5999){
        return 150
    }
    else if (grossSalary <= 7999 && grossSalary >= 6000){
        return 300
    }
    else if (grossSalary <= 11999 && grossSalary >= 8000){
        return 400
    }
    else if (grossSalary <= 14999 && grossSalary >= 12000){
        return 500
    }
    else if (grossSalary <= 19999 && grossSalary >= 15000){
        return 600
    }
    else if (grossSalary <= 24999 && grossSalary >= 20000){
        return 750
    }
    else if (grossSalary <= 29999 && grossSalary >= 25000){
        return 850
    }
    else if (grossSalary <= 34999 && grossSalary >= 30000){
        return 900
    }
    else if (grossSalary <= 39999 && grossSalary >= 35000){
        return 950
    }
    else if (grossSalary <= 44999 && grossSalary >= 40000){
        return 1000
    }
    else if (grossSalary <= 49999 && grossSalary >= 45000){
        return 1100
    }
    else if (grossSalary <= 59999 && grossSalary >= 50000){
        return 1200
    }
    else if (grossSalary <= 69999 && grossSalary >= 60000){
        return 1300
    }
    else if (grossSalary <= 79999 && grossSalary >= 70000){
        return 1400
    }
    else if (grossSalary <= 89999 && grossSalary >= 80000){
        return 1500
    }
    else if (grossSalary <= 99999 && grossSalary >= 90000){
        return 1600
    }
    else if (grossSalary >= 100000){
        return 1700
    }
}


//pension scheme deduction

function nssfDeduct(grossSalary) {
    if (grossSalary <= 18000) {
        nssftax = grossSalary * 0.06
    }

    else if (grossSalary > 18000) {
        nssftax = 18000 * 0.06
    }

    return nssftax
}

// to calculate net salary
let netSalary;
netSalary = grossSalary - (salaryPaye(grossSalary) + nssfDeduct(grossSalary) + medicalCover(grossSalary))
console.log('Your net salary is ' + netSalary);



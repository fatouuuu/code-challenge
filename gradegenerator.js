/* 
Challenge 1: Student Grade Generator (Toy Problem)

Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

*/


const ps = require('prompt-sync');
const prompt = ps();

function getGrade() {

    
    let score = prompt ('Please input student marks')
    
    if (score >= 79){
        return 'Grade A';
    }
    else if (score > 60 && score <= 79){
        return 'Grade B';
    }
    else if (score > 49 && score <= 59){
        return 'Grade C';
    }
    else if (score > 40 && score <= 49){
        return 'Grade D';
    }
    else if (score <= 40){
        return 'Grade E';
    }
    else {
        return 'Invalid score'
    }
    
}
//invoke function 
// getGrade()
console.log("You have scored " + getGrade())
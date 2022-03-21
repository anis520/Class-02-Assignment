//  Check the age of your marriage and provide age-appropriate Messages



let userName =prompt('What is your Name ?')
let userAge =prompt(`Hello ${userName} .How old are you ?`)





if(userAge>20){
    console.log(`Hello ${userName} . Your are ready for Marrige.`);
}else{
    console.log(`Hello ${userName} .Your are not ready for Marrige.Wait another ${21-userAge} years.`);
}
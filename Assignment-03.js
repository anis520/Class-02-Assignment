
//Prepare a user access program based on age where everyone between the ages of 20 and 35 will have access

let userName =prompt('What is your Name ?')
let userAge =prompt(`Hello ${userName} .How old are you ?`)


if(userAge>=20 && userAge<=35){
    console.log(`Hello ${userName} .Your are allowed in our program`)
}else{
    console.log(`Hello ${userName} .Your are not allowed in our program`)
}
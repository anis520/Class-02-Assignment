// Prepare a user access program based on age where everyone between the ages of 20 and 35 will have access




let studentName =prompt('What is your Name ?')
let bn =prompt(`Hello ${studentName} . How many numbers did you get in Bangla ?`)




if(bn<33 && bn>0){
    console.log(`Hello ${studentName}.Your number in Bangla is ${bn} .You are got ( F ) grade in Bangla . And your  gpa is 0`);
}else if (bn<40 && bn>32){
    console.log(`Hello ${studentName}.Your number in Bangla is ${bn} .You are got ( D ) grade in Bangla . And your  gpa is 1`);
}else if (bn<50 && bn>39){
    console.log(`Hello ${studentName}.Your number in Bangla is ${bn} .You are got ( C ) grade in Bangla . And your  gpa is 2`);
}else if (bn<60 && bn>49){
    console.log(`Hello ${studentName}.Your number in Bangla is ${bn} .You are got ( B ) grade in Bangla . And your  gpa is 3`);
}else if (bn<70 && bn>59){
    console.log(`Hello ${studentName}.Your number in Bangla is ${bn} .You are got ( A- ) grade in Bangla . And your  gpa is 3.5`);
}else if (bn<80 && bn>69){
    console.log(`Hello ${studentName}.Your number in Bangla is ${bn} .You are got ( A ) grade in Bangla . And your  gpa is 4`);
}else if (bn<101 && bn>79){
    console.log(`Hello ${studentName}.Your number in Bangla is ${bn} .You are got ( A+ ) grade in Bangla . And your  gpa is 5`);
}else{
    console.log(`Hello ${studentName} .Your number is invalied`);
}




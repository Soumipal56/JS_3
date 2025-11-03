// 1.
for(let i = 1; i <= 10; i++){
    console.log(i);
}    

// 2.
for(let i = 1; i<=20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// 3.
for(let i = 10; i>=1; i--){
    console.log(i);
}

// 4. 
for(let i = 100; i<105; i++){
    console.log("yes");
}

// 5. 
for(let i = 1; i<=10; i++){
    if(i % 2 == 0){
        console.log(`${i} - even`);
    }else{
        console.log(`${i} - odd`);
    }
} 
// 1 - odd, 2- even 

// 6.
// let number = +prompt("Enter a number");
// if(number >= 0){
//     console.log("positive");
// }else{
//     console.log("negative");
// }

// 7.
// let age = +prompt("Enter age");
// if(age >= 18){
//     console.log("eligible");
// }else{
//     console.log("not eligible");
// }

// let age = prompt("Enter age");
// if(age === null){
//     console.error("you pressed cancel");
// }
// else{
//  if(age.trim() === ""){
//     console.error("write it correctly");
//  }
//     age = Number(age.trim());
//     if(isNaN(age)){
//         console.error("write it correctly");
//     }
//     else{

//         console.log("not eligible");
//     }
// }

// 8. 
for(let i=1; i<=10; i++){
    console.log(`5 * ${i} = ${5*i}`);
}

// 9.
let count = 0;
for(let num=1; num<=15; num++){
    if(num > 8){
        count++;
    }
}
console.log("Numbers greater than 8:",count);

// 10.
// let user = prompt("Give password");
// let pw = "1234";
// if(user == pw){
//     console.log("Access status accepted");
// }else{
//     console.log("Access status denied");
// }

// 11.
// let max_attempts = 3;
// let correct_pw = "1234";
// for(let i = 1; i <= max_attempts; i++){
//  let user = prompt("Enter password");
//  if(user === correct_pw){
//     console.log("Stop");
//     break;
//  }else if (i === max_attempts){
//     console.log("Access denied");
//  }
//  else{
//     alert("Try again");
//  }
// }

// 12. 
// let count = 0;   
// let word = "";   
// while (word !== "stop") {         
//   word = prompt("Enter a word");  
//   if (word === "yes") {           
//     count++;                      
//   }
// }
// console.log("You typed 'yes' " + count + " times.");
 
// 13.
for(let i = 0; i <= 50; i++){
    if(i % 7 == 0){
        console.log(i);
    }
}

// 14. 
let sum = 0;
for(let i = 0; i <= 30; i++){
    if(i % 2 == 1){
        sum += i;
    }
}
console.log(sum);

// 15.
// let num = +prompt("Enter a number");
// while(num){
//     if(num % 2 == 0){
//         console.log("stop");
//         break;
//     }
//     else{
//         num = +prompt("Enter a number");
//     }
// }

// 16.
// let start = +prompt("Enter start number:");
// let end = +prompt("Enter end number:");
// for(let i = start + 1; i <= end - 1; i++){
//     console.log(i);
// }

// 17.
// let count = 0;
// for(let i = 0; i <= 20; i++){
//     if(i % 2 == 1){
//        count++;
//        console.log(i);
//     }
//     if(count == 3){
//         break;
//     }
// }

// 18.
// let count = 0;
// for(let i = 1; i <= 5; i++){
//     let user = +prompt("Enter a number");
//     if(user >= 0){
//         console.log("positive");
//         count++;
//     }
//     else{
//         console.log("not positive");
//     }
// }
// console.log(count);

// 19.
// let balance = 1000;
// let enough_balance = 100;
// for(let i = 1; i <= 3; i++){
//     let withdraw = +prompt("Enter withdrawal amount");
//     if(withdraw <= balance){
//         balance -= withdraw;
//         console.log(balance);
//     }
//     else{
//         console.log("Insufficient balance");
//     }
// }
// console.log("Final balance: " + balance);



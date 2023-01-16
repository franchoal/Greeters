// var welcome;  
let date = new Date();  
let hour = date.getHours();  
let minute = date.getMinutes();  
let second = date.getSeconds();  
if (minute < 10) {  
  minute = "0" + minute;  
}  
if (second < 10) {  
  second = "0" + second;  
}  
if (hour < 12) {  
  welcome = "Good morning";  
} else if (hour < 17) {  
  welcome = "Good afternoon";  
} else {  
  welcome = "Good evening";  
}  
document.write("<h2>" + "<font color='red'>" + welcome + "</font>" + " welcome to 'Franchoal Dev'  website");  
document.write("<br>" + hour + ":" + minute + ":" + second); 

// let now = new Date();
// let minute = now.getMinutes();
// let hour = now.getHours();
// let time = now.getTime();
// time = now.getHours()
// if (time >= 00 && time < 12) {
//   console.log(`good morning`)

// }








// // let months = prompt(`Enter a month`);
// // let firstChar = months.slice(0,1).toLocaleUpperCase();
// // let otherChar = months.slice(1, months.length).toLocaleLowerCase;
// // let monthValue = firstChar + otherChar;

// // if(monthValue == "January"){
// //   console.log("January as 31 days");
// // }
// // else if(monthValue == "February"){
// //   console.log("February as 28 or 29 days");
// // }
// // else{ console.log("please input a valid month")}


// // let confirmName = prompt(`What is your name`);
// // let confirmState=prompt(`What state are you from`)
// // let confirmage = prompt(`how old are you`)
// // let state = `Lagos`;
// // let studentAge = 18;
// // let studentName = `Ade`;

// // if(confirmName == studentName){
// // if(confirmState == state){
// //   if(confirmage == studentAge){
// //     console.log("You are a recognised Student")
// //   }
// // }
// // }
// // else { console.log("You are not a student")}


// // let staff = [`dayo`, `Bobo`, `Tosin`, `Tola`];
// // staff.pop(`Tola`)
// // staff.push(`Bola`)
// // console.log(staff)

// // console.log(staff[3]);
// // staff[3] = `Bunmi`;




// // let myClass = [];
// // let myMate1 = `Bunmi`;
// // let myMate2 =`Tunde`;
// // let myMate3 =`Caro`;

// // myClass.push(myClass)
// // console.log(myMate1, myMate2, myMate3)

// // let lists = prompt(`Enter your name`);
// // let nameLists =[`Tunde`, `Oyin`, `David`, `Governor`, `Zainab`, `Peter`, `Olubunmi`, `Franklin`];
// // let listFirstChar = nameLists.slice(0,1).toUpperCase();
// // let listotherChar = nameLists.slice(1, request.length).toLowerCase();

// // if (nameLists.includes(lists)){
// //   console.log(`You are a Bonafide student`)
// // }
// // else(console.log(`You are not a Bonafide student, go and Register`))

// // shift
// let comedian = [`AY`, `ALIBABA`, `I GO SAVE`, `EGBOR`,`BASKETMOUTH`]
// // comedian.shift(`WOLI AGBA`)
// comedian.unshift(`BOVI`)
// console.log(comedian)

// // join
// let frameworks =[`vue.js`, `Angular.js`, `Ajax`]
// let result = frameworks.join(` / `)
// console.log(result)
// document.getElementById(`con`).innerHTML=result

// let newString = frameworks.concat(comedian)
// console.log(newString)

// // convert
// let pryColor = [`Red`, `Green`, `Blue`]
// pryColor.toString()
// console.log(pryColor)
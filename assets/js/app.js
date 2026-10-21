const cl =console.log;
//we have given array with at least one condition.
//we have to create of array of those element who pass  the given condition.
//length of new array may be == length of the given array.




let num =[10, 11, 20, 21, 30, 31, 40, 41, 50, 51, 60, 61]

let result =[];

for(let i=0; i<num.length; i++){

if(num[i] % 2 ===0){

    result.push(num[i])
}

}

console.log(result);




let numbers = [10, 20, 30, 40, 50];

let result1 = numbers.filter((num) => {
    return num > 25;
});

console.log(result1);





let ages = [12, 18, 25, 15, 30, 16];

let result2 = ages.filter((age) => {
    return age >= 18;
});

console.log(result2);




let fruits = ["apple", "mango", "banana", "orange", "grapes"];

let result3 = fruits.filter((fruit) => {
    return fruit.length > 5;
});

console.log(result3);


// refactor 

let players =[
    { name: "Player One", age: 25, score: 80 },
    { name: "Player Two", age: 30, score: 90 },
    { name: "Player Three", age: 22, score: 75 },
    { name: "Player Four", age: 28, score: 85 }
];

let result4 = players.filter(player => player.score > 80)

console.log(result4);


let products = ["javascript", "python", "java", "c++", "c", "php"];

let result5 = products.filter(product => product.length > 5);

console.log(result5);





let data = ["apple", "banana", "cherry", "date", "elderberry"];
let result6 = data.filter((item) => item.length > 5);
console.log(result6);






let age = [12, 18, 25, 15, 30, 16];

let result7 = age.filter((age) => {
    return age >= 16;
});

console.log(result7);




let numbers1 =[22, 44, 545, 454, 464, 536, 56, 56 ]

let result8 =numbers1.filter((num) =>{

    return num > 100;
})

console.log(result8);









//create array of numbers which are divisible by 3 and 5 from given array of numbers.


let numbers4 = [10, 15, 20, 30, 45, 60, 22];


let result9 = [];

for (let i=0; i<numbers4.length; i++){
if (numbers4[i] % 3 === 0 && numbers4[i] % 5 === 0){
   result9.push(numbers4[i]);
}
}
console.log(result9);

let data1 = [22, 33, 45, 67, 56, 656, 566, 6645];
let result10 = data1.filter((num) => {
    return num % 3 === 0 && num % 5 === 0;
});
console.log(result10);






var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];


// create a new array of company who start in 80satisfies.

// start >=1980 && start <=1989 80 to 89 decades.


let result11 = [];

for (let i=0; i<companies.length ; i++){
if(companies[i].start >=1980 && companies[i].start <=1989)
result11.push(companies[i])

}

cl(result11);


//-----------------------foreach---------------------//

let result12 =[];
companies.forEach((data)=>{
if (data.start >=1980 && data.start <= 1989)

result12.push(data)
});

cl(result12);






//-------------------filter--------------------//


let result13 = companies.filter((skills) =>{

return (skills.start >= 1980 && skills.start <=1989)

});
cl(result13);








// create array of obj>>start is 80s and company run for atleast 10 years 




let result14 =[];

for (let i = 0; i <companies.length; i++){

if (companies[i].start >=1980 && companies[i].start <=1989 && companies[i].end -companies[i].start)
result14.push(companies[i])
}

cl(result14)



//---------------------foreach---------------------------//

let result15 =[];

companies.forEach((Params) =>{


if (Params.start >=1980 && Params.start <=1989 && Params.end - Params.start)
result15.push(Params)

});
cl (result15)





//=============filter========================//

let result16 = companies.filter((info) =>{
return(info.start >=1980 && info.start <=1989 && info.end - info.start)


});

cl(result16);





// start 80s and category === 'retail'



let result17 =[];

for (let i =0; i<companies.length; i++){

if (companies[i].start >=1980 && companies[i].start <=1989 && companies[i].category .toLowerCase().trim() === 'retail'){
    result17.push(companies[i])
}

};
cl(result17)

    





let result18 =[];

for (let i =0; i<companies.length; i++){

if (companies[i].start >=1980 && companies[i].start <=1989 && companies[i].category .toLowerCase() .indexOf('retail') > - 1){
    result18.push(companies[i])
}

}

cl(result18)




let result19 =[];

for (let i =0; i<companies.length; i++){

if (companies[i].start >=1980 && companies[i].start <=1989 && companies[i].category .toLowerCase() .includes('retail')){
    result19.push(companies[i])
}

}

cl(result19)







//--------------------foreach-------------------------//

let result20 =[];

companies.forEach((data)=>{

if(data.start >=1980 && data.start <=1989 && data.category .toLowerCase() .trim()==='retail'){
    result20.push(data)
}

});
cl(result20)
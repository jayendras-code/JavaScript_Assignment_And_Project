console.log("-- Multiplication Table of 5 --");

let num = 5;

for (let i=1 ; i<=5 ; i++){
     console.log(`${num}x${i}= ${num*i}`);    
}

console.log("-- First number > 10 divisible by 6 --");

let i=11 ;
while(i<100){
    if(i%6==0){
        console.log("found:",i);
     break;
    }
    i++;
}


let j=0;
do{
j++;
    if(j%2!=0){
        console.log(j);
    }
    else
        continue;
}
while(j<10);

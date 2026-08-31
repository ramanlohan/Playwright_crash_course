let day="tauesdaysick";
console.log(day.length);
let see= day.split('s',3);
console.log(see);
// let's try for some conversions
let one ="11";
let two="22";
let diff=parseInt(one)-parseInt(two);
console.log(diff);
console.log(day.indexOf("ay"));
let val= day.indexOf("a");
let count=0;
while(val!==-1){
    val=day.indexOf("a",val+1);
count++;

}
console.log(count);
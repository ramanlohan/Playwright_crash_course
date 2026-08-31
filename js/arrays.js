let marks=[342,2,5,213,52,53,5,5];
console.log(marks.push(4));
console.log(marks.length);
console.log(marks);
console.log(marks[4]);
console.log(marks.pop());//
console.log(marks.indexOf(5));//returns the index of the specified element
console.log(marks.unshift());//adds the element to the 0th index and returns the length
console.log(marks.includes(2));//returns boolean value if the number is there
let neww =marks.slice(2,7);//it cuts the array where 1st input is the index you want to include 
// and 2nd is not included in it and it does not mutate but returns the new array
let sum=0;
// sum of array
for(let i=0;i<marks.length;i++){
    sum+=marks[i];
}
console.log(sum);
let total=marks.reduce((summ,mark)=>summ+mark,0);//sum=accumlator here it keeps changing with every iteration 
// 0 is the initialising balue,mark is a variable
console.log(total);
let mix=[234,25,5,4,3,634,6,4,2,1,532,53,5,56];
let even=[1];
let j=0
for(let i=0;i<mix.length;i++){
    if(mix[i]%2==0){
        even[j]=mix[i];
        j++;
    }
}
console.log(even);
let withFilter = mix.filter(mix=>mix%2==0);
console.log(withFilter);

let mapMix = mix.map(total=>total/2);
console.log(mapMix);
let accumlatorr=mapMix.reduce((Ana,mena)=>Ana+mena,-234);
console.log(accumlatorr);
mapMix.sort((a,b)=>a-b);
console.log(mapMix);
 
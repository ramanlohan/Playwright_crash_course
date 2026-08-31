let arr=[324,235,54,634,62];
let total=arr.reduce((sum,any)=>sum+any,0)
console.log(total)
let small=arr[1];
for(let i=0;i<arr.length;i++){
    if(small>=arr[i]){
        small=arr[i];
    }
}
console.log("smallest is = "+small)
let big=arr[1];
for(let i=0;i<arr.length;i++){
    if(big<=arr[i]){
        big=arr[i];
    }
}
console.log("biggest is = "+big)
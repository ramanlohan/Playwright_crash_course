let person ={
    firstName:"Ramandeep",
    lastName:"lohan"
}
console.log(person);
console.log(person.lastName);
person.age=23;
person.weight="91kg";
console.log(person);
delete person.weight;
console.log(person);
console.log("age" in person);

for(let keyy in person){
    console.log(person[keyy])
}
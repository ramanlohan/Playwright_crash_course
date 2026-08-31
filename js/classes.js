class Person{
weight="71kg";
constructor(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
fullName(){
    console.log(this.firstName+this.lastName);
}

// we can add properties this way also 
get add(){
    return "see this is new value/property to add key"
}
// constructor is a method which executes by default when a object is created
}
module.exports=Person;
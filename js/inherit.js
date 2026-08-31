let myv=require('./classes.js')
class Pet extends myv{
constructor(firstName,lastName){
    super(firstName,lastName)
}
}
let obj=new Pet("kutta","Billi");
obj.fullName();
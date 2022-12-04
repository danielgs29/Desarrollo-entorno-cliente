const company={
    name: "company",
    employee:[]
}


class Person{
   constructor(name,lastName,age,showFullName){
   this.name=name;
   this.lastName=lastName;
   this.age=age;
   this.showFullName=showFullName;
}
}

let person = new Person("daniel","gomez",21,function(){return`${this.name} ${this.lastName}`});
console.log(person.showFullName());

//puedo añadir funciones al objeto ya creado
person.greet=function(){
    return `Hello ${this.name}`;
}

//asi le añado un metodo nuevo a la clase, tambienle puedo añadir propiedades
Person.prototype.greet=function(){
    return `Hello ${this.name}`;
}

console.log(person.greet());

// ----------------------- agregacion, asociacion---------------------------------

class Person2{
    constructor(name,lastName){
    this.name=name;
    this.lastName=lastName;
 }
 }

 const jhon= new Person2("johm","ray");
 const maria= new Person2("maria","perez");

 //asociacion
 maria.parent=jhon;
 console.log(maria)

 company.employee.push(jhon);
 company.employee.push(maria);

 //agregacion
 console.log(company)

// ----------------------- composicion---------------------------------

const person3 ={
    name:"ryan",
    lastName:"ray",
    address:{
        street:"lorem",
        city:"lorem",
        country:"lorem"
    }
}

//----------------------- encapsulacion---------

class Company{
    constructor(name){
        // encapsulo employee al no ponerle this
        let employee=[]
        this.name=name
        this.getEmployees=function(){
            return employee;
        }
        this.addEmployees=function(employeess){
            employee.push(employeess);
        }
    }
}

const company2= new Company("cocacola");
console.log(company2.getEmployees());
company2.addEmployees({name: "ryan"});
console.log(company2.getEmployees());

//--------------------herencia---------------

class User{
    constructor(name,lastName){
    this.name=name;
    this.lastName=lastName;
 }
 }
 class Programmer extends User{
   constructor(language,name,lastName){
    super(name,lastName);
    this.language=language;
   }
 }


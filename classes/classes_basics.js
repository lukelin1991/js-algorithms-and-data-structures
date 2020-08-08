class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
    }
    //instance method/function
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
}

let firstStudent = new Student("Colt", "Steele")
let secondStudent = new Student("Blue", "Steele")
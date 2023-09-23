function Person(name, age) { // თუ ფუნქცია დიდი ასობგერით იწყება იგი წარმოადგენს კონსტრუქტორ ფუნქციას
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
};

// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);

// person1.sayHello();
// person2.sayHello();

function Student(name, age, studentId) {
    Person.call(this, name, age); // call-ის მეშვეობით, ჩვენ ვიზახებს Person-ის კონსტრუქტორს, სახელისა(name) და ასაკის(age) მისათითებლად.
    this.studentId = studentId;
}

// Person პროტოტიპიდან მემკვიდრეობითობის აწყობა.
Student.prototype = Object.create(Person.prototype);

const student = new Student("Eva", 22, "12345");

student.sayHello();
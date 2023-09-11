let person = {
    firstName: "George",
    lastName: "Tarkhnishvili",
    location: "Tbilisi", 
    age: 25,
    avarageSalary: 589.58
}; // ეს გახლავთ ობიექტი, იგი შედგება გასაღებებისა და მნიშვნელობებისაგან, საიდანაც გასაღებები აუცილებლად უნდა იქნეს უნიკალური ხოლო მნიშნველობები კი შეიძლება არ იქნეს უნიკალური ანუ შეიძლება იქნეს დუბლირებული.

alert(person.firstName); // აქ ხდება მიმართება person ობიექტიდან წერტილის მეშვეობით მის firstName ატრიბუტზე(property).

alert(person['lastName']); // ეს გახლავთ ალტერნატიული მეთოდი მონაცემების გამოტანისა

person['gender'] = 'male'; // ახალი მონაცემის ჩამატება person ობჯეიქტში.

person.birthYear = 1970; // ახალი მონაცემის ჩამატება person ობჯეიქტში.

// alert(person.birthYear);

delete person.birthYear; // იშიფრება შემდეგნაირად: აიღე person ობიექტი და წაშალე birthYear ამ ობიექტიდან. შესაბამისად ეს delete ბრძანება მოახდენს ამ მითითებული გასაღების წაშლას.

// alert(person.birthYear);

alert(Object.keys(person)); // ეს ბრძანება იღებს ობიექტს და გადაყავს ამ ობიექტის გასაღებები ცალკე მასივად.

alert(Object.values(person)); // ეს ბრძანება იღებს ობიექტს და გადაყავს ამ ობიექტის მნიშვნელობები ცალკე მასივად.
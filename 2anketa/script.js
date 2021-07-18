let LastName = prompt ('Enter your last name');
let FirstName = prompt ('Enter your first name');
let MiddleName = prompt ('Enter your middle name');
let age = prompt('Enter your age');
let gender = confirm("Is your gender male?");
let pension = confirm("Are you retired?");

let gen=(gender==true) ? "male" : "female";
let pens=(pension==true) ? "Yes" : "No";


alert("Your full name: " + " " + LastName + " " + FirstName +  " " + MiddleName +"\n" + 
 "Your age: " + age + " years"+ "\n" +
"Your age: " + age*365 + " days" + "\n" +
 "In five years you will be: " + age*5 + " years"+ "\n"+
 "Your gender: " + gen + "\n" +
 "You are retired: " + pens);

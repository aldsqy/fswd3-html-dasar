//Operator Aritmatika
let x = 20;
let y = 10;

console.log(x + y); // Output: 30
console.log(x - y); // Output: 10
console.log(x * y); // Output: 200
console.log(x / y); // Output: 2

//Operator Assignment
let a = 20;
a /= 5; // sama dengan a = a / 5

console.log(a); // Output: 4

//Operator Perbandingan
//Menggunakan Variabel Yang Ada Sebelumnya Yakni x=20 dab y=10
console.log(x > y); // Output: true
console.log(x < y); // Output: false
console.log(x >= y); // Output: true
console.log(x <= y); // Output: false
console.log(x == y); // Output: false
console.log(x != y); // Output: true

//Operator Logika
//Menggunakan Variabel Yang Ada Sebelumnya Yakni x=20 dab y=10
console.log(x > 3 && y < 5); // Output: false
console.log(x < 3 || y > 5); // Output: true
console.log(!(x > 3 && y < 5)); // Output: true


//Operator Bitwise
//Menggunakan Variabel Yang Ada Sebelumnya Yakni x=20 dab y=10
console.log(x & y); // Output: 0
console.log(x | y); // Output: 10

//Operator Ternary
let harga = 20;
let isAdult = (harga >= 10) ? "Yes" : "No";
console.log(isAdult); // Output: Yes
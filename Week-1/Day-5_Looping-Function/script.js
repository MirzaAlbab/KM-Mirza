// Looping
// perulangan yang dilakukan ketika statement memenuhi syarat

// for loop

// for (let index = 0; index < 10; index = index + 1) {
//   console.log('anjani');
//   console.log('rinjani');
// }

// while loop

// let idex = 1;
// while (idex > 10) {
//   console.log('bromo');
//   console.log('batur');

//   idex = idex + 3;
//   idex++;
// }

// do while loop

// do {
//   console.log('lakukan ini dulu');

//   idex++;
// } while (idex > 100);

// function
// bisa di panggil berulang kali oleh suatu event
// menerima beberapa parameter
// paramater adalah variable untuk menangkap value yang dikirim ketika call function

// function <nama_function> () {}

const hariIni = "Jum'at";

function sayHello(myName, myAge, isMarried) {
  console.log(hariIni);
  console.log('hallo ' + myName + ' umur saya ' + myAge + ' dan saya sudah ' + isMarried);

  return 50;
}

function summary(angka1, angka2, angka3) {
  const result = 'faris';
  console.log(result);
}

const hasilDariFunctionSummary = summary(5, 8, 9);

console.log(sayHello('gita', 20, 'sudah menikah'), 'say hello');
console.log(hasilDariFunctionSummary, 'summary');

// summary(5, 6, 7);

// sayHello('yiha', 20, '');
// sayHello('Rufa', 17, 'belum menikah');

// ada function menggunakan return dan tanpa return

// const <nama_function> = function () {}

// const penjumlahan = function (angka1, angka2) {
//   console.log(angka1 + angka2);
// };

const penjumlahan = function (a, b) {
  return a + b;
};

let rubahNilaiA = function (value) {
  return value;
};

let a = rubahNilaiA('hallo ini nilai A yang baru');
console.log(a);

const resultPenjumlahan = penjumlahan(5, 6);

console.log(noReturn());

console.log(penjumlahan());

// penjumlahan(5, 6);

// const <nama_function> = () => {} // arrow function

console.log('OOP');
// OOP
// Object Oriented Programming
// Object-oriented programming (OOP) is a programming paradigm that uses objects and their interactions to solve problems.


// Benefits of OOP
// 1. Abstraction
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism


// OOP
// const fruit = {
//     name: 'Apple',
//     color: 'Red',
//     shape: 'Round',
// }
// console.log(`${fruit.name} is ${fruit.color} and ${fruit.shape}`);

// const fruit2 = (name, color, shape) => {
//   return {
//     name: name,
//     color: color,
//     shape: shape
//   }
// }

// const fruit3 =function (name, color, shape) {
    
//   this.name= name,
//   this.color= color,
//   this.shape= shape

// }

// class fruit4{
//   constructor(name,color,shape){
//     this.name= name,
//     this.color= color,
//     this.shape= shape
//   }

//   howtoeat(){
//     return 'Eat it';
//   }

// }



// const Banana = new fruit4('Banana', 'Yellow', 'Curved');
// const Orange = new fruit4('Orange', 'Orange', 'Round');

// console.log(Banana.howtoeat());
// console.log(Orange);

class Hewan{
  constructor(nama, kriteria){
    this.nama = nama;
    this.kriteria = kriteria;
  }

  caraHidup(){
    return 'makan dan minum';
  }
}

class HewanDarat extends Hewan{
  constructor(nama, kriteria, jumlahkaki){
    super(nama, kriteria);
    this.jumlahkaki = jumlahkaki;
  }
  caraHidup(){
    return 'Berburu dan mengambil makanan';
  }
  darat(){
    return `${this.nama} adalah hewan darat, memiliki kaki ${this.jumlahkaki}, beranak dengan cara ${this.kriteria} dan hidup dengan ${this.caraHidup()}`;
  }
}

class HewanLaut extends Hewan{
  constructor(nama, kriteria, carabernapas){
    super(nama, kriteria);
    this.carabernapas = carabernapas;
  }
  caraHidup(){
    return 'Berenang dan mencari mangsa'
  }
  laut(){
    return `${this.nama} adalah hewan laut, bernapas dengan ${this.carabernapas}, beranak dengan cara ${this.kriteria} dan hidup dengan ${this.caraHidup()}`;
  }
}

class HewanUdara extends Hewan{
  constructor(nama, kriteria, paruh){
    super(nama, kriteria);
    this.paruh = paruh;
  }
  caraHidup(){
    return 'terbang dan mencari tempat tinggal'
  }
  udara(){
    return `${this.nama} adalah hewan laut, berparuh ${this.paruh}, beranak dengan cara ${this.kriteria} dan hidup dengan ${this.caraHidup()}`;
  }
}


const Kucing = new HewanDarat('Kucing', 'melahirkan' , 4);
const Paus = new HewanLaut('Paus', 'melahirkan' , 'paru-paru');
const Elang = new HewanUdara('Elang', 'bertelur' , 'lancip');
console.log(Kucing.darat());
console.log(Paus.laut());
console.log(Elang.udara());
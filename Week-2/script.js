// const a = 20>17;
// const na = 'anda';
// const mer = false
// const ja = true

// if(na && a && !mer && ja){
//   console.log('cie')
// }
// else{
//   console.log('ba')
// }
// const car={
//   first:'avanza',
//   middle:'red',
//   last:'and'
// }
// const car2={
//   dua:'haha'
// }
// const gab = ['gajah','anj','kucing','tikus']
// let num = 1
// gab.slice(0,1)
// gab.splice (0,1)
// gab.unshift('kangguru')
// console.log(gab)
// console.log(!false)
// let kosong =null
// console.log(kosong)

// console.log(typeof(kosong))
// console.log(typeof kosong)

// console.log('1'+2)

// let i='1'
// let o='2'
// console.log(+i + +o)
// console.log(typeof(+i + +o))
// console.log(i + o)
// console.log(typeof(i + o))

console.log('==== SOAL 1 ===')
function changeWord(selectedText, changedText, text){
  if (typeof selectedText === 'string' && typeof changedText === 'string' && typeof text === 'string'){
    const newText = text.replace(selectedText, changedText)
    return newText
  }
  else{
    return 'salah input'
  }

  
}

console.log(changeWord('cinta','benci', 'saya cinta kamu'))
console.log(changeWord('da',123,'anda'))

console.log('')
console.log('==== SOAL 2 ===')
function checkTypeNumber(number){
  if (typeof number === 'number'){
    if(number % 2 === 0){
      return 'genap'
    }
    else{
      return 'ganjil'
    }
  }
  else if(number === undefined){
    return 'error: bro where is the parameter'
  }
  else{
    return 'error: invalid data type'
  }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber('3'))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())

console.log('')
console.log('==== SOAL 5 ===')
function getSplitName(name){
  if(typeof name === 'string'){
    const nameSplit = name.split(' ')
    if (nameSplit.length >= 4){
      return 'Error: this function is only for name with 3 words'
    }else if (nameSplit.length === 2){
      nameSplit[2]= nameSplit[1]
      nameSplit[1] = null
    }
    else if (nameSplit.length === 1){
      nameSplit[2]= null
      nameSplit[1] = null
    }
    const firstName = nameSplit[0]
    const middleName = nameSplit[1]
    const lastName = nameSplit[2]
    return {
      firstName,
      middleName,
      lastName
    }
  }
  else{
    return 'error: invalid data type'
  }
}
console.log('Aldi Daniela Pranata')
console.log('Kuncoro')
console.log('Aurora')
console.log(getSplitName('Aldi Daniela Pranata'))
console.log(getSplitName('Dwi Kuncoro'))
console.log(getSplitName('Aurora'))
console.log(getSplitName('Aurora Aureliya Suka Darma'))
console.log(getSplitName(0))


console.log('')
console.log('==== SOAL 6 ===')
const getSecondBiggestNumber2 = (number) =>{
  if (typeof number === 'object'){
    
    
  return number.sort((a,b) => b-a)[1] 
    
  }
  else if(number === undefined){
    return 'error parameter is missing'

  }
  else{
    return 'error: invalid data type'
  }
}
const dataAngka = [9,5,4,6,8,8,5,5,1,2]
console.log(getSecondBiggestNumber2(dataAngka))

console.log('')
console.log('==== SOAL 7 ===')
const dataPenjualanPakAdi = [
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 76000,
    kategori: 'Sepatu Sport',
    totalTerjual: 90
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Black Brown High',
    hargaSatuan: 96000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 37
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Maroon High',
    hargaSatuan: 36000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 90
  },
  {
    namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
    hargaSatuan: 12000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 90
  }

]



// function getTotalPenjualan(array){
//   let total = 0
//   if (typeof array === 'object'){
//     array.forEach(element => {
//       total += element['totalTerjual']
//     });
//     return total
//   }
//   else{
//     return 'error: invalid data type'
//   }
  
// }
// console.log(getTotalPenjualan(dataPenjualanPakAdi))

const getTotalPenjualan = (array)=> {
  let total = 0
  if (typeof array === 'object'){
    array.forEach(element => {
      total += element['totalTerjual']
    });
    return total
  }
  else{
    return 'error: invalid data type'
  }
  
}
console.log(getTotalPenjualan(dataPenjualanPakAdi))

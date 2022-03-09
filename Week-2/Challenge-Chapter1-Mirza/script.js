console.log('==== SOAL 1 ===')
function changeWord(selectedText, changedText, text){
  if (typeof selectedText === 'string' && typeof changedText === 'string' && typeof text === 'string'){
    const newText = text.replace(selectedText, changedText)
    return newText
  }
  else{
    return 'error: invalid data type'
  }
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku kepadamu'

console.log(changeWord('mencintai','membenci', kalimat1))
console.log(changeWord('bromo','semeru', kalimat2))
console.log(changeWord('da',123,'anda'))

console.log('')
console.log('==== SOAL 2 ===')
const checkTypeNumber = (number) => {
  if (typeof number === 'number'){
    if(number % 2 === 0){
      return 'genap'
    }
    else{
      return 'ganjil'
    }
  }
  else if(number === undefined){
    return 'error: parameter is missing'
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
console.log('==== SOAL 3 ===')

const isValidEmail = (email) => {
  const pattern = /(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  if (typeof email === 'string'){
    if (pattern.test(email)){
      return "Valid"
    }
    else if (/^[\w-\.]+[@]+[\w-]/.test(email)){
      return "Invalid"
    }
    else{
      return "Error: email tidak lengkap"
    }
  }else if (typeof email === 'number'){
    return 'error: email must be string'
  }
  else{
    return 'error: email undefined'
  }
}

console.log(isValidEmail('apranata@binar.co.id'))
console.log(isValidEmail('apranata@binar.com'))
console.log(isValidEmail('apranata@binar'))
console.log(isValidEmail('apranata'))
console.log(isValidEmail(3322))
console.log(isValidEmail())

console.log('')
console.log('==== SOAL 4 ===')

const isValidPassword = (password) => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
  if (typeof password === 'string'){
    if (pattern.test(password)){
      return true
    } 
    else{
      return false
    }
  }else if (typeof password === 'number'){
    return 'error: password must be string'
  }
  else{
    return 'error: password undefined'
  }
}

console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('meOng2'))
console.log(isValidPassword(0))
console.log(isValidPassword())

console.log('')
console.log('==== SOAL 5 ===')

function getSplitName(name){
  if(typeof name === 'string'){
    const nameSplit = name.split(' ')
    if (nameSplit.length >= 4){
      return 'Error: this function is only for name with 3 words'
    }else if (nameSplit.length === 2){
      nameSplit[2] = nameSplit[1]
      nameSplit[1] = null
    }
    else if (nameSplit.length === 1){
      nameSplit[2]= null
      nameSplit[1] = null
    }
    const nama = {
      firstName: nameSplit[0],
      middleName : nameSplit[1],
      lastName : nameSplit[2]
    }
    return nama
    
    
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
console.log(getSecondBiggestNumber2(0))
console.log(getSecondBiggestNumber2())

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
console.log(getTotalPenjualan(2))

console.log('')
console.log('==== SOAL 8 ===')

const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const rupiah = (angka) => {
  let	reverse = angka.toString().split('').reverse().join(''),
	ribuan 	= reverse.match(/\d{1,3}/g);
	ribuan	= 'Rp ' + ribuan.join('.').split('').reverse().join('');
  return ribuan
}

const getInfoPenjualanNovel = (array) => {
  let Info ={
    totalKeuntungan:0,
    totalModal:0,
    persentaseKeuntungan:0,
    bukuTerlaris: '',
    penulisTerlaris: ''
  } 
  let total = 0, total2=0
  if (typeof array === 'object'){
    for (let i = 0; i < array.length; i++) {
      Info.totalKeuntungan += array[i].hargaJual * array[i].totalTerjual
      Info.totalModal += array[i].hargaBeli * (array[i].totalTerjual + array[i].sisaStok)
      if (array[i].totalTerjual > total){
        total = array[i].totalTerjual
        Info.bukuTerlaris = array[i].namaProduk
        Info.penulisTerlaris = array[i].penulis
      }
    }
    for (let i = 0; i < array.length-1; i++) {
      for(let j = i+1; j < array.length; j++){
        if (array[i].penulis === array[j].penulis){
          total2 = array[i].totalTerjual + array[j].totalTerjual
          if(total2 > total){
            Info.penulisTerlaris = array[i].penulis
          }
        }
        
      }
    }
    Info.totalKeuntungan = Info.totalKeuntungan - Info.totalModal
    Info.persentaseKeuntungan = ((Info.totalKeuntungan / Info.totalModal) * 100).toFixed(2) + ' %'
    Info.totalKeuntungan = rupiah(Info.totalKeuntungan)
    Info.totalModal = rupiah(Info.totalModal)
    return Info
  }
  else{
    return 'error: invalid data type'
  }
}

console.log(getInfoPenjualanNovel(dataPenjualanNovel))
console.log(getInfoPenjualanNovel(3))
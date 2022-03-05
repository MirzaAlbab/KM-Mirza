console.log('Day 3');

// variables

// var
// tidak ada validation error
// bisa dideklarasikan lagi dengan value berbeda

// let
// ada validation error
// hanya bisa digunakan satu kali

// const
// variable yang nilai konstan

const nama = 'farhan';


console.log(nama);
console.log(nama);
console.log(nama);
console.log(nama);
console.log(nama);
console.log(nama);

// type data

// number
    // - float
        const rataRataPendudukIndonesia = parseInt(22.5)
        
    // - integer
        const age = 10

// string
    const name = "Farhan pratama"
    const myName = 'Undefined'
    const hari = "Jum'at"
    const description = '"Hari ini mendung"'
    const myMoney = "Rp 200.300"
    
// boolean
    const isMarried = true
    const isOld = false

// object
// selalu pasangan key dan value
// key adalah mirip kayak variable , tapi milik nya object, gak perlu keyword var, let / const
    const orang = {
        height: "169 cm",
        weight : "168 lbs",
        tintColor : "sawo matang",
        age : 20,
        pengalamanKerja : ["Teravin", "Warung pintar", "Binar", "Omind"],
        isUsingGlasses : false
    }

// array
 const myHobbies = ["tidur", "makan", "scrolling tiktok", "repeat", false, 80, { name : "Dinar", age: 22 }]

// NaN
const hasil = "cc" + 20


// null
// let a = null // --> 0

// undefined
// let b = undefined // --> 4byte

// operator
// number
const lakiLaki = 99
const wanita = 11
//  + (penjumlahan)
const jumlahStudent = lakiLaki + wanita

// - (pengurangan)
const penguranganStudent = lakiLaki + wanita - 2

// * perkalian
const perkalianStudent = lakiLaki * wanita

// / pembagian
const pembagianStudent = (lakiLaki + wanita) / 2 

// ** pangkat
const pemangkatanStudent = lakiLaki ** 2

// % modulus
const hasilBagiStudent = wanita % 3


// String
const firstName = "indah"
const nickName = "ida"
const secondName = "juna"
const lastName = "tama"

const fullName = firstName + " " + secondName + " " + lastName
console.log(fullName)

const testMyName = firstName + secondName
console.log(testMyName)

const gabunginNama = "40" + 90
console.log(gabunginNama)

const angka1 = 100
const angka2 = angka1 + 100

let angka3 = 30
angka3 = angka3 + 60 // sama dengan
angka3 += 60

let angka4 = 50
angka4 = angka4 - 50
angka4 -= 50

let angka5 = 50
angka5 = angka5 * 6
angka5 *= 6
console.log(angka5)

// Comparison

// > lebih dari
const isGreaterThan = 5 > 8 

// < kurang dari
const isLessThan = 9 < 20

// >= lebih dari atau sama dengan
const isGreaterThanOrEqual1 = 40 > 40 // false
const isGreaterThanOrEqual2 = 20 >= 20 // true

// <= kurang dari atau sama dengan
const isLessThanOrEqual1 = 90 < 90 // false
const isLessThanOrEqual2 = 50 <= 50 // true

// equal to
// ==
const isEqualTo = "15" == 15 // true

// equal to
// ===
const isEqualTo1 = "15" === 15 // false
const isEqualTo2 = 20 === 20 // true
const isEqualTo3 = "hai" === "kira" // false
const isEqualTo4 = "niga" === "andin" // true
const isEqualTo5 = 'hilmi' === "lola" // true
const isEqualTo6 = firstName === nickName // true
const isEqualTo7 = firstName === lastName // false

// != is not equal
const isNotEqual = "15" != 15 // false

// !== is not equal
const isNotEqual1 = "15" !== 15 // true
const isNotEqual2 = 40 !== 40 // false
const isNotEqual3 = "asa" !== "kuli" // true
const isNotEqual4 = "manda" !== "nisa" // false
const isNotEqual5 = 'nani' !== "nani" // false
const isNotEqual6 = firstName !== nickName // false
const isNotEqual7 = firstName !== lastName // true

const isTrue = (40 > 90) === true // false
const isTrue1 = (40 >= 60) != false // true
const isTrue2 = ( (30 > 40) === (40 * 2 > 68) ) !== false // false
console.log(isTrue, isTrue1, isTrue2)
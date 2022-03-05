// Algorithm

// algorithm adalah suatu instruksi untuk menyelesaikan suatu masalah , berdasarkan runtutan / langkah langkah yang sistematis dan logis

// pseudeocode
/* if komputer tidak hidup
    maka siapkan obeng, alkohol 70%, kuas, hairdrier

    bongkar komputer
    bersihkan komponent komputer
    bagian vga dan motherboard
    di lap pakai alkohol 70%
    lalu keringkan menggunakan hairdrier

    coba hidupkan komputer

    if komputer tidak hidup kembali ke step awal
    else maka komputer sudah siap digunakan
*/

// flowchart
// menggunakan symbol , untuk alur proses yang sistematis dan logis

// conditional
// if statement

const angka1 = 50
const angka2 = 90

if (angka1 >= angka2) {
    console.log("hallo")
} else if (angka1 === 10) {
    console.log("hai")
} else {
    console.log("adios")
}

const myName = "reyhan"
const myFriendName = "kaca"

if (angka1 >= (angka2 - 15)){
    console.log(myName)
} else if (myName === "kurama") {
    console.log("hallo" + myName)
} else if (myFriendName === "nina") {
    console.log("hai" + myFriendName)
} else {
    console.log("who are you ?")
}

if (angka1 >= (angka2 - 15)){
    console.log(myName)
} else if (myName === "rahmadani") {
    console.log("hallo" + myName)
} else if (myFriendName === "Scarlet") {
    console.log("hai" + myFriendName)
} else {
    console.log("who are you ?")
}

// const angka1 = 50
// const angka2 = 90
if (angka1 <= (angka2 - 15)){
    if (myName === "bulan") {
        if (myFriendName === "kevin") {
            console.log(myFriendName)
        }
        console.log(myName) 
    } else {
        console.log("i dont know")
    }
} else {
    console.log("who are you ?")
}

if (angka1 >= (angka2 - 15)) {
    console.log("right")
}


// switch case
const kingName = "Yakin"
const myAge = false

switch (myAge) {
    case 18 :
        console.log("Hilih")
        break
    
    case false :
        console.log("Bener")
        break

    case "apanih" :
        console.log("Yah")
        break

    case 20 :
        console.log("Yakali")
        break

    default:
        console.log("not match")
        break
}

const nilaiKosong = null

if (false) {
    console.log("i'm truthy")
} else {
    console.log("im falsy")
}

// falsy
// false, undefined, null, NaN, 0, ""

// truthy
// selain falsy
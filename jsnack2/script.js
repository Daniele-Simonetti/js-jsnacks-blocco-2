// jsnack 2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// creo un array con 10 numeri random
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('numeri iniziali', numeri);

// creo un array in cui inserire i numeri dispari
let tuttiDispari = [];
// console.log(tuttiDispari);


// // creo la variabile booleana per verificare se il numero è pari o dispari e la inserisco nel ciclo for
for (let index = 0; index < numeri.length; index++) {
  if (numeri[index] % 2 == 1) {
    find = true;
    console.log('numero dispari', find);

    // creo una variabile in cui salvare i numeri dispari
    let numeriDispari = numeri[index];
    // console.log(numeriDispari);

    // pusho i numeri dispari nell'array di prima
    tuttiDispari.push(numeriDispari);
  } else {
    find = false;
    // console.log('numero pari', find);
  }
}
console.log(tuttiDispari);

// i numeri dispari vanno sommati tra loro
let somma = 0;

// creo un altro ciclo for per sommare tutti i numeri dispari che ho nell'array
for (let i = 0; i < tuttiDispari.length; i++) {
  somma += tuttiDispari[i];
}
console.log('somma dei numeri dispari', somma);






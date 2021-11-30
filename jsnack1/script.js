// jsnack 1
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.


// creo due array, uno per i nomi e uno per i cognomi
const nomi = [
  "Ethan ",
  "Michael ",
  "Massimo ",
  "Lucia ",
  "Erica ",
  "Federico ",
  "Marco ",
  "Anna ",
  "Lucio ",
  "Pinco ",
  "Pallo ",
  "Franco "
];
// console.log(nomi);
const cognomi = [
  "Rossi",
  "Pastina",
  "Sforza",
  "Colonna",
  "Pastrami",
  "Pellegrino",
  "Verdi",
  "Crasso",
  "Castellani",
  "Caniblu",
  "SushiRoll",
  "Vitigno"
];
// console.log(cognomi);

// unisco i due array per avere un lenght dei dati maggiore
let nomiCognomi = nomi.concat(cognomi);


// creo un ciclo for per prendere 6 volte un nome casuale e 6 volte un cognome casuale
for (let index = 0; index < nomiCognomi.length; index++) {
  let nomeRandom= nomi[Math.floor(Math.random() * nomi.length)];
  let cognomeRandom= cognomi[Math.floor(Math.random() * cognomi.length)];
  console.log(nomeRandom, cognomeRandom);
}





// inserisci chilometri
let chilometri= parseInt(prompt("Inserisci i chilometri che vuoi percorrere"));
console.log(chilometri);

// inserisci età
let eta= parseInt(prompt("Inserisci la tua età"));
console.log(eta);

// prezzo totale
let prezzo= 0.21 * chilometri;
console.log(prezzo);
let prezzoTot;
let rounded;

if (eta < 18) {
    prezzoTot= prezzo-((prezzo / 100) * 20);
    rounded = prezzoTot.toFixed(2);
    console.log(prezzoTot);
}
else if (eta > 65){
    prezzoTot= prezzo-((prezzo / 100) * 40);
    rounded = prezzoTot.toFixed(2);
    console.log(prezzoTot);
} 
else{
    prezzoTot= prezzo;
    rounded = prezzoTot.toFixed(2);
    console.log(prezzoTot);
}

document.getElementById("anni").innerHTML=(`Hai ${eta} anni`);
document.getElementById("chilometri").innerHTML=(`Vuoi percorrere  ${chilometri} km`);
document.getElementById("prezzo").innerHTML=(`Il prezzo totale del biglietto è di ${rounded}\u20AC`);
// document.getElementById("title").innerHTML=(`Hai ${eta} anni e vuoi percorrere  ${chilometri} km, quindi il prezzo totale del biglietto è di ${rounded}\u20AC`);

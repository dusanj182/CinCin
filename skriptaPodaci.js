// Reference
var ime = document.getElementById('ime_id');
var prezime = document.getElementById('prezime_id');
var imejl = document.getElementById('imejl_id');
var tel = document.getElementById('tel_id');
var filmovi = document.getElementById('filmovi_id');
var karte = document.getElementById('karte_id');
var vreme = document.getElementById('vreme_id');

var tbody = document.getElementById("podaci");

function dodajRed() {
    // Vrednosti elemenata
    const imeV = ime.value;
    const prezimeV = prezime.value;
    const key = imejl.value;        // Imejl je KEY!
    const telV = tel.value;
    const filmoviV = filmovi.value;
    const karteV = karte.value;
    const vremeV = vreme.value;
  
    var vrednosti = [imeV, prezimeV, telV, filmoviV, karteV, vremeV];
    localStorage.setItem(key, JSON.stringify(vrednosti));

}

function prikazi() {
    $("#podaci").find("tr").remove();

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        tbody.innerHTML += `<tr><td> ${key} </td><td> ${value}</td></tr>`;
    }
}

function obrisiTabelu() {
    $("#podaci").find("tr").remove();
}

function obrisiStorage() {

    var x = confirm("Da li ste sigurni da zelite da obrisete citav localstorage?");

    if(x == true) {
        localStorage.clear()
        $("#podaci").find("tr").remove();
    }
   else {
       return false;
   }
}

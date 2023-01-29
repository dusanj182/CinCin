const film = document.getElementById("filmovi_id");

var v = document.getElementById("vreme");

function vreme() {
    const filmV = film.value;
    alert(filmV);
    if(filmV == "f5") {
        $("#vreme").find("div").remove();
       v.innerHTML += `<div id="rad" class="r-1 t1 p1"><input class="my1" type="radio" value="20:00" name="vp" > 22:00 / 1.02.2022. </div>
       <div id="rad" class="r-1 t1 p1"><input class="my1" type="radio" value="19:00 / 5.02.2022." name="vp" > 19:00 / 5.02.2022. </div>  
       <div id="rad" class="r-2 t1 p1"><input class="my1" type="radio" value="17:00 / 6.02.2022." name="vp"> 17:00 / 6.02.2022. </div> 
       <div id="rad" class="r-3 t1 p1"><input class="my1" type="radio" value="20:00" name="vp" > 20:00 / 6.02.2022. </div>  `
                       
    }

    if(filmV == "f1") {
        $("#vreme").find("div").remove();
        v.innerHTML += `<div id="rad" class="r-1 t1 p1"><input class="my1" type="radio" value="20:00" name="vp" id="vreme_id"> 22:00 / 1.02.2022. </div>
        <div id="rad" class="r-1 t1 p1"><input class="my1" type="radio" value="15:00 / 7.02.2022." name="vp" id="vreme_id"> 15:00 / 7.02.2022. </div>  
        <div id="rad" class="r-1 t1 p1"><input class="my1" type="radio" value="19:00 / 7.02.2022." name="vp" id="vreme_id"> 19:00 / 7.02.2022. </div> 
        <div id="rad" class="r-1 t1 p1"><input class="my1" type="radio" value="20:00 / 8.02.2022." name="vp" id="vreme_id"> 20:00 / 8.02.2022. </div>
        <div id="rad" class="r-1 t1 p1"><input class="my1" type="radio" value="21:00 / 8.02.2022." name="vp" id="vreme_id"> 21:00 / 8.02.2022. </div>
        `
    }
}
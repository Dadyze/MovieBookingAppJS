const sala = document.querySelector(".sala");
const vrijednost = document.getElementById("vrijednost");
const brojM = document.getElementById("brojM");
const film = document.getElementById("film");
const dugme = document.getElementById("submit");
const reset = document.getElementById("reset");
var karta = +film.value;


 
film.addEventListener("change",e=>{
    karta = +e.target.value;
    resetujSe();
    povecajKvotu();

});
sala.addEventListener("click",e => {
    
    if(e.target.classList.contains("mjesto") && !e.target.classList.contains("zauzeto")) {
        e.target.classList.toggle("oznaceno")
        povecajKvotu();
    }
});

dugme.addEventListener("click", (e) =>{
   var sviOznaceni = sala.querySelectorAll(".mjesto.oznaceno");
   sviOznaceni.forEach( mjesto => {
    mjesto.classList.remove("oznaceno");
    mjesto.classList.add("zauzeto");
   });

   brojM.innerText = 0;
   vrijednost.innerText = 0;
}
);

reset.addEventListener("click",e =>{
    var zauzeti = sala.querySelectorAll(".mjesto.zauzeto");
    zauzeti.forEach(mjesto => {
        mjesto.classList.remove("zauzeto");
    });
});



function povecajKvotu(){
    const oznacenaM = document.querySelectorAll(".red .mjesto.oznaceno");
    var broj = oznacenaM.length;
    const vr = broj*karta;
 
    brojM.innerText = broj;
    vrijednost.innerText = vr;
  }

  function resetujSe(){
      var zauzetaMjesta = sala.classList.contains("mjesto zauzeto");
      zauzetaMjesta.forEach(mjesto =>{
          mjesto.classList.remove("zauzeto");
      });
      brojM.innerText = 0;
      vrijednost.innerText = 0;
  }

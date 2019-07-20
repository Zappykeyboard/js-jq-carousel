$(document).ready(function () {

  $("#next-button").on("click", function () {

    //seleziono l'indice attivo
    var theIndex = $("#images-container .active");

    //rimuovo la classe all'indice
    theIndex.removeClass("active");

    //se l'indice è l'ultimo elemento, torno al primo elemento
    if (theIndex.hasClass("last")) {
      $("#images-container .first").addClass("active");
    } else {
      //attivo l'immagine successiva
      theIndex.next().addClass("active");
    }
  });

  $("#prev-button").on("click", function () {

    //seleziono l'indice attivo
    var theIndex = $("#images-container .active");

    //rimuovo la classe all'indice
    theIndex.removeClass("active");

    //se l'indice è il primo elemento, torno all'ultimo elemento
    if (theIndex.hasClass("first")) {
      $("#images-container .last").addClass("active");
    } else {
      //attivo l'immagine precedente
      theIndex.prev().addClass("active");
    }


  });



});
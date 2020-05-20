 window.onscroll = function () { 
  if (document.documentElement.scrollTop > 120) {
    document.querySelector('.top-container')
      .classList.add('show');
  } else {
    document.querySelector('.top-container')
      .classList.remove('show');
  }
}

document.querySelector('.top-container')
  .addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
var consulta = $("#searchTable").DataTable();
 $("#inputBusqueda").keyup(function () {
   consulta.search($(this).val()).draw();

   $("#Datos").css({
     "height": "100%",
     "background": "rgba(0,0,0,0.1)"
   })


   if ($("#inputBusqueda").val() == "") {
     $("#Datos").css({
       "height": "auto",
       "background": "none"
     })
     $("#search").hide("fast")

   } else {
     $("#search").fadeIn("fast");
   }

 })
 var ocultar = document.getElementById('search')
 ocultar.addEventListener("click", function () {

   if (true) {

     $("#search").hide("fast")
     $("#Datos").css({
       "background": "none"
     })
   }
 })
 var ocultar2 = document.getElementById('inputBusqueda')
 ocultar2.addEventListener("click", function () {

   if (true) {

     $("#search").hide("fast")
     $("#Datos").css({
       "background": "none"
     })
   }
 })


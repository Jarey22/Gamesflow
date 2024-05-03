//Ejecutar funcion en el evento clic
document.getElementById("btn_open").addEventListener("click",open_close_menu);
//variables declaradas
var side_menu = document.getElementById("menu");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar el menu
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu_side_move");
    }

//si el ancho de la pagina es menor a 760px, ocultara el menu al cargar la pagina

if(window.innerWidth<760){
    body.classList.add("body");
    side_menu.classList.add("menu_side_move");
}

//Haciendo el menu responsive adaptable
window.addEventListener("resize", function(){
    if(window.innerWidth >760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu_side_move");
    }
    if(window.innerWidth <760){
        body.classList.add("body_move");
        side_menu.classList.add("menu_side_move");
    }
});
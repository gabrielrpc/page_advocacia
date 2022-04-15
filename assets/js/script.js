/* ativar itens menu */

function menu_mobile() {
  const btnMobile = document.getElementById("btn-mobile");

  function ativar_btn_menu(event) {
    if (event.type === "touchstart") event.preventDefault();

    const nav = document.getElementById("nav");
    nav.classList.toggle("ativar");
  }

  btnMobile.addEventListener("click", ativar_btn_menu);
  btnMobile.addEventListener("touchstart", ativar_btn_menu);
}

menu_mobile();


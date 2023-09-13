function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute("src", "/assets/avatar-light.png")
  } else {
    //senão, mudar para imagem normal
    img.setAttribute("src", "/assets/avatar.png")
  }
}

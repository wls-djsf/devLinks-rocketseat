function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //Pegar a tag img
  const img = document.querySelector("#profile img")
  //Substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem light e muda texto alt
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Wanderson Lopes, sorrindo de óculos escuros, camiseta branca, fundo desfocado, com efeito de luz, cabelo curto e escuro",
    )
  } else {
    //Se tiver sem light mode, manter a imagem normal e muda texto alt
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Wanderson Lopes, sorrindo de óculos, camiseta branca, fundo desfocado e cabelo curto e escuro",
    )
  }
}

function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtAno");
  var res = document.getElementById("res");

  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert("[ERRO] verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "./imgs/menino.jpg");
      } else if (idade < 18) {
        img.setAttribute("src", "./imgs/homemJovem.jpg");
      } else if (idade < 60) {
        img.setAttribute("src", "./imgs/homemAdulto.jpg");
      } else {
        img.setAttribute("src", "./imgs/homemIdoso.jpg");
      }
    } else {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "./imgs/menina.jpg");
      } else if (idade < 18) {
        img.setAttribute("src", "./imgs/mulherJovem.jpg");
      } else if (idade < 60) {
        img.setAttribute("src", "./imgs/mulherAdulta.jpg");
      } else {
        img.setAttribute("src", "./imgs/mulherIdosa.jpg");
      }
    }

    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}

var piramide = ''
var resultado = ''

function triangulo() {
    let num = document.getElementById('num').value;
    for (var i = 1; i <= num; i++) {
        piramide += "#"
        resultado += "<p>" + piramide + "</p>"
    }
    document.getElementById("num").innerHTML = resultado;
}
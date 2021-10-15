function dani() {
    var num = document.getElementById('triangulo').value;
    var res = '#';
    var re1 = ''
    for (var i = 1; i <= num; i++) {
        re1 = re1 + res.repeat(i) + "<br/>";
    }
    document.getElementById("pepe").innerHTML = re1;
}
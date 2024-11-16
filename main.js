var chamba = Math.floor(Math.random() * 1000) + 1;
document.getElementById("numerote").innerHTML= chamba
var xd = Math.floor(Math.random() * 100) + 1;
document.getElementById("labelEpika").innerHTML= xd
var quemeves = 0
var a = document.getElementById("labelEpika").value
var sonidoepiko
if (xd == chamba) {
    xd = Math.floor(Math.random() * 100) + 1;
    document.getElementById("labelEpika").innerHTML= xd   
}
if (xd == chamba) {
    xd = Math.floor(Math.random() * 100) + 1;
    document.getElementById("labelEpika").innerHTML= xd
    chamba = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("numerote").innerHTML= chamba
  
}

Math.floor(Math.random())
function b1(Vnumero) {
    document.getElementById("labelEpika").innerHTML += Vnumero
    console.log(Vnumero)
   
}
function igual() {
    local = document.getElementById("labelEpika").innerHTML
    local = local.replace("x","*");local = local.replace("÷","/")
    document.getElementById("labelEpika").innerHTML = eval(local)
    
    a = document.getElementById("labelEpika").innerHTML
    if (a == chamba) {
        xd = Math.floor(Math.random() * 100) + 1;
        document.getElementById("labelEpika").innerHTML= xd
        quemeves += 1
        document.getElementById("scoreboard").innerHTML = "Score:"+quemeves
        chamba = Math.floor(Math.random() * 1000) + 1;
        document.getElementById("numerote").innerHTML= chamba
        console.log(quemeves)
        var sonidoepiko = new Audio('score.mp3');
        sonidoepiko.play()
    }
}

var start = document.getElementById("start");

start.addEventListener('click', (event) => {

var character = document.getElementById("character");
var block = document.getElementById("block");
var pozitie = 100;
var counter = 0;

start.style.display = "none";

block.classList.add("animeaza");

setInterval(function(){block.style.top = Math.floor(Math.random() * 131).toString()+"px"},1000);

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(blockLeft<50 && blockLeft>0 && characterTop>blockTop && characterTop<blockTop+60 ){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        window.location.reload();
    }
    else{
    counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
},10);
document.addEventListener('keydown', (event) => {
if(event.key==="ArrowUp"){
    if(pozitie>30)
    {
        pozitie -= 5;
    }
}
else if(event.key === "ArrowDown"){
    if(pozitie<150)
    {
        pozitie += 5;
    }
}
character.style.top =pozitie.toString()+"px";
  }, false);

});
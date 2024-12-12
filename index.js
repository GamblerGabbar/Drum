var drums = document.querySelectorAll(".Drum").length;

for(var i= 0; i<drums;i++) {
document.querySelectorAll(".Drum")[i].addEventListener("click",handle);

function handle() {
    var button = this.innerHTML;
    makeSound(button);
}  
}

document.addEventListener("keypress",function(event){
    makeSound(event.key) ; 
    
})

function makeSound(key){
    
    switch(key){
    
        case "w" :
            var audio = new Audio("sound/floor-tom.wav");
            audio.play();
            break;
        case "a" :
            var audio = new Audio("sound/hi-tom-drum.wav");
            audio.play();
            break;
        case "s" :
            var audio = new Audio("sound/mtom.mp3");
            audio.play();
            break;
        case "d" :
            var audio = new Audio("sound/bassDrum.wav");
            audio.play();
            break;
        case "j" :
            var audio = new Audio("sound/SnarDrum.mp3");
            audio.play();
            break;
        case "k" :
            var audio = new Audio("sound/hi-hat.mp3");
            audio.play();
            break;
    
            default:
                alert("button");
                break;
    
    }

}
var all_buttons = document.querySelectorAll("button");
for(var i = 0; i < all_buttons.length; i++){
    all_buttons[i].addEventListener("click" , function(){
        playSound(this.innerHTML);  //DO NOT ADD allbuttons[i].innerHTML, because this function is called when you click on button, in which 'this' would reference to the current object and not all_button[i]
        animation(this.innerHTML);  
    });
}

document.addEventListener("keydown" , function(event){
    playSound(event.key);
    animation(event.key);
});

function playSound(button_name){
    switch(button_name){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        default: console.log("Error"); //triggered if nothing matches from above cases
    };
}

function animation(curr_button){
    var activeButton = document.getElementsByClassName(curr_button)[0];
    activeButton.classList.add("pressed"); //adding CSS class 
 
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
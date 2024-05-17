// using javascript to change attribute element on html page by querySelector
let profile = document.querySelector("#profile");
let title = document.querySelector("#title");
let description = document.querySelector("#description");
let btn_no = document.querySelector("#btn_no");
let btn_yes = document.querySelector("#btn_yes");
let soundhappy = new Audio ("./asset/happy-happy-happy-song.mp3");
let soundsad = new Audio("./asset/crying-cat.mp3");

profile.src = "https://i.pinimg.com/564x/fb/f0/71/fbf07131ccb86ca0019e0614afca9596.jpg";
profile.style.marginTop = "40px";


//change title 
title.innerHTML = "Meow Confession";
//change description
description.innerHTML = "Do you love me ?! 🔪🔪";
//change button
btn_no.innerHTML = "NO";
btn_yes.innerHTML = "YES"

//click yes action 
btn_yes.addEventListener("click",()=>{
    profile.src = "https://media.tenor.com/lCKwsD2OW1kAAAAi/happy-cat-happy-happy-cat.gif";

    title.innerHTML = "YAYYYYYYY, I love you too !!🤪"
    description.innerHTML = "I'm so happyyyyyyyyy 💖"

    //add audio
    soundhappy.play();
    //loop audio
    soundhappy.loop = true;
});

//click no action
btn_no.addEventListener("click",()=>{
    profile.src = "https://media.tenor.com/u8M7kk5ZXmwAAAAM/banana-cat-crying.gif";

    title.innerHTML = "Nooooo, Why don't you love me :("
    description.innerHTML = "I'm so saddddddddddddd 😭"

    //add audio
    soundsad.play();
    //loop audio
    soundsad.loop = true;
});


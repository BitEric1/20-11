/*PREVENT PRE-ANIMATING OF ELEMENTS */
window.onload=document.body.classList.remove("preload");

/*CARD DISPLAY*/
function card_toggle(){
    var cardCover=card.getElementsByClassName("card-cover")[0];
    var cardContent=card.getElementsByClassName("content")[0];
    /*ADD/REMOVE HOVER EFFECT*/
    card.classList.toggle("hover");

    if (card.style.zIndex!="100"){
        card.style.zIndex="100";
        card.style.height="600px";
        card.style.transformOrigin="top";
        card.style.top="20%";
        card.style.left="50%";
        card.style.transform="translate(-50%, -50%) scale(2)";
        
        shadow.style.position="absolute";
        shadow.style.zIndex="99";
        shadow.style.height="calc("+(600*2)+"px + "+card.style.top+")";
        shadow.style.opacity="100%";
        
        cardCover.style.transform="rotatex(180deg)";

        //Enable scrolling
        document.body.style.overflowY="auto";
    }
    else{ 
        shadow.style.opacity="";
        shadow.style.backgroundColor="";
        shadow.style.position="";
        shadow.style.height="";
        shadow.style.zIndex="";
        shadow.style.position="fixed";

        card.style.height="300px";
        card.style.top="";
        card.style.left="";
        card.style.transform="";
        card.style.transformOrigin="";

        cardCover.style.transform="";

        setTimeout(function(){
            card.style.zIndex="";
        },500);
        
        //Disable scrolling
        document.body.style.overflowY="hidden";
        
    }
    /* TOGGLE OBJECT's SHADOW*/
    card.classList.toggle("low-shadow");
}

/*NOTE DISPLAY*/
function note_toggle(){ 
    var noteContent = note.getElementsByClassName("content")[0];
    var stickers = note.getElementsByClassName("sticker")[0];
    note.classList.toggle("hover");

    if (note.style.zIndex!="100"){
        shadow.style.zIndex="99";
        shadow.style.opacity="100%";

        note.style.zIndex="100";
        note.style.transformOrigin="center";
        note.style.top="50%";
        note.style.left="50%";
        note.style.transform="translate(-50%, -50%) scale(3)";

        noteContent.style.transform="rotateY(180deg)";

        stickers.classList.add("sticker-active");
    }
    else{   
        stickers.classList.remove("sticker-active");

        note.style.top="";
        note.style.left="";
        note.style.transform="";
        noteContent.style.transform="";
        note.style.transformOrigin="";
        
        setTimeout(function(){
            note.style.zIndex="";
        },300);
        
        shadow.style.zIndex="";
        shadow.style.opacity="";
    }
    /* TOGGLE OBJECT's SHADOW*/
    note.classList.toggle("low-shadow");
    
}

/*MUSIC PLAYER*/
var playingSong="audio/first_date.mp3";
var barFill = document.getElementById("fill");
var song = new Audio();

window.onload = playSong;

function playSong(){
    song.src = playingSong;
    song.volume=0.2;
    song.play();
    if (!song.paused==true){ 
        play_btn.innerHTML="||"
    }
}

function playOrPause(){
    if(song.paused){
        play_btn.innerHTML="||"
        song.play();
    } else{
        play_btn.innerHTML="&#9658;"
        song.pause();
    }
}

song.addEventListener('timeupdate',function(){
    var position = song.currentTime / song.duration;
    barFill.style.width = position * 100 + '%';
    if (position==1){ 
        play_btn.innerHTML="&#9658;";
    }
});

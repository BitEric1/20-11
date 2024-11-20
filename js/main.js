/*PREVENT PRE-ANIMATING OF ELEMENTS */
window.onload = document.body.classList.remove("preload");
/*CARD DISPLAY*/
function card_toggle() {
    var cardCover = card.getElementsByClassName("card-cover")[0];
    var cardContent = card.getElementsByClassName("content")[0];
    /*ADD/REMOVE HOVER EFFECT*/
    card.classList.toggle("hover");

    if (card.style.zIndex != "100") {
        rose_leak.src = "images/gold-rose.gif";
        card.style.zIndex = "100";
        card.style.height = "600px";
        card.style.transformOrigin = "top";
        card.style.top = "8%";
        if (window.matchMedia("(max-width: 980px)").matches) {
            card.style.left = "65%";
        } else {
            card.style.left = "50%";
        }
        card.style.transform = "translate(-50%, -50%) scale(2)";

        shadow.style.zIndex = "99";
        shadow.style.opacity = "100%";

        cardCover.style.transform = "rotatex(180deg)";

        //Enable scrolling
        document.body.style.overflowY = "auto";
    } else {
        rose_leak.src = "images/gold-rose.png";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        cardCover.style.transform = "";
        card.style.height = "300px";
        card.style.top = "";
        card.style.left = "";
        card.style.transform = "";
        card.style.transformOrigin = "";

        shadow.style.opacity = "";
        shadow.style.backgroundColor = "";
        shadow.style.position = "";
        shadow.style.height = "";
        shadow.style.zIndex = "";
        shadow.style.position = "fixed";

        setTimeout(function() {
            card.style.zIndex = "";
        }, 300);

        //Disable scrolling
        document.body.style.overflowY = "hidden";

    }
    /* TOGGLE OBJECT's SHADOW*/
    card.classList.toggle("low-shadow");
}

/*NOTE DISPLAY*/
function note_toggle() {
    var noteContent = note.getElementsByClassName("content")[0];
    var stickers = note.getElementsByClassName("sticker")[0];
    var laptop = document.getElementById("laptop");
    note.classList.toggle("hover");

    if (note.style.zIndex != "100") {
        shadow.style.zIndex = "99";
        shadow.style.opacity = "100%";

        note.style.zIndex = "100";
        note.style.transformOrigin = "center";
        note.style.top = "50%";
        note.style.left = "50%";
        note.style.transform = "translate(-50%, -50%) scale(3)";

        noteContent.style.transform = "rotateY(180deg)";

        stickers.classList.add("sticker-active");
    } else {
        stickers.classList.remove("sticker-active");
        note.style.top = "";
        note.style.left = "";
        note.style.transform = "";
        noteContent.style.transform = "";
        note.style.transformOrigin = "";
        setTimeout(function() {
            note.style.zIndex = "";
        }, 300);

        shadow.style.zIndex = "";
        shadow.style.opacity = "";
    }
    /* TOGGLE OBJECT's SHADOW*/
    note.classList.toggle("low-shadow");

}

function cheems_is_here() {
    cheems.classList.toggle("cheems_toggle");
}

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

/*MUSIC PLAYER*/
var playingSong = "audio/first_date.mp3";
var barFill = document.getElementById("fill");
var song = new Audio();

window.onload = playSong;

function playSong() {
    song.src = playingSong;
    song.volume = 0.2;
    song.play();
    if (!song.paused == true) {
        play_btn.innerHTML = "||"
    }
}

function playOrPause() {
    if (song.paused) {
        play_btn.innerHTML = "||"
        song.play();
    } else {
        play_btn.innerHTML = "&#9658;"
        song.pause();
    }
}

song.addEventListener('timeupdate', function() {
    var position = song.currentTime / song.duration;
    barFill.style.width = position * 100 + '%';
    if (position == 1) {
        play_btn.innerHTML = "&#9658;";
    }
});

const lookback = document.getElementById('lookback');
lookback.addEventListener('click', () => {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.video').style.display = 'block';
    document.querySelector('.video > video').autoplay = true;
    document.querySelector('.video > video').play();
});

document.querySelector('.overlay').addEventListener('click', () => {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.video').style.display = 'none';
})
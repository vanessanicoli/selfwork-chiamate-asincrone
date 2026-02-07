// Cattura degli elementi HTML
let inputSeconds = document.querySelector('#inputSeconds');
let playIcon = document.querySelector('#playIcon');
let pauseIcon = document.querySelector('#pauseIcon');
let stopIcon = document.querySelector('#stopIcon');
let countdown = document.querySelector('#countdown');

// Variabili
let remainingSeconds = 0;
let timer = null;
let isPaused = false;

// Funzione createInterval()
function createInterval(seconds, element, time){
    
    element.innerHTML = seconds;
    
    let interval = setInterval(() => {

        if(seconds > 0){
            seconds--;
            element.innerHTML = seconds;
            remainingSeconds = seconds;
        }
        else{
            clearInterval(interval);
            seconds = 0;
            remainingSeconds = 0;
            timer = null;
        }
    }, time);
    
    return interval;
}
// Funzione createInterval() -- END


// Avvio del countdown
playIcon.addEventListener('click', ()=>{
    

    if(inputSeconds.value == ''){
        alert('Inserisci i secondi per far partire il tuo countdown!')
    }
    else{
        if(timer == null){
            if(isPaused == true){
                timer = createInterval(remainingSeconds, countdown, 1000);
                isPaused = false;
            }
            else{
                remainingSeconds = Number(inputSeconds.value);
                timer = createInterval(remainingSeconds, countdown, 1000);
            }
        }
    }
});
// Avvio del countdown -- END


// Pausa del countdown
pauseIcon.addEventListener('click', ()=>{
    if(timer != null){
        isPaused = true;
        countdown.innerHTML = 'Pausa';
        clearInterval(timer);
        timer = null;
    }
});
// Pausa del countdown -- END


// Stop del countdown
stopIcon.addEventListener('click', ()=>{
    clearInterval(timer);
    remainingSeconds = 0;
    inputSeconds.value = '';
    countdown.innerHTML = 'Start countdown!';
    timer = null;
});
// Stop del countdown --END
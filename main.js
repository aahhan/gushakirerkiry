
let seconds = 10;
let correctAnswer = 0;
let incorrectAnswer = 0


function getElement(id) {
    return document.getElementById(id)
}


function getRandomCountry(){
    return countries [Math.floor(Math.random(countries.length-1)*10)]
 }


function main(){
     coun = getRandomCountry()
    getElement("flag").src = coun.image
}

function timer() {
    setTimeout(finish, seconds * 1000)
    getElement("time").innerHTML = seconds
    let countdown = setInterval(function () {
        main()
        seconds--
        getElement("time").textContent = seconds
        if (seconds <= 0) clearInterval(countdown)
        if (seconds == 3) getElement("time").style.color = "#ff0000"
    }, 1000)

}
function check() {
    let input
    try {
        input = document.querySelector('input(name = "option"):checked').value;

    } catch {
        return;
    }

    correctAnswer++;
    getElement("score").innerHTML = correctAnswer;
    clearInterval(checkInterval);
}
function finish() {
    clearInterval(checkInterval);
    let percentage = 100;
    getElement("alertaccuracy").innerHTML = ` ${percentage}%`
}

timer();
let checkInterval = setInterval(check, 50);


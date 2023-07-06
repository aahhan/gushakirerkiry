
let seconds = 10;
let correctAnswer = 0;
let incorrectAnswer = 0


function getElement(id) {
    return document.getElementById(id)
}


function getRandomCountry() {
    return countries[Math.floor(Math.random(countries.length - 1) * 10)]
}


function main() {
    let options = [];
    const maxOptions = 4;
    while (options.length < maxOptions) {
        let coun = getRandomCountry()
        if (options.indexOf(coun) === -1) {
            options.push(coun)
        }
    }
    for (let i = 0; i < options.length; i++) {
        getElement(`option${i + 1}label`).innerHTML = options[i].name;
        getElement(`option${i + 1}input`).value = options[i].name;
        getElement(`option${i + 1}input`).checked = false;
    }
    correct = options[Math.round(Math.random() * (options.length - 1))]
    getElement("flag").src = correct.image
}

function timer() {
    setTimeout(finish, seconds * 1000)
    getElement("time").innerHTML = seconds
    let countdown = setInterval(function () {
        seconds--
        getElement("time").textContent = seconds
        if (seconds <= 0) clearInterval(countdown)
        if (seconds == 5) getElement("time").style.color = "#F39C12"
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
    if (input === correct.name) {
        correctAnswer++;
        getElement("score").innerHTML = correctAnswer;

    } else { 
        incorrectAnswer++ 
    }

    main()

}
function finish() {
    clearInterval(checkInterval);
    let percentage =100;
    getElement("alertaccuracy").innerHTML = ` ${percentage}%`
   
}

timer();
main()
let checkInterval = setInterval(check, 50);


const textForm = document.querySelector(".textForm");
const firstText = document.querySelector(".first");
const plus = document.querySelector(".plus");
const secondText = document.querySelector(".second");
const btn = document.querySelector("button");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const fontSize = 50
const textArray = ["중독", "유행", "원동력", "상실", "충족", "낭만", "여유", "틈", "융합", "연결", "경제", "제테크", "불안", "저항", "시선", "첫인상" ]

function changeText(){
    let randomTextA = textArray[Math.floor((Math.random()) * textArray.length)]
    let randomTextB = textArray[Math.floor((Math.random()) * textArray.length)]

    firstText.innerText = randomTextA
    secondText.innerText = randomTextB
    textForm.classList.remove("textForm");
    plus.classList.remove("hidden")
    void textForm.offsetWidth;
    textForm.classList.add("textForm");

}


btn.addEventListener("click", changeText);
up.addEventListener("click", upscale);
down.addEventListener("click", downscale)
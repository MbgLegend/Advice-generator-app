const btn = document.querySelector(".btn")
const adviceID = document.querySelector(".advice-id")
const advice = document.querySelector(".advice")
const api_url = "https://api.adviceslip.com/advice"

function getData () {
    fetch(api_url)
        .then(data => data.json())
        .then((data) => {
            advice.textContent =  `"` + data.slip.advice + `"`
            adviceID.textContent = data.slip.id 
        })
}

btn.addEventListener("click", getData)

window.addEventListener("load", getData)
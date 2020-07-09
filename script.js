const container = document.querySelector(".container")
const text = document.querySelector("#text")

const totalTime = 7500
const breatheTime = totalTime * 2/5
const holdTime = totalTime * 1/5

breatheAnimation()

function breatheAnimation() {
    text.innerHTML = "Breath In."
    container.classList.remove("shrink")
    container.classList.add("grow")

    setTimeout(() => {
        text.innerText = "Hold."

        setTimeout(() => {
            text.innerText = "Breathe Out."

            container.classList.remove("grow")
            container.classList.add("shrink")
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)
let countEl = document.getElementById("count-el")

let count = 0

function reps() {
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById("next-el")

function next() {
    let countDash = count + " - "
    saveEl.textContent += countDash
    count = 0
    countEl.textContent = count
}


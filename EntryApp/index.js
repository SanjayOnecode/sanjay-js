
let entryCount = document.getElementById("entryCount")

let previousCount = document.getElementById("saveCount")

let count = 0

function increment() {

    count += 1
    entryCount.textContent = count

}

function save() {
    let  saveCount = count  + " - "
    previousCount.textContent += saveCount
    entryCount.textContent = 0
    count = 0
}

let myLeads = []
const input = document.getElementById("input")
const inputBtn = document.getElementById("save-btn")
const tabBtn = document.getElementById('save-tab')
const inputUl = document.getElementById("input-leads")
const deleteBtn = document.getElementById("delete-btn")

let leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsLocalStorage) {
    myLeads = leadsLocalStorage
    renderLeads(myLeads)
}

tabBtn.addEventListener("click", function() {
    console.log("hi i am working")
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads" , JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
})

function renderLeads(leads) {
    let availableLeads = ""
    for (let i=0 ; i < leads.length ; i++ ) {
        availableLeads += `
        <li>
            <a href= '${leads[i]}' > 
               ${leads[i]}
            </a>
        </li>`
    }
    inputUl.innerHTML = availableLeads
}

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

inputBtn.addEventListener("click", function(){
    myLeads.push(input.value)
    input.value = ""
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    renderLeads(myLeads)
    console.log(myLeads)
})
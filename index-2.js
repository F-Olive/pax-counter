let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // Number counter
let decrementEl = document.getElementById("decrement-btn")
let deleteEl = document.getElementById("delete-btn")
let listEl = document.getElementById("listEl") // Number and timestamp recorded
let count = 0
let entries = []

function increment() {
    count += 1
    countEl.textContent = count
}

decrementEl.addEventListener("click", function(){
    count += -1
    if (count < 0)
    count = 0
    countEl.textContent = count
})

function render(){
  let entriesHTML = ""
  for (let i = 0; i < entries.length; i++) {
     entriesHTML += `<li>${entries[i].count}</li>
                      <li>${entries[i].time}</li>`
        }
      listEl.innerHTML = entriesHTML
     
}

//Adds 0 before hours or minutes if less than 10.
function timeStamp() {
  let date = new Date()
  let current_hour = date.getHours()
  let current_minutes = date.getMinutes()
  current_minutes = (current_minutes < 10 ? "0" : "") + current_minutes
  let time = `${current_hour}:${current_minutes}`
  return time
}

function save() {
   let entriesObject = {
       count: count,
       time: timeStamp()
      }
    entries.push(entriesObject)

    if ( count > 0 )
    render()
    
    countEl.textContent = 0
    count = 0
    
}

deleteEl.addEventListener("dblclick", function() {
  listEl.innerHTML = "Previous Entries: "
  entries = []
          })


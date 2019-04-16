var timerButton = document.getElementById('timer-section-button')
var statsButton = document.getElementById('stats-section-button')
var timerSection = document.getElementById('timer-section')
var statsSection = document.getElementById('stats-section')
var imgTimer = document.getElementById('img-timer')
var imgStats = document.getElementById('img-stats')



const form = document.querySelector('form')
const tasks = document.querySelector('table')
const switchTo25 = document.querySelector('.button.tfmin')
const switchTo5 = document.querySelector('.button.fmin')
const switchTo1 = document.querySelector('.button.omin')
let taskTime = 5000

statsButton.onclick = function switchToStats () {
  statsSection.classList.remove('disactive-section')
  timerSection.classList.add('disactive-section')
  statsButton.classList.add('is-active')
  timerButton.classList.remove('is-active')
  imgTimer.classList.add('is-disactive')
  imgStats.classList.remove('is-disactive')
}

timerButton.onclick = function switchToTimer () {
  timerSection.classList.remove('disactive-section')
  statsSection.classList.add('disactive-section')
  timerButton.classList.add('is-active')
  statsButton.classList.remove('is-active')
  imgTimer.classList.remove('is-disactive')
  imgStats.classList.add('is-disactive')
}

if (window.location.hash === '#stats-section') {
  statsButton.click()
}

switchTo25.onclick = function handleTimeSwitch () {
  if (this.classList.contains('is-active')) {
    return
  }
  this.classList.add('is-active')
  switchTo1.classList.remove('is-active')
  switchTo5.classList.remove('is-active')
  taskTime = 5000
}

switchTo5.onclick = function handleTimeSwitch () {
  if (this.classList.contains('is-active')) {
    return
  }
  this.classList.add('is-active')
  switchTo1.classList.remove('is-active')
  switchTo25.classList.remove('is-active')
  taskTime = 2000
}

switchTo1.onclick = function handleTimeSwitch () {
  if (this.classList.contains('is-active')) {
    return
  }
  this.classList.add('is-active')
  switchTo5.classList.remove('is-active')
  switchTo25.classList.remove('is-active')
  taskTime = 500
}

form.onsubmit = function startTimer(e) {
  event.preventDefault()

  const input = e.target.querySelector('input[type=text]')

  const key = Date.now()
  localStorage.setItem(key, input.value)

  setTimeout(function () {
    console.log(input.value)
    input.value = ''
  }, taskTime)
}

function loadHistory() {
  const historySize = localStorage.length
  if (historySize > 0) {
    for (let i = 0; i < historySize; i++) {
      const key = localStorage.key(i)
      const taskName = localStorage.getItem(key)
      const listItem = document.createElement('tr')
      const listItemOne = document.createElement('td')
      const listItemTwo = document.createElement('td')
      const listItemThree = document.createElement('td')
      listItemOne.innerText = '16 апреля'
      listItemTwo.innerText = taskTime + ' мин'
      listItemThree.innerText = taskName
      listItem.appendChild(listItemOne)
      listItem.appendChild(listItemTwo)
      listItem.appendChild(listItemThree)

      tasks.appendChild(listItem)
    }
  }
}
loadHistory()

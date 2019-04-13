const form = document.querySelector('form')

form.onsubmit = function startTimer(e) {
  event.preventDefault()
  const input = e.target.querySelector('input[type=text]')
  console.log(input.value)
  input.value = ''
}

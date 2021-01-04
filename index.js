const GREETING_TEXT = {
  morning: 'Good Morning ',
  day: 'Good Day',
  night: 'Good Night',
}

const LSItems = {
  name: 'name',
  focus: 'focus',
}

const ENTRY_FILDS = {
  enterName: '[Enter name]',
  enterFocus: '[Enter focus]',
}

document.addEventListener('DOMContentLoaded', () => {
  const screenUser = document.getElementById('screen'),
    time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    nameUser = document.getElementById('name'),
    focusUser = document.getElementById('focus')

  const intervalData = () => {
    const newData = new Date()
    const hours = newData.getHours(),
      minutes = newData.getMinutes(),
      seconds = newData.getSeconds(),
      newHours = hours % 12 || 12,
      amPm = hours >= 12 ? 'PM' : 'AM',
      addZerro = (n) => (n < 10 ? '0' + n : n)
    time.innerHTML = `${newHours}:${addZerro(minutes)}:${addZerro(seconds)} ${amPm}`
  }

  const currTime = new Date(),
    hours = currTime.getHours()
  if (hours > 6 && hours < 12) {
    screenUser.classList.add('morning')
    greeting.textContent = GREETING_TEXT.morning
  } else if (hours >= 12 && hours < 18) {
    screenUser.classList.add('day')
    greeting.textContent = GREETING_TEXT.day
  } else {
    screenUser.classList.add('night')
    greeting.textContent = GREETING_TEXT.night
  }

  setInterval(intervalData, 1000)

  const nameUserText = localStorage.getItem(nameUser.id)
  nameUser.innerHTML = nameUserText ? nameUserText : ENTRY_FILDS.enterName

  const focusUserText = localStorage.getItem(focusUser.id)
  focusUser.innerText = focusUserText ? focusUserText : ENTRY_FILDS.enterFocus

  const setValue = (e) => {
    localStorage.setItem(e.target.id, e.target.innerText)
  }

  const setBlur = (e) => {
    if (e.key === 'Enter') e.target.blur()
  }

  nameUser.addEventListener('blur', setValue)
  nameUser.addEventListener('keydown', setBlur)
  focusUser.addEventListener('blur', setValue)
  focusUser.addEventListener('keydown', setBlur)

  intervalData()
})

const displayTime = () => {
  let h1 = document.querySelector('h1')
  const now = moment().format('HH:mm:ss')
  h1.innerText = now
}

setInterval(displayTime, 1000)
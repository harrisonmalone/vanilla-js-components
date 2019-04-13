const dinosaur = document.querySelector('.dinosaur span')
const navbar = document.querySelector('.navbar')

  dinosaur.addEventListener('click', () => {
    const menuNode = document.querySelector('#menu')
    if (!menuNode) { 
      const menu = `
      <div id="menu" style="background: rgba(1, 1, 1, 0.3);">
        <a href="#"><p>About</p></a>
        <a href="#"><p>Projects</p></a>
        <a href="#"><p>Code</p></a>
        <a href="#"><p>Resume</p></a>
      <div>
      `
      navbar.insertAdjacentHTML('afterend', menu)
    }
  else {
    removeDinosaur(menuNode)
  }
})


const removeDinosaur = (menuNode) => {
  document.body.removeChild(menuNode)
}
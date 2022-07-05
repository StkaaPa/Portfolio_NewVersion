/* ===== SHOW MENU ===== */
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId), nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle','nav-menu')

/*-------------------------------------------------------------------------------------------------------------------------- */
/* ===== ACTIVE AND REMOVE MENU ===== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  //REMOVE MENU ON MOBILE
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*-------------------------------------------------------------------------------------------------------------------------- */
/* ===== DARK LIGHT THEME ===== */
const themeButton = document.getElementById('moon-button')
const darkTheme = 'dark-theme'
const iconTheme = 'sunny-outline'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.contains(iconTheme) ? 'moon-outline' : 'sunny-outline'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'sunny-outline' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*-------------------------------------------------------------------------------------------------------------------------- */
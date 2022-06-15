/* ===== MENU SHOW ===== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu')
        })
      }

/* ====== ANIMATE ====== */
// OVERLAY
gsap.to(".first", 1.5, { delay: 0.5, top: "-100%", ease: Expo.easeInOut });
gsap.to(".second", 1.5, { delay: 0.7, top: "-100%", ease: Expo.easeInOut });
gsap.to(".third", 1.5, { delay: 0.9, top: "-100%", ease: Expo.easeInOut });

// IMAGE
gsap.from('.home__img', {opcaity: 0, duration: 3.3, delay: 2, x: 1000})

// NAV ITEM
gsap.from(".nav__logo", {opacity: 0,duration: 3,delay: 3.2,y: 25,ease: "expo.out",});
gsap.from(".nav__item", {opacity: 0,duration: 3,delay: 3.2,y: 25,ease: "expo.out",stagger: 0.2,});

// INFORMATION
gsap.from(".home__information", { opacity: 0, duration: 3, delay: 2.3, y: 25 });
gsap.from(".anime-text", {opacity: 0,duration: 3,delay: 2.3,y: 25,ease: "expo.out",stagegr: 0.3,});

// SOCIAL
gsap.from(".home__social-icon", {opacity: 0,duration: 3,delay: 4,y: 25,ease: "expo.out",stagger: 0.2,});



/* ===== DARK LIGHT THEME ===== */
const themeButton = document.getElementById('moon-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bi-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.contains(iconTheme) ? 'bi-moon' : 'bi-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bi-sun' ? 'add' : 'remove'](iconTheme)
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
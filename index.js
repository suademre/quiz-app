function getEl(selector) {
  const el = document.querySelector(selector)
  return el
}

function getElAll(selector) {
  const el = document.querySelectorAll(selector)
  return el
}

/* Header */
const headerQuestions = getEl('.header_questions')
const headerBookmark = getEl('.header_bookmark')
const headerCreate = getEl('.header_create')
const headerProfile = getEl('.header_profile')

/* Main */
const mainQuestions = getEl('.main__questions')
const mainBookmarkt = getEl('.main__bookmark')
const mainCreate = getEl('.main__create')
const mainProfile = getEl('.main__profile')

/* Button */

const buttonQuestions = getEl('.button_questions')
const buttonBookmark = getEl('.button_bookmark')
const buttonCreate = getEl('.button_create')
const buttonProfile = getEl('.button_profile')

/* Bookmarkemojies */
const bookmarks = getElAll('.bookmark')
console.log(bookmarks)
/* Card Buttons*/
const cardButtons = getElAll('.card__button')

// Funktion
function hideAll() {
  const headerElArr = document.querySelectorAll('.header')
  headerElArr.forEach((headerEl, index) => {
    headerEl.classList.add('hidden')
  })

  const mainElArr = document.querySelectorAll('.main')
  mainElArr.forEach((mainEl, index) => {
    mainEl.classList.add('hidden')
  })

  /* headerQuestions.classList.add('hidden')
  headerBookmark.classList.add('hidden')
  headerCreate.classList.add('hidden')
  headerProfile.classList.add('hidden')

  mainQuestions.classList.add('hidden')
  mainBookmarkt.classList.add('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.add('hidden') */
}

/* function addButtonEventListener(name) {
   
 } */

/* EventListener */
buttonQuestions.addEventListener('click', () => {
  hideAll()
  headerQuestions.classList.remove('hidden')
  mainQuestions.classList.remove('hidden')
})
buttonBookmark.addEventListener('click', () => {
  hideAll()
  headerBookmark.classList.remove('hidden')
  mainBookmarkt.classList.remove('hidden')
})
buttonCreate.addEventListener('click', () => {
  hideAll()
  headerCreate.classList.remove('hidden')
  mainCreate.classList.remove('hidden')
})
buttonProfile.addEventListener('click', () => {
  hideAll()
  headerProfile.classList.remove('hidden')
  mainProfile.classList.remove('hidden')
})

/*Toggle Bookmarks */
for (let i = 0; i < bookmarks.length; i++) {
  bookmarks[i].addEventListener('click', () => {
    bookmarks[i].classList.toggle('bookmark2')
  })
}

/*Toggle Answers*/
/* for (let i = 0; i < cardButtons.length; i++) {
  cardButtons[i].addEventListener('click', () => {
    cardButtons[i].nextElementSibling.classList.toggle('card__answer--hidden')
    cardButtons[i].classList.toggle('hide__button')
    if (cardButtons[i].innerText === 'Show answer') {
      cardButtons[i].innerText === 'Hide Answer'
    } else {
      cardButtons[i].innerText === 'Show Answer'
    }
  })
} */

cardButtons.forEach(cardButton => {
  cardButton.addEventListener('click', () => {
    cardButton.nextElementSibling.classList.toggle('card__answer--hidden')
  })
})

// Clear Input from Form

// Erste variante
const formButton = getEl('.form__button')
formButton.addEventListener('click', () => {
  getEl('form').reset()
})

// Zweite variante

/* formButton.addEventListener('submit', e => {
  let formInputs = getElAll('.form__textarea')
  formInputs.forEach(formInput => {
    formInput.value = ''
  })
}) */

/* Dark Mode */
const darkMode = getEl('.darkMode')

/* darkMode.addEventListener('click', e => {
  const body = getEl('body')
  body.classList.toggle('darkModeActive')
  e.target.parentNode.parentNode.parentNode.classList.toggle('active')
}) */

function darkModeBody() {
  const body = getEl('body')
  body.classList.toggle('active')
}

function darkModeHeader() {
  const darkModeHeaderSites = getElAll('.headers')
  darkModeHeaderSites.forEach(darkModeHeaderSite => {
    darkModeHeaderSite.classList.toggle('darkModeHeader')
  })
}

function darkModeCards() {
  const darkModeCardsSites = getElAll('.card')
  darkModeCardsSites.forEach(darkModeCardSite => {
    darkModeCardSite.classList.toggle('darkModeCard')
  })
}

function darkModeLi() {
  const darkModeLies = getElAll('.tags__item')
  darkModeLies.forEach(darkModeLi => {
    darkModeLi.classList.toggle('darkModeLi')
  })
}

function darkModeForm() {
  const darkModeForm = getEl('.form')
  darkModeForm.classList.toggle('formDarkMode')
}

function darkModeProfile() {
  const darkModeForm = getEl('.card-profil')
  darkModeForm.classList.toggle('darkModeProfile')
}

function darkModeFooters() {
  const darkModeFooters = getEl('.footer')
  darkModeFooters.classList.toggle('darkModeFooter')
}

function darkModes() {
  darkModeBody()
  darkModeHeader()
  darkModeCards()
  darkModeLi()
  darkModeForm()
  darkModeProfile()
  darkModeFooters()
}

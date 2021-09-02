/* Header */
const headerQuestions = document.querySelector('.header_questions')
const headerBookmark = document.querySelector('.header_bookmark')
const headerCreate = document.querySelector('.header_create')
const headerProfile = document.querySelector('.header_profile')

/* Main */
const mainQuestions = document.querySelector('.main__questions')
const mainBookmarkt = document.querySelector('.main__bookmark')
const mainCreate = document.querySelector('.main__create')
const mainProfile = document.querySelector('.main__profile')

/* Button */

const buttonQuestions = document.querySelector('.button_questions')
const buttonBookmark = document.querySelector('.button_bookmark')
const buttonCreate = document.querySelector('.button_create')
const buttonProfile = document.querySelector('.button_profile')

/* EventListener */
buttonQuestions.addEventListener('click', () => {
  headerQuestions.classList.remove('hidden')
  headerBookmark.classList.add('hidden')
  headerCreate.classList.add('hidden')
  headerProfile.classList.add('hidden')

  mainQuestions.classList.remove('hidden')
  mainBookmarkt.classList.add('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')
})
buttonBookmark.addEventListener('click', () => {
  headerQuestions.classList.add('hidden')
  headerBookmark.classList.remove('hidden')
  headerCreate.classList.add('hidden')
  headerProfile.classList.add('hidden')

  mainQuestions.classList.add('hidden')
  mainBookmarkt.classList.remove('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')
})
buttonCreate.addEventListener('click', () => {
  headerQuestions.classList.add('hidden')
  headerBookmark.classList.add('hidden')
  headerCreate.classList.remove('hidden')
  headerProfile.classList.add('hidden')

  mainQuestions.classList.add('hidden')
  mainBookmarkt.classList.add('hidden')
  mainCreate.classList.remove('hidden')
  mainProfile.classList.add('hidden')
})
buttonProfile.addEventListener('click', () => {
  headerQuestions.classList.add('hidden')
  headerBookmark.classList.add('hidden')
  headerCreate.classList.add('hidden')
  headerProfile.classList.remove('hidden')

  mainQuestions.classList.add('hidden')
  mainBookmarkt.classList.add('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.remove('hidden')
})

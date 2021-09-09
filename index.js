// Header
const headerQuestions = getEl('.header_questions')
const headerBookmark = getEl('.header_bookmark')
const headerCreate = getEl('.header_create')
const headerProfile = getEl('.header_profile')

// Main
const mainQuestions = getEl('.main__questions')
const mainBookmarkt = getEl('.main__bookmark')
const mainCreate = getEl('.main__create')
const mainProfile = getEl('.main__profile')

// Button

const buttonQuestions = getEl('.button_questions')
const buttonBookmark = getEl('.button_bookmark')
const buttonCreate = getEl('.button_create')
const buttonProfile = getEl('.button_profile')

function getEl(selector) {
  const el = document.querySelector(selector)
  return el
}

function getElAll(selector) {
  const el = document.querySelectorAll(selector)
  return el
}

function hideAll() {
  const headerElArr = document.querySelectorAll('.header')
  headerElArr.forEach((headerEl, index) => {
    headerEl.classList.add('hidden')
  })

  const mainElArr = document.querySelectorAll('.main')
  mainElArr.forEach((mainEl, index) => {
    mainEl.classList.add('hidden')
  })
}

/* EventListener */
buttonQuestions.addEventListener('click', () => {
  hideAll()
  headerQuestions.classList.remove('hidden')
  mainQuestions.classList.remove('hidden')
})
buttonBookmark.addEventListener('click', () => {
  hideAll()
  renderCards(filterBookmark(), bookmarkSection)
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

//----------------------------------------------------------------

//Data

const datas = [
  {
    question: 'What is BEM?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['BEM', 'CSS', 'Structure'],
  },
  {
    question: 'What is BEM?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['BEM', 'CSS', 'Structure'],
  },
  {
    question: 'What is BEM?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['BEM', 'CSS', 'Structure'],
  },
  {
    question: 'What is BEM?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['BEM', 'CSS', 'Structure'],
  },
  {
    question: 'What is BEM?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['BEM', 'CSS', 'Structure'],
  },
  {
    question: 'What is BEM?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['BEM', 'CSS', 'Structure'],
  },
]

// Create new Card

const addQuestion = (questionText, answerText, tagsList) => {
  let newQuestion = {
    question: questionText,
    answer: answerText,
    isBookmarked: false,
    showAnswer: false,
    tags: tagsList,
  }

  datas.push(newQuestion)
}

addQuestion('test', 'test', ['1', '2', '3'])

const getData = () => {
  return datas
}

const filterBookmark = () => {
  const bookmarkedCards = datas.filter(data => data.isBookmarked)
  console.log(bookmarkedCards)
  return bookmarkedCards
}

// Section Variables

const homeSection = getEl('#question')
const bookmarkSection = getEl('#bookmark')

//change isBookmarkt
const changeStatus = data => {
  data.isBookmarked = !data.isBookmarked
  filterBookmark()
}

// Render Funktion
function renderCards(cards, targetElement) {
  targetElement.innerHTML = ''
  cards.forEach(data => {
    const cardSection = document.createElement('section')
    cardSection.classList.add('card')
    targetElement.appendChild(cardSection)

    const cardBookmark = document.createElement('button')
    cardBookmark.classList.add('bookmark')
    cardBookmark.addEventListener('click', () => {
      changeStatus(data)
      /*  cardBookmark.classList.toggle('bookmark2') */
      console.log(data)
      console.log(cardBookmark.classList)
      cardBookmark.classList.contains('bookmark2')
        ? cardBookmark.classList.remove('bookmark2')
        : cardBookmark.classList.add('bookmark2')
      renderCards(filterBookmark(), bookmarkSection)
    })

    /* if (cards.isBookmarked) {
      cardBookmark.classList.add('bookmark2')
      cardBookmark.addEventListener('click', () => {
        cardBookmark.classList.toggle('bookmark2')
        datas.find(el => el === cards).isBookmarked = !datas.find(
          el => el === cards
        ).isBookmarked
        data.isBookmarked = true
      })
    } */
    cardSection.appendChild(cardBookmark)

    const cardQuestion = document.createElement('h2')
    cardQuestion.classList.add('card__question')
    cardQuestion.textContent = data.question
    cardSection.appendChild(cardQuestion)

    const cardButton = document.createElement('button')
    cardButton.classList.add('card__button')
    cardButton.textContent = 'Show answer'
    cardButton.addEventListener('click', () => {
      cardButton.nextElementSibling.classList.toggle('card__answer--hidden')
    })

    cardSection.appendChild(cardButton)

    const cardAnswer = document.createElement('p')
    cardAnswer.classList.add('card__answer')
    cardAnswer.textContent = data.answer
    cardSection.appendChild(cardAnswer)

    const cardTags = document.createElement('ul')
    cardTags.classList.add('tags')
    cardSection.appendChild(cardTags)

    data.tags.forEach(tag => {
      const cardTag1 = document.createElement('li')
      cardTag1.classList.add('tags__item')
      cardTag1.textContent = tag
      cardTags.appendChild(cardTag1)
    })
  })
}

// card Bookmark
const bookmarks = getElAll('.bookmark')

//AnswerButons
const answerButtons = getElAll('.card__button')

//Reset form und Create new Card on Form submit
form = getEl('.form')
submitButton = getEl('.form__button')
submitButton.addEventListener('click', () => {
  const question = document.getElementById('question').value

  const answer = document.getElementById('answer').value
  const tags = document.getElementById('tags').value.split(', ')
  console.log(tags)
  addQuestion(question, answer, tags)
  renderCards(datas, homeSection)
  renderCards(filterBookmark(), bookmarkSection)
  form.reset()
})

function init() {
  renderCards(datas, homeSection)
}

init()

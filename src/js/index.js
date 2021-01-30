const pageHome = getElement('home')
const pageBookmark = getElement('bookmarks')
const pageCreateCard = getElement('create-card')
const pageAccount = getElement('account')

const navButton1 = getElement('nav-btn-1')
const navButton2 = getElement('nav-btn-2')
const navButton3 = getElement('nav-btn-3')
const navButton4 = getElement('nav-btn-4')

toggleBookmark()
toggleAnswer()

const form = getElement('form-card-create')
form.addEventListener('submit', event => {
  event.preventDefault()
  form.reset()
})

navButton1.addEventListener('click', () => {
  pageHome.hidden = false
  pageBookmark.hidden = true
  pageCreateCard.hidden = true
  pageAccount.hidden = true
  navButton1.classList.add('navigation__item--active')
  navButton2.classList.remove('navigation__item--active')
  navButton3.classList.remove('navigation__item--active')
  navButton4.classList.remove('navigation__item--active')
  toggleBookmark()
  toggleAnswer()
})

navButton2.addEventListener('click', () => {
  pageHome.hidden = true
  pageBookmark.hidden = false
  pageCreateCard.hidden = true
  pageAccount.hidden = true
  navButton1.classList.remove('navigation__item--active')
  navButton2.classList.add('navigation__item--active')
  navButton3.classList.remove('navigation__item--active')
  navButton4.classList.remove('navigation__item--active')
  cloneQuizCard()
  toggleBookmark()
  toggleAnswer()
})

navButton3.addEventListener('click', () => {
  pageHome.hidden = true
  pageBookmark.hidden = true
  pageCreateCard.hidden = false
  pageAccount.hidden = true
  navButton1.classList.remove('navigation__item--active')
  navButton2.classList.remove('navigation__item--active')
  navButton3.classList.add('navigation__item--active')
  navButton4.classList.remove('navigation__item--active')
  toggleBookmark()
  formFunctions()
})

navButton4.addEventListener('click', () => {
  pageHome.hidden = true
  pageBookmark.hidden = true
  pageCreateCard.hidden = true
  pageAccount.hidden = false
  navButton1.classList.remove('navigation__item--active')
  navButton2.classList.remove('navigation__item--active')
  navButton3.classList.remove('navigation__item--active')
  navButton4.classList.add('navigation__item--active')
  toggleBookmark()
})

function toggleAnswer() {
  const quizCards = getAllElements('quiz-card')
  quizCards.forEach(quizcard => {
    const button = quizcard.querySelector('[data-js="toggle-answer"]')
    const answer = quizcard.querySelector('[data-js="answer"]')
    button.addEventListener('click', () => {
      answer.classList.toggle('hidden')
      button.classList.toggle('quiz-card__button--active')
      if (button.classList.contains('quiz-card__button--active')) {
        button.innerHTML = 'Hide answer'
      } else {
        button.innerHTML = 'Show answer'
      }
    })
  })
}

function toggleBookmark() {
  const bookmarks = getAllElements('bookmark')
  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('quiz-card__bookmark--active')
    })
  })
}

function cloneQuizCard() {
  pageBookmark.innerHTML = ''
  const bookmarksActive = document.querySelectorAll(
    '.quiz-card__bookmark--active'
  )
  if (bookmarksActive.length >= 1) {
    bookmarksActive.forEach(bookmarkActive => {
      pageBookmark.append(bookmarkActive.parentNode.cloneNode(true))
    })
  } else {
    pageBookmark.innerHTML = `<section class="quiz-card quiz-card--empty">
    <h2><i class="icon-mood-neutral-outline"></i> What a pity!</h2>
    <p>
    Looks like you haven't <span class="bookmark-badge">bookmarked <i class="icon-bookmark1 bookmark-badge__icon"></i></span> any Quiz Cards yet ...
    </p>
    </section>`
  }
}
function formFunctions() {
  const addQuestion = document.querySelector('.form__textarea--question')
  const formFields = getAllElements('form-field')

  addQuestion.focus()

  formFields.forEach(field => {
    const countMax = field.maxLength
    const counterEl = document.createElement('span')
    counterEl.className = 'form__counter-indicator'
    counterEl.innerHTML = `${countMax}`
    const charCounter = field.parentElement.appendChild(counterEl)

    field.addEventListener('input', () => {
      const countInput = field.value.length
      const countRest = countMax - countInput
      console.log(countRest)
      counterEl.innerHTML = `<strong>${countRest}</strong> / ${countMax}`
    })
  })
}

function getElement(dataJsName) {
  const foundElement = document.querySelector(`[data-js="${dataJsName}"]`)
  return foundElement
}

function getAllElements(dataJsName) {
  const foundElements = document.querySelectorAll(`[data-js="${dataJsName}"]`)
  return foundElements
}

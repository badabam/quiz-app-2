const pageHome = getElement('home')
const pageBookmark = getElement('bookmarks')
const pageCreateCard = getElement('create-card')
const pageAccount = getElement('account')

const navButton1 = getElement('nav-btn-1')
const navButton2 = getElement('nav-btn-2')
const navButton3 = getElement('nav-btn-3')
const navButton4 = getElement('nav-btn-4')

let bookmarks = document.querySelectorAll('[data-js="bookmark"]')

toggleBookmark()

navButton1.addEventListener('click', () => {
  pageHome.hidden = false
  pageBookmark.hidden = true
  pageCreateCard.hidden = true
  pageAccount.hidden = true
  navButton1.classList.add('navigation__item--active')
  navButton2.classList.remove('navigation__item--active')
  navButton3.classList.remove('navigation__item--active')
  navButton4.classList.remove('navigation__item--active')
  bookmarks = document.querySelectorAll('[data-js="bookmark"]')
  toggleBookmark()
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
  bookmarks = document.querySelectorAll('[data-js="bookmark"]')
  toggleBookmark()
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
  bookmarks = document.querySelectorAll('[data-js="bookmark"]')
  toggleBookmark()
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
  bookmarks = document.querySelectorAll('[data-js="bookmark"]')
  toggleBookmark()
})

function toggleBookmark() {
  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('quiz-card__bookmark--active')
      console.log(bookmarks)
    })
  })
}
function cloneQuizCard() {
  pageBookmark.innerHTML = ''
  const bookmarksActive = document.querySelectorAll(
    '.quiz-card__bookmark--active'
  )
  bookmarksActive.forEach(bookmarkActive => {
    pageBookmark.append(bookmarkActive.parentNode.cloneNode(true))
  })
}

function getElement(dataJsName) {
  const foundElement = document.querySelector(`[data-js="${dataJsName}"]`)
  return foundElement
}

console.log('Hello world!')
const pageHome = document.querySelector('[data-js=home]')
const pageBookmark = document.querySelector('[data-js=bookmarks]')
const pageCreateCard = document.querySelector('[data-js=create-card]')
const pageAccount = document.querySelector('[data-js=account]')
const navButton1 = document.querySelector('[data-js=nav-btn-1]')
const navButton2 = document.querySelector('[data-js=nav-btn-2]')
const navButton3 = document.querySelector('[data-js=nav-btn-3]')
const navButton4 = document.querySelector('[data-js=nav-btn-4]')

navButton1.addEventListener('click', () => {
  pageHome.hidden = false
  pageBookmark.hidden = true
  pageCreateCard.hidden = true
  pageAccount.hidden = true
  navButton1.classList.add('navigation__item--active')
  navButton2.classList.remove('navigation__item--active')
  navButton3.classList.remove('navigation__item--active')
  navButton4.classList.remove('navigation__item--active')
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
})

import getAllByDataJs from './getAllByDataJs'
import cloneQuizCard from './cloneQuizCard'
import callFormFunctions from './callFormFunctions'
import toggleAnswer from './toggleAnswer'
import toggleBookmark from './toggleBookmark'

export default function navigation() {
  const pages = getAllByDataJs('page')
  const navButtons = getAllByDataJs('nav')

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const clickedButtonName = button.dataset.name
      pages.forEach(page => {
        const pageName = page.dataset.name
        page.classList.toggle('hidden', clickedButtonName !== pageName)
      })
      navButtons.forEach(button => {
        button.classList.toggle(
          'navigation__item--active',
          clickedButtonName === button.dataset.name
        )
      })
      callPageFunctions(clickedButtonName)
    })
  })
}

function callPageFunctions(clickedButtonName) {
  switch (clickedButtonName) {
    case 'home':
      toggleBookmark()
      toggleAnswer()
      break
    case 'bookmarks':
      cloneQuizCard()
      toggleBookmark()
      toggleAnswer()
      break
    case 'create-card':
      callFormFunctions()
      break
    default:
    // code block
  }
}

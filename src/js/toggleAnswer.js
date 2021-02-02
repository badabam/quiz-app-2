import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function toggleAnswer() {
  const quizCards = getAllByDataJs('quiz-card')
  quizCards.forEach(quizcard => {
    const button = getByDataJs('toggle-answer', quizcard)
    const answer = getByDataJs('answer', quizcard)
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

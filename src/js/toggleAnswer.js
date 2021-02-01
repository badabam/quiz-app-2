import getAllByDataJs from './getAllByDataJs'

export default function toggleAnswer() {
  const quizCards = getAllByDataJs('quiz-card')
  quizCards.forEach(quizcard => {
    const button = quizcard.querySelector('[data-js="toggle-answer"]')
    const answer = quizcard.querySelector('[data-js="answer"]')
    button.addEventListener('click', () => {
      answer.classList.toggle('hidden', true)
      button.classList.toggle('quiz-card__button--active', false)
      if (button.classList.contains('quiz-card__button--active')) {
        button.innerHTML = 'Hide answer'
      } else {
        button.innerHTML = 'Show answer'
      }
    })
  })
}

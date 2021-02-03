import getByDataJs from './getByDataJs'
import getAllByDataJs from './getAllByDataJs'
import getByClass from './getByClass'
import getAllByClass from './getAllByClass'

export default function callFormFunctions() {
  const counters = []

  setFocus()
  countInput()
  resetForm()

  function setFocus() {
    const addQuestion = getByClass('form__textarea--question')
    addQuestion.focus()
  }

  function countInput() {
    const formFields = getAllByDataJs('form-field') // textarea

    formFields.forEach(field => {
      const countMax = field.maxLength

      // create and add an element in DOM to contain counter / set default to maxlength
      const counterEl = document.createElement('span')
      counterEl.className = 'form__counter-indicator'
      counterEl.innerHTML = `${countMax}`

      counters.push({el: counterEl, countMax: countMax})

      const charCounter = field.parentElement
      charCounter.appendChild(counterEl)

      field.addEventListener('input', () => {
        const countInput = field.value.length
        const countRest = countMax - countInput
        if (countInput < 1) {
          counterEl.innerHTML = `${countMax}`
        } else {
          counterEl.innerHTML = `<strong>${countRest}</strong> / ${countMax}`
        }
      })
    })
  }

  function resetForm() {
    const form = getByDataJs('form-card-create')
    form.addEventListener('submit', event => {
      event.preventDefault()
      form.reset()
      setFocus()
      counterReset()
    })
  }

  function counterReset() {
    counters.forEach(counter => {
      counter.el.textContent = counter.countMax
    })
  }
}

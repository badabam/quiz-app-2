import getByDataJs from './getByDataJs'

export default function toggleSwitch() {
  const toggleSwitch = getByDataJs('toggle-switch')
  const radios = toggleSwitch.elements.toggle_option

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.body.classList.toggle(
        'layout-dark',
        !document.body.classList.contains('layout-dark')
      )
    })
  })
}

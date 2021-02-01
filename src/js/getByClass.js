export default function getByClass(className, target = document) {
  return target.querySelector(`.${className}`)
}

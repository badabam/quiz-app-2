export default function getAllByClass(className, target = document) {
  return target.querySelectorAll(`.${className}`)
}

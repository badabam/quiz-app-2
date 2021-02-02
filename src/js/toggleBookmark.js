import getAllByDataJs from './getAllByDataJs'

export default function toggleBookmark() {
  const bookmarks = getAllByDataJs('bookmark')
  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle(
        'quiz-card__bookmark--active',
        !bookmark.classList.contains('quiz-card__bookmark--active')
      )
    })
  })
}

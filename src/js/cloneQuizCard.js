import getAllByClass from './getAllByClass'

export default function cloneQuizCard() {
  const pageBookmark = document.querySelector('[data-name="bookmarks"]')
  pageBookmark.innerHTML = ''
  const bookmarksActive = getAllByClass('quiz-card__bookmark--active')
  if (bookmarksActive.length >= 1) {
    bookmarksActive.forEach(bookmarkActive => {
      pageBookmark.append(bookmarkActive.parentNode.cloneNode(true))
    })
  } else {
    pageBookmark.innerHTML = `<section class="quiz-card quiz-card--empty">
    <h2><i class="icon-mood-neutral-outline"></i> What a pity!</h2>
    <p>
    Looks like you haven't <span class="bookmark-badge">bookmarked <i class="icon-bookmark1 bookmark-badge__icon"></i></span> any Quiz Cards yet ...
    </p>
    </section>`
  }
}

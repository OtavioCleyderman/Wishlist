const favorite = document.querySelector('.card-wishlist')
const heartWishlist = document.querySelector('.bi-heart-fill')

favorite.addEventListener('click', () => {
  heartWishlist.classList.toggle('selected')
})

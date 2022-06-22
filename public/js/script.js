const card = document.querySelectorAll('.card')
const wishlistButton = document.querySelectorAll('.card-wishlist')
const wishlistButtonDelete = document.querySelectorAll('.iconDeleteWishlist')
const heartIcon = document.querySelectorAll('.bi-heart-fill')
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
let heartIconSelected = JSON.parse(localStorage.getItem('heartIconSelected')) || []


function setWishlistHome() {
  for(let i = 0; i < wishlistButton.length; i++){

    // Pegar os dados de cada card, dados: Imagem, titulo e preço. Precisarei para inserir no localStorage e depois pegar esses dados e renderizar na tela wishlist
    const imageSrc = card[i].firstElementChild.firstElementChild.currentSrc
    const titleAndPrice = card[i].outerText.split("\n\n")
    const title = titleAndPrice[0]
    const price = titleAndPrice[1]
  
    // Verifica se o produto já está no localStorage, por segurança confirmando pelo nome e preço
    const index = wishlist.findIndex(element => element.title === title & element.price === price)
    
    // Caso tenha produtos no localStorage, ou seja, na wishlist do cliente, na página de produtos reflete qual está em sua lista também
    if(index != -1) {
      heartIcon[i].style.fill = 'red'
    } else {
      heartIcon[i].style.fill = '#FFF'
    }

    // Já com o seu click, consegue adicionar ou remover produtos da sua wishlist direto da página de produtos
    wishlistButton[i].addEventListener('click', (e) => {
      const idx = wishlist.findIndex(element => element.title === title & element.price === price)
      console.log(e)
      if(idx != -1) {
        wishlist.splice(idx, 1)
        heartIcon[i].style.fill = '#FFF'
        console.log(idx)
        console.log(title, price)
      } else {
        wishlist.push({imageSrc, title, price})
        heartIcon[i].style.fill = 'red'
        console.log(idx)
        console.log(title, price)
      } /* Depois verificar como refatorar os dois blocos if acima*/
  

      // inserindo o produto escolhido pelo cliente para sua wishlist no localStorage
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
    })
  }
}

setWishlistHome()


function wishlistRemove() {
  for(let i = 0; i < wishlist.length; i++){
    wishlistButtonDelete[i].addEventListener('click', () => {
      const index = wishlist.findIndex(element => element.title == wishlist[i].title )
      wishlist.splice(index, 1)
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
      location.reload()
    })
  }
}

wishlistRemove()







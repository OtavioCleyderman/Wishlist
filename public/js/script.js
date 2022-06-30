const card = document.querySelectorAll('.card')
const wishlistButton = document.querySelectorAll('.card-wishlist')
const wishlistButtonDelete = document.querySelectorAll('.iconDeleteWishlist')
const heartIcon = document.querySelectorAll('.bi-heart-fill')
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
let heartIconSelected = JSON.parse(localStorage.getItem('heartIconSelected')) || []

// Função verifica a wishlist e reflete na página home marcando o icone heart
//   Ao usuário clicar no icone heart, se não tiver na wishlist o produto, é marcado como vermelho esse icone 
//   e adicionado na wishlist o produto. Se estiver na lista, o clique remove esse produto da wishlist

function updateWishlist() {
  for(let i = 0; i < wishlistButton.length; i++){
    const id = card[i].firstElementChild.innerText
    const imageSrc = card[i].getElementsByTagName('img').item('img').src
    const titleAndPrice = card[i].outerText.split("\n\n")
    const title = titleAndPrice[0]
    let price = titleAndPrice[1]
    
    const index = wishlist.findIndex(product => product.id === id)
    
    if(index != -1) {
      heartIcon[i].style.fill = 'red'
    } else {
      heartIcon[i].style.fill = '#FFF'
    }

    console.log(imageSrc)
    // Com o click do cliente no icone de favoritar o produto, consegue adicionar ou remover produtos da sua 
    // wishlist e mostrar pelo icone heart se está na wishlist ou não
    wishlistButton[i].addEventListener('click', () => {
      const idx = wishlist.findIndex(product => product.id === id)
      if(idx != -1) {
        console.log(idx)
        console.log(imageSrc)
        wishlist.splice(idx, 1)
        heartIcon[i].style.fill = '#FFF'
      } else {
        console.log(idx)
        console.log(imageSrc)
        wishlist.push({id, imageSrc, title, price})
        heartIcon[i].style.fill = 'red'
      } 
 
      // inserindo o produto escolhido pelo cliente para sua wishlist no localStorage
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
    })
   
  }
}
updateWishlist()

// Função atua na pagina de visualização da wishlist. Se usuário clicar no icone de "x" para remover um produto 
//  da wishlist, a função remove o produto da wishlist na hora e atualiza a visualização(página) sobre a wishlist
//  do usuário   
function wishlistRemove() {
  for(let i = 0; i < wishlist.length; i++){
    wishlistButtonDelete[i].addEventListener('click', () => {
      const index = wishlist.findIndex(element => element.id == wishlist[i].id )
      wishlist.splice(index, 1)
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
      location.reload()
    })
  }
}

wishlistRemove()




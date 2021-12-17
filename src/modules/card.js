const cart = ()=>{

const cartBtn = document.getElementById('cart')
const cartModal = document.querySelector('.cart')
const cartCloseBtn = cartModal.querySelector('.cart-close')

const openCart = ()=>{
    cartModal.style.display = 'flex'
}

const closeCart = ()=>{
    cartModal.style.display = ''
} 

// cartBtn.onclick = function(){
//    openCard()
// }
// cartBtn.onclick = openCard

cartBtn.addEventListener('click', openCart)
 
// cartCloseBtn.onclick=closeCart

cartCloseBtn.addEventListener('click', closeCart)
}
export default cart
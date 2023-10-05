let user = document.querySelector('#user-info')
let userDom = document.querySelector('#user')
   let links = document.querySelector('#links')
   let username = localStorage.getItem('username')
   let productsdom = document.querySelector('#popopo')
   let cartProducts = document.querySelector('.cart-products-p')
   let badge = document.querySelector('.badge')
   let shoppingCart = document.querySelector('.iconcart')
   let shoppingCartmenu = document.querySelector('.cart-products ')
   if(username){
      links.remove()
      user.style.display = "flex";
      userDom.innerHTML = localStorage.getItem('username')
   }
   let logout = document.querySelector(".logout")

   if(username){
      logout.style.display = "block";
   }
   logout.addEventListener("click", () => {window.location= "regester.html" , localStorage.clear()}
   )
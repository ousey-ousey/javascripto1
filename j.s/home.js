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
   let products = [
      {
      id: 1,
      title : "headphone",
      size:"large",
      imgUrl: 'index.img/gogogo.jpg',
      qty : 1,
   },{
      id: 2,
      title : "headphone2",
      size:"medium",
      imgUrl: 'index.img/gogogo.jpg',
      qty : 1,
   },{
      id: 3,
      title : "headphone3",
      size:"large",
      imgUrl: 'index.img/gogogo.jpg',
      qty : 1,
   },{
      id: 4,
         title : "headphone4",
         size:"small",
         imgUrl: 'index.img/gogogo.jpg',
      qty : 1,
      },
   ];
   
   let   darwproductsUI;
   (darwproductsUI = function(products=[]){
         let productUI = products.map((item)=> {
      return`
      <div class="product-item"> 
      <img class="product-item-image" src="${item.imgUrl}" alt="headphones">


      <div class="product-item-desc">
      <a class="product-item-desc-h2" onclick="saveItemData(${item.id})" >${item.title} </a>

            <p class="product-item-desc-p"> this is the frist headphone in the wep</p>
         <span class="product-item-desc-span"> Size: ${item.size}</span>
      </div>


      <div class="product-item-action">
         <button class="button-29 add-to-cart" id="add-to-cart" onclick="addedtocart (${item.id}) ">Add To Cart</button>
         <i class="star fa fa-star fa-2x" aria-hidden="true"></i>
      </div>
   </div>`;

      })

            productsdom.innerHTML = productUI.join('');

   })(JSON.parse(localStorage.getItem('products')))

      let addeditem = localStorage.getItem('addedItem') ? JSON.parse(localStorage.getItem('addedItem')):[]
if(addeditem){
   addeditem.map(item =>{
      cartProducts.innerHTML += `<P>${item.title}</p>`      

   })
   badge.innerHTML = cartProducts.children.length
   badge.style.display = "block";

}

let allitems = []

      function addedtocart(id){
         if(localStorage.getItem("username"))
      {
         let choosenitem = products.find((item)=> item.id === id)

            let item = allitems.find((i) => i.id === choosenitem.id)

            if(item){
               choosenitem.qty +=1 ;
            }else{
               allitems.push(choosenitem);
               console.log("a",allitems);
            }
            cartProducts.innerHTML = "";
            allitems.forEach(item => {
               cartProducts.innerHTML +=  `<p>${item.title} qty:${item.qty}</p>`
            })
         addeditem= [...addeditem,{...choosenitem}]
         localStorage.setItem('addedItem',JSON.stringify(addeditem))
         let cartProductsLength = document.querySelector('.cart-products div p')
         badge.style.display = "block";
         badge.innerHTML = cartProducts.children.length
      }else{ window.location = "login.html"}}


      shoppingCart.addEventListener('click',mycart )
 function mycart(){
   if(cartProducts.innerHTML !=""){
         if(shoppingCartmenu.style.display == "block"){
            shoppingCartmenu.style.display ="none"} 
            else{
               shoppingCartmenu.style.display = "block"}
         }
      

   }
   function saveItemData(id){
      localStorage.setItem('productId', id)
      window.location='product-page.html'
   }
 let srch = document.querySelector('.search')
   function search(title, myarray){
let arr = myarray.filter(item => item.title.indexOf(title) !==-1 )
   darwproductsUI(arr)
}
   srch.addEventListener('keyup',function(e){
         search( e.target.value,JSON.parse(localStorage.getItem("products")))
      if(e.target.value.trim() === ""){
         darwproductsUI(products)}
      
      })



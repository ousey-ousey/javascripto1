let NoProduct = document.querySelector('.noproducts')

function darwcartsUI( allRealInCart = []) {

    if(JSON.parse(localStorage.getItem('addedItem')).length === 0){
        NoProduct.innerHTML="NO PRODUCTS CHOOSEN YET"
    }
    let RealInCart = JSON.parse(localStorage.getItem('addedItem')) || allRealInCart;
    let productUI = RealInCart.map((item)=> {
 return`
 <div class="product-item"> 
 <img class="product-item-image" src="${item.imgUrl}" alt="headphones">


 <div class="product-item-desc">
 <h2 class="product-item-desc-h2">${item.title} </h2>

       <p class="product-item-desc-p"> this is the frist headphone in the wep</p>
    <span class="product-item-desc-span"> Size: ${item.size}</span>
 </div>


 <div class="product-item-action">
    <button class="button-29 add-to-cart" id="add-to-cart" onclick="removefromcart(${item.id}) ">Remove from cart </button>
 </div>
</div>`;

 })

    productsdom.innerHTML = productUI.join('');

}
darwcartsUI()
function removefromcart(id){
    let InCart =localStorage.getItem('addedItem')
    if(InCart){
        let item = JSON.parse(InCart);
       let feltereditem = item.filter((item)=> item.id !== id);
        localStorage.setItem('addedItem',JSON.stringify(feltereditem) )
darwcartsUI(feltereditem)
    }
}

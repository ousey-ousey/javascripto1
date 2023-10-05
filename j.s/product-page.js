let products = JSON.parse(localStorage.getItem('products'))
let productId = localStorage.getItem('productId')
let productDetails = products.find(item => item.id == productId)
let detailsDom = document.querySelector('.products-details')

detailsDom.innerHTML =`
<img src="${productDetails.imgUrl}" alt="img">
<h2>${productDetails.title}</h2>
<span>size: ${productDetails.size}</span>

`
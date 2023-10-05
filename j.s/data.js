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
   let item = products
   localStorage.setItem('products', JSON.stringify(products))
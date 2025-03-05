document.getElementById('addProductButton')
.addEventListener('click', function(){
   const productName = document.getElementById
   ('productName').value;
   const productImage = document.getElementById
   ('productImage').value;
   const productPrice = document.getElementById
   ('productPrice').value;
  
   const mainContainer = document.getElementById
   ('productList');
  const div = document.createElement('div')

  div.innerHTML= `
   <h1 class= text-3*l>${productName} </h1>
   <img src=${productImage} alt="" />
   <p>${productPrice} </p>
  `
//   const h1 = document.createElement('h1')
//   .innerText = productName;
//   div.appendChild(h1)

  mainContainer.appendChild(div);
})
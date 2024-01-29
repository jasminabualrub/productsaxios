

async function getProduct(){
const response=await fetch('https://dummyjson.com/products');
const data=await response.json();
//console.log(data);
const products=data.products;
//console.log(products);
const result=products.map(function(ele){
  return `
  <div class='product-element'>
  <h2>${ele.title}</h2>
  <img src='${ele.thumbnail}'>
  <br/>
  <span> ${ele.price}</span>
  <br/>
  <a href='product-detail.html?pro-id=${ele.id}'>detail</a>
  </div>
  `  ;
}).join('');
document.querySelector('.product .container').innerHTML=result;
}
//getProduct();
async function getProductAxios(){
  const response=await axios.get('https://dummyjson.com/products');
    const data=  await response;
    //console.log(data);
    let products=data.data.products;
    //console.log(products);
    const result=products.map(function(ele){
      return `
      <div class='product-element'>
      <h2>${ele.title}</h2>
      <img src='${ele.thumbnail}'>
      <br/>
      <span> ${ele.price}$</span>
      <br/>
      <a href='product-detail.html?pro-id=${ele.id}'>detail</a>
      </div>
      `  ;
    }).join('');
    document.querySelector('.product .row').innerHTML=result;


  }
  getProductAxios();
async function getDetail(){
const urlParams=new URLSearchParams(window.location.search);
console.log(urlParams);
const id= urlParams.get('pro-id')
console.log(id);
const response=await fetch(`https://dummyjson.com/products/${id}`);
const data= await response.json();
console.log(data);

document.querySelector('h2').textContent=data.title;
document.querySelector('p').textContent=data.description;
document.querySelector('img').src=data.thumbnail;
document.querySelector('span').textContent=data.price;


}
//getDetail();
async function getDetailAxios(){
    const urlParams=new URLSearchParams(window.location.search);
    console.log(urlParams);
    const id= urlParams.get('pro-id')
    console.log(id);
    const response= await axios.get(`https://dummyjson.com/products/${id}`)
        const data= await response;
        console.log(data);
        const info =data.data;
        console.log(info);
        document.querySelector('h2').textContent=info.title;
        document.querySelector('p').textContent=info.description;
        document.querySelector('img').src=info.thumbnail;
        document.querySelector('span').textContent=info.price+'$';
    
    
    
    
    }
    getDetailAxios();
async function swiperaxios(){
    const urlParams=new URLSearchParams(window.location.search)
    const id= urlParams.get('pro-id')
    const response=await axios.get(`https://dummyjson.com/products/${id}`);
    const data=await response;
    console.log(data);
    const arr=data.data.images;//يرجع اريه من الصور 
    console.log(arr);
    const result=arr.map(function(ele){
        return`
        <div class='swiper-slide'>
        <img src='${ele}'>
        </div>
        `;

    }).join('');
document.querySelector('.swiper-wrapper').innerHTML=result;
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    autoplay:true,
    clickable:true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
   
  });
}
swiperaxios();
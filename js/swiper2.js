const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    loop: false, 
    watchOverflow: true,
    spaceBetween: 5,
  });

  swiper.on('slideChange', () => {
    document.querySelector('.swiper-button-next').disabled = swiper.isEnd;
    document.querySelector('.swiper-button-prev').disabled = swiper.isBeginning;
  });

const arr=Array.from(document.querySelectorAll('.knopka'))
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d=new Date();
function sec(knopka,ind){
    arr.forEach(item=>{
        item.classList.remove('bg-[#D9DADB]','bg-[#474747]')
        item.querySelector('span').classList.remove('text-white','text-black')
        item.querySelector('div').classList.remove('bg-[#353535]','bg-[#606060]')
    })
    knopka.classList.add('bg-[#D9DADB]')
    knopka.querySelector('span').classList.add('text-black')
    knopka.querySelector('div').classList.add('bg-[#353535]')
    arr
    .filter((item,index)=>index!=ind)
    .forEach(item=>{
        item.classList.add('bg-[#474747]')
        item.querySelector('span').classList.add('text-white')
        item.querySelector('div').classList.add('bg-[#606060]')
    })
}
arr.forEach(item=>{
    item.querySelector('span').innerHTML=months[d.getMonth()]
})
const days=arr.map(item=>item.querySelector('div'))
let x=d.getDate();
days.forEach(item=>{
  item.innerHTML=x++;
})




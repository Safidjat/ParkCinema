const basket=JSON.parse(localStorage.getItem('basket')) || [];
const kino=JSON.parse(localStorage.getItem('kino')) || [];

const yazilanNomre=document.getElementById('yazilanNomre');
const clickMe=document.getElementById('clickMe');
const bittimi=document.getElementById('bittimi');
const email=document.getElementById('email');
const notification=document.getElementById('notification');
const filmHaqqinda=document.getElementById('filmHaqqinda');
const progress=document.getElementById('progress');
const saniye=document.getElementById('saniye');
const deyqe=document.getElementById('deyqe');
const btn=document.getElementById('btn');

console.log(basket);
console.log(kino);


function melumatiYukle(){
    const seans=kino[0];

    filmHaqqinda.innerHTML='';
    filmHaqqinda.innerHTML+=`
        <div class="flex flex-col gap-[20px] desk:gap-[15px]">
            <h1 class="text-[20px] font-[500]">${seans.ad}</h1>
            <p class="text-[16px] font-[400]">${seans.mekan}</p>
            <p class="text-[16px] font-[400]">${seans.tarix} ${seans.vaxt} Zal:${seans.zal}</p>
            <div class="flex flex-col gap-[20px] desk:gap-[15px]">
                ${
                    basket.map(obj=>{
                        return `<p class="text-[16px] font-[400]">Sıra ${obj.row}, Yer ${obj.seat} (${obj.category})</p>`
                    }).join('')
                }
            </div>
        </div>
        <h1 class="text-[16px] font-[600]">Ümumi: ${basket.reduce((sum,item)=>sum+=item.price,0 )} AZN</h1>
    `
}
melumatiYukle()

function nomre(){
    let text=yazilanNomre.value;
    let arr=text.split('')
    arr=arr.filter(word=>!isNaN(word)&& word.trim() !== '') 
    arr=arr.slice(0,9);
    if(arr[0]==0) arr=arr.slice(1)
    let arrSon=[];
    arr.forEach((num,ind)=>{
        if(ind==0||ind==1) arrSon.push(num)
        else if(ind==2) arrSon.push(' ',num)
        else if(ind==3||ind==4) arrSon.push(num)
        else if(ind==5) arrSon.push(' ',num)
        else if(ind==6) arrSon.push(num)
        else if(ind==7) arrSon.push(' ',num)
        else if(ind==8) arrSon.push(num)
    })
    console.log(arrSon);
    yazilanNomre.value=arrSon.join('');
    validation()
}
function svgYukle(){
    clickMe.innerHTML=''
    clickMe.innerHTML+=`
        <div id="svgLer"  class="кrelative overflow-hidden transition-all duration-[.2s] cursor-pointer ease-in-out w-[42px] h-[42px] grid place-items-center rounded-full  hover:bg-[#363a3d]">
            <svg onclick="deyisSvg(0)" fill="white" class="z-[100] w-[23px] h-[23px] MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                data-testid="CheckBoxOutlineBlankIcon">
                <path
                    d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                </path>
            </svg>
            <svg onclick="deyisSvg(1)" fill="white" width="23" height="23" class="z-[100] hidden MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxIcon">
                <path
                    d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
                </path>
            </svg>
        </div>
        <p class="text-[16px] text-txt">Mən <a href="#" class=" text-white underline">Qaydalar və şərtlər</a> oxudum və razıyam</p>
    `
}
svgYukle()

function deyisSvg(currentSvg){
    const svgLer= document.getElementById('svgLer');
    const arr=Array.from(svgLer.querySelectorAll('svg'))
    arr.forEach(item=>{
        item.classList.remove('hidden')
    })
    arr.find((item,ind)=>ind==currentSvg).classList.add('hidden');

    if(currentSvg==0){ bittimi.checked=true; validation()}
    else bittimi.checked=false

    svgLer.classList.add('spark-active');
    setTimeout(() => {
        svgLer.classList.remove('spark-active');
    }, 500); 
}

function tamamla(){
    const emailVal= email.value
    const yazilanNomreVal=yazilanNomre.value;

    if(emailVal==''){
        notification.classList.replace('bottom-[-100px]','bottom-[32px]')
        notification.querySelector('p').innerHTML='Zəhmət olmasa Email xanasını doldurun';
        setTimeout(()=>{
            notification.classList.replace('bottom-[32px]','bottom-[-100px]') 
        },6000)
    }
    else if(yazilanNomreVal==''){
        notification.classList.replace('bottom-[-100px]','bottom-[32px]')
        notification.querySelector('p').innerHTML='Zəhmət olmasa nömrənizi qeyd edin';
        setTimeout(()=>{
            notification.classList.replace('bottom-[32px]','bottom-[-100px]') 
        },6000)
    }
    else if(!bittimi.checked){
        notification.classList.replace('bottom-[-100px]','bottom-[32px]')
        notification.querySelector('p').innerHTML='Zəhmət olmasa şərtləri qəbul edin';
        setTimeout(()=>{
            notification.classList.replace('bottom-[32px]','bottom-[-100px]') 
        },6000)
    }
    else whatsappTo()
    
}


function whatsappTo(){
    const val=yazilanNomre.value.split(' ').join('');
    const url  = ` https://wa.me/994${val}?text=${kino[0].ad}%20baxmaq%20istəyirsənsə%20${kino[0].tarix}%20tarixində%20saat%20${kino[0].vaxt}-də%20${kino[0].mekan}%20teatrın%20${kino[0].zal}%20nömrəli%20zalında%20ol!`
    window.open( url )
}

function move(){
    let width = 0;
    const id = setInterval(go, 180);
    function go() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width+=0.1; 
        progress.style.width = width + '%'; 
      }
    }
}
move()


function timer() {
    let min = 3; 
    let sec = 0; 

    const interval = setInterval(() => {
        if (sec === 0) {
            if (min === 0) {
                clearInterval(interval); 
                location.href='/index.htm'
                return;
            }
            min--; 
            sec = 59; 
        } else {
            sec--;
        }
        deyqe.innerHTML = min;
        saniye.innerHTML = sec < 10 ? "0" + sec : sec;
    }, 1000); 
}

timer();

function validation() {
    if (email.value.trim() !== '' && yazilanNomre.value.trim() !== '' && bittimi.checked ) {
        btn.classList.replace('opacity-65','opacity-100');
    }
  }
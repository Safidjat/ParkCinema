const sira=document.getElementById('sira');
const birinci=document.getElementById('birinci');
const birinciCol=document.getElementById('birinciCol');
const bir=document.getElementById('bir');
const iki=document.getElementById('iki');
const uc=document.getElementById('uc');
const melumat=document.getElementById('melumat');
const umumi=document.getElementById('umumi');
const scalable=document.getElementById('scalable');
let discountsInfo;
let uleler=[]
let buts=[]
let basket=[];
let kino=[];

for(let i=12;i>0;i--){
    sira.innerHTML+=`<div class=" w-[26px] h-[26px] grid place-items-center rounded-[8px] text-[14px] text-txt">${i}</div>`
}

function zaliCixart(){
    const item=oneSessionData[0];

    let kod0=''
    for(let i=1;i<18;i++){
        kod0+=`<button value="${12},${i}" onclick="event.stopPropagation(),ac(this)" class="but relative cursor-pointer bg-txt w-[26px] h-[26px] grid place-items-center rounded-[8px] text-[14px] text-[#353535]">${i}`
        const list= `
                    ${
                        discountsInfo.map(item=>{
                            const tip=item.type=='FAMILY'? 'Ailə': item.type== 'ADULT'? 'Böyük': 'DOUBLE'
                            return `<li onclick="event.stopPropagation(),yukle(${item.val},this,'${tip}')" class="py-[10px] px-[22px] bg-txt hover:bg-[#d52b1e]  backdrop-blur-xs opacity-85 hover:text-white"><span>${item.type=='FAMILY'? 'Ailə': item.type== 'ADULT'? 'Böyük': 'DOUBLE'} </span></li>`
                        }).join('')
                    } `
        kod0+=`<ul class="absolute top-full h-0 z-[10] text-[#353535] rounded-lg overflow-hidden   duration-200 ">${list}</ul>`
        kod0+=`</button>`
    }
    birinci.innerHTML=kod0;
    
    let kod=''
    let s=12
    for(let i=0;i<11;i++){
        kod+=`<div class="flex items-center gap-[8px]">`
        s-=1
        for(let j=1;j<3;j++){
            kod+=`<button value="${s},${i>4?'': j}" onclick="event.stopPropagation(),ac(this)"  class="but ${i>4 ? 'bg-[#4d4d4d]' : 'bg-txt cursor-pointer'} relative  w-[26px] h-[26px] grid place-items-center rounded-[8px] text-[14px] text-[#353535]">${i>4?'': j}`
            const list= i>4 ? ''
                            : `
                                ${
                                    discountsInfo.map(item=>{
                                        const tip=item.type=='FAMILY'? 'Ailə': item.type== 'ADULT'? 'Böyük': 'DOUBLE'
                                        return `<li onclick="event.stopPropagation(),yukle(${item.val},this,'${tip}')" class="py-[10px] px-[22px] bg-txt hover:bg-[#d52b1e]  backdrop-blur-xs opacity-85 hover:text-white"><span class="backdrop-blur-sm">${item.type=='FAMILY'? 'Ailə': item.type == 'ADULT'? 'Böyük': 'DOUBLE'} </span></li>`
                                    }).join('')
                                }`

            kod+=`<ul class="absolute top-full h-0 z-[10] text-[#353535] rounded-lg overflow-hidden   duration-200">${list}</ul>`
            kod+=`</button>`
        }
        kod+=`</div>`
    }
    birinciCol.innerHTML=kod;
    
    let kod1='';
    let m=12
    for(let i=0;i<5;i++){
        kod1+=`<div class="flex items-center gap-[8px]">`;
        m-=1
        for(let j=3;j<14;j++){
            kod1+=`<button value="${m},${j}" onclick="event.stopPropagation(),ac(this)"  class="but relative bg-txt cursor-pointer w-[26px] h-[26px] grid place-items-center rounded-[8px] text-[14px] text-[#353535]">${j}`;
            const list= `
                    ${
                        discountsInfo.map(item=>{
                        const tip=item.type=='FAMILY'? 'Ailə': item.type== 'ADULT'? 'Böyük': 'DOUBLE'
                        return `<li onclick="event.stopPropagation(),yukle(${item.val},this,'${tip}')" class="py-[10px] px-[22px] bg-txt   backdrop-blur-xs opacity-85 hover:bg-[#d52b1e] hover:text-white"><span class="backdrop-blur-sm">${item.type=='FAMILY'? 'Ailə': item.type== 'ADULT'? 'Böyük': 'DOUBLE'} </span></li>`
                    }).join('')
                    } `
            kod1+=`<ul class="absolute top-full h-0 z-[10] text-[#353535] rounded-lg overflow-hidden   duration-200 ">${list}</ul>`
            kod1+=`</button>`
        }
        kod1+=`</div>`;
    }
    bir.innerHTML=kod1;
    
    let kod2='';
    let n=7;
    for(let i=0;i<5;i++){
        kod2+=`<div class="flex items-center gap-[8px]">`;
        n-=1
        for(let j=1;j<12;j++){
            kod2+=`<button value="${n},${j}" onclick="event.stopPropagation(),ac(this)" class="but relative bg-txt cursor-pointer w-[26px] h-[26px] grid place-items-center rounded-[8px] text-[14px] text-[#353535]">${j}`;
            const list= `
                    ${
                        discountsInfo.map(item => {
                            if (item.type == 'FAMILY' && basket.filter(basketItem => basketItem.category == 'Ailə').length==0) {
                                const tip = 'Ailə';
                                return `<li onclick="event.stopPropagation(),yukle(${item.val},this,'${tip}')" class="py-[10px] px-[22px] bg-txt   backdrop-blur-xs opacity-85 hover:bg-[#d52b1e] hover:text-white"><span class="backdrop-blur-sm">${tip}</span></li>`;
                            } else if (item.type == 'ADULT') {
                                const tip = 'Böyük';
                                return `<li onclick="event.stopPropagation(),yukle(${item.val},this,'${tip}')" class="py-[10px] px-[22px] bg-txt   backdrop-blur-xs opacity-85 hover:bg-[#d52b1e] hover:text-white"><span class="backdrop-blur-sm">${tip}</span></li>`;
                            } else if (item.type == 'DOUBLE') {
                                const tip = 'DOUBLE';
                                return `<li onclick="event.stopPropagation(),yukle(${item.val},this,'${tip}')" class="py-[10px] px-[22px] bg-txt   backdrop-blur-xs opacity-85 hover:bg-[#d52b1e] hover:text-white"><span class="backdrop-blur-sm">${tip}</span></li>`;
                            }
                            
                        }).join('')
                    } `
            kod2+=`<ul class="absolute top-full h-0 z-[10] text-[#353535] rounded-lg overflow-hidden  duration-200 ">${list}</ul>`
            kod2+=`</button>`
        }
        kod2+=`</div>`;
    }
    iki.innerHTML=kod2;
    
    let kod3=''
    for(let i=2;i<11;i++){
        kod3+=`<button value="${1},${i!=1&i!=11 ? i :''}" onclick="event.stopPropagation(),ac(this)" class="but ${i!=1&i!=11 ? 'bg-txt cursor-pointer' : 'bg-[#4d4d4d]'} relative w-[26px] h-[26px] grid place-items-center rounded-[8px] text-[14px] text-[#353535]">${i!=1&i!=11 ? i :''}`
        const list= i==1&i==11 ? ''
                            : `
                                ${
                                    discountsInfo.map(item=>{
                                        const tip=item.type=='FAMILY'? 'Ailə': item.type== 'ADULT'? 'Böyük': 'DOUBLE'
                                        return `<li onclick="event.stopPropagation(),yukle(${item.val},this,'${tip}')" class="py-[10px] px-[22px] bg-txt  backdrop-blur-xs opacity-85 hover:bg-[#d52b1e] hover:text-white"><span class="backdrop-blur-sm">${item.type=='FAMILY'? 'Ailə': item.type== 'ADULT'? 'Böyük': 'DOUBLE'} </span></li>`
                                    }).join('')
                                }`
        kod3+=`<ul class="absolute top-full h-0 z-[10] text-[#353535] rounded-lg overflow-hidden  duration-200 ">${list}</ul>`
        kod3+=`</button>`
    }
    uc.innerHTML=kod3;

    buts=Array.from(document.querySelectorAll('.but'))
    hamisiniSil()
    uleler=Array.from(document.querySelectorAll('ul'));
    hamisiniBagla()
    console.log(uleler[0].status);
    console.log(discountsInfo);
    
}


/////////Zal Funksionalligi//////////////////////////////////////////////////////
function ac(div){
    const ul=div.querySelector('ul')
    
    if(div.secilib){
        div.secilib=false;
        console.log(div.secilib);
        
        let sira=+valuenuCixart(div.value)[0]
        let yer=+valuenuCixart(div.value)[1]
        let iD=`${sira}/${yer}`;
        basket=basket.filter(item=>item.id!=iD);
        umuminiCixart()
        secilenlerinMelumati()
        seligeSehman()

        console.log(basket);
        rengMeselesi(div)
        
    }
    else{
        ul.status=!ul.status
        
        console.log(ul.status);
        
        if(ul.status) {
            if(ul.classList.contains('h-0')) {
                if(!(basket.filter(item=>item.category=='Ailə').length>=1 && basket.filter(item=>item.category=='Ailə').length<4)) {
                    if(basket.filter(item=>item.category=='Ailə').length>=4) Array.from(ul.querySelectorAll('li'))[0].classList.add('hidden')
                    
                    ul.classList.replace('h-0',`${discountsInfo.length==2? 'h-[82px]': 'h-[123px]'}`)
                    div.classList.replace('bg-txt','bg-[#ff9c10]');
                    div.classList.replace('text-[#353535]','text-white');
                }
                else {
                    const hisUl = div.querySelector('ul');
                    const hisLiler = Array.from(hisUl.querySelectorAll('li'));
                    const liToClick=hisLiler.find(item=>item.querySelector('span').innerText=='Ailə')
                    console.log(liToClick);
                    
                    liToClick.click();
                    
                }
            }
    
            uleler
            .filter(item=>item!=ul)
            .forEach(item=>item.status=false)
    
            falseOlanlariBagla()
        }
        else  bagla(ul)
    }
}
function bagla(ul){
    const parentDiv = ul.parentElement;
    if(ul.classList.contains(`${discountsInfo.length==2? 'h-[82px]': 'h-[123px]'}`)) ul.classList.replace(`${discountsInfo.length==2? 'h-[82px]': 'h-[123px]'}`,'h-0')
    parentDiv.classList.replace('bg-[#ff9c10]','bg-txt');
    if(!parentDiv.classList.contains('bg-[#d52b1e]')) parentDiv.classList.replace('text-white','text-[#353535]');
}
function hamisiniBagla(){
    uleler.forEach(item=>{
        item.status=false;
    })
}
function falseOlanlariBagla(){
    uleler
    .filter(item=>item.status===false)
    .forEach(item=>{
        bagla(item)
    })
}
document.querySelector('body').onclick=()=>{
    hamisiniBagla()
    falseOlanlariBagla()
    varsaYoxEle()
}
//////////////////Bilet Secme///////////////////////////////////////////
let umumiQiy=0

function yukle(price,li,tip){
    const ul=li.parentElement
    const hisParent=li.parentElement.parentElement;
    hisParent.secilib=true;
    rengMeselesi(hisParent)
    if(ul.classList.contains(`${discountsInfo.length==2? 'h-[82px]': 'h-[123px]'}`)) ul.classList.replace(`${discountsInfo.length==2? 'h-[82px]': 'h-[123px]'}`,'h-0')
    console.log(hisParent.secilib);
    console.log(hisParent.value);

    let sira=+valuenuCixart(hisParent.value)[0]
    let yer=+valuenuCixart(hisParent.value)[1]
    basket.push({
        id:`${sira}/${yer}`,
        row:sira,
        seat:yer,
        price:price,
        category:tip
    })
    umuminiCixart()
    secilenlerinMelumati()
    seligeSehman()
    console.log(basket);
    
}
function umuminiCixart(){
    umumiQiy=0;
    basket.map(item=>{
        umumiQiy+=item.price;
    })
    umumi.innerHTML=umumiQiy
}
umuminiCixart()

function secilenlerinMelumati(){
    // melumat.classList.toggle('hidden')
    melumat.innerHTML='';
    basket.map(item=>{
        melumat.innerHTML+=`<p>Sıra ${item.row}, Yer ${item.seat} (${item.category})</p>`
    })
}

function hamisiniSil(){
    buts.forEach(item=>item.secilib=false);
}

function rengMeselesi(but){
    if(but.secilib){
        but.classList.replace('bg-[#ff9c10]','bg-[#d52b1e]');
        if(but.classList.contains('bg-txt')) but.classList.replace('bg-txt','bg-[#d52b1e]');
        if(but.classList.contains('text-[#353535]')) but.classList.replace('text-[#353535]','text-white');
    }
    else{
        but.classList.replace('bg-[#d52b1e]','bg-txt');
        but.classList.replace('text-white','text-[#353535]');
    }
}
function valuenuCixart(str){
    const arr=str.split(',');
    return arr
}
function seligeSehman(){
    if(!melumat.classList.contains('hidden')) melumat.classList.add('hidden');
    if(basket.length>0){
        melumat.classList.remove('hidden');
    }
}
seligeSehman()
//////////////Bilet ALL//////////////////////////////////
function biletAl(){
    let yoxlanisBasketi=basket.filter(item=>item.category=='Ailə')
    if(yoxlanisBasketi.length!=0 && yoxlanisBasketi.length<4){
        notification.classList.replace('bottom-[-100px]','bottom-[32px]')
        notification.querySelector('p').innerHTML='Ailə kateqoriyası üçün ən az 4 yer seçməlisiniz';
        setTimeout(()=>{
            notification.classList.replace('bottom-[32px]','bottom-[-100px]') 
        },6000)
    }
    else if(basket.length==0){
        notification.classList.replace('bottom-[-100px]','bottom-[32px]')
        notification.querySelector('p').innerHTML='Zəhmət olmasa oturacaq seçimi edin';
        setTimeout(()=>{
            notification.classList.replace('bottom-[32px]','bottom-[-100px]') 
        },6000)
    }
    else {
        localStorage.setItem('basket',JSON.stringify(basket));
        location.href="/pages/odenis.htm"
    }
}




////////Zoom Temasi/////////////////////////////////////
function razmer(x){
    const currentTransform = window.getComputedStyle(scalable).transform;
    let currentScale = 1;
    if (currentTransform !== 'none') {
        const matrix = currentTransform.match(/matrix\((.+)\)/);
        if (matrix) {
            currentScale = parseFloat(matrix[1].split(', ')[0]);
        }
    }
    // const newScale = Math.min(2, Math.max(0.1, currentScale + x * 0.1));
    const newScale = Math.max(0.1, currentScale + x * 0.1); 
    scalable.style.transform = `scale(${newScale})`;
}



/////////////////API///////////////////////////////////

const sesId=new URLSearchParams(location.search).get('sesId');
const oneSessionData=[];
const seans=document.getElementById('seans');
const qiy=document.getElementById('qiy');

function getOneSessionData(sesId){
    useGetOneSession(sesId)
    .then(mel=>{
        oneSessionData.length=0;
        oneSessionData.push(mel);
        sessiyaniCixart()
        zaliCixart()
    })
    .finally(()=>{
        document.getElementById('load').classList.add('hidden');
    })
}
getOneSessionData(sesId)

function sessiyaniCixart(){
    const item=oneSessionData[0];
    kino.push({
        ad:item.movie.name,
        mekan:item.theatreTitle,
        tarix:formatDate(item.dateOfDay),
        vaxt:item.time,
        zal:item.hallTitle.slice(4)
    })
    localStorage.setItem('kino',JSON.stringify(kino));
    seans.innerHTML='';
    qiy.innerHTML='';
    seans.innerHTML+=`
        <div class="max-fil2:flex-1/2 duration-200 transition-all rounded-xl overflow-hidden">
            <img class="object-cover h-full  w-[170px]" src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.movie.image}&w=640&q=75" />
        </div>
        <div  class="max-fil2:flex-1/2 duration-200 transition-all flex flex-col justify-between text-txt">
            <div class="flex flex-col gap-[8px]">
                <p class="text-[15px] next:text-[16px]">${item.movie.name}</p>
                <p class="font-[600] text-[18px]">${item.type.slice(1)}</p>
                <div class="flex items-center gap-[8px]">
                    <img height="14" width="14" src="/img/date.svg" />
                    <p class="next:text-[16px] text-[15px]">${formatDate(item.dateOfDay)}</p>
                </div>
                <div class="flex items-center gap-[8px]">
                    <img height="14" width="14" src="/img/time.svg" />
                    <p class="next:text-[16px] text-[15px]">${item.time}</p>
                </div>
            </div>
            <div class="flex flex-col gap-[8px]">
                <p class="text-[16px]"><span class="font-semibold">Dil:</span> ${item.language}</p>
                <p class="text-[16px]"><span class="font-semibold">Kinoteatr:</span> ${item.theatreTitle}</p>
                <p class="text-[16px]"><span class="font-semibold">Zal:</span> ${item.hallTitle.slice(4)}</p>
                <p class="text-[16px]"><span class="font-semibold">Müddət:</span> ${duration(item.movie.duration)}</p>
            </div>
        </div>
    `
    item.price.map(elem=>elem.discounts.map(item=>{
        qiy.innerHTML+=`
        <p class="text-txt text-[14px]">
            ${item.discountType=='FAMILY'? 'Ailə': item.discountType == 'ADULT'? 'Böyük': 'DOUBLE'} 
        <span class="font-semibold">${item.discountValue} AZN</span></p>
    `
    }))
    
    
    
    discountsInfo = item.price[0].discounts.map(elem => {
        return {
            type: elem.discountType,
            val: elem.discountValue
            // [elem.discountType]: item.discountValue
        };
    });
    
}

function formatDate(str){
    const date=str.slice(0,10);
    let arr=date.split('-').reverse();
    return arr.join('.');
}
function duration(minutes){
    const hours = Math.floor(minutes / 60).toString().padStart(2, '0');
    const mins = (minutes % 60).toString().padStart(2, '0');
    const secs = '00'; 
    return `${hours}:${mins}:${secs}`;
}


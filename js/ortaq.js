const dilSecimi=document.getElementById('dilSecimi');
const kinoSecimi=document.getElementById('kinoSecimi');
const selectedOne=document.getElementById('selectedOne');
const selectedOne2=document.getElementById('selectedOne2');
const strs=Array.from(document.querySelectorAll('.str'));
const vibori=Array.from(document.querySelectorAll('.vibor'));

let hallar=[false,false]






function secimAc(ind){
    if(hallar[ind]==false){
        vibori[ind].querySelector('ul').classList.remove('h-0','h-[180px]')
        vibori[ind].querySelector('ul').classList.add('h-[180px]')
        vibori[ind].querySelector('div').classList.remove('border-b-white','border-b-[#e94032]')
        vibori[ind].querySelector('div').classList.add('border-b-[#e94032]')
        if(strs[ind].classList.contains('rotate-180'))  strs[ind].classList.remove('rotate-180')
        strs[ind].classList.add('rotate-180')
        hallar[ind]=true;
    
        vibori.filter((item,index)=>index!=ind).forEach(item=>{
            item.querySelector('ul').classList.remove('h-[180px]','h-0')
            item.querySelector('ul').classList.add('h-0')
            item.querySelector('div').classList.remove('border-b-[#e94032]','border-b-white')
            item.querySelector('div').classList.add('border-b-white')
        })
        strs.filter((item,index)=>index!=ind).forEach(item=>{
            if(item.classList.contains('rotate-180')) item.classList.remove('rotate-180')
        })
        hallar.forEach((item, index) => {
            if (index !== ind) hallar[index] = false;
        });
        // document.body.style.overflow = 'hidden';
    }
    else{
        vibori[ind].querySelector('ul').classList.remove('h-0','h-[180px]')
        vibori[ind].querySelector('ul').classList.add('h-0')
        vibori[ind].querySelector('div').classList.remove('border-b-white','border-b-[#e94032]')
        vibori[ind].querySelector('div').classList.add('border-b-white')
        if(strs[ind].classList.contains('rotate-180')) strs[ind].classList.remove('rotate-180')
        hallar[ind]=false;

        
    }
    
    console.log(hallar);
    document.onclick=closeOutside
}

function teatriSec(li,kime){
    const yenisi=li.innerHTML;
    kime.innerHTML=yenisi;
}

function closeOutside(e){
    if((!dilSecimi.contains(e.target) && !kinoSecimi.contains(e.target))){
        hallar=[false,false]
        vibori.forEach(item=>{
            item.querySelector('ul').classList.remove('h-0','h-[180px]')
            item.querySelector('ul').classList.add('h-0')
            item.querySelector('div').classList.remove('border-b-white','border-b-[#e94032]')
            item.querySelector('div').classList.add('border-b-white')
        })
        strs.forEach(item=>{
            if(item.classList.contains('rotate-180')) item.classList.remove('rotate-180')
        })
    }
    if(!yaz.contains(e.target)){
        hal3=false
        if(bu.classList.contains('hidden')) bu.classList.remove('hidden')
        if(!inp.classList.contains('hidden')) inp.classList.add('hidden')
        if(yaz.classList.contains('border-b-[#e94032]')) yaz.classList.replace('border-b-[#e94032]','border-b-white')
        cal.classList.remove('h-0','h-[351px]')
        cal.classList.add('h-0')
        hal4=false;
    }
    
}



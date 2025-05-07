const dil=document.getElementById('dil');
const dil2=document.getElementById('dil2');
const secilmis=document.getElementById('secilmis');

let sts2=false;
function dilleriAc(id){
    const elem=document.getElementById(id);

    if(!sts2){
        elem.classList.remove('hidden')
        setTimeout(()=>{
            elem.classList.toggle('opacity-0');
        },50)
        sts2=!sts2
    }
    else{
        elem.classList.toggle('opacity-0');
        setTimeout(()=>{
            elem.classList.add('hidden')
        },200)
        sts2=!sts2
    }
    // elem.classList.toggle('opacity-0');
}

function diliDeyis(lang,li,id,id2){
    const elem=document.getElementById(id);
    dilleriAc(id2);
    const newSrc=li.querySelector('img').src;
    elem.querySelector('span').innerHTML=lang;
    elem.querySelector('img').src=newSrc;

}

function varsaYoxEle(){
    if(sts2){
        dil.classList.toggle('opacity-0');
        setTimeout(()=>{
            dil.classList.add('hidden')
        },200)
        sts2=!sts2
    }
    console.log('sdas');
    
    // if(!dil.classList.contains('opacity-0')) dil.classList.add('opacity-0');
}

let sts=true;
function fixediAc(){
    if(sts){
        elave.classList.remove('hidden');
        disableScroll()
        setTimeout(()=>{
            ic.classList.replace('translate-y-[100%]','translate-y-0')
        },100)
        sts=!sts;
    }
    else{
        ic.classList.replace('translate-y-0','translate-y-[100%]')
        setTimeout(()=>{
            elave.classList.add('hidden');
        },300)
        enableScroll()
        sts=!sts;
        if(sts2){
            dil2.classList.toggle('opacity-0');
            setTimeout(()=>{
                dil2.classList.add('hidden')
            },200)
            sts2=!sts2
        }
    }

}

function disableScroll() {
    document.body.style.overflow = 'hidden';
}
  
function enableScroll() {
    document.body.style.overflow = '';
}

$(window).resize(isDesktop)
function isDesktop() {
    if($(window).width() >= 770){ 
        sts=true
        elave.classList.add('hidden');
        ic.classList.replace('translate-y-0','translate-y-[100%]');
    }
    
}
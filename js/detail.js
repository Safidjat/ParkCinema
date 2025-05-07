const secilenMovieId=new URLSearchParams(location.search).get('id');
const kino=document.getElementById('kino');
const seanslar=document.getElementById('seanslar');
const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19
};


const oneMovie=[];

const allSessions=[];

function getMovieData(){
    useGetOneMovie(secilenMovieId)
    .then(mel=>{
        oneMovie.length=0;
        oneMovie.push(mel);
        kinoyuCixart();
    })
    .finally(()=>{
        document.getElementById('load').classList.add('hidden');
    })
}
getMovieData()

function kinoyuCixart(){
    const elem=oneMovie[0];
    
    
    kino.innerHTML=`
        <div class="desk:order-2 desk:w-[50%] relative w-full aspect-[454.400/256] rounded-[24px] cursor-pointer">
            <iframe class="absolute top-0 left-0 w-full h-full rounded-[24px]" src="${elem.youtubeUrl.replace('watch?v=', 'embed/')}" title="YouTube video player"
                            frameborder="0" allowfullscreen ></iframe>
        </div>
        <div class="desk:w-[50%] flex flex-col gap-10 justify-center">
            <div class="gapp:grid gapp:grid-cols-2 gapp:gap-[20px] gapp:w-full">
                <div class="max-gapp:hidden gapp:rounded-[30px] gapp:overflow-hidden">
                    <img src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${elem.image}&w=640&q=75" class="w-full h-full object-cover" alt="" />
                </div>
                <div class=" text-txt flex flex-col gap-[15px]">
                    <h1 class="text-[20px] font-[600]">${elem.name}</h1>
                    <h3 class="text-[14px]">
                        ${elem.genres.map(item=>item.title)}
                    </h3>
                    <div class="flex flex-col items-start gap-[5px] gapp:w-full">
                        <span class="text-[16px] font-semibold">Dil</span>
                        <div class="flex gap-[10px] items-center">
                            ${elem.languages.reduce((acc,item)=>acc+=`<img src="/img/${item.toLowerCase()}-flag.svg" height="24" width="24" alt="lang" />`,'')}
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-[5px] gapp:w-full">
                        <span class="text-[16px] font-semibold">Altyazi</span>
                        <div class="flex gap-[10px] items-center">
                            ${
                                elem.subtitles.length==0 ? '<span class="font-[600] text-[12px] text-[#b91c1c]">Altyazı yoxdur</span>'
                                : elem.subtitles.reduce((acc,item)=>acc+=`<img src="/img/${item.toLowerCase()}-flag.svg" height="24" width="24" alt="subt" />`,'')
                            }   
                        </div>
                    </div>
                    <div class="flex desk:flex-col desk:gap-[10px] items-start justify-between w-full gap-[15px]">
                        <ul class="w-[50%] gapp:w-full flex flex-col gap-[10px] max-fii:text-[14px]! text-[16px]">
                            <li><span class="font-semibold">Müddət:</span> <span class="font-normal">${duration(elem.duration)}</span></li>
                            <li><span class="font-semibold">İl:</span> <span class="font-normal">${elem.year}</span></li>
                            <li><span class="font-semibold">Ölkə:</span> <span class="font-normal">${elem.country}</span></li>
                            <li><span class="font-semibold">Rejissor:</span> <span class="font-normal">${elem.director}</span></li>
                        </ul>
                        <ul class="w-[50%] gapp:w-full flex flex-col gap-[10px] max-fii:text-[14px]! text-[16px]">
                            <li><span class="font-semibold">Aktyorlar:</span> <span class="font-normal max-fii:text-[10px]!">${elem.actors.join(',')}</span></li>
                            <li><span class="font-semibold">Yaş həddi:</span> <span class="font-normal">${toNum(elem.ageLimit)}+</span></li>
                            <li><span class="font-semibold">Nümayiş tarixi:</span> <span class="font-normal"> ${formatDate(elem.firstScreeningDate)}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="text-txt text-[16px]">${elem.description}</p>
        </div>
    `
}

function duration(minutes){
    const hours = Math.floor(minutes / 60).toString().padStart(2, '0');
    const mins = (minutes % 60).toString().padStart(2, '0');
    const secs = '00'; 
    return `${hours}:${mins}:${secs}`;
}
function toNum(str){
    const strNum=str.toLowerCase();
    return numbers[strNum];
}
function formatDate(str){
    const date=str.slice(0,10);
    let arr=date.split('-').reverse();
    return arr.join('.');
}

function getSessionsData(){
    useGetAllSessions()
    .then(mel=>{
        allSessions.length=0;
        allSessions.push(...mel);
        sessionlariCixart();
    })
    .finally(()=>{
        document.getElementById('load').classList.add('hidden');
    })
    console.log(allSessions);
    
}
getSessionsData()

function sessionlariCixart(){
    seanslar.innerHTML='';
    allSessions.map(item=>{
        seanslar.innerHTML+=`
            <div class="w-full bg-[#383838] border-b border-b-[#e5e7eb] py-[16px] px-[8px] flex items-center justify-between text-white">
                <div class="max-next2:w-auto w-[10%] flex justify-center items-center"><p class="14px">${item.time}</p></div>
                <div class="max-next2:w-auto w-[30%] flex justify-center items-center"><p class="max-fi1:text-[8px] max-next:text-[12px] text-[14px]">${item.theatreTitle} | ${item.hallTitle}</p></div>
                <div class="max-next2:w-auto w-[5%] flex justify-center items-center"><p class="14px">${item.type.slice(1)}</p></div>
                <div class="max-next2:w-auto w-[5%] flex justify-center items-center"><img class="max-fi:w-[15px] max-fi:h-[15px]" width="24" height="24" src="/img/${item.language.toLowerCase()}-flag.svg" alt="dil" /></div>
                <div class="max-next2:w-auto w-[30%] flex justify-center items-center">
                    <div class="border border-white rounded-[10px] py-[4px] max-fi1:px-[1px] px-[16px] flex flex-col items-center justify-center gap-[4px]">
                        <span class="max-fi1:text-[8px] text-[12px]">
                            ${item.subtitle =='NONE'?'Altyazı':'AZE'}
                        </span>
                        <span class="max-fi1:text-[6px] ${item.subtitle =='NONE'? 'text-[12px]': 'text-[10px]'} ">
                            ${item.subtitle =='NONE'?'yoxdur':'sub'}
                        </span>
                    </div>
                </div>
                <div class="max-next2:w-auto w-[20%] flex justify-end items-center">
                    <a href="/pages/bilet.htm?sesId=${item.id}" class="next:w-[100px] desk:w-[160px]  cursor-pointer py-[8px] max-hight1:px-[8px] px-[16px] rounded-[20px] duration-[.2s] opacity-[.65] hover:opacity-100 bg-[#d52b1e] text-[14px] grid place-items-center">
                        <span class="max-fi1:text-[12px]">Bilet Al</span>
                    </a>
                </div>
            </div>
        `
    })
}
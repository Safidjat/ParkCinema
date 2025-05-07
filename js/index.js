const arts=document.getElementById('arts');
const elave=document.getElementById('elave');
const ic=document.getElementById('ic');
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
const dataMovies=[];

function getData(){
    useGetAllMovies()
    .then(mel=>{
        dataMovies.length=0;
        dataMovies.push(...mel);
        kinolariCixart();
    })
    .finally(()=>{
        document.getElementById('load').classList.add('hidden');
    })
    
}
getData()

function kinolariCixart(){
    arts.innerHTML='';
    dataMovies.map(item=>{
        arts.innerHTML+=`
            <a href="/pages/detail.htm?id=${item.id}" target="_self" class="art relative desk:max-gapp:min-h-[352px] desk:max-gapp:w-full w-full next:w-[calc((100%-32px)/2)] gapp:w-[calc((100%-96px)/4)] rounded-[18px] overflow-hidden">
                <div class="rounded-[18px] overflow-hidden h-full w-full ">
                    <img class="scaleIm aspect-[290/480]!  h-full w-full  duration-300 object-cover z-5"
                        src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.image}&w=640&q=75" />
                </div>
                <div
                    class="absolute w-full h-full inset-0 rounded-[18px]  bg-gradient-to-b from-transparent via-[#0000004E] to-[#000] z-9">
                </div>
                <div class="absolute bottom-0 w-full p-[0_12px_16px] z-10">
                    <h1 class="mb-[12px] text-[22px] font-[600] text-white">${item.name}</h1>
                    <p class="mb-[5px] text-[14px] text-txt">
                        ${formatDate(item.firstScreeningDate)}
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-[16px] text-txt">${toNum(item.ageLimit)}+</span>
                        <div class="flex items-center gap-[10px]">
                            ${toFlags(item.languages)}
                        </div>
                    </div>
                </div>
            </a>
        `
    })
}
function formatDate(str){
    const date=str.slice(0,10);
    let arr=date.split('-').reverse();
    return arr.join('.');
}

function toNum(str){
    const strNum=str.toLowerCase();
    return numbers[strNum];
}

function toFlags(arr){
    return arr.map(item=>{
        return `<img src="/img/${item.toLowerCase()}-flag.svg" height="24" width="24" alt="flag" />`
    }).join('');
}

////////////////////////////////////////////////////////////Calendar////////////////////////////////////////////
const yaz=document.getElementById('yaz');
const inp=document.getElementById('inp');
const bu=document.getElementById('bu');
const cal=document.getElementById('cal');

let hal3=false
let mezmun='Bu gün';
let hal4=false

function istediyinOlsun(){  
    if(hal3==false){
        if(!bu.classList.contains('hidden')) bu.classList.add('hidden')
        if(inp.classList.contains('hidden')) inp.classList.remove('hidden')
        if(yaz.classList.contains('border-b-white')) yaz.classList.replace('border-b-white','border-b-[#e94032]')
        hal3=true
        document.onclick=closeOutside
    }
}

function getVal(){
   mezmun=inp.querySelector('input').value.split('-').reverse().join('/')
   bu.querySelector('p').innerHTML=mezmun;
}

function caliAc(){
    if(hal4==false){
        cal.classList.remove('h-0','h-[351px]')
        cal.classList.add('h-[351px]')
        hal4=true;
    }
    else{
        cal.classList.remove('h-0','h-[351px]')
        cal.classList.add('h-0')
        hal4=false;
    }
}

const dateler=document.getElementById('dateler');
const tarix=document.getElementById('tarix');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let bugun=new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = bugun.getMonth();
let year = bugun.getFullYear();
let update;
let arr=[];
function cevir(x){
    month+=x;
    if(month==12) {month=0; year++}
    if(month==-1) {month=11; year--}
    update=new Date(year,month,1);
    let current=1;
   if(year==bugun.getFullYear()&&month==bugun.getMonth()) current=bugun.getDate();
    tarix.innerHTML=`${months[month]} ${year}`;
    arr=[];
    for(let i=0;i<update.getDay();i++){
        arr.push('');
    }
    for(let i=1;i<=getDaysInMonth(year, month);i++){
        arr.push(i);
    }
    while(arr.length<42){arr.push('&nbsp;');}
    
    gunler()
}
cevir(0);

function gunler(){
    let kod1=`
        <div class="min-w-[36px] w-full min-h-[36px] aspect-[1/1] rouded-full grid place-items-center text-[#8c8c8c] text-[12px] uppercase">S</div>
        <div class="min-w-[36px] w-full min-h-[36px] aspect-[1/1] rouded-full grid place-items-center text-[#8c8c8c] text-[12px] uppercase">M</div>
        <div class="min-w-[36px] w-full min-h-[36px] aspect-[1/1] rouded-full grid place-items-center text-[#8c8c8c] text-[12px] uppercase">T</div>
        <div class="min-w-[36px] w-full min-h-[36px] aspect-[1/1] rouded-full grid place-items-center text-[#8c8c8c] text-[12px] uppercase">W</div>
        <div class="min-w-[36px] w-full min-h-[36px] aspect-[1/1] rouded-full grid place-items-center text-[#8c8c8c] text-[12px] uppercase">T</div>
        <div class="min-w-[36px] w-full min-h-[36px] aspect-[1/1] rouded-full grid place-items-center text-[#8c8c8c] text-[12px] uppercase">F</div>
        <div class="min-w-[36px] w-full min-h-[36px] aspect-[1/1] rouded-full grid place-items-center text-[#8c8c8c] text-[12px] uppercase">S</div>
    `;
    let say=0;
    for(let j=0;j<arr.length;j++){
        arr[say]==bugun.getDate()&&year==bugun.getFullYear()&&month==bugun.getMonth() ? kod1+=`<div class="border border-[#626465] min-w-[36px] w-full min-h-[36px] aspect-[1/1] rounded-full grid place-items-center text-[#000000DE] text-[12px] hover:bg-[#f6fafd]">${arr[say++]}</div>`:
        kod1+=`<div onclick="gun(${arr[say]})" class="min-w-[36px] w-full min-h-[36px] aspect-[1/1] rounded-full grid place-items-center text-[#000000DE] text-[12px] hover:bg-[#f6fafd]">${arr[say++]}</div>`;
    }
    dateler.innerHTML=kod1;

    
}
gunler()

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();//Если указать 0 в качестве дня, объект Date интерпретирует это как последний день предыдущего месяца
}

function deyis(i){
    month=i;
    cevir(0);
}
function gun(say){
    say==''? '':  
        (update=new Date(year,month,say),
        yaz.querySelector('p').innerHTML=`${days[update.getDay()].slice(0,3)}, ${say} ${months[month]} ${year}`,
        yaz.querySelector('input').value=`${year}-${month+1}-${say}`.replace(/\b(\d)\b/g, '0$1')
    )
}




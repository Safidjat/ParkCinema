const BASE_URL='https://data-imtahan.vercel.app';



async function useGetAllMovies(){
    const res=await fetch(`${BASE_URL}/landing`)
    return await res.json()
}
async function useGetOneMovie(id){
    const res=await fetch(`${BASE_URL}/landing/${id}`)
    return await res.json()
}

async function useGetAllSessions(){
    const res=await fetch(`${BASE_URL}/detail`)
    return await res.json()
}

async function useGetOneSession(id){
    const res=await fetch(`${BASE_URL}/detail/${id}`)
    return await res.json()
}
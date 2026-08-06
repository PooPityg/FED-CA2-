const stampkey = "musuem_stamp"

const exhibitStamps = [
    {id:"aztec", label:"Aztec", icon:"../assets/index/featured/native-american.webp"},
    {id:"chinese", label:"Terracotta Army", icon:"../assets/Terracotta/terracotta-army.jpg"},
    {id:"egypt", label:"Ancient Egypt", icon:"../assets/index/featured/egypt.avif"},
    {id:"easter", label:"Easter Island", icon:"../assets/index/featured/easter-island.jpg"}
]

function getstamp(){
    const stored = localStorage.getItem(stampkey)

    if (!stored) return []

    try {
        return JSON.parse(stored)
    } catch (e) {
        return []
    }
}

function hasStamp(id){
    return getstamp().includes(id)
}

function collectstamp(id){
    const stamps = getstamp()
    if(!stamps.includes(id)){
        stamps.push(id)
        localStorage.setItem(stampkey, JSON.stringify(stamps))
        return true 
    }
    return false
}


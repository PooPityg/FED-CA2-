const stampkey = "musuem_stamp"

const exhibitStamps = [
    {id:"aztec", label:"Aztec", icon:"../assests/"},
    {id:"chinese", label:"Terracotta Amry", icon:"../assests/"},
    {id:"egypt", label:"Ancient Egypt", icon:"../assests/"},
    {id:"easter", label:"Easter Island", icon:"../assests/"}
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


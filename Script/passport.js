function setOverall(percent){
    const text = document.getElementById('overallTxt')
    const circle = document.getElementById('overallProgress')
    const circumfrance = 251.1

    const offset = circumfrance - (percent/100)*circumfrance

    circle.style.strokeDashoffset  = offset
    text.innerText = `${percent}%`
}

function renderstamps(){
    const gird = document.getElementById('stamp-grid')
    const text = document.getElementById('stamp-progress')
    const collected = getstamp()
    gird.innerHTML=''
    exhibitStamps.forEach(s=>{

    })

}

function resetStamp(){
    localStorage.removeItem(stampkey)
}

document.getElementById('reset').addEventListener('click', () => {
    resetStamps();
    renderstamps();
})
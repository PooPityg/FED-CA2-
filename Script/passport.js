function setOverall(percent){
    const text = document.getElementById('overallTxt')
    const circle = document.getElementById('overallProgress')
    const circumfrance = 251.1

    const offset = circumfrance - (percent/100)*circumfrance

    circle.style.strokeDashoffset  = offset
    text.innerText = `${percent}%`
}


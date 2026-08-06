function setOverall(percent){
    const text = document.getElementById('overallTxt')
    const circle = document.getElementById('overallProgress')
    const circumfrance = 251.1

    const offset = circumfrance - (percent / 100) * circumfrance

    circle.style.strokeDashoffset = offset
    text.innerText = `${percent}%`
}

function render(){
    const grid = document.getElementById('stamp-grid')
    const text = document.getElementById('stamp-progress')
    const collected = getstamp()
    const preBadge = (collected.length/exhibitStamps.length)*100
    grid.innerHTML = ''

    exhibitStamps.forEach((stamp) => {
        const isCollected = collected.includes(stamp.id)
        const div = document.createElement('div')
        div.className = `flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border p-4 text-center text-sm font-medium shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${isCollected ? 'border-amber-400/70 bg-amber-500/90 text-stone-900' : 'border-white/15 bg-white/10 text-neutral-100'}`
        const iconHtml = isCollected
            ? `<img src="${stamp.icon}" alt="${stamp.label}" class="h-14 w-14 rounded-full object-cover" />`
            : '<span class="text-3xl">?</span>'
        div.innerHTML = `
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">${iconHtml}</div>
            <span class="text-sm font-semibold tracking-wide">${stamp.label}</span>
        `
        grid.appendChild(div)
    })

    text.textContent = `${collected.length}/${exhibitStamps.length} stamps collected`

    document.getElementById('badgeProgress').style.width = `${preBadge}%`
    document.getElementById('badgeText').textContent = `${collected.length}/${exhibitStamps.length}`
}

function resetStamp(){
    localStorage.removeItem(stampkey)
}

document.addEventListener('DOMContentLoaded', () => {
    render()

    const resetButton = document.getElementById('reset')
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            resetStamp()
            render()
        })
    }
})
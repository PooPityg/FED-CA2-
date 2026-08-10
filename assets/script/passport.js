function setOverall(percent){  //Set the overall progress bar by getting the cumilated percent
    const text = document.getElementById('overallTxt')
    const circle = document.getElementById('overallProgress')
    const circumfrance = 251.1

    const offset = circumfrance - (percent / 100) * circumfrance

    circle.style.strokeDashoffset = offset
    text.innerText = `${percent}%`
}
 
function getQuizStatus() {                      //Gets the data from localdata 
    const percent = Number(localStorage.getItem('quizProgressPercent'))
    const finalScoreValue = localStorage.getItem('quizFinalScore')
    return {
        progressPercent: Number.isFinite(percent) ? percent : 0,
        finalScore: finalScoreValue !== null ? Number(finalScoreValue) : null,
        hasStarted: localStorage.getItem('quizProgressPercent') !== null,
        isComplete: finalScoreValue !== null
    }
}

function updateQuizProgress() {        //builds the quiz progress bar
    const quizText = document.getElementById('quizText')
    const quizProgress = document.getElementById('quizProgress')
    const { progressPercent, finalScore, hasStarted, isComplete } = getQuizStatus()

    if (isComplete) {
        quizText.innerText = `Quiz Score: ${finalScore}`
        quizProgress.style.width = '100%'
    } else if (hasStarted) {
        quizText.innerText = 'Quiz in progress'
        quizProgress.style.width = `${progressPercent}%`
    } else {
        quizText.innerText = 'Quiz not started'
        quizProgress.style.width = '0%'
    }
}

function calculateOverallProgress() {   //Calculate combined progress from quiz + badges
    const { progressPercent: quizProgress, isComplete: quizComplete } = getQuizStatus()
    const collected = getstamp()
    const badgeProgress = (collected.length / exhibitStamps.length) * 100
    
    // Quiz counts as 50%, badges count as 50% (adjust weights as needed)
    const quizWeight = 0.5
    const badgeWeight = 0.5
    
    // If quiz is complete, use 100%, otherwise use current progress
    const quizContribution = quizComplete ? 100 * quizWeight : quizProgress * quizWeight
    const badgeContribution = badgeProgress * badgeWeight
    
    const overallPercent = Math.round(quizContribution + badgeContribution)
    
    return overallPercent
}

function render(){     //builds the progress bars and the stamp cards
    const grid = document.getElementById('stamp-grid')
    const text = document.getElementById('stamp-progress')
    const collected = getstamp()
    const preBadge = (collected.length/exhibitStamps.length)*100
    grid.innerHTML = ''

    updateQuizProgress()
    
    // Calculate and display overall progress
    const overallPercent = calculateOverallProgress()
    setOverall(overallPercent)

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

function reset(){      //clear the stamps collected array and quiz progress
    localStorage.clear()
}

document.addEventListener('DOMContentLoaded', () => {     //Runs after the html finshes loading/DOM tree builded and renders
    render()
    const resetButton = document.getElementById('reset')
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            reset()
            render()
        })
    }
})
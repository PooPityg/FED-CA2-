let score = 0
let current = 0
let progress = 1
let answered = false
let a_question = []
let numQues = 0
const STORAGE_KEY = 'quizProgress'
const SCORE_KEY = 'quizScore'
const COMPLETED_KEY = 'quizCompleted'
const FSCORE_KEY = 'quizFinalScore'

async function loadQuestion() {
    try {
        const res = await fetch('../assets/quiz/questions.json')
        if (!res.ok) {
            throw new Error(`HTTP error Status:${res.status}`)
        }
        const ques = await res.json()
        return ques
    } catch (error) {
        console.error(`An error occured ${error.message}`)
        return []
    }
}

function updateIntroButton(hasProgress) {
    const startBtn = document.getElementById('startBtn')
    if (startBtn) {
        startBtn.textContent = hasProgress ? 'Continue Quiz' : 'Begin Quiz'
    }
}

function saveProgress() {
    if (!a_question.length) return
    const nextQuestion = Math.min(current + 1, a_question.length)
    localStorage.setItem(STORAGE_KEY, String(nextQuestion))
    localStorage.setItem(SCORE_KEY, String(score))
}

function clearProgress() {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(SCORE_KEY)
    updateIntroButton(false)
}

function markCompleted() {
    sessionStorage.setItem(COMPLETED_KEY, 'true')
}

function clearCompletedFlag() {
    sessionStorage.removeItem(COMPLETED_KEY)
}

function restoreProgress() {
    if (sessionStorage.getItem(COMPLETED_KEY) === 'true') {
        current = 0
        score = 0
        progress = 1
        clearProgress()
        clearCompletedFlag()
        return
    }

    const savedValue = Number(localStorage.getItem(STORAGE_KEY))
    const savedScore = Number(localStorage.getItem(SCORE_KEY))

    if (!Number.isInteger(savedValue) || savedValue < 0 || savedValue >= a_question.length) {
        current = 0
        score = 0
        progress = 1
        clearProgress()
        return
    }

    current = savedValue
    score = Number.isInteger(savedScore) ? savedScore : 0
    progress = savedValue + 1
    updateIntroButton(true)
}

window.addEventListener('load', async () => {
    a_question = await loadQuestion()
    numQues = a_question.length
    console.log('Loaded', a_question.length, 'questions')
    restoreProgress()
})

function updatebar() {
    const percentage = (progress / a_question.length) * 100
    document.getElementById('progress-bar').style.width = percentage + '%'
}

function render_questions() {
    answered = false
    const ques = a_question[current]
    document.getElementById('lognum').textContent = `QUESTION${current + 1}/${a_question.length}`
    document.getElementById('logscore').textContent = `SCORE ${score}`
    document.getElementById('question').textContent = ques.q
    const el = document.getElementById('opions')
    const letter = ['A', 'B', 'C', 'D']
    el.innerHTML = ''
    ques.option.forEach((opt, i) => {
        const btn = document.createElement('button')
        btn.className = 'opt'
        btn.innerHTML = `<span class="opt-letter">${letter[i]}</span><span class="opt-text">${opt}</span>`
        btn.onclick = () => sel_answer(i, btn)
        el.appendChild(btn)
    })
    document.getElementById('qcontext').classList.add('hidden')
    document.getElementById('action').classList.add('hidden')
    document.getElementById('nextBtn').textContent = current === a_question.length - 1 ? 'See results' : 'Next Question'
    const returnBtn = document.getElementById('returnBtn')
    if (returnBtn) {
        returnBtn.classList.toggle('hidden', current === a_question.length - 1)
    }
    updatebar()
}

function toQuiz() {
    clearCompletedFlag()
    document.getElementById('intro').classList.add('hidden')
    document.getElementById('quiz').classList.remove('hidden')
    render_questions()
}

function sel_answer(i, btn) {
    if (answered) return
    answered = true
    const q = a_question[current]
    const allopt = document.querySelectorAll('#opions .opt')
    allopt.forEach(o => o.disabled = true)

    if (i === q.correct) {
        score++
        btn.classList.add('correct')
    } else {
        btn.classList.add('incorrect')
        allopt[q.correct].classList.add('correct')
    }

    document.getElementById('logscore').textContent = `SCORE ${score}`
    const cxt = document.getElementById('qcontext')
    cxt.textContent = q.context
    cxt.classList.remove('hidden')
    document.getElementById('action').classList.remove('hidden')
    saveProgress()
}

function nextQues() {
    current++
    progress++
    if (current >= a_question.length) {
        showEnd()
    } else {
        saveProgress()
        render_questions()
    }
}

function showEnd() {
    clearProgress()
    markCompleted()
    document.getElementById('quiz').classList.add('hidden')
    document.getElementById('end').classList.remove('hidden')
    document.getElementById('finalscore').innerHTML = `${score}<span>/${a_question.length}</span>`
    let finalScore = score
    localStorage.setItem(FSCORE_KEY,String(score))
    let line
    if (score >= 9) line = 'Amazing'
    else if (score >= 7) line = 'WOW'
    else if (score >= 4) line = 'Can do better'
    else line = 'Failure'
    document.getElementById('resultline').textContent = line
}

function restartQuiz() {
    current = 0
    score = 0
    progress = 1
    clearCompletedFlag()
    clearProgress()
    document.getElementById('end').classList.add('hidden')
    document.getElementById('quiz').classList.remove('hidden')
    updateIntroButton(false)
    render_questions()
}

function returnCollection() {
    saveProgress()
    window.location.href = './collection.html'
}
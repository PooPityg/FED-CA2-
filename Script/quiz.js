let score = 0 
let current = 0 
let answered = false 
let a_question = []
const fs


function buildprogressbar(){
    const el = document.getElementById("proggres")
    el.innerHTML=''
    a_question.forEach((_,i)=>{
        const node = document.createElement('div')
        node.className = "p_node"
        node.id = 'node-' + i 
        el.appendChild(node)

        if (i<a_question.length - 1){
            const line = document.createElement('div')
            line.className = "p_line"
            el.appendChild(line)
        }
    })
}

function updatebar(){
    a_question.forEach((_,i)=>{
        const room = document.getElementById("node-" +i)
        room.classList.remove('visited','current')
        if (i < current) room.classList.add('visited')
        else if(i ===current) room.classList.add('current')
    })
}

function render_questions(){
    answered = false
    const ques = a_question[current]
    document.getElementById("lognum").textContent = `QUESTION${current+1}/${a_question.length}`
    document.getElementById("logscore").textContent = `SCORE ${score}`
    document.getElementById("question").textContent = ques.q
    const el = document.getElementById("opions")
    const letter = ["A","B","C","D"]
    el.innerHTML=''
    ques.option.forEach((opt,i)=>{
        const btn = document.createElement('button')
        btn.className="opt"
        btn.innerHTML=`<span>${letter[i]}</span><span>${opt}</span>`
        btn.onclick = () => sel_answer(i,btn)
        el.appendChild(btn)
    })
    document.getElementById("qcontext").classList.add("hidden")
    document.getElementById("action").classList.add("hidden")
    document.getElementById("nextBtn").textContent = current === a_question.length-1 ? 'See results' : 'Next Question' 

    updatebar()
}

function toQuiz(){
    document.getElementById("intro").classList.add("hidden")
    document.getElementById("quiz").classList.remove("hidden")
    buildprogressbar()
    render_questions()
}

function sel_answer(i,btn){
    if(answered) return
    answered = true 
    const q = a_question[current]
    const allopt = document.querySelectorAll("#opions .opt")
    allopt.forEach(o=>o.disabled = true)

    if(i === q.correct){
        score++
        btn.classList.add('correct')
    } else{
        btn.classList.add('incorrect')
        allopt[q.correct].classList.add('correct')
    }

    document.getElementById('logscore').textContent = `SCORE ${score}`
    const cxt = document.getElementById('qcontext')
    cxt.textContent = q.context
    cxt.classList.remove('hidden')
    document.getElementById('action').classList.remove('hidden')
}

function nextQues(){
    current++
    if(current >= a_question.length){
        showEnd()
    }else{
        render_questions()
    }
}

function showEnd(){
    document.getElementById('quiz').classList.add('hidden')
    document.getElementById('end').classList.remove('hidden')
    document.getElementById('finalscore').innerHTML =`${score}<span>/${a_question.length}</span>`
    /*Fill in reult line*/
    let line
    if(score >=9) line = "Amazing"
    else if(score >= 7) line = "WOW"
    else if(score >=4) line = "Can do better"
    else line ="Failure"
    document.getElementById('resultline').textContent = line

    a_question.forEach((_,i) => {
        const room = document.getElementById('node-' + i)
        room.classList.remove('current')
        room.classList.add('visited')
    })
}

function restartQuiz(){
    current = 0 
    score = 0
    document.getElementById('end').classList.add('hidden')
    document.getElementById('quiz').classList.remove('hidden')
    render_questions()
}

loadQuestion()
const { createElement } = require("react")

const a_question = [
    {   
        q:"",
        option:["A","B","C","D"],
        correct:2,
        context:""
    },
    {   
        q:"",
        option:["A","B","C","D"],
        correct:3,
        context:""
    },    
]

let score = 0 
let current = 0 
let answered = false 

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
    document.getElementById("lognum").textContent = `QuUESTION${current+1}/${a_question.length}`
    document.getElementById("logscore").textContent = `SCORE${score}`
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
    document.getElementById("qcontext").classList.add("invisible")
    document.getElementById("action").classList.add("invisible")
    document.getElementById("nextBtn").textContent = current === a_question.length-1 ? 'See results' : 'Next Question' 
}

function to_quiz(){
    document.getElementById("intro").classList.add("invisible")
    document.getElementById
}

function sel_answer(){

}
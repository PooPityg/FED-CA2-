const question = [
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
    question.forEach((_,i)=>{
        const node = document.createElement('div')
        node.className = "p_node"
        node.id = 'node-' + i 
        el.appendChild(node)

        if (i<question.length - 1){
            const line = document.createElement('div')
            line.className = "p_line"
            el.appendChild(line)
        }
    })
}

function updatebar(){
    question.forEach((_,i)=>{
        const room = document.getElementById("node-" +i)
        room.classList.remove('visited','current')
        if (i < current) room.classList.add('visited')
        else if(i ===current) room.classList.add('current')
    })
}

function renderquestions(){
    
}